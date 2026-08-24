import Link from 'next/link';
import EvidenceMapPreview from '../components/EvidenceMapPreview';
import SampleFindings from '../components/SampleFindings';
import PddUploadForm from '../components/PddUploadForm';

const SAMPLE_PDF =
  'https://ik.imagekit.io/tzublgy5d/Article6/Sample%20Documents/VM0007_v1.8_SAMPLE.pdf?ik-attachment=true';

const evidenceRisks = [
  {
    label: 'Claim without a clear source',
    copy: 'The PDD makes a material claim, but the supporting evidence is not identified clearly enough for a reviewer to trace it.',
  },
  {
    label: 'Evidence that is hard to find',
    copy: 'The support exists somewhere in annexes, calculations, maps, or supporting documents, but a reviewer has to hunt for it.',
  },
  {
    label: 'Requirement without enough support',
    copy: 'The methodology requirement is discussed, but the justification or supporting evidence is incomplete.',
  },
  {
    label: 'Documents that do not reconcile',
    copy: 'The PDD and its calculations, maps, annexes, or supporting files do not tell exactly the same story.',
  },
];

const deliverables = [
  ['Evidence Map', 'A structured record connecting methodology requirements to the relevant claims, evidence, assessment, risk, and next action.'],
  ['Priority findings', 'The issues most likely to create clarification, rework, or delay during validation.'],
  ['Required actions', 'Clear guidance on what needs to be added, clarified, reconciled, or documented.'],
  ['Resolution criteria', 'A practical description of what “resolved” looks like for each finding.'],
];

