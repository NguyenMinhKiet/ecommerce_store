"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/store/navigation";
import type { NavId } from "@/lib/store/types";
import { useCart } from "./CartProvider";

type HeaderProps = {
  activeNav: NavId;
  onLoginClick: () => void;
};

export function Header({ activeNav, onLoginClick }: HeaderProps) {
  const { itemCount, openCart } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link href="/" className="logo-link">
            M
          </Link>
        </h1>
      </div>
      <nav className="main-nav">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={link.id === activeNav ? "nav-active" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-icons">
        <a href="#" aria-label="Tìm kiếm">
          <i className="fas fa-search" />
        </a>
        <button type="button" onClick={onLoginClick} aria-label="Đăng nhập">
          <i className="far fa-user" />
        </button>
        <button
          type="button"
          className="cart-icon-btn"
          onClick={openCart}
          aria-label={`Giỏ hàng${itemCount > 0 ? `, ${itemCount} sản phẩm` : ""}`}
        >
          <i className="fas fa-shopping-bag" />
          {itemCount > 0 ? (
            <span className="cart-badge">{itemCount > 99 ? "99+" : itemCount}</span>
          ) : null}
        </button>
      </div>
    </header>
  );
}
