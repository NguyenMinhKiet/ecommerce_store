import Link from "next/link";
import { NAV_LINKS } from "@/lib/store/navigation";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-col">
          <p className="site-footer-logo">M</p>
          <p className="site-footer-text">
            Stusport — Cửa hàng sneaker &amp; streetwear chính hãng.
          </p>
          <p className="site-footer-text">
            123 Nguyễn Huệ, Quận 1, TP.HCM
            <br />
            0901 234 567
            <br />
            support@stusport.vn
          </p>
        </div>

        <div className="site-footer-col">
          <h3>Về chúng tôi</h3>
          <ul>
            <li>
              <Link href="#">Giới thiệu</Link>
            </li>
            <li>
              <Link href="#">Tuyển dụng</Link>
            </li>
            <li>
              <Link href="#">Hệ thống cửa hàng</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer-col">
          <h3>Hỗ trợ khách hàng</h3>
          <ul>
            <li>
              <Link href="#">Hướng dẫn mua hàng</Link>
            </li>
            <li>
              <Link href="#">Đổi trả &amp; hoàn tiền</Link>
            </li>
            <li>
              <Link href="#">Vận chuyển</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer-col">
          <h3>Danh mục</h3>
          <ul>
            {NAV_LINKS.filter(
              (link) =>
                link.id !== "home" &&
                link.id !== "blog",
            ).map((link) => (
              <li key={link.id}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-social">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube" />
          </a>
          <a href="#" aria-label="TikTok">
            <i className="fab fa-tiktok" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Stusport. All rights reserved.</p>
      </div>
    </footer>
  );
}