const retainedKnowledge = [
  'where key evidence came from',
  'why a requirement was considered addressed',
  'which supporting documents were relied on',
  'what was changed or clarified during review',
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">Pre-validation evidence readiness</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-gray-950 md:text-5xl lg:text-6xl">
                Find the evidence gaps before your validator does.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                We review your PDD against the applicable methodology and show you what is supported, what is unclear, and what still needs action before validation starts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#upload-pdd" className="preview-primary-cta">Upload your PDD</Link>
                <Link href="/sample-assessment" className="preview-secondary-cta">View sample assessment</Link>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-5 text-gray-400">
                Independent review designed to complement your existing project team and consultants.
              </p>
            </div>

            <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)]">
                <div className="bg-forest-950 px-6 py-7 text-white">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-300">Article6 Carbon</p>
                      <p className="mt-2 text-lg font-semibold tracking-tight">Evidence readiness assessment</p>
                    </div>
                    <span className="rounded-full border border-forest-700 px-2.5 py-1 text-[10px] uppercase tracking-wide text-forest-200">Illustrative</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    ['Requirement', 'Baseline justification'],
                    ['PDD reference', '§ 3.2.1'],
                    ['Evidence', 'Calculation workbook + annex'],
                    ['Assessment', 'Needs clarification'],
                    ['Action', 'Reconcile assumption and cite source'],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[110px_1fr] gap-4 px-6 py-4 text-sm">
                      <span className="text-gray-400">{label}</span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 px-6 py-4 text-xs leading-5 text-gray-500">
                  Every finding is tied back to a requirement and the evidence used to assess it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-[#fbfcfb]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">The hidden risk</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">A finished PDD can still contain evidence gaps.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              A requirement may be addressed in the document while the evidence behind it is incomplete, difficult to trace, or inconsistent with the supporting files.
            </p>
          </div>

          <div className="mt-12 border-y border-gray-200">
            {evidenceRisks.map((risk, index) => (
              <div key={risk.label} className="grid gap-3 border-b border-gray-200 py-7 last:border-b-0 md:grid-cols-[64px_260px_1fr] md:items-start md:gap-8">
                <span className="text-xs font-semibold tabular-nums text-gray-300">0{index + 1}</span>
                <h3 className="text-base font-semibold text-gray-900">{risk.label}</h3>
                <p className="max-w-2xl text-sm leading-6 text-gray-600">{risk.copy}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl border-l-2 border-forest-600 pl-5 text-base font-medium leading-7 text-gray-800">
            These are the gaps that become clarification requests, rework, and additional review cycles during validation.
          </p>
        </div>
      </section>

      <section className="bg-forest-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-300">What we do</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-4xl">We find those gaps before validation does.</h2>
          </div>
          <div>
            <p className="text-base leading-7 text-forest-100 md:text-lg">
              Article6 independently reviews the PDD and supporting documentation to identify where evidence is strong, where it is unclear, and where something still needs to be resolved.
            </p>
            <p className="mt-5 text-base leading-7 text-forest-200">
              You get a practical list of issues your team can work through before they become questions from an external reviewer.
            </p>
            <p className="mt-7 text-sm font-semibold tracking-wide text-white">
              Find it earlier. Fix it on your schedule. Enter validation better prepared.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">How we do it</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">We map each methodology requirement to the evidence behind it.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              For every applicable requirement, we create a traceable path through the project documentation.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <div className="grid divide-y divide-gray-200 md:grid-cols-6 md:divide-x md:divide-y-0">
              {[
                ['01', 'Methodology requirement'],
                ['02', 'PDD reference'],
                ['03', 'Supporting evidence'],
                ['04', 'Assessment'],
                ['05', 'Risk'],
                ['06', 'Required action'],
              ].map(([number, label]) => (
                <div key={number} className="px-5 py-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-600">{number}</span>
                  <p className="mt-2 text-sm font-semibold leading-5 text-gray-800">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10"><EvidenceMapPreview /></div>
          <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl">That makes it possible to see not just that an issue exists, but exactly why it was raised and what evidence would resolve it.</p>
            <p className="shrink-0 font-medium text-gray-700">Structured analysis. Human-reviewed conclusions.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-[#fbfcfb]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">What you get</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">A traceable Evidence Map and a clear readiness assessment.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Every applicable requirement is tied back to the relevant part of the PDD and supporting evidence, so your team can see exactly what supports each conclusion.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {deliverables.map(([title, copy]) => (
                  <div key={title} className="border-t border-gray-300 pt-5">
                    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{copy}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-xl border border-forest-200 bg-forest-50/70 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-700">A record your team can keep using</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">Turn expert knowledge into project knowledge.</h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-700">
                  The Evidence Map preserves the reasoning and source trail behind the PDD in a structure other members of the team can follow. If people move on, the project retains a usable record of the work.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                  {retainedKnowledge.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 font-semibold text-forest-700">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-forest-200 pt-5 text-sm font-semibold text-gray-900">Not a black-box score. Every finding is traceable.</p>
              </div>

              <div id="sample-report" className="scroll-mt-24 mt-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">See the output</p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">Review the evidence before you send us anything.</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/sample-assessment" className="preview-secondary-cta">View sample assessment</Link>
                    <a href={SAMPLE_PDF} className="preview-primary-cta">Download full sample PDF</a>
                  </div>
                </div>
                <div className="mt-8"><SampleFindings /></div>
              </div>
            </div>

            <aside id="pricing" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <div className="border-b border-gray-100 px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">Pre-validation evidence readiness review</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-[-0.04em] text-gray-950">$2,999</span>
                    <span className="pb-1 text-sm text-gray-400">USD</span>
                  </div>
                </div>
                <div className="px-6 py-6">
                  <ul className="space-y-3 text-sm leading-6 text-gray-700">
                    {[
                      'Methodology-specific PDD review',
                      'Requirement-by-requirement evidence mapping',
                      'Priority findings and evidence references',
                      'Required actions and resolution criteria',
                      'Final readiness assessment',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5"><span className="font-bold text-forest-600">✓</span><span>{item}</span></li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-6 text-sm leading-6 text-gray-500">
                    <p><strong className="font-semibold text-gray-800">Timeline:</strong> 10 business days after scope and complete documents are confirmed.</p>
                    <p><strong className="font-semibold text-gray-800">Terms:</strong> 50% on acceptance, 50% before the final report.</p>
                  </div>
                  <p className="mt-5 rounded-lg bg-gray-50 px-4 py-3 text-xs leading-5 text-gray-500">
                    Submitting your PDD for an initial scope review does not commit you to an engagement.
                  </p>
                  <Link href="#upload-pdd" className="preview-primary-cta mt-5 w-full">Upload your PDD</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="upload-pdd" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">How to get started</p>
              <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">Start with your PDD.</h2>
              <p className="mt-5 text-base leading-7 text-gray-600">
                Upload the current version through our secure form. We will review the project scope, confirm the applicable methodology and version, and let you know if we need any additional documentation before beginning the assessment.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-500">Submitting your PDD is only the first scope-review step. It does not commit you to purchase the service.</p>
            </div>

            <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.3)] md:p-8">
              <PddUploadForm />
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-gray-400">Your documents are transmitted securely and stored privately.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="mx-auto max-w-3xl text-center text-xs leading-5 text-gray-500">
            Article6 provides independent pre-validation evidence readiness assessments designed to complement project developers, consultants, and VVBs. We do not perform validation, make registry decisions, or guarantee acceptance by Verra or any validation and verification body.
          </p>
        </div>
      </section>
    </>
  );
}
