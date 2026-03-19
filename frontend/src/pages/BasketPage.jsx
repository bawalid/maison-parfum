import { FiChevronLeft, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { getAssetUrl } from "../services/api";
import { getPriceParts } from "../utils/currency";

const PriceText = ({ value, className = "", currencyClassName = "" }) => {
  const price = getPriceParts(value);
  const wrapperClassName = ["inline-flex items-start gap-1 whitespace-nowrap font-display text-ink", className]
    .filter(Boolean)
    .join(" ");
  const currencyTextClassName = ["pt-1 text-[0.7rem] uppercase tracking-[0.14em] text-graphite", currencyClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={wrapperClassName}>
      <span>{price.amount}</span>
      <span className={currencyTextClassName}>{price.currency}</span>
    </span>
  );
};

const BasketPage = () => {
  const { cartItems, removeFromCart, shipping, subtotal, total, updateQuantity } = useCart();

  return (
    <section className="lux-container py-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-[2rem] font-medium uppercase tracking-[0.1em] text-ink md:text-[2.4rem]">Panier</h1>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[1.5rem] border border-line bg-white p-5 md:p-6">
          {cartItems.length === 0 ? (
            <div className="py-6 text-center">
              <p className="text-sm text-graphite">Votre panier est vide. Commencez par explorer la collection.</p>
              <Link to="/products" className="mt-4 inline-flex lux-button-primary">
                Voir les produits
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-line">
              {cartItems.map((item) => (
                <article key={item.slug} className="grid gap-4 py-5 md:grid-cols-[96px_1fr_64px_110px_28px] md:items-center">
                  <div className="flex justify-center md:justify-start">
                    <img src={getAssetUrl(item.image || item.gallery?.[0]?.src)} alt={item.name} className="h-24 w-16 object-contain" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] text-graphite">{item.slug.toUpperCase()}</p>
                    <h2 className="mt-1 text-lg font-medium uppercase leading-tight text-ink md:text-[1.55rem]">{item.name}</h2>
                    <p className="mt-2 text-[11px] text-ink">{`${item.strapLabelFr || "Detail"}: ${item.strap}`}</p>
                    <div className="mt-2">
                      <PriceText value={item.price} className="text-base" />
                    </div>
                  </div>

                  <div className="flex justify-start md:justify-center">
                    <select className="border-0 bg-transparent px-0 py-0 text-base text-ink outline-none" value={item.quantity} onChange={(event) => updateQuantity(item.slug, event.target.value)}>
                      {Array.from({ length: item.countInStock }, (_, index) => index + 1).map((qty) => (
                        <option key={qty} value={qty}>{qty}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-start md:justify-center">
                    <PriceText value={item.price * item.quantity} className="text-base" />
                  </div>

                  <div className="flex justify-start md:justify-end">
                    <button type="button" className="text-xl text-ink transition hover:opacity-70" onClick={() => removeFromCart(item.slug)} aria-label={`Retirer ${item.name}`}>
                      <FiX />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm text-ink transition hover:opacity-70">
            <FiChevronLeft />
            Continuer mes achats
          </Link>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[1.5rem] border border-line bg-white p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-medium uppercase text-ink">{cartItems.length} articles</h2>
              <PriceText value={subtotal} className="text-base" />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-graphite">
              <span>Livraison</span>
              {shipping === 0 ? <span>{cartItems.length > 0 ? "offerte" : "-"}</span> : <PriceText value={shipping} className="text-sm" />}
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
              <span className="text-lg font-medium uppercase text-ink">Total</span>
              <PriceText value={total} className="text-[1.7rem]" />
            </div>

            <Link to="/checkout" className={`mt-6 inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-ink px-6 py-4 text-sm uppercase tracking-[0.06em] text-white transition hover:bg-stone-800 ${cartItems.length === 0 ? "pointer-events-none opacity-50" : ""}`}>
              Finaliser ma commande
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BasketPage;


