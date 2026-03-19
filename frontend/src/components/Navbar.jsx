import { useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const links = [
  { to: "/products", label: "Produits" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-mist text-ink">
      <div className="lux-container grid min-h-[var(--site-header-height)] grid-cols-[2.5rem_1fr_2.5rem] items-center gap-4 py-4 md:grid-cols-[auto_1fr_auto] md:gap-8 md:py-0">
        <div className="h-10 w-10 md:hidden" aria-hidden="true" />
        <div className="col-start-2 flex items-center justify-center md:col-start-auto md:justify-start">
          <NavLink to="/" className="text-center font-display text-[1.9rem] leading-none tracking-[0.04em] text-ink md:text-left">
            <span className="block">MAISON PARFUMS</span>
          </NavLink>
        </div>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={`${link.to}-${link.label}`}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-medium text-ink transition"
                  : "text-sm font-medium text-graphite transition hover:text-ink"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="col-start-3 flex items-center justify-end gap-4 md:col-start-auto md:gap-0">
          <NavLink
            to="/basket"
            className="relative hidden h-20 items-center gap-3 px-2 text-sm font-medium text-bronze transition hover:text-ink md:inline-flex"
          >
            <FiShoppingBag />
            <span className="hidden lg:inline">Panier</span>
            {cartCount > 0 ? <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-bronze/20 bg-white px-1 text-[11px] text-bronze">{cartCount}</span> : null}
          </NavLink>
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <div className={[isMobileMenuOpen ? "block" : "hidden", "border-t border-line/60 bg-champagne px-5 py-4 md:hidden"].join(" ")}>
        <nav className="flex flex-col items-center gap-4">
          <NavLink to="/basket" onClick={() => setIsMobileMenuOpen(false)} className="relative inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink transition hover:text-bronze">
            <FiShoppingBag className="text-base" />
            <span>Panier</span>
            {cartCount > 0 ? <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[11px] text-bronze">{cartCount}</span> : null}
          </NavLink>
          {links.map((link) => (
            <NavLink
              key={`${link.to}-${link.label}`}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-xs uppercase tracking-[0.18em] text-ink transition"
                  : "text-xs uppercase tracking-[0.18em] text-graphite transition hover:text-ink"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

