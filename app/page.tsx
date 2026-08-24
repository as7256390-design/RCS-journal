const articles = [
  { type: "Research Article", title: "Placeholder Research Article: Emerging Directions in Multidisciplinary Science", authors: "Author One · Author Two", date: "August 2026" },
  { type: "Review Article", title: "Placeholder Review: Contemporary Methods and Research Frontiers", authors: "Author One · Author Two · Author Three", date: "July 2026" },
  { type: "Case Study", title: "Placeholder Case Study: Applied Research in Practice", authors: "Author One", date: "June 2026" }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">OPEN • PEER REVIEWED • RESEARCH</p>
            <h1>Advancing research through modern scholarly publishing.</h1>
            <p className="hero-copy">
              RCS Journal is a modern academic publishing platform designed to connect researchers,
              reviewers and editors through a transparent, structured publication workflow.
            </p>
            <div className="actions">
              <a className="button primary" href="/journals">Explore Journals</a>
              <a className="button secondary" href="/submit">Submit Manuscript</a>
            </div>
          </div>
          <div className="hero-panel">
            <span>RCS JOURNAL</span>
            <strong>Research • Review • Publish</strong>
            <p>Placeholder content only. Client-provided journal information will be added later.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">LATEST RESEARCH</p><h2>Featured publications</h2></div>
            <a href="/archives" className="text-link">View archive →</a>
          </div>
          <div className="article-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.title}>
                <span className="tag">{article.type}</span>
                <h3>{article.title}</h3>
                <p>{article.authors}</p>
                <small>{article.date}</small>
                <a href="/articles/sample" className="text-link">Read article →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">CURRENT ISSUE</p><h2>Volume 1 · Issue 1</h2></div>
            <a href="/archives" className="text-link">Browse issues →</a>
          </div>
          <div className="issue-box">
            <div>
              <span className="tag">PLACEHOLDER ISSUE</span>
              <h3>Current Issue</h3>
              <p>Publication date, editorial information and article metadata will be connected to the database in a later phase.</p>
            </div>
            <a className="button primary" href="/journals/sample/issues/1">View Issue</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">WHY RCS JOURNAL</p>
          <h2>Built around the complete publication lifecycle.</h2>
          <div className="feature-grid">
            {[
              ["Peer review", "Structured reviewer assignment and editorial decision workflows."],
              ["Open access", "Public-facing article discovery and accessible research content."],
              ["DOI ready", "Structured publication metadata prepared for DOI integration."],
              ["Editorial control", "Dedicated workflows for authors, reviewers, editors and administrators."]
            ].map(([title, text]) => (
              <div className="feature" key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container cta">
          <div><p className="eyebrow">FOR AUTHORS</p><h2>Ready to submit your research?</h2><p>Create an account and follow the structured manuscript submission process.</p></div>
          <a className="button light" href="/submit">Start a Submission</a>
        </div>
      </section>
    </>
  );
}