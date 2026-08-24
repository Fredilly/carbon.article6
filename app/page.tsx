const checks = [
  "Methodology requirements and evidence coverage",
  "Missing, unclear, or weakly supported claims",
  "Traceability between the PDD and supporting evidence",
  "Likely validation questions and preparation actions",
];

const deliverables = [
  "Executive readiness summary",
  "Priority findings",
  "Requirement-by-requirement evidence review",
  "Recommended actions and resolution criteria",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Article6 Carbon home">
            <span className="brand-mark">A6</span>
            <span>Article6 Carbon</span>
          </a>
          <a className="nav-cta" href="#submit">Submit project</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent pre-validation review</p>
            <h1>Find the evidence gaps before validation becomes expensive or slow.</h1>
            <p className="lede">
              Article6 independently reviews project documentation against the applicable methodology so your team can resolve evidence and documentation issues before they create validation friction.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#submit">Submit project documents</a>
              <a className="button secondary" href="#what-we-check">See what we review</a>
            </div>
            <p className="trust-line">Independent review. We complement project teams, consultants, and VVBs rather than replace them.</p>
          </div>

          <div className="report-card" aria-label="Illustrative readiness report preview">
            <div className="report-cover">
              <span>Article6 Carbon</span>
              <strong>Pre-validation readiness assessment</strong>
              <small>Illustrative deliverable</small>
            </div>
            <div className="report-body">
              <div className="metric-row"><span>Evidence found</span><strong>6</strong></div>
              <div className="metric-row"><span>Needs clarification</span><strong>21</strong></div>
              <div className="metric-row"><span>Missing</span><strong>9</strong></div>
              <p>Every finding links the requirement, evidence reviewed, risk, and next action.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container narrow">
          <p className="eyebrow">Why this matters</p>
          <h2>A complete PDD does not always mean a validation-ready project.</h2>
          <p>
            Evidence can exist but still be difficult to trace, incomplete for a specific requirement, or unsupported by the underlying files. Those problems are cheaper to resolve before external validation starts.
          </p>
        </div>
      </section>

      <section id="what-we-check" className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">What we check</p>
            <h2>Methodology-specific review, focused on what a validator will need to scrutinize.</h2>
          </div>
          <ul className="check-list">
            {checks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-col">
          <div>
            <p className="eyebrow">What you receive</p>
            <h2>A practical preparation record your team can work through.</h2>
            <p>No generic score. No replacement for validation. The output is designed to show what is ready, what is weak, and what needs action.</p>
          </div>
          <ul className="deliverables">
            {deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div>
            <span className="step">01</span>
            <h3>Send your material</h3>
            <p>Share the PDD and supporting project documents needed to understand the current state.</p>
          </div>
          <div>
            <span className="step">02</span>
            <h3>We review readiness</h3>
            <p>We map methodology requirements to the evidence and identify gaps, ambiguity, and unsupported claims.</p>
          </div>
          <div>
            <span className="step">03</span>
            <h3>You get clear actions</h3>
            <p>You receive a focused readiness assessment before deciding how to proceed with the engagement.</p>
          </div>
        </div>
      </section>

      <section id="submit" className="section submit-section">
        <div className="container submit-card">
          <div>
            <p className="eyebrow light">Submit for scope review</p>
            <h2>Send us your project documentation.</h2>
            <p>
              The dedicated Carbon intake is being connected to Article6&apos;s existing private R2 submission service. Until that switch is complete, use the current secure Article6 submission form.
            </p>
          </div>
          <a className="button light-button" href="https://article6.org/#upload-pdd">Open secure submission form</a>
        </div>
      </section>

      <footer>
        <div className="container footer-wrap">
          <span>© 2026 Article6</span>
          <span>Independent pre-validation readiness review. Not validation, verification, certification, or a registry determination.</span>
        </div>
      </footer>
    </main>
  );
}
