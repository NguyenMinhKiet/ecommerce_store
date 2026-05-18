import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/store/home-content";

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-intro">
        <p className="home-hero-eyebrow">DOMINATION</p>
        <h1 className="home-hero-title">
          Inspired From <span>MINH</span>
        </h1>
      </div>

      <div className="home-hero-banner">
        <Image
          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1600&q=80"
          alt="Thiết kế cho ánh nắng"
          fill
          priority
          className="home-hero-banner-img"
          sizes="100vw"
        />
        <div className="home-hero-banner-overlay" />
        <p className="home-hero-banner-text">DESIGNED FOR SUNLIGHT</p>
      </div>

      <div className="home-brand-bar">
        {BRAND_LOGOS.map((brand) => (
          <span key={brand} className="home-brand-logo">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
