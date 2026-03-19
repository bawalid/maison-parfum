import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiShield, FiStar, FiTruck } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { heroContent, highlights, stats } from "../data/siteContent";
import { getAssetUrl } from "../services/api";
import useProducts from "./useProducts";

const homeHeroPath = "/assets/hero/home-hero.webp";
const highlightIcons = [FiStar, FiShield, FiTruck];

const HomePage = () => {
  const { featuredProducts, products } = useProducts();
  const heroProduct = featuredProducts[0];
  const [useHeroFallback, setUseHeroFallback] = useState(false);
  const carouselRef = useRef(null);
  const carouselProducts = products.length > 0 ? products : featuredProducts;
  const heroImageSrc = useHeroFallback ? getAssetUrl(heroProduct?.image) : getAssetUrl(homeHeroPath);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) {
      return;
    }

    const firstSlide = carouselRef.current.querySelector("[data-carousel-slide='true']");
    const slideWidth = firstSlide instanceof HTMLElement ? firstSlide.offsetWidth : carouselRef.current.clientWidth * 0.82;

    carouselRef.current.scrollBy({
      left: direction * (slideWidth + 20),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section className="relative min-h-[calc(100svh-var(--site-header-height))] overflow-hidden bg-ink text-white">
        {heroProduct || !useHeroFallback ? (
          <img
            src={heroImageSrc}
            alt={heroProduct?.name || heroContent.eyebrow}
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={() => setUseHeroFallback(true)}
          />
        ) : null}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.28)_24%,rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.72)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.88),rgba(0,0,0,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.94))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(223,193,150,0.18),transparent_24%)]" />

        <div className="lux-container relative flex min-h-[calc(100svh-var(--site-header-height))] flex-col items-center justify-end pb-10 pt-16 text-center md:pb-12">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.34em] text-gold">{heroContent.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/82 md:text-base">{heroContent.text}</p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/products"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/15 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/5"
            >
              {heroContent.primaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="lux-container py-16">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Collection recente" />
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Collection precedente" onClick={() => scrollCarousel(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink"><FiChevronLeft /></button>
            <button type="button" aria-label="Collection suivante" onClick={() => scrollCarousel(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink"><FiChevronRight /></button>
          </div>
        </div>

        <div ref={carouselRef} className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {carouselProducts.map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`} data-carousel-slide="true" className="group basis-[82vw] shrink-0 snap-start sm:basis-[calc(50%-0.625rem)] lg:basis-[calc((100%-2.5rem)/3)]">
              <article className="flex h-full flex-col items-center text-center">
                <div className="flex w-full items-center justify-center px-2 py-2">
                  <div className="flex aspect-square w-[min(78vw,19rem)] items-center justify-center overflow-hidden rounded-full border border-line/70 bg-white/75 shadow-soft sm:w-[18rem] lg:w-[16rem]">
                    <img src={getAssetUrl(product.image || product.gallery?.[0]?.src)} alt={product.name} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-[1.55rem] uppercase leading-tight tracking-[0.04em] text-ink transition group-hover:text-bronze">{product.name}</h3>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="lux-container pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = highlightIcons[index] || FiStar;

            return (
              <article key={item.title} className="lux-card">
                <div className="flex h-12 w-12 items-center justify-center text-lg text-gold"><Icon /></div>
                <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="lux-container pb-16">
        <div className="grid gap-4 rounded-[1.5rem] bg-ink px-6 py-8 text-white md:grid-cols-3 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-6">
              <p className="font-display text-4xl text-champagne">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;


