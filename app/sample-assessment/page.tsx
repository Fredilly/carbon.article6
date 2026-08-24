import Link from 'next/link';

const findings = [
  {
    status: 'Unclear',
    title: 'Carbon-pool selection needs a clearer basis',
    context: 'Carbon pools included in the accounting boundary, and any exclusions, should be justified against the applicable methodology requirements.',
    evidence: 'The project description and emissions calculations identify the principal pools; supporting rationale for an excluded pool is not consistently referenced.',
    gap: 'The exclusion rationale is stated at a high level, but the supporting source or calculation boundary is not traceable from the reviewed documents.',
    action: 'Add a pool-by-pool applicability table with the exclusion basis and direct document or calculation references.',
  },
  {
    status: 'Action required',
    title: 'Sampling design is not sufficiently supported in the PDD',
    context: 'The PDD should substantiate the sampling and stratification design required by the applicable methodology, including its basis for representativeness.',
    evidence: 'The PDD describes sampling and identifies strata, but the stratification logic and sample-size rationale are not fully supported by internal references.',
    gap: 'The PDD does not make it possible to trace how the proposed design supports representative coverage or remains consistent with the applicable methodology.',
    action: 'Add the design basis, stratification logic, sample-size rationale where applicable, and clear PDD references supporting methodology consistency.',
  },
  {
    status: 'Unclear',
    title: 'Internal methodology references are inconsistent',
    context: 'The PDD should use current, unambiguous internal references for each methodology requirement and the evidence supporting it.',
    evidence: 'Several PDD sections address the same requirement, but some section citations and methodology-version references do not align.',
    gap: 'Broken or outdated citations make it unclear which PDD section is the controlling reference for the assessed requirement.',
    action: 'Review internal citations, update outdated methodology or version references, and identify one controlling section for each requirement.',
  },
];

export const metadata = {
  title: 'Sample Evidence Readiness Assessment | Article6 Carbon',
  description: 'Redacted sample demonstrating the structure, detail, and practical outputs of an Article6 evidence readiness assessment.',
};

export default function SampleAssessmentPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Sample assessment</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">Sample VM0007 1.8 Evidence Readiness Assessment</h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">This redacted sample demonstrates the structure, level of detail, and practical outputs of an Article6 assessment.</p>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-gray-400 md:text-sm">The sample is based on publicly available project documentation. It does not represent a commissioned engagement, customer relationship, endorsement, or validation decision.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Report structure</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">This is what the analysis looks like.</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">The full sample report brings the review record, findings, evidence references, and actions together.</p>
        </div>
        <div className="mt-8 max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-forest-700 to-forest-900 px-6 py-8 text-white"><p className="text-xs uppercase tracking-[0.16em] text-forest-200">Article6 Carbon</p><p className="mt-2 text-xl font-bold">Evidence Readiness Assessment</p><p className="mt-1 text-sm text-forest-200">VM0007 v1.8 sample</p></div>
          <ul className="space-y-3 px-6 py-6 text-sm text-gray-700">{['Executive readiness summary','Priority findings','Requirement-by-requirement assessment','Evidence references','Recommended actions','Assessment scope and limitations'].map((item) => <li key={item} className="flex gap-2"><span className="text-forest-600">✓</span>{item}</li>)}</ul>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Example findings</p>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Findings are organized for resolution.</h2>
          </div>
          <div className="mt-8 max-w-4xl space-y-5">
            {findings.map((item) => (
              <article key={item.title} className="rounded-md border border-gray-200 bg-white p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-base font-semibold text-gray-900">{item.title}</h3><span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-700">{item.status}</span></div>
                <dl className="mt-5 grid gap-4 text-sm leading-relaxed text-gray-700">
                  <div><dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Requirement context</dt><dd className="mt-1">{item.context}</dd></div>
                  <div><dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Evidence reviewed</dt><dd className="mt-1">{item.evidence}</dd></div>
                  <div><dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Gap</dt><dd className="mt-1">{item.gap}</dd></div>
                  <div className="border-t border-gray-100 pt-4"><dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Required action</dt><dd className="mt-1 font-medium text-gray-800">{item.action}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Take a closer look</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Download the full sample assessment.</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500">Review the full VM0007 1.8 pre-validation evidence readiness assessment sample.</p>
          <a href="https://ik.imagekit.io/tzublgy5d/Article6/Sample%20Documents/VM0007_v1.8_SAMPLE.pdf?ik-attachment=true" target="_blank" rel="noopener noreferrer" download className="preview-primary-cta mt-6">Download sample report (PDF)</a>
          <p className="mt-5 text-sm text-gray-500">Ready to review your own project documentation? <Link href="/#upload-pdd" className="font-semibold text-forest-700 hover:text-forest-800">Upload your PDD →</Link></p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24"><div className="mx-auto max-w-2xl rounded-md bg-gray-50 p-5 text-xs leading-relaxed text-gray-500">All findings shown are illustrative examples. This sample does not represent a real project assessment, engagement, or validation outcome.</div></section>
    </>
  );
}
