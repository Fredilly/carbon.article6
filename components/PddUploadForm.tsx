'use client';

import { FormEvent, useRef, useState } from 'react';

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const inputClasses = 'w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500 disabled:bg-gray-50';

type Phase = 'idle' | 'uploading' | 'success' | 'error';

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
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function validate() {
    if (!fullName.trim()) return 'Full name is required.';
    if (!workEmail.trim()) return 'Work email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.trim())) return 'Please enter a valid email address.';
    if (!organization.trim()) return 'Organization is required.';
    if (!projectName.trim()) return 'Project name is required.';
    if (!methodology.trim()) return 'Methodology is required.';
    if (!file) return 'Please select a PDF file.';
    if (file.type !== 'application/pdf') return 'Only PDF files are accepted.';
    if (file.size <= 0) return 'The selected file is empty.';
    if (file.size > MAX_FILE_SIZE) return 'File size must be under 50MB.';
    return null;
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

    const metadata = {
      fileName: file!.name,
      contentType: 'application/pdf',
      fileSize: file!.size,
      contactName: fullName.trim(),
      workEmail: workEmail.trim(),
      organization: organization.trim(),
      projectName: projectName.trim(),
      methodology: methodology.trim(),
      submissionSource: 'website',
      submissionType: 'CARBON',
      sourceSite: 'carbon.article6.org',
      note: note.trim(),
    };

    try {
      const presignRes = await fetch('/api/upload/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metadata),
      });
      const presignBody = await presignRes.json();
      if (!presignRes.ok) throw new Error(presignBody.error || 'Failed to prepare upload.');

      const uploadRes = await fetch(presignBody.uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/pdf' },
        body: file,
      });
      if (!uploadRes.ok) throw new Error(`File upload failed with HTTP ${uploadRes.status}. Please try again.`);

      const confirmRes = await fetch('/api/upload/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...metadata, uploadReference: presignBody.uploadReference }),
      });
      const confirmBody = await confirmRes.json();
      if (!confirmRes.ok) throw new Error(confirmBody.error || 'Failed to confirm submission.');

      setReference(confirmBody.submissionId || '');
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
    setFile(null);
    if (fileRef.current) fileRef.current.value = '';
  }

  if (phase === 'success') {
    return (
      <div className="rounded-lg border border-forest-200 bg-forest-50 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">✓</div>
          <div>
            <h3 className="text-lg font-semibold text-forest-800">Submission received</h3>
            <p className="mt-1.5 max-w-md text-sm text-gray-600">Your PDD has been submitted for scope review. We will review your project documentation and respond within two business days.</p>
            {reference && <p className="mt-3 text-xs text-gray-400">Reference: <code className="text-gray-500">{reference}</code></p>}
            <button type="button" onClick={reset} className="mt-5 text-sm font-medium text-forest-700 hover:text-forest-800">Submit another PDD</button>
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
        <input ref={fileRef} type="file" accept="application/pdf,.pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} disabled={phase === 'uploading'} className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-600 file:mr-3 file:rounded file:border-0 file:bg-forest-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-forest-700 hover:file:bg-forest-100" />
        <p className="mt-1.5 text-xs text-gray-400">PDF only, up to 50MB.</p>
      </div>
      <button type="submit" disabled={phase === 'uploading'} className="preview-primary-cta w-full">
        {phase === 'uploading' ? 'Uploading…' : 'Submit PDD for scope review'}
      </button>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <div><label className="mb-1 block text-sm font-medium text-gray-700">{label} {required && <span className="text-forest-600">*</span>}</label>{children}</div>;
}
