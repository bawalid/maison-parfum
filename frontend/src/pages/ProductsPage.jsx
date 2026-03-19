import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import useProducts from "./useProducts";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = ["Toutes", ...new Set(products.map((product) => product.category))];
  const categoryLabels = products.reduce((accumulator, product) => {
    accumulator[product.category] = product.categoryLabelFr || product.category;
    return accumulator;
  }, {});

  const filteredProducts =
    selectedCategory === "Toutes"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="lux-container py-16">
      <SectionHeading eyebrow="Collection" />

      <div className="mt-8 flex flex-wrap gap-2.5">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const buttonClassName = isSelected
            ? "rounded-full rounded-full border border-ink bg-ink px-4 py-2.5 text-xs uppercase tracking-[0.18em] text-white transition"
            : "rounded-full rounded-full border border-line bg-white px-4 py-2.5 text-xs uppercase tracking-[0.18em] text-graphite transition hover:border-ink hover:text-ink";

          return (
            <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={buttonClassName}>
              {category === "Toutes" ? category : categoryLabels[category] || category}
            </button>
          );
        })}
      </div>

      {loading ? <p className="mt-8 text-sm text-graphite">Chargement de la collection...</p> : null}
      {error ? <p className="mt-8 text-sm text-red-500">{error}</p> : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;


