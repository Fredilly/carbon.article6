import Link from 'next/link';
import EvidenceMapPreview from '../components/EvidenceMapPreview';
import SampleFindings from '../components/SampleFindings';
import PddUploadForm from '../components/PddUploadForm';

const SAMPLE_PDF = 'https://ik.imagekit.io/tzublgy5d/Article6/Sample%20Documents/VM0007_v1.8_SAMPLE.pdf?ik-attachment=true';

const problemSignals = [
  'Evidence exists, but the PDD does not point to it clearly.',
  'A methodology requirement is addressed without enough support.',
  'The PDD and supporting files do not fully reconcile.',
];

const deliverables = [
  'Requirement-by-requirement evidence review',
  'Priority findings and evidence references',
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
              <p className="mt-5 max-w-md text-xs leading-relaxed text-gray-400">Independent review designed to complement your project team and consultants.</p>
            </div>
            <div className="flex justify-center lg:col-span-2 lg:justify-end">
              <div className="w-full max-w-[320px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
                <div className="bg-forest-900 px-6 py-7">
                  <div className="border border-forest-600/40 px-4 py-5 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-forest-300">Article6 Carbon</p>
                    <p className="mt-3 text-xl font-bold leading-tight text-white">PRE-VALIDATION</p>
                    <p className="mt-1 text-xs text-forest-200">EVIDENCE ASSESSMENT</p>
                    <div className="mx-auto mt-4 h-px w-12 bg-forest-600" />
                    <p className="mt-3 text-xs text-forest-200">Methodology-specific project readiness review</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 px-5 py-4 text-center">
                  <div><p className="text-sm font-semibold text-green-700">Supported</p><p className="mt-1 text-[10px] text-gray-400">Traceable evidence</p></div>
                  <div><p className="text-sm font-semibold text-amber-600">Unclear</p><p className="mt-1 text-[10px] text-gray-400">Needs clarification</p></div>
                  <div><p className="text-sm font-semibold text-red-600">Action</p><p className="mt-1 text-[10px] text-gray-400">Gap to resolve</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">The hidden risk</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">A finished PDD can still create validation friction.</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">The methodology may be addressed while the evidence behind it is incomplete, unclear, or difficult to trace.</p>
        </div>
        <div className="mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          {problemSignals.map((item) => (
            <div key={item} className="rounded-md border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-700">{item}</div>
          ))}
        </div>

        <div className="mt-10 max-w-5xl rounded-lg border border-forest-100 bg-forest-50/50 p-5 md:p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            {['Evidence gap', 'Validator question', 'Rework', 'Another review cycle'].map((item, index) => (
              <div key={item} className="contents">
                <div className="flex-1 rounded-md border border-forest-100 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800">{item}</div>
                {index < 3 && <span className="hidden text-gray-300 md:block">→</span>}
                {index < 3 && <span className="text-center text-gray-300 md:hidden">↓</span>}
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-forest-800">We move that review earlier, while your team still has time to resolve issues before they become validation friction.</p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">How we find the gaps</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">We map methodology requirements to project evidence.</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">Each applicable requirement is traced to the PDD and supporting evidence, then assessed for support, risk, and the next action. Structured analysis supports the review; final findings are human-reviewed.</p>
          </div>

          <div className="mt-7 flex max-w-4xl flex-wrap items-center gap-2 text-xs font-medium text-gray-700">
            {['Requirement', 'Evidence', 'Finding', 'Risk', 'Action'].map((item, index) => (
              <div key={item} className="contents">
                <span className="rounded-md border border-gray-200 bg-white px-4 py-2">{item}</span>
                {index < 4 && <span className="text-gray-300">→</span>}
              </div>
            ))}
          </div>

          <div className="mt-8"><EvidenceMapPreview /></div>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-gray-400">Illustrative data. The workflow reflects the structured evidence-review system used to support Article6 assessments.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">See the output</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">See exactly what needs attention.</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">The assessment shows what is supported, what needs clarification, and what should be resolved before validation.</p>
        </div>
        <div className="mt-8"><SampleFindings /></div>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 rounded-lg border border-gray-200 bg-gray-50 p-6 md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Review the full assessment before you send us anything.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">The VM0007 v1.8 sample shows findings, evidence references, required actions, resolution criteria, and the final report structure.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href={SAMPLE_PDF} target="_blank" rel="noopener noreferrer" className="preview-primary-cta whitespace-nowrap">Download sample PDF</a>
            <Link href="/sample-assessment" className="preview-secondary-cta whitespace-nowrap">View sample page</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">What you receive</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">A preparation plan, not a generic score.</h2>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5"><span className="font-bold text-forest-600">✓</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-gray-500">Independent pre-validation review designed to complement project developers, consultants, and VVBs. Article6 does not replace validation or make registry decisions.</p>
          </div>

          <div className="rounded-lg border-2 border-forest-700 bg-forest-50/40 p-6 shadow-sm md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-forest-700">Pre-validation evidence readiness review</p>
            <div className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-bold tracking-tight text-gray-900">$2,999</span><span className="text-xs font-medium text-gray-500">USD</span></div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">Methodology-specific PDD review with evidence mapping, priority findings, required actions, and resolution criteria.</p>
            <div className="mt-6 space-y-2 border-t border-forest-100 pt-5 text-sm text-gray-600">
              <p><strong className="font-semibold text-gray-900">10 business days</strong> after scope and complete documents are confirmed.</p>
              <p><strong className="font-semibold text-gray-900">50% to begin</strong>, 50% before the final report.</p>
            </div>
            <Link href="#upload-pdd" className="preview-primary-cta mt-6 w-full">Upload your PDD</Link>
            <p className="mt-3 text-center text-xs leading-relaxed text-gray-500">Submitting your PDD for scope review does not commit you to an engagement.</p>
          </div>
        </div>
      </section>

      <section id="upload-pdd" className="scroll-mt-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-lg">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Next step</p>
            <h2 className="text-center text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Send us your PDD.</h2>
            <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">We will review the scope, confirm methodology fit, and explain the next step.</p>
            <div className="mt-8 rounded-md border border-gray-200 bg-white p-5 shadow-sm md:p-7"><PddUploadForm /></div>
            <p className="mt-6 text-xs leading-relaxed text-gray-500">Your document will be used only to evaluate and perform the requested assessment. Uploads are transmitted securely and stored privately.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="mx-auto max-w-2xl text-xs leading-relaxed text-gray-400">Article6 provides independent pre-validation evidence readiness assessments. The service is not validation, verification, legal advice, a registry determination, or a guarantee of acceptance by Verra or any validation and verification body.</div>
      </section>
    </>
  );
}
