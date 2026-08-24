import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">R</span><span>RCS <small>JOURNAL</small></span></div><p>A modern platform for research discovery, peer review and scholarly publication.</p></div>
        <div><h4>Explore</h4><Link href="/journals">Journals</Link><Link href="/archives">Archives</Link><Link href="/editorial-board">Editorial Board</Link></div>
        <div><h4>Authors</h4><Link href="/author-guidelines">Author Guidelines</Link><Link href="/submit">Submit Manuscript</Link><Link href="/policies">Policies</Link></div>
        <div><h4>Contact</h4><p>editor@example.org</p><p>support@example.org</p></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 RCS Journal. Placeholder content.</span><span>Privacy · Terms · Copyright</span></div>
    </footer>
  );
}