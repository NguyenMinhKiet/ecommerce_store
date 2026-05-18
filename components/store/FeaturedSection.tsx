import type { Product } from "@/lib/store/types";
import { ProductGrid } from "./ProductGrid";

type FeaturedSectionProps = {
  title: string;
  products: Product[];
  showTabs?: boolean;
};

export function FeaturedSection({
  title,
  products,
  showTabs = false,
}: FeaturedSectionProps) {
  return (
    <section className="featured">
      <h2 className="section-title">{title}</h2>
      {showTabs ? (
        <div className="tab-menu">
          <button type="button" className="active">
            GIÀY SNEAKER
          </button>
          <button type="button">SUNGLASSES</button>
          <button type="button">DÉP</button>
        </div>
      ) : null}
      <ProductGrid products={products} />
    </section>
  );
}
