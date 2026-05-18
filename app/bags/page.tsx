import { FeaturedSection } from "@/components/store/FeaturedSection";
import { StoreShell } from "@/components/store/StoreShell";
import { BAGS_PRODUCTS } from "@/lib/store/products";

export const metadata = {
  title: "Túi Xách — Stusport",
};

export default function BagsPage() {
  return (
    <StoreShell activeNav="bags" membershipTitle="Minhshop membership">
      <FeaturedSection title="TÚI XÁCH" products={BAGS_PRODUCTS} />
    </StoreShell>
  );
}
