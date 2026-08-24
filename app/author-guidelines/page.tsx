export default function AuthorGuidelines() {
  return (
    <section className="page">
      <div className="container narrow">
        <p className="eyebrow">FOR AUTHORS</p>
        <h1>Author Guidelines</h1>
        <p className="lead">Official manuscript preparation and submission requirements will be supplied and approved by the client.</p>
        <div className="link-list">
          {["Manuscript preparation","Formatting","Figures and tables","References","Ethical requirements","Copyright","Submission procedure"].map(x => (
            <a href="#" key={x}>{x}<span>→</span></a>
          ))}
        </div>
      </div>
    </section>
  );
}