const steps = [
  {
    title: "Upload",
    detail: "Drop in a PDF, DOCX, or Markdown file with rights confirmation."
  },
  {
    title: "Outline",
    detail: "Codex proposes two outlines based on your audience and promise."
  },
  {
    title: "Draft",
    detail: "Generate chapters with edit controls and evidence links."
  },
  {
    title: "Export",
    detail: "Download PDF, EPUB, JSON, and JSONL in one package."
  }
];

const safeguards = [
  "Rights declaration required before generation",
  "Paragraph-level traceability to sources",
  "Plain-English mode for legal or policy text",
  "No invented facts when source is silent"
];

const exports = [
  {
    title: "book.pdf",
    detail: "Print-ready interior at 6x9 trim size."
  },
  {
    title: "book.epub",
    detail: "Clean EPUB output validated for Kindle."
  },
  {
    title: "book.json",
    detail: "Structured book data with provenance metadata."
  },
  {
    title: "book.jsonl",
    detail: "AI-ready dataset for RAG and training."
  }
];

export default function Home() {
  return (
    <main>
      <span className="badge">Codex MVP</span>
      <div className="hero">
        <div>
          <h1>Turn raw content into a publish-ready book package.</h1>
          <p className="small">
            Codex ingests your documents, builds a guided outline, drafts
            chapters, and exports a professional package with PDF, EPUB, JSON,
            and JSONL.
          </p>
          <div className="button-row">
            <button className="button">Start a new book</button>
            <button className="button secondary">View export spec</button>
          </div>
        </div>
        <div className="hero-card">
          <h3>Project checklist</h3>
          <ul className="checklist">
            {steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}:</strong>
                <span className="small">{step.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="section">
        <h2>Export bundle</h2>
        <div className="card-grid">
          {exports.map((item) => (
            <div className="card" key={item.title}>
              <h4>{item.title}</h4>
              <p className="small">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Professional safeguards</h2>
        <div className="card-grid">
          {safeguards.map((item) => (
            <div className="card" key={item}>
              <p className="small">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
