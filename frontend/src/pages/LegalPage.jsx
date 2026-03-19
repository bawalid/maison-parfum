const legalSections = [
    {
        "title":  "Editeur du site",
        "text":  "Maison Parfums est une boutique specialisee dans la vente de parfums premium et de creations olfactives. Le site est exploite depuis Tunis, Tunisie, pour la presentation des collections, les demandes de conciergerie et la gestion des commandes."
    },
    {
        "title":  "Coordonnees",
        "text":  "Adresse: 7 Rue du Lac, Les Berges du Lac, Tunis, Tunisie. Telephone: +216 71 255 440. Email: concierge@maisonparfums.com."
    },
    {
        "title":  "Produits et disponibilite",
        "text":  "Les references, descriptions, prix et visuels sont presentes a titre indicatif. Les disponibilites peuvent evoluer selon les ventes, les lancements et les confirmations finales effectuees par notre equipe."
    },
    {
        "title":  "Commandes et verification",
        "text":  "Toute commande passee sur le site reste soumise a validation manuelle par notre concierge. Nous pouvons contacter le client pour confirmer les informations de livraison, la disponibilite de la reference et les modalites de paiement."
    },
    {
        "title":  "Propriete intellectuelle",
        "text":  "L\u0027ensemble des contenus du site, incluant les textes, photographies, compositions graphiques et signes distinctifs, est protege. Toute reproduction, adaptation ou diffusion sans autorisation ecrite prealable est interdite."
    },
    {
        "title":  "Protection des donnees",
        "text":  "Les informations transmises via les formulaires sont utilisees uniquement pour repondre aux demandes, traiter les commandes et assurer le suivi client. Vous pouvez nous contacter pour toute demande d\u0027acces, de correction ou de suppression de vos donnees."
    }
];
const LegalPage = () => (<section className="lux-container py-16"><div className="max-w-4xl"><p className="text-[11px] uppercase tracking-[0.3em] text-gold">Mentions legales</p><h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Informations legales et conditions generales d'information.</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-graphite md:text-base">Cette page regroupe les informations essentielles relatives a l'exploitation du site Maison Parfums, a la gestion des demandes clients et aux obligations legales applicables a nos contenus et services.</p></div><div className="mt-10 grid gap-5">{legalSections.map((section) => (<article key={section.title} className="lux-card"><h2 className="font-display text-2xl text-ink">{section.title}</h2><p className="mt-3 text-sm leading-7 text-graphite md:text-base">{section.text}</p></article>))}</div></section>);
export default LegalPage;