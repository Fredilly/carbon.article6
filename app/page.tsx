import Link from 'next/link';
import EvidenceMapPreview from '../components/EvidenceMapPreview';
import SampleFindings from '../components/SampleFindings';
import PddUploadForm from '../components/PddUploadForm';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Pre-validation evidence readiness</p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Find the evidence gaps before your validator does.</h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">Article6 reviews project documentation against applicable methodology requirements to identify missing, unclear, and unsupported evidence before validation begins.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#upload-pdd" className="preview-primary-cta">Upload your PDD</Link>
                <Link href="/sample-assessment" className="preview-secondary-cta">View sample assessment</Link>
              </div>
              <p className="mt-5 max-w-md text-xs leading-relaxed text-gray-400">Independent pre-validation review. No commitment required for initial scope review.</p>
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
                    <p className="mb-3 text-[10px] uppercase tracking-wider text-gray-400">Readiness Dashboard</p>
                    <div className="space-y-2">
                      {[
                        ['FOUND', 6, 'w-[10%]', 'bg-green-500'],
                        ['UNCLEAR', 21, 'w-[36%]', 'bg-amber-400'],
                        ['MISSING', 9, 'w-[16%]', 'bg-red-400'],
                        ['NOT APPLICABLE', 22, 'w-[38%]', 'bg-gray-300'],
                      ].map(([label, count, width, bg]) => (
                        <div key={String(label)} className="flex items-center gap-2.5">
                          <span className="w-[72px] shrink-0 text-[11px] text-gray-600">{label}</span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100"><div className={`h-full rounded-full ${bg} ${width}`} /></div>
                          <span className="w-5 text-right text-[11px] font-semibold text-gray-600">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3"><p className="text-[10px] leading-relaxed text-gray-400">Pre-validation readiness assessment. Not validation approval, verification, or certification.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Why this matters</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">A complete PDD does not always mean a validation-ready project.</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">Carbon projects often contain extensive documentation, but evidence can still be incomplete, unclear, or difficult for reviewers to trace.</p>
        </div>
        <div className="mt-8 max-w-2xl space-y-3">
          {[
            'Evidence is distributed across PDDs, annexes, calculations, maps, and supporting files.',
            'Requirements may be addressed without sufficient supporting evidence.',
            'Evidence may exist but be difficult to verify or trace.',
            'Documentation gaps are often discovered after validation has already started.',
          ].map((item) => <div key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-700"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-600" /><span>{item}</span></div>)}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">See the review</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Every requirement is traced to evidence, risk, and a next action.</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">The assessment turns a document review into a practical preparation record your team can work through.</p>
          </div>
          <div className="mt-8"><EvidenceMapPreview /></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Sample findings</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Identify validation risks before validation begins.</h2>
        </div>
        <div className="mt-8"><SampleFindings /></div>
      </section>

      <section className="border-y border-gray-200 bg-forest-50/50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">The cost of waiting</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Finding gaps during validation costs more.</h2>
          <div className="mt-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
            <div><h3 className="text-base font-semibold text-gray-900">Clarification cycles</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">More questions. More evidence hunting.</p></div>
            <div><h3 className="text-base font-semibold text-gray-900">Rework</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Documentation changes under external review pressure.</p></div>
            <div><h3 className="text-base font-semibold text-gray-900">Delays</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">Unresolved evidence issues can slow validation.</p></div>
          </div>
          <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-forest-800">Article6 moves that review earlier, while your team still has time to respond.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">What you receive</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">A clear preparation plan before validation.</h2>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {['Requirement-by-requirement evidence review','Missing and insufficient evidence identified','Validation preparation actions','Clear resolution guidance for each finding'].map((item) => <li key={item} className="flex items-start gap-2.5"><span className="font-bold text-forest-600">✓</span><span>{item}</span></li>)}
            </ul>
            <Link href="/sample-assessment" className="preview-focus-ring mt-6 inline-flex rounded-sm text-sm font-medium text-forest-700 hover:text-forest-800">View sample assessment →</Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="bg-gradient-to-br from-forest-700 to-forest-900 px-5 py-6 text-center text-white"><p className="text-xs uppercase tracking-[0.15em] text-forest-200">Evidence Readiness Assessment</p><p className="mt-1.5 text-lg font-bold">Article6 Assessment</p><p className="mt-1 text-xs text-forest-200">Illustrative Report</p></div>
              <div className="space-y-1.5 px-5 py-4">{['Executive readiness summary','Priority findings','Requirement-by-requirement assessment','Evidence references','Recommended actions'].map((item) => <div key={item} className="flex items-center gap-2 text-xs text-gray-600"><span className="text-forest-600">✓</span><span>{item}</span></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="upload-pdd" className="scroll-mt-20 border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-lg">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Get started</p>
            <h2 className="text-center text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Send us your PDD.</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Upload your project documentation and we will review the scope, confirm methodology fit, and explain the next steps.</p>
            <div className="mt-8 rounded-md border border-gray-200 bg-white p-5 shadow-sm md:p-7"><PddUploadForm /></div>
            <p className="mt-6 text-xs leading-relaxed text-gray-500">Your document will be used only to evaluate and perform the requested assessment. All uploads are transmitted securely and stored privately.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl rounded-md bg-gray-50 p-5 text-xs leading-relaxed text-gray-500 md:p-6">Article6 provides independent pre-validation evidence readiness assessments. The service is not validation, verification, legal advice, a registry determination, or a guarantee of acceptance by Verra or any validation and verification body.</div>
      </section>
    </>
  );
}
