import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="lux-container flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Cette page est introuvable.</h1>
      <p className="mt-3 max-w-xl text-sm leading-7 text-graphite md:text-base">
        La page demandee est introuvable. Revenez a la boutique pour poursuivre votre visite.
      </p>
      <Link to="/" className="mt-6 lux-button-primary">
        Retour a l'accueil
      </Link>
    </section>
  );
};

export default NotFoundPage;
