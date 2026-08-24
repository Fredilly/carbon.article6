import Link from 'next/link';
import EvidenceMapPreview from '../components/EvidenceMapPreview';
import SampleFindings from '../components/SampleFindings';
import PddUploadForm from '../components/PddUploadForm';

const SAMPLE_PDF_URL = 'https://ik.imagekit.io/tzublgy5d/Article6/Sample%20Documents/VM0007_v1.8_SAMPLE.pdf?ik-attachment=true';

const problemSignals = [
  'Evidence exists, but the PDD does not point to it clearly.',
  'A methodology requirement is addressed without enough support.',
  'The PDD and supporting files do not fully reconcile.',
  'Methodology, version, or internal references are inconsistent.',
];

const reviewSystem = [
  ['01', 'Project documents', 'PDD and supporting evidence'],
  ['02', 'Requirements', 'Applicable methodology criteria'],
  ['03', 'Evidence map', 'Requirement-to-source traceability'],
  ['04', 'Findings', 'Supported, unclear, or action required'],
  ['05', 'Readiness report', 'Human-reviewed actions and resolution criteria'],
];

const process = [
  ['1', 'Upload your PDD', 'We confirm the methodology, version, project stage, and review scope.'],
  ['2', 'We review the evidence', 'Applicable requirements are mapped to the PDD and supporting documentation.'],
  ['3', 'You receive clear actions', 'The assessment shows what is ready and what should be resolved before validation.'],
];

