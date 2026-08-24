export const metadata = { title: 'About Article6 Carbon', description: 'Article6 develops evidence-readiness tools and assessments for carbon project validation.' };

const principles = [
  ['Evidence before claims', 'Conclusions should be supported by identifiable project documentation.'],
  ['Human-reviewed outputs', 'Client-facing findings require review rather than automatic acceptance.'],
  ['Traceable references', 'Evidence should be connected to its source and location wherever possible.'],
  ['Methodology-specific analysis', 'Assessments should reflect the applicable methodology and version.'],
  ['Independence from VVB decisions', "Article6 prepares projects for review but does not replace or influence the VVB's independent decision."],
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">About Article6 Carbon</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">Evidence-readiness tools and assessments for carbon project validation.</h1>
          <p className="mt-5 text-base leading-relaxed text-gray-700 md:text-lg">We help carbon project teams translate methodology requirements into structured evidence reviews, identify preparation gaps, and improve documentation readiness before external validation.</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">Our current focus is VM0007 v1.8 and REDD+ project documentation.</p>
        </div>
      </section>
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-3xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">Our operating principles</p><div className="mt-8 grid gap-4">{principles.map(([title, body]) => <article key={title} className="rounded-md border border-gray-200 bg-white p-5"><h2 className="text-base font-semibold text-gray-900">{title}</h2><p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p></article>)}</div></div>
        </div>
      </section>
    </>
  );
}
