import type { NavId } from "./types";

export type NavLink = {
  id: NavId;
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: "home", href: "/", label: "Trang chủ" },
  { id: "sneakers", href: "/sneakers", label: "Giày Sneaker" },
  { id: "sunglasses", href: "/sunglasses", label: "Sunglasses" },
  { id: "sandals", href: "/sandals", label: "Dép" },
  { id: "clothing", href: "/clothing", label: "Quần Áo" },
  { id: "bags", href: "/bags", label: "Túi Xách" },
  { id: "blog", href: "/blog", label: "Blog" },
];
