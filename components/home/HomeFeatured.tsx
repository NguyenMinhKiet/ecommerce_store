"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/store/ProductGrid";
import type { ProductCategory } from "@/lib/store/catalog";
import {
  BAGS_PRODUCTS,
  CLOTHING_PRODUCTS,
  SANDALS_PRODUCTS,
  SNEAKER_PRODUCTS,
  SUNGLASSES_PRODUCTS,
} from "@/lib/store/products";
import type { Product } from "@/lib/store/types";

type FeaturedTab = {
  id: ProductCategory;
  label: string;
  products: Product[];
};

const FEATURED_TABS: FeaturedTab[] = [
  { id: "sneakers", label: "SNEAKER", products: SNEAKER_PRODUCTS },
  { id: "sunglasses", label: "SUNGLASS", products: SUNGLASSES_PRODUCTS },
  { id: "sandals", label: "DÉP", products: SANDALS_PRODUCTS },
  { id: "clothing", label: "QUẦN ÁO", products: CLOTHING_PRODUCTS },
  { id: "bags", label: "TÚI XÁCH", products: BAGS_PRODUCTS },
];

export function HomeFeatured() {
  const [activeTab, setActiveTab] = useState<ProductCategory>("sneakers");
  const currentTab =
    FEATURED_TABS.find((tab) => tab.id === activeTab) ?? FEATURED_TABS[0];

  return (
    <section className="featured home-featured">
      <h2 className="section-title">FEATURED</h2>

      <div className="tab-menu home-tab-menu">
        {FEATURED_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === activeTab ? "active" : undefined}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ProductGrid
        key={currentTab.id}
        products={currentTab.products}
        pageSize={8}
        showRating
        showSaleBadge
      />
    </section>
  );
}
