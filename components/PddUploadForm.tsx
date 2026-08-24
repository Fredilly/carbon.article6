'use client';

import { FormEvent, useRef, useState } from 'react';

const MAX_FILE_SIZE = 150 * 1024 * 1024;
const MAX_FILES = 10;
const MAX_TOTAL_SIZE = 750 * 1024 * 1024;
const ACCEPTED_SUPPORTING = '.pdf,.docx,.xlsx,.pptx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation';
const inputClasses = 'w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500 disabled:bg-gray-50';

type Phase = 'idle' | 'uploading' | 'success' | 'error';
type UploadSpec = { fileName: string; fileSize: number; role: 'PDD' | 'SUPPORTING' };
type PreparedUpload = UploadSpec & { contentType: string; uploadUrl: string; uploadReference: string };

function extension(fileName: string) {
  return fileName.toLowerCase().split('.').pop() || '';
}

function isSupportingType(fileName: string) {
  return ['pdf', 'docx', 'xlsx', 'pptx'].includes(extension(fileName));
}

export default function PddUploadForm() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [projectName, setProjectName] = useState('');
  const [methodology, setMethodology] = useState('');
  const [note, setNote] = useState('');
  const [pdd, setPdd] = useState<File | null>(null);
  const [supporting, setSupporting] = useState<File[]>([]);
  const pddRef = useRef<HTMLInputElement>(null);
  const supportingRef = useRef<HTMLInputElement>(null);

  function validate() {
    if (!fullName.trim()) return 'Full name is required.';
    if (!workEmail.trim()) return 'Work email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.trim())) return 'Please enter a valid email address.';
    if (!organization.trim()) return 'Organization is required.';
    if (!projectName.trim()) return 'Project name is required.';
    if (!methodology.trim()) return 'Methodology is required.';
    if (!pdd) return 'Please select the project PDD.';
    if (extension(pdd.name) !== 'pdf') return 'The PDD must be a PDF file.';

    const allFiles = [pdd, ...supporting];
    if (allFiles.length > MAX_FILES) return `Upload no more than ${MAX_FILES} files at a time.`;
    let total = 0;
    for (const file of allFiles) {
      if (!isSupportingType(file.name)) return `${file.name}: accepted file types are PDF, DOCX, XLSX and PPTX.`;
      if (file.size <= 0) return `${file.name} is empty.`;
      if (file.size > MAX_FILE_SIZE) return `${file.name} exceeds the 150 MB per-file limit.`;
      total += file.size;
    }
    if (total > MAX_TOTAL_SIZE) return 'The total project document package must be 750 MB or less.';
    return null;
  }

  async function uploadPrepared(prepared: PreparedUpload, source: File) {
    const uploadRes = await fetch(prepared.uploadUrl, {
      method: 'PUT',
      headers: { 'Content-Type': prepared.contentType },
      body: source,
    });
    if (!uploadRes.ok) throw new Error(`${source.name} upload failed with HTTP ${uploadRes.status}. Please try again.`);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setPhase('error');
      setError(validationError);
      return;
    }

    setPhase('uploading');
    setError('');

    const sources = [pdd!, ...supporting];
    const files: UploadSpec[] = sources.map((file, index) => ({
      fileName: file.name,
      fileSize: file.size,
      role: index === 0 ? 'PDD' : 'SUPPORTING',
    }));
    const metadata = {
      contactName: fullName.trim(),
      workEmail: workEmail.trim(),
      organization: organization.trim(),
      projectName: projectName.trim(),
      methodology: methodology.trim(),
      note: note.trim(),
      files,
    };

    try {
      const presignRes = await fetch('/api/carbon-intake/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metadata),
      });
      const presignBody = await presignRes.json();
      if (!presignRes.ok) throw new Error(presignBody.error || 'Failed to prepare uploads.');

      const prepared = presignBody.uploads as PreparedUpload[];
      for (let start = 0; start < prepared.length; start += 3) {
        await Promise.all(prepared.slice(start, start + 3).map((item, offset) => uploadPrepared(item, sources[start + offset])));
      }

      const confirmRes = await fetch('/api/carbon-intake/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...metadata,
          packageReference: presignBody.packageReference,
          files: prepared.map((item) => ({
            fileName: item.fileName,
            fileSize: item.fileSize,
            role: item.role,
            uploadReference: item.uploadReference,
          })),
        }),
      });
      const confirmBody = await confirmRes.json();
      if (!confirmRes.ok) throw new Error(confirmBody.error || 'Failed to confirm submission.');

      setReference(confirmBody.packageReference || confirmBody.submissionId || '');
      setPhase('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      setPhase('error');
    }
  }

  function reset() {
    setPhase('idle');
    setError('');
    setReference('');
    setFullName('');
    setWorkEmail('');
    setOrganization('');
    setProjectName('');
    setMethodology('');
    setNote('');
    setPdd(null);
    setSupporting([]);
    if (pddRef.current) pddRef.current.value = '';
    if (supportingRef.current) supportingRef.current.value = '';
  }

  if (phase === 'success') {
    return (
      <div className="rounded-lg border border-forest-200 bg-forest-50 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">✓</div>
          <div>
            <h3 className="text-lg font-semibold text-forest-800">Project documents received</h3>
            <p className="mt-1.5 max-w-md text-sm text-gray-600">Your PDD and supporting evidence have been submitted together for scope review. We will respond within two business days.</p>
            {reference && <p className="mt-3 text-xs text-gray-400">Package reference: <code className="text-gray-500">{reference}</code></p>}
            <button type="button" onClick={reset} className="mt-5 text-sm font-medium text-forest-700 hover:text-forest-800">Submit another project</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {phase === 'error' && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4">
          <h4 className="text-sm font-medium text-red-800">Submission failed</h4>
          <p className="mt-1 text-sm text-red-700">{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Full name" required><input className={inputClasses} value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" disabled={phase === 'uploading'} /></Field>
        <Field label="Work email" required><input type="email" className={inputClasses} value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} placeholder="you@organization.com" disabled={phase === 'uploading'} /></Field>
        <Field label="Organization" required><input className={inputClasses} value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Your organization" disabled={phase === 'uploading'} /></Field>
        <Field label="Project name" required><input className={inputClasses} value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Project name" disabled={phase === 'uploading'} /></Field>
      </div>
      <Field label="Methodology and version" required><input className={inputClasses} value={methodology} onChange={(e) => setMethodology(e.target.value)} placeholder="e.g. VM0007 v1.8" disabled={phase === 'uploading'} /></Field>
      <Field label="Anything we should know?">
        <textarea rows={3} className={inputClasses} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional context about the project or current validation stage" disabled={phase === 'uploading'} />
      </Field>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">PDD <span className="text-forest-600">*</span></label>
        <input ref={pddRef} type="file" accept="application/pdf,.pdf" onChange={(e) => setPdd(e.target.files?.[0] || null)} disabled={phase === 'uploading'} className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-600 file:mr-3 file:rounded file:border-0 file:bg-forest-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-forest-700 hover:file:bg-forest-100" />
        <p className="mt-1.5 text-xs text-gray-400">Required PDF, up to 150 MB.</p>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Supporting evidence <span className="font-normal text-gray-400">optional</span></label>
        <input ref={supportingRef} type="file" multiple accept={ACCEPTED_SUPPORTING} onChange={(e) => setSupporting(Array.from(e.target.files || []))} disabled={phase === 'uploading'} className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-600 file:mr-3 file:rounded file:border-0 file:bg-forest-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-forest-700 hover:file:bg-forest-100" />
        <p className="mt-1.5 text-xs text-gray-400">Evidence supporting the PDD may be PDF, Word, Excel or PowerPoint. Up to 9 supporting files, 150 MB each. Maximum package size 750 MB.</p>
      </div>
      <button type="submit" disabled={phase === 'uploading'} className="preview-primary-cta w-full">
        {phase === 'uploading' ? 'Uploading project documents…' : 'Submit project documents for scope review'}
      </button>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <div><label className="mb-1 block text-sm font-medium text-gray-700">{label} {required && <span className="text-forest-600">*</span>}</label>{children}</div>;
}