const deliverables = [
  'Executive readiness summary',
  'Priority findings',
  'Requirement-by-requirement assessment',
  'Evidence references',
  'Required actions',
  'Resolution criteria',
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Pre-validation evidence readiness</p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Find the evidence gaps before your validator does.</h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">We review your PDD against the applicable methodology and show you what is supported, what is unclear, and what needs action before validation starts.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#upload-pdd" className="preview-primary-cta">Upload your PDD</Link>
                <Link href="/sample-assessment" className="preview-secondary-cta">View sample report</Link>
              </div>
              <p className="mt-5 max-w-md text-xs leading-relaxed text-gray-400">Independent review. Designed to complement your existing project team and consultants.</p>
            </div>
            <div className="flex justify-center lg:col-span-2 lg:justify-end">
              <div className="w-full max-w-[320px] lg:max-w-full">
                <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
                  <div className="bg-forest-900 px-6 py-7">
                    <div className="border border-forest-600/40 px-4 py-5 text-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-forest-300">Article6 Carbon</p>
                      <p className="mt-3 text-xl font-bold leading-tight text-white">PRE-VALIDATION</p>
                      <p className="mt-1 text-xs text-forest-200">EVIDENCE ASSESSMENT</p>
                      <div className="mx-auto mt-4 h-px w-12 bg-forest-600" />
                      <p className="mt-3 text-xs text-forest-200">Methodology-Specific</p>
                      <p className="text-xs text-forest-200">Project Readiness Review</p>
                      <p className="mt-3 text-[10px] text-forest-400">Illustrative Deliverable</p>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 px-5 py-4">
                    <p className="mb-3 text-[10px] uppercase tracking-wider text-gray-400">Readiness dashboard</p>
                    <div className="space-y-2">
                      {[
                        ['SUPPORTED', 6, 'w-[10%]', 'bg-green-500'],
                        ['UNCLEAR', 21, 'w-[36%]', 'bg-amber-400'],
                        ['ACTION REQ.', 9, 'w-[16%]', 'bg-red-400'],
                        ['N/A', 22, 'w-[38%]', 'bg-gray-300'],
                      ].map(([label, count, width, bg]) => (
                        <div key={String(label)} className="flex items-center gap-2.5">
                          <span className="w-[72px] shrink-0 text-[11px] text-gray-600">{label}</span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100"><div className={`h-full rounded-full ${bg} ${width}`} /></div>
                          <span className="w-5 text-right text-[11px] font-semibold text-gray-600">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3"><p className="text-[10px] leading-relaxed text-gray-400">Illustrative pre-validation readiness assessment. Not validation approval, verification, or certification.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">The hidden risk</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">A finished PDD is not necessarily validation-ready.</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">The methodology may be addressed while the evidence behind it is incomplete, unclear, or difficult to trace.</p>
        </div>
        <div className="mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
          {problemSignals.map((item) => (
            <div key={item} className="rounded-md border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-700">
              <span className="mr-2 font-semibold text-forest-700">•</span>{item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-forest-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Why earlier matters</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Those gaps get harder to fix once validation begins.</h2>
          </div>
          <div className="mt-8 flex max-w-5xl flex-col gap-2 md:flex-row md:items-center md:gap-3">
            {['Evidence gap', 'Validator question', 'Evidence hunt', 'PDD revision', 'Another review cycle'].map((item, index) => (
              <div key={item} className="contents">
                <div className="flex-1 rounded-md border border-forest-100 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800 shadow-sm">{item}</div>
                {index < 4 && <span className="hidden text-gray-300 md:block">→</span>}
                {index < 4 && <span className="text-center text-gray-300 md:hidden">↓</span>}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-forest-800">Article6 moves that review earlier, while your team still has time to resolve issues before they become validation friction.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">The review system</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">We turn methodology requirements into an evidence map.</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">Structured document analysis connects each applicable requirement to the project evidence, assessment, risk, and next action. Client-facing conclusions are human-reviewed before release.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-5">
          {reviewSystem.map(([number, title, detail]) => (
            <div key={number} className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-600">{number}</span>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8"><EvidenceMapPreview /></div>
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-gray-400">The workflow shown here reflects the structured evidence-review system used to support Article6 assessments. The example data is illustrative and contains no client information.</p>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">The output</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">You see exactly what needs attention.</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Findings distinguish between evidence that is supported, evidence that needs clarification, and issues that require action before validation.</p>
          </div>
          <div className="mt-8"><SampleFindings /></div>
          <Link href="/sample-assessment" className="preview-primary-cta mt-8">View the full sample assessment</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 items-center gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:p-8">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">See the deliverable first</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Review a full assessment before you send us anything.</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">The VM0007 v1.8 sample shows the report structure, evidence references, findings, required actions, and resolution criteria.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
            <a href={SAMPLE_PDF_URL} target="_blank" rel="noopener noreferrer" download className="preview-primary-cta whitespace-nowrap">Download sample PDF</a>
            <Link href="/sample-assessment" className="preview-secondary-cta whitespace-nowrap">Open sample report</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">How the engagement works</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">From PDD to readiness assessment.</h2>
          </div>
          <div className="mt-8 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {process.map(([number, title, detail]) => (
              <div key={number} className="rounded-md border border-gray-200 bg-white p-5">
                <span className="text-xs font-bold text-forest-600">{number}</span>
                <h3 className="mt-3 text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">What you receive</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">A preparation plan, not a generic score.</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2">
              {deliverables.map((item) => <li key={item} className="flex items-start gap-2.5"><span className="font-bold text-forest-600">✓</span><span>{item}</span></li>)}
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">Standard assessment</p>
            <div className="mt-2 flex items-baseline gap-2"><span className="text-3xl font-bold tracking-tight text-gray-900">$2,999</span><span className="text-xs text-gray-500">USD</span></div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Methodology-specific PDD review with findings, evidence references, required actions, and resolution criteria.</p>
            <div className="mt-5 space-y-2 border-t border-gray-200 pt-5 text-xs leading-relaxed text-gray-500">
              <p><strong className="font-semibold text-gray-700">Timeline:</strong> 10 business days after scope and complete documents are confirmed.</p>
              <p><strong className="font-semibold text-gray-700">Terms:</strong> 50% on acceptance, 50% before the final report.</p>
              <p>Submitting your PDD for scope review does not commit you to an engagement.</p>
            </div>
            <Link href="#upload-pdd" className="preview-primary-cta mt-5 w-full">Upload your PDD</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-forest-50/50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Where we fit</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">An extra review before the external review.</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">Article6 complements project developers, consultants, and VVBs. We do not replace validation or make registry decisions. We give your team an independent opportunity to find evidence-readiness issues first.</p>
          </div>
        </div>
      </section>

      <section id="upload-pdd" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-lg">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Start with the documents</p>
            <h2 className="text-center text-xl font-bold tracking-tight text-gray-900 md:text-2xl">See what needs attention before validation starts.</h2>
            <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">Send the current PDD. We will confirm methodology fit and scope before any engagement begins.</p>
            <div className="mt-8 rounded-md border border-gray-200 bg-white p-5 shadow-sm md:p-7"><PddUploadForm /></div>
            <p className="mt-6 text-xs leading-relaxed text-gray-500">Your document will be used only to evaluate and perform the requested assessment. All uploads are transmitted securely and stored privately.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="mx-auto max-w-2xl rounded-md bg-gray-50 p-5 text-xs leading-relaxed text-gray-500 md:p-6">Article6 provides independent pre-validation evidence readiness assessments. The service is not validation, verification, legal advice, a registry determination, or a guarantee of acceptance by Verra or any validation and verification body.</div>
      </section>
    </>
  );
}
