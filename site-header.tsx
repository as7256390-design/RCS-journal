import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility"><div className="container utility-inner"><span>Academic Research & Scholarly Publishing</span><span>ISSN: COMING SOON</span></div></div>
      <div className="container nav">
        <Link href="/" className="brand"><span className="brand-mark">R</span><span>RCS <small>JOURNAL</small></span></Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/journals">Journals</Link>
          <Link href="/editorial-board">Editorial Board</Link>
          <Link href="/archives">Archives</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions"><Link href="/login">Login</Link><Link className="button primary compact" href="/submit">Submit</Link></div>
      </div>
    </header>
  );
}