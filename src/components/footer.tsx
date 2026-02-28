import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            China<span>Pass</span>
          </div>
          <p className="footer-brand-sub">
            The digital survival guide for traveling to China. Apps, payments, AI guide — everything in one place.
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-col-title">Product</div>
            <div className="footer-col-items">
              <Link href="/apps" className="footer-col-item">App Navigator</Link>
              <Link href="/payment" className="footer-col-item">Payment Guide</Link>
              <Link href="/cities" className="footer-col-item">City Guides</Link>
              <Link href="/essentials" className="footer-col-item">Essentials</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">AI Tools</div>
            <div className="footer-col-items">
              <Link href="/chat" className="footer-col-item">AI Guide Chat</Link>
              <Link href="/apps/wechat" className="footer-col-item">WeChat Setup</Link>
              <Link href="/apps/alipay" className="footer-col-item">Alipay Setup</Link>
              <Link href="/apps/didi" className="footer-col-item">Didi Guide</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 ChinaPass · Free · No sign-up required</div>
        <div className="footer-research">
          <strong>Design:</strong> BIL converged funnel methodology, NYT Snow Fall scrollytelling,
          and editorial typography principles applied to a utility travel app.
        </div>
      </div>
    </footer>
  );
}
