const productAssetBase = "/assets/products";
const productImageExtension = "png";
const galleryFrameStyles = {
    "ambre-imperial":  [
                           "linear-gradient(180deg, rgba(255,244,236,0.98), rgba(230,198,165,0.92))",
                           "linear-gradient(180deg, rgba(254,239,233,0.98), rgba(207,150,137,0.92))",
                           "linear-gradient(180deg, rgba(246,234,239,0.98), rgba(122,74,96,0.92))"
                       ],
    "neroli-solaire":  [
                           "linear-gradient(180deg, rgba(255,248,230,0.98), rgba(243,204,123,0.92))",
                           "linear-gradient(180deg, rgba(255,242,216,0.98), rgba(231,165,80,0.92))",
                           "linear-gradient(180deg, rgba(255,248,238,0.98), rgba(224,194,141,0.92))"
                       ],
    "fleur-velours":  [
                          "linear-gradient(180deg, rgba(255,248,247,0.98), rgba(236,214,209,0.92))",
                          "linear-gradient(180deg, rgba(252,240,237,0.98), rgba(217,181,172,0.92))",
                          "linear-gradient(180deg, rgba(249,239,242,0.98), rgba(188,150,165,0.92))"
                      ],
    "cedre-absolu":  [
                         "linear-gradient(180deg, rgba(247,239,229,0.98), rgba(190,154,121,0.92))",
                         "linear-gradient(180deg, rgba(236,227,211,0.98), rgba(131,97,69,0.92))",
                         "linear-gradient(180deg, rgba(245,236,230,0.98), rgba(161,125,101,0.92))"
                     ],
    "rose-nocturne":  [
                          "linear-gradient(180deg, rgba(254,241,243,0.98), rgba(214,164,176,0.92))",
                          "linear-gradient(180deg, rgba(248,230,239,0.98), rgba(148,83,119,0.92))",
                          "linear-gradient(180deg, rgba(241,227,235,0.98), rgba(82,47,67,0.92))"
                      ],
    "oud-velours":  [
                        "linear-gradient(180deg, rgba(239,231,226,0.98), rgba(148,109,95,0.92))",
                        "linear-gradient(180deg, rgba(230,220,216,0.98), rgba(92,61,56,0.92))",
                        "linear-gradient(180deg, rgba(236,228,234,0.98), rgba(111,70,84,0.92))"
                    ]
};
const galleryLabels = {
    "hero":  "Flacon",
    "detail":  "Detail",
    "lifestyle":  "Ambiance"
};
const galleryCaptions = {
    "hero":  "Vue principale du flacon et de sa presence visuelle.",
    "detail":  "Focus sur les matieres, le verre et les finitions du produit.",
    "lifestyle":  "Mise en scene pensee pour montrer l\u0027univers de la creation."
};
const sourceProducts = [
    {
        "name":  "Ambre Imperial",
        "slug":  "ambre-imperial",
        "brand":  "Maison Parfums",
        "category":  "Extrait de Parfum",
        "categoryLabelFr":  "Extrait de parfum",
        "movement":  "Ambre epice",
        "movementLabelFr":  "Signature",
        "description":  "Une creation chaude et enveloppante construite autour d\u0027un ambre dense, d\u0027epices nobles et d\u0027une douceur balsamique elegante.",
        "price":  620,
        "rating":  4.9,
        "countInStock":  5,
        "imageKey":  "ambre-imperial",
        "accent":  "Amber Gold",
        "caseSize":  "100ml",
        "strap":  "Extrait de parfum",
        "strapLabelFr":  "Concentration",
        "featured":  true,
        "detailOverviewFr":  "Ambre Imperial propose une signature riche et profonde, pensee pour les amateurs de sillages charnels et de textures olfactives opulentes.",
        "detailStoryFr":  "Sa construction met en scene un ambre travaille avec precision, des epices seches et une base suave qui donne a l\u0027ensemble une allure luxueuse et memorielle.",
        "specsFr":  [
                        [
                            "Notes de tete",
                            "Safran et poivre rose"
                        ],
                        [
                            "Notes de coeur",
                            "Ambre et labdanum"
                        ],
                        [
                            "Notes de fond",
                            "Vanille seche et benjoin"
                        ],
                        [
                            "Tenue",
                            "Longue tenue"
                        ],
                        [
                            "Origine",
                            "Edition maison"
                        ],
                        [
                            "Reference",
                            "MP-401"
                        ]
                    ]
    },
    {
        "name":  "Rose Nocturne",
        "slug":  "rose-nocturne",
        "brand":  "Maison Parfums",
        "category":  "Eau de Parfum",
        "categoryLabelFr":  "Eau de parfum",
        "movement":  "Rose sombre",
        "movementLabelFr":  "Signature",
        "description":  "Une rose veloutee et intense, enrichie de baies noires et de bois sombres pour une presence sensuelle et contemporaine.",
        "price":  540,
        "rating":  4.8,
        "countInStock":  7,
        "imageKey":  "rose-nocturne",
        "accent":  "Velvet Rose",
        "caseSize":  "100ml",
        "strap":  "Eau de parfum",
        "strapLabelFr":  "Concentration",
        "featured":  true,
        "detailOverviewFr":  "Rose Nocturne interprete la rose de facon plus profonde et plus moderne, avec un coeur floral sombre et un fond boise elegant.",
        "detailStoryFr":  "L\u0027ensemble reste raffine plutot que demonstratif, ideal pour un vestiaire du soir, des cadeaux premium ou une signature sophistiquee.",
        "specsFr":  [
                        [
                            "Notes de tete",
                            "Baies roses et prune"
                        ],
                        [
                            "Notes de coeur",
                            "Rose noire et violette"
                        ],
                        [
                            "Notes de fond",
                            "Patchouli et bois ambre"
                        ],
                        [
                            "Tenue",
                            "Bonne tenue"
                        ],
                        [
                            "Origine",
                            "Collection privee"
                        ],
                        [
                            "Reference",
                            "MP-422"
                        ]
                    ]
    },
    {
        "name":  "Cedre Absolu",
        "slug":  "cedre-absolu",
        "brand":  "Maison Parfums",
        "category":  "Boise",
        "categoryLabelFr":  "Boise",
        "movement":  "Cedre sec",
        "movementLabelFr":  "Signature",
        "description":  "Une composition boisee nette et elegante, centree sur le cedre, le vetiver et des nuances resineuses discretes.",
        "price":  510,
        "rating":  4.7,
        "countInStock":  6,
        "imageKey":  "cedre-absolu",
        "accent":  "Cedar Brown",
        "caseSize":  "100ml",
        "strap":  "Eau de parfum",
        "strapLabelFr":  "Concentration",
        "featured":  false,
        "detailOverviewFr":  "Cedre Absolu s\u0027adresse aux amateurs de lignes olfactives propres, boisees et structurees.",
        "detailStoryFr":  "Le parfum joue sur une sensation de matiere seche et noble, parfaite pour une elegance quotidienne plus sobre.",
        "specsFr":  [
                        [
                            "Notes de tete",
                            "Cardamome et bergamote"
                        ],
                        [
                            "Notes de coeur",
                            "Cedre et iris"
                        ],
                        [
                            "Notes de fond",
                            "Vetiver et encens doux"
                        ],
                        [
                            "Tenue",
                            "Moyenne a longue"
                        ],
                        [
                            "Origine",
                            "Edition signature"
                        ],
                        [
                            "Reference",
                            "MP-318"
                        ]
                    ]
    },
    {
        "name":  "Fleur Velours",
        "slug":  "fleur-velours",
        "brand":  "Maison Parfums",
        "category":  "Floral Creme",
        "categoryLabelFr":  "Floral creme",
        "movement":  "Floral soyeux",
        "movementLabelFr":  "Signature",
        "description":  "Un floral cremeux et tendre, construit autour d\u0027un bouquet blanc, de muscs propres et d\u0027une douceur poudree.",
        "price":  480,
        "rating":  4.6,
        "countInStock":  9,
        "imageKey":  "fleur-velours",
        "accent":  "Soft Petal",
        "caseSize":  "100ml",
        "strap":  "Eau de parfum",
        "strapLabelFr":  "Concentration",
        "featured":  false,
        "detailOverviewFr":  "Fleur Velours est la creation la plus lumineuse et la plus douce de la selection.",
        "detailStoryFr":  "Son charme repose sur une texture moelleuse, une elegance propre et une finition confortable tres facile a porter.",
        "specsFr":  [
                        [
                            "Notes de tete",
                            "Mandarine et poire"
                        ],
                        [
                            "Notes de coeur",
                            "Jasmin et fleur d\u0027oranger"
                        ],
                        [
                            "Notes de fond",
                            "Muscs blancs et santal"
                        ],
                        [
                            "Tenue",
                            "Moyenne"
                        ],
                        [
                            "Origine",
                            "Edition atelier"
                        ],
                        [
                            "Reference",
                            "MP-309"
                        ]
                    ]
    },
    {
        "name":  "Neroli Solaire",
        "slug":  "neroli-solaire",
        "brand":  "Maison Parfums",
        "category":  "Hesperide",
        "categoryLabelFr":  "Hesperide",
        "movement":  "Neroli lumineux",
        "movementLabelFr":  "Signature",
        "description":  "Un sillage lumineux de neroli, agrumes et fleur blanche avec une sensation propre et solaire tres contemporaine.",
        "price":  500,
        "rating":  4.9,
        "countInStock":  4,
        "imageKey":  "neroli-solaire",
        "accent":  "Solar Citrus",
        "caseSize":  "100ml",
        "strap":  "Eau de parfum",
        "strapLabelFr":  "Concentration",
        "featured":  true,
        "detailOverviewFr":  "Neroli Solaire apporte de la lumiere et de la fraicheur tout en restant haut de gamme et tres bien dessine.",
        "detailStoryFr":  "Il convient aux personnes qui cherchent un parfum net, chic et facile a porter sans tomber dans une simple fraicheur fonctionnelle.",
        "specsFr":  [
                        [
                            "Notes de tete",
                            "Bergamote et petit grain"
                        ],
                        [
                            "Notes de coeur",
                            "Neroli et fleur d\u0027oranger"
                        ],
                        [
                            "Notes de fond",
                            "Musc clair et bois doux"
                        ],
                        [
                            "Tenue",
                            "Bonne tenue"
                        ],
                        [
                            "Origine",
                            "Edition solaire"
                        ],
                        [
                            "Reference",
                            "MP-410"
                        ]
                    ]
    },
    {
        "name":  "Oud Velours",
        "slug":  "oud-velours",
        "brand":  "Maison Parfums",
        "category":  "Oriental",
        "categoryLabelFr":  "Oriental",
        "movement":  "Oud profond",
        "movementLabelFr":  "Signature",
        "description":  "Une creation orientale profonde melant oud souple, cuir, rose seche et touches ambrees dans une texture luxueuse.",
        "price":  760,
        "rating":  4.8,
        "countInStock":  3,
        "imageKey":  "oud-velours",
        "accent":  "Deep Oud",
        "caseSize":  "100ml",
        "strap":  "Extrait de parfum",
        "strapLabelFr":  "Concentration",
        "featured":  false,
        "detailOverviewFr":  "Oud Velours est la creation la plus intense de la maison, avec un fond profond et une allure ceremonielle.",
        "detailStoryFr":  "Son equilibre repose sur un oud adouci et un travail de texture qui donne au parfum une profondeur plus elegante que brute.",
        "specsFr":  [
                        [
                            "Notes de tete",
                            "Rose seche et safran"
                        ],
                        [
                            "Notes de coeur",
                            "Oud et cuir doux"
                        ],
                        [
                            "Notes de fond",
                            "Ambre sombre et vanille seche"
                        ],
                        [
                            "Tenue",
                            "Tres longue tenue"
                        ],
                        [
                            "Origine",
                            "Collection reservee"
                        ],
                        [
                            "Reference",
                            "MP-406"
                        ]
                    ]
    }
];
const buildVariantImagePath = (slug, variant) => `${productAssetBase}/${slug}-${variant}.${productImageExtension}`;
const buildGallery = (slug) => {
  const frames = galleryFrameStyles[slug] || galleryFrameStyles["ambre-imperial"];
  return [
    { id: "hero", label: galleryLabels.hero, src: buildVariantImagePath(slug, 1), background: frames[0], imageClassName: "h-[340px] max-w-[260px] md:h-[440px] md:max-w-[320px]", caption: galleryCaptions.hero },
    { id: "detail", label: galleryLabels.detail, src: buildVariantImagePath(slug, 2), background: frames[1], imageClassName: "h-[300px] max-w-[210px] scale-110 md:h-[360px] md:max-w-[250px]", caption: galleryCaptions.detail },
    { id: "lifestyle", label: galleryLabels.lifestyle, src: buildVariantImagePath(slug, 3), background: frames[2], imageClassName: "h-[280px] max-w-[200px] rotate-[-10deg] md:h-[340px] md:max-w-[240px]", caption: galleryCaptions.lifestyle },
  ];
};
const products = sourceProducts.map((product) => {
  const imageSlug = product.imageKey || product.slug;
  const specs = (product.specsFr || []).map(([label, value]) => ({ label, value }));
  return { ...product, image: buildVariantImagePath(imageSlug, 1), cardBackground: (galleryFrameStyles[imageSlug] || galleryFrameStyles["ambre-imperial"])[0], overview: product.detailOverviewFr, story: product.detailStoryFr, specs, gallery: buildGallery(imageSlug) };
});
export default products;
