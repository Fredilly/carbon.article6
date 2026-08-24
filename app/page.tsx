const reviewStages = [
  ["01", "PDD uploaded", "Project documentation received"],
  ["02", "Methodology requirements checked", "Applicable criteria reviewed"],
  ["03", "Evidence mapped", "Sources traced to requirements"],
  ["04", "Risks identified", "Gaps rated by review priority"],
  ["05", "Actions recommended", "Resolution guidance prepared"],
];

const findings = [
  {
    title: "Project boundary definition",
    risk: "Medium",
    evidence: "PDD Section 1.4; project boundary map",
    finding: "Boundary description is present, but the map does not identify all included facilities.",
    action: "Reconcile the map and narrative before submission.",
  },
  {
    title: "Monitoring parameter sources",
    risk: "High",
    evidence: "Monitoring plan; equipment specification sheet",
    finding: "The monitoring plan names the parameter but does not show the source of the measurement factor.",
    action: "Add the source and explain how the factor will be verified.",
  },
  {
    title: "Stakeholder consultation record",
    risk: "Low",
    evidence: "Consultation minutes; attendance register",
    finding: "Meeting records are included, though responses to material concerns are not traceable.",
    action: "Link each material concern to a response or resolution note.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Article6 Carbon home">
            <span className="brand-mark">A6</span>
            <span>Article6</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#review">How it works</a>
            <a href="#findings">Sample findings</a>
            <a href="#deliverable">What you receive</a>
          </nav>
          <a className="button primary compact" href="#upload-pdd">Upload your PDD</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Pre-validation evidence readiness</p>
            <h1>Find the evidence gaps before your validator does.</h1>
            <p className="lede">
              Article6 reviews project documentation against applicable methodology requirements to identify missing, unclear, and unsupported evidence before validation begins.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#upload-pdd">Upload your PDD</a>
              <a className="button secondary" href="#findings">View sample assessment</a>
            </div>
            <p className="trust-line">Independent pre-validation review. No commitment required for initial scope review.</p>
          </div>

          <div className="report-preview" aria-label="Illustrative Article6 assessment preview">
            <div className="report-cover">
              <div className="report-frame">
                <span>Article6</span>
                <strong>PRE-VALIDATION</strong>
                <b>EVIDENCE ASSESSMENT</b>
                <i />
                <small>Methodology-Specific<br />Project Readiness Review</small>
                <em>Illustrative Deliverable</em>
              </div>
            </div>
            <div className="dashboard">
              <p className="micro-label">Readiness dashboard</p>
              <p className="dashboard-sub">Methodology requirements reviewed</p>
              {[
                ["FOUND", 6, "10%", "found"],
                ["UNCLEAR", 21, "36%", "unclear"],
                ["MISSING", 9, "16%", "missing"],
                ["NOT APPLICABLE", 22, "38%", "na"],
              ].map(([label, count, width, kind]) => (
                <div className="dashboard-row" key={String(label)}>
                  <span>{label}</span>
                  <div className="bar"><i className={String(kind)} style={{ width: String(width) }} /></div>
                  <b>{count}</b>
                </div>
              ))}
            </div>
            <div className="report-summary">
              <div><b>6</b><span>CONFORMS</span></div>
              <div><b>30</b><span>ACTION REQ.</span></div>
              <div><b>22</b><span>NOT APPLIC.</span></div>
            </div>
            <div className="report-note">Pre-validation readiness assessment. Not validation approval, verification, or certification.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-width">
          <p className="eyebrow">Why this matters</p>
          <h2>A complete PDD does not always mean a validation-ready project.</h2>
          <p className="section-lede">Carbon projects often contain extensive documentation, but evidence can still be incomplete, unclear, or difficult for reviewers to trace.</p>
          <ul className="plain-list">
            <li>Evidence is distributed across PDDs, annexes, calculations, maps, and supporting files.</li>
            <li>Requirements may be addressed without sufficient supporting evidence.</li>
            <li>Evidence may exist but be difficult to verify or trace.</li>
            <li>Documentation gaps are often discovered after validation has already started.</li>
          </ul>
        </div>
      </section>

      <section id="review" className="section muted bordered">
        <div className="container">
          <div className="content-width">
            <p className="eyebrow">See the review</p>
            <h2>Every requirement is traced to evidence, risk, and a next action.</h2>
            <p className="section-lede">The assessment turns a document review into a practical preparation record your team can work through.</p>
          </div>

          <div className="evidence-map">
            <div className="panel-heading">
              <div><p className="micro-label green">Illustrative review record</p><h3>Evidence map</h3></div>
              <span className="sample-pill">Sample data</span>
            </div>
            <div className="evidence-grid">
              <div className="review-path">
                <p className="micro-label">Review path</p>
                <ol>
                  {reviewStages.map(([number, label, detail]) => (
                    <li key={number}><span className="stage-number">{number}</span><div><strong>{label}</strong><small>{detail}</small></div></li>
                  ))}
                </ol>
              </div>
              <div className="requirement-review">
                <div className="requirement-top"><div><p className="micro-label">Requirement review</p><strong>Applicable methodology</strong></div><span className="risk medium">Medium risk</span></div>
                <dl>
                  <div><dt>Requirement</dt><dd>Baseline scenario justification</dd></div>
                  <div><dt>Evidence reviewed</dt><dd>PDD Section 3.2<br />Supporting documentation</dd></div>
                  <div><dt>Assessment</dt><dd>Additional support recommended</dd></div>
                  <div><dt>Action</dt><dd>Provide stronger supporting evidence before validation.</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="findings" className="section">
        <div className="container">
          <div className="content-width">
            <p className="eyebrow">Sample findings</p>
            <h2>Identify validation risks before validation begins.</h2>
          </div>
          <div className="finding-grid">
            {findings.map((item) => (
              <article className="finding-card" key={item.title}>
                <div className="finding-title"><h3>{item.title}</h3><span className={`risk ${item.risk.toLowerCase()}`}>{item.risk}</span></div>
                <dl>
                  <div><dt>Evidence reviewed</dt><dd>{item.evidence}</dd></div>
                  <div><dt>Finding</dt><dd>{item.finding}</dd></div>
                  <div className="finding-action"><dt>Recommended action</dt><dd>{item.action}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <p className="sample-note">Illustrative findings for demonstration only. Not from a real client project.</p>
        </div>
      </section>

      <section className="section muted bordered">
        <div className="container">
          <p className="eyebrow">The cost of waiting</p>
          <h2>Finding gaps during validation costs more.</h2>
          <div className="cost-grid">
            <div><h3>Clarification cycles</h3><p>More questions. More evidence hunting.</p></div>
            <div><h3>Rework</h3><p>Documentation changes under external review pressure.</p></div>
            <div><h3>Delays</h3><p>Unresolved evidence issues can slow validation.</p></div>
          </div>
          <p className="closing-line">Article6 moves that review earlier, while your team still has time to respond.</p>
        </div>
      </section>

      <section id="deliverable" className="section">
        <div className="container deliverable-grid">
          <div>
            <p className="eyebrow">What you receive</p>
            <h2>A clear preparation plan before validation.</h2>
            <ul className="tick-list">
              <li>Requirement-by-requirement evidence review</li>
              <li>Missing and insufficient evidence identified</li>
              <li>Validation preparation actions</li>
              <li>Clear resolution guidance for each finding</li>
            </ul>
            <a className="text-link" href="#findings">View sample assessment →</a>
          </div>
          <div className="mini-report">
            <div className="mini-cover"><span>Evidence Readiness Assessment</span><strong>Article6 Assessment</strong><small>Illustrative Report</small></div>
            <ul><li>Executive readiness summary</li><li>Priority findings</li><li>Requirement-by-requirement assessment</li><li>Evidence references</li><li>Recommended actions</li></ul>
          </div>
        </div>
      </section>

      <section id="upload-pdd" className="section upload-section bordered">
        <div className="container upload-wrap">
          <p className="eyebrow centered">Get started</p>
          <h2>Send us your PDD.</h2>
          <p className="section-lede centered-copy">Upload your project documentation and we will review the scope, confirm methodology fit, and explain the next steps.</p>
          <div className="upload-card">
            <div>
              <strong>Secure project submission</strong>
              <p>The dedicated Carbon intake is being connected to the same private submission service used by Article6 today.</p>
            </div>
            <a className="button primary" href="https://article6.org/#upload-pdd">Open secure submission form</a>
          </div>
          <p className="privacy-note">Your document will be used only to evaluate and perform the requested assessment. All uploads are transmitted securely and stored privately.</p>
        </div>
      </section>

      <section className="disclaimer-section">
        <div className="container disclaimer">Article6 provides independent pre-validation evidence readiness assessments. The service is not validation, verification, legal advice, a registry determination, or a guarantee of acceptance by Verra or any validation and verification body.</div>
      </section>

      <footer>
        <div className="container footer-wrap"><span>© 2026 Article6</span><span>Independent pre-validation evidence readiness.</span></div>
      </footer>
    </main>
  );
}
