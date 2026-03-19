import { useState } from "react";
import { getAssetUrl } from "../services/api";
import { useCart } from "../hooks/useCart";
import { getPriceParts } from "../utils/currency";

const tunisianCities = ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte", "Gabes", "Ariana", "Gafsa", "Monastir", "Ben Arous", "Nabeul", "Hammamet", "Mahdia", "Djerba"];

const PriceText = ({ value, className = "" }) => {
  const price = getPriceParts(value);
  const wrapperClassName = ["inline-flex items-start gap-1 whitespace-nowrap font-display text-ink", className].filter(Boolean).join(" ");

  return (
    <span className={wrapperClassName}>
      <span>{price.amount}</span>
      <span className="pt-1 text-[0.7rem] uppercase tracking-[0.14em] text-graphite">{price.currency}</span>
    </span>
  );
};

const CheckoutPage = () => {
  const { cartItems, clearCart, shipping, subtotal, total } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const inputClassName = showValidation
    ? "w-full border border-ink bg-white px-4 py-3 text-base text-ink outline-none transition invalid:border-bronze focus:border-ink focus:invalid:border-bronze"
    : "w-full border border-ink bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-ink";

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowValidation(true);

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setSubmitted(true);
    clearCart();
  };

  const submitClassName = cartItems.length === 0
    ? "inline-flex min-h-[50px] items-center justify-center rounded-full bg-ink px-8 py-4 text-sm uppercase tracking-[0.08em] text-white opacity-50"
    : "inline-flex min-h-[50px] items-center justify-center rounded-full bg-ink px-8 py-4 text-sm uppercase tracking-[0.08em] text-white transition hover:bg-stone-800";

  return (
    <section className="lux-container py-10">
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.6fr]">
        <div className="rounded-[1.5rem] border border-line bg-white p-4 md:p-6">
          {submitted ? (
            <div className="py-6">
              <div className="border-b border-line pb-4">
                <h1 className="text-xl uppercase tracking-[0.14em] text-ink md:text-[1.7rem]">Checkout</h1>
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-gold">Commande envoyee</p>
              <h2 className="mt-3 text-2xl font-medium text-ink">Merci pour votre confiance.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-graphite">Votre commande a bien ete enregistree. Nous vous contacterons tres bientot pour la confirmation finale et les details de livraison.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onInvalid={() => setShowValidation(true)}>
              <div className="border-b border-line pb-4">
                <h1 className="text-xl uppercase tracking-[0.14em] text-ink md:text-[1.7rem]">Checkout</h1>
              </div>

              <div className="mt-6 space-y-6">
                <div className="grid gap-3 md:grid-cols-[150px_1fr] md:items-start">
                  <div className="pt-2 text-base text-ink">Civilite <span className="text-red-500">*</span></div>
                  <div className="flex items-center gap-6 pt-1 text-base text-ink">
                    <label className="flex items-center gap-3"><input type="radio" name="civilite" className="h-5 w-5 border border-ink accent-ink" defaultChecked /><span>M</span></label>
                    <label className="flex items-center gap-3"><input type="radio" name="civilite" className="h-5 w-5 border border-ink accent-ink" /><span>Mme</span></label>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-[150px_1fr] md:items-start">
                  <label className="pt-2 text-base text-ink">Prenom <span className="text-red-500">*</span></label>
                  <div><input className={inputClassName} required type="text" /><p className="mt-2 text-xs leading-6 text-graphite">Seuls les lettres et le point (.), suivis d'un espace, sont autorises.</p></div>
                </div>

                <div className="grid gap-3 md:grid-cols-[150px_1fr] md:items-start">
                  <label className="pt-2 text-base text-ink">Nom <span className="text-red-500">*</span></label>
                  <div><input className={inputClassName} required type="text" /><p className="mt-2 text-xs leading-6 text-graphite">Seuls les lettres et le point (.), suivis d'un espace, sont autorises.</p></div>
                </div>

                <div className="grid gap-3 md:grid-cols-[150px_1fr] md:items-start">
                  <label className="pt-2 text-base text-ink">E-mail <span className="text-red-500">*</span></label>
                  <div><input className={inputClassName} required type="email" /></div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block"><span className="mb-2 block text-base text-ink">Telephone <span className="text-red-500">*</span></span><input className={inputClassName} required type="tel" /></label>
                  <label className="block"><span className="mb-2 block text-base text-ink">Ville <span className="text-red-500">*</span></span><select className={inputClassName} required defaultValue=""><option value="" disabled>Choisir une ville</option>{tunisianCities.map((city) => (<option key={city} value={city}>{city}</option>))}</select></label>
                </div>

                <label className="block"><span className="mb-2 block text-base text-ink">Adresse <span className="text-red-500">*</span></span><input className={inputClassName} required type="text" /></label>
                <label className="block"><span className="mb-2 block text-base text-ink">Code postal</span><input className={inputClassName} required type="text" /></label>

                <button type="submit" disabled={cartItems.length === 0} className={submitClassName}>Confirmer la commande</button>
              </div>
            </form>
          )}
        </div>

        <aside className="rounded-[1.5rem] border border-line bg-white p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg font-medium uppercase text-ink">{cartItems.length} articles</h2>
            <PriceText value={subtotal} className="text-base" />
          </div>

          <div className="mt-6">
            <button type="button" className="flex w-full items-center justify-between text-left text-sm text-ink"><span>Afficher les details</span></button>
            <div className="mt-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.slug} className="grid grid-cols-[72px_1fr] gap-4">
                  <div className="h-[72px] w-[72px] overflow-hidden border border-line bg-mist"><img src={getAssetUrl(item.image || item.gallery?.[0]?.src)} alt={item.name} className="h-full w-full object-cover object-center" /></div>
                  <div>
                    <h3 className="text-lg font-medium uppercase leading-tight text-ink">{item.name}</h3>
                    <p className="mt-1 text-xs text-ink">{`${item.strapLabelFr || "Detail"}: ${item.strap}`}</p>
                    <div className="mt-1 flex items-center gap-4 text-xs text-graphite"><span>x{item.quantity}</span><PriceText value={item.price * item.quantity} className="text-sm" /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-line pt-4 text-sm text-graphite">
            <div className="flex items-center justify-between gap-4"><span>Sous-total</span><PriceText value={subtotal} className="text-sm" /></div>
            <div className="mt-3 flex items-center justify-between gap-4"><span>Livraison</span>{shipping === 0 ? <span>{cartItems.length > 0 ? "offerte" : "-"}</span> : <PriceText value={shipping} className="text-sm" />}</div>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
            <span className="text-lg font-medium uppercase text-ink">Total TTC</span>
            <PriceText value={total} className="text-[1.7rem]" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CheckoutPage;


