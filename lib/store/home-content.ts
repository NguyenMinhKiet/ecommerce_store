import { BLOG_POSTS, getBlogPostHref, type BlogPost } from "./blog-content";

export type HomeCategoryTile = {
  id: string;
  label: string;
  href: string;
  image: string;
  size: "large" | "small";
};

export type HomeBlogPost = BlogPost & { href: string };

export const BRAND_LOGOS = [
  "RALPH LAUREN",
  "BURBERRY",
  "TIMBERLAND",
  "GUCCI",
  "NIKE",
  "ADIDAS",
  "PRADA",
  "DIOR",
] as const;

export const HOME_CATEGORY_TILES: HomeCategoryTile[] = [
  {
    id: "sneakers",
    label: "Sneaker",
    href: "/sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    size: "large",
  },
  {
    id: "clothing",
    label: "Clothes",
    href: "/clothing",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80",
    size: "large",
  },
  {
    id: "sunglasses",
    label: "Glasses",
    href: "/sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&q=80",
    size: "small",
  },
  {
    id: "sandals",
    label: "Sandals",
    href: "/sandals",
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=700&q=80",
    size: "small",
  },
  {
    id: "bags",
    label: "Bags",
    href: "/bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80",
    size: "small",
  },
];

export const HOME_BLOG_POSTS: HomeBlogPost[] = BLOG_POSTS.slice(0, 3).map(
  (post) => ({
    ...post,
    href: getBlogPostHref(post.id),
  }),
);
