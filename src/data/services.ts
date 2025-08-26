export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  benefits: string[];
  process: string[];
  image: string;
  popular?: boolean;
  packages?: PackageOption[];
}

export interface PackageOption {
  sessions: number;
  duration: string;
  price: string;
  savings?: string;
}

export const allServices: ServiceDetail[] = [
  {
    id: "rehaussement-cils",
    title: "Rehaussement de cils",
    category: "Beauté du Regard",
    duration: "45 min",
    price: "50 €",
    description: "Le rehaussement des cils vous permet d'obtenir un regard intense et d'afficher des yeux de biche pendant six à huit semaines. Excellente alternative à la permanente des cils, cette technique permet d'obtenir des résultats spectaculaires et naturels sans fragiliser vos cils.",
    benefits: [
      "Regard intense pendant 6-8 semaines",
      "Effet naturel sans fragilisation des cils",
      "Cils paraissent plus longs et recourbés",
      "Yeux agrandis et regard sublimé",
      "Aucune maintenance quotidienne nécessaire"
    ],
    process: [
      "Nettoyage approfondi des cils",
      "Application du produit de rehaussement professionnel",
      "Temps de pose précis pour un résultat optimal",
      "Fixation et soin hydratant final",
      "Conseils d'entretien personnalisés"
    ],
    image: "https://images.unsplash.com/photo-1631214528238-9c88bf4de0c4?w=400&q=100",
    popular: true
  },
  {
    id: "microneedling",
    title: "Microneedling",
    category: "Soin du Visage",
    duration: "1h",
    price: "90 €",
    description: "Le microneedling est une technique révolutionnaire pour rajeunir la peau et traiter les imperfections. À l'aide de micro-aiguilles, nous stimulons la production naturelle de collagène pour une peau plus ferme et lumineuse.",
    benefits: [
      "Réduction des rides et ridules",
      "Amélioration de la texture de la peau",
      "Diminution des cicatrices d'acné",
      "Uniformisation du teint",
      "Stimulation naturelle du collagène"
    ],
    process: [
      "Nettoyage et désinfection de la peau",
      "Application d'un sérum nutritif",
      "Traitement au dermaroller ou dermapen",
      "Soin apaisant et régénérant",
      "Protection SPF et conseils post-soin"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=100"
  },
  {
    id: "maquillage-permanent-levres",
    title: "Maquillage permanent - Lèvres",
    category: "Maquillage Permanent",
    duration: "2h",
    price: "120 €",
    description: "Redessinez et colorez vos lèvres naturellement avec notre technique de maquillage permanent. Obtenez un contour parfait et une couleur harmonieuse qui dure dans le temps.",
    benefits: [
      "Contour des lèvres parfaitement défini",
      "Couleur naturelle et personnalisée",
      "Gain de temps quotidien",
      "Résultat waterproof et longue durée",
      "Correction des asymétries"
    ],
    process: [
      "Consultation et choix de la couleur",
      "Dessin du contour personnalisé",
      "Pigmentation précise des lèvres",
      "Soin apaisant immédiat",
      "Explication des soins post-traitement"
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=100",
    popular: true
  },
  {
    id: "massage-californien",
    title: "Massage californien",
    category: "Massage Classique",
    duration: "1h",
    price: "75 €",
    description: "Détendez-vous complètement avec notre massage californien aux huiles essentielles. Ce massage enveloppant et fluide libère les tensions et apporte une profonde relaxation.",
    benefits: [
      "Détente musculaire profonde",
      "Réduction du stress et de l'anxiété",
      "Amélioration de la circulation sanguine",
      "Sensation de légèreté et bien-être",
      "Équilibre énergétique global"
    ],
    process: [
      "Accueil et analyse de vos besoins",
      "Préparation avec huiles essentielles bio",
      "Massage enveloppant et fluide",
      "Travail sur les points de tension",
      "Temps de relaxation et retour au calme"
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=100",
    popular: true,
    packages: [
      { sessions: 1, duration: "1h", price: "75 €" },
      { sessions: 5, duration: "5h", price: "350 €", savings: "25 €" }
    ]
  },
  {
    id: "drainage-lymphatique",
    title: "Drainage lymphatique",
    category: "Réflexologie & Massage Lymphatique",
    duration: "1h",
    price: "70 €",
    description: "Stimulez votre circulation lymphatique pour éliminer les toxines et réduire la rétention d'eau. Cette technique douce et efficace revitalise l'organisme entier.",
    benefits: [
      "Élimination des toxines",
      "Réduction de la rétention d'eau",
      "Renforcement du système immunitaire",
      "Diminution de la cellulite",
      "Sensation de légèreté"
    ],
    process: [
      "Diagnostic de la circulation",
      "Mouvements doux et précis",
      "Stimulation des ganglions lymphatiques",
      "Travail sur l'ensemble du corps",
      "Conseils pour optimiser les résultats"
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=100"
  },
  {
    id: "lipocavitation-cuisses",
    title: "Lipocavitation des cuisses",
    category: "Perte de Poids & Anti-cellulite",
    duration: "1h",
    price: "70 €",
    description: "Traitement anti-cellulite par ultrasons pour sculpturer et affiner vos cuisses. Technologie non invasive pour des résultats visibles rapidement.",
    benefits: [
      "Réduction de la cellulite",
      "Affinement des contours",
      "Peau lissée et tonifiée",
      "Résultats durables",
      "Aucune douleur ni convalescence"
    ],
    process: [
      "Analyse de la cellulite",
      "Application du gel conducteur",
      "Traitement par ultrasons",
      "Massage de drainage",
      "Conseils nutritionnels associés"
    ],
    image: "https://images.unsplash.com/photo-1587179790059-5f5d937fb87d?w=400&q=100",
    packages: [
      { sessions: 1, duration: "1h", price: "70 €" },
      { sessions: 6, duration: "6h", price: "390 €", savings: "30 €" }
    ]
  },
  {
    id: "blanchiment-dentaire",
    title: "Blanchiment dentaire",
    category: "Blanchiment Dentaire",
    duration: "1h",
    price: "90 €",
    description: "Obtenez un sourire éclatant avec notre blanchiment dentaire professionnel. Résultats immédiats et sans sensibilité grâce à notre technologie avancée.",
    benefits: [
      "Sourire plusieurs tons plus blancs",
      "Résultats immédiatement visibles",
      "Technologie sans sensibilité",
      "Effet longue durée",
      "Renforcement de l'émail"
    ],
    process: [
      "Diagnostic dentaire personnalisé",
      "Protection des gencives",
      "Application du gel blanchissant",
      "Activation par lumière LED",
      "Soin reminéralisant final"
    ],
    image: "https://images.unsplash.com/photo-1664529845836-433c172142ca?w=400&q=100",
    popular: true
  }
];

export const categories = [
  "Toutes les catégories",
  "Beauté du Regard",
  "Soin du Visage",
  "Maquillage Permanent",
  "Massage Classique",
  "Réflexologie & Massage Lymphatique",
  "Perte de Poids & Anti-cellulite",
  "Blanchiment Dentaire"
];