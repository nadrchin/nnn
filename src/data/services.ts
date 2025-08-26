export interface Service {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  // Beauté Du Regard
  {
    id: "rehaussement-cils",
    title: "Rehaussement de cils",
    category: "Beauté Du Regard",
    duration: "45 min",
    price: "50 €",
    description: "Regard intense et yeux de biche pendant 6 à 8 semaines",
    longDescription: "Le rehaussement des cils vous permet d'obtenir un regard intense et d'afficher des yeux de biche pendant six à huit semaines. Le rehaussement des cils permet d'allonger et de recourber les cils. Excellente alternative à la permanente des cils, cette technique permet d'obtenir des résultats spectaculaires et naturels sans fragiliser vos cils. Vos cils sont plus recourbés et paraissent plus longs. Vos yeux semblent agrandis. Votre regard est sublimé.",
    benefits: [
      "Regard intense et naturel",
      "Effet longue durée (6-8 semaines)",
      "Aucune fragilisation des cils",
      "Pas d'entretien quotidien",
      "Résultat immédiat"
    ],
    process: [
      "Nettoyage approfondi des cils",
      "Protection de la paupière inférieure",
      "Application de la formule de rehaussement",
      "Fixation et mise en forme",
      "Soin hydratant final"
    ]
  },

  // Soin Du Visage
  {
    id: "microneedling",
    title: "Microneedling",
    category: "Soin Du Visage",
    duration: "1 h",
    price: "90 €",
    description: "Stimulation naturelle du collagène pour une peau rajeunie",
    longDescription: "Le microneedling est une technique innovante qui stimule la production naturelle de collagène de votre peau. À l'aide de micro-aiguilles stériles, nous créons des micro-canaux qui permettent une meilleure pénétration des principes actifs et déclenchent le processus naturel de régénération cutanée.",
    benefits: [
      "Atténuation des rides et ridules",
      "Réduction des cicatrices d'acné",
      "Uniformisation du teint",
      "Raffermissement de la peau",
      "Diminution des pores dilatés"
    ],
    process: [
      "Nettoyage et désinfection de la peau",
      "Application d'un sérum anesthésiant",
      "Traitement par microneedling adapté à votre type de peau",
      "Application d'un sérum régénérant",
      "Pose d'un masque apaisant"
    ]
  },

  // Maquillage Permanent Et Semi-permanent
  {
    id: "maquillage-levres",
    title: "Maquillage semi-permanent - Lèvres",
    category: "Maquillage Permanent Et Semi-permanent",
    duration: "1 h - 1 h 30 min",
    price: "à partir de 90 €",
    description: "Contour et couleur naturelle pour des lèvres parfaites au quotidien",
    longDescription: "Notre technique de maquillage semi-permanent des lèvres redéfinit votre contour labial et apporte une couleur naturelle et durable. Parfait pour celles qui souhaitent gagner du temps tout en ayant des lèvres parfaitement dessinées au quotidien.",
    benefits: [
      "Contour parfaitement défini",
      "Couleur naturelle et personnalisée",
      "Gain de temps quotidien",
      "Résistance à l'eau et à la transpiration",
      "Durée de 12 à 18 mois"
    ],
    process: [
      "Consultation et choix de la couleur",
      "Dessin du contour personnalisé",
      "Application de la pigmentation",
      "Validation du résultat",
      "Explication des soins post-traitement"
    ]
  },
  {
    id: "eye-liner",
    title: "Maquillage semi-permanent - Eye Liner",
    category: "Maquillage Permanent Et Semi-permanent",
    duration: "1 h 30 min",
    price: "à partir de 100 €",
    description: "Regard magnifié avec un eye-liner parfait et durable",
    longDescription: "Notre eye-liner semi-permanent vous offre un regard magnifié au quotidien sans efforts. Que vous préfériez une ligne discrète ou un trait plus marqué, nous adaptons le tracé à la forme de vos yeux pour un résultat naturel et harmonieux.",
    benefits: [
      "Regard magnifié au quotidien",
      "Résistant à l'eau et aux larmes",
      "Idéal pour les allergies au maquillage",
      "Aucun risque de transfert ou de frottement",
      "Durée de 12 à 24 mois"
    ],
    process: [
      "Étude de la forme des yeux",
      "Choix de l'épaisseur et de la couleur",
      "Dessin du tracé personnalisé",
      "Application de la pigmentation",
      "Soins post-traitement"
    ]
  },

  // Perte De Poids Et Anti-cellulite
  {
    id: "lifting-colombien",
    title: "Lifting colombien",
    category: "Perte De Poids Et Anti-cellulite",
    duration: "1 h - 6 h",
    price: "à partir de 80 €",
    description: "Technique ancestrale pour raffermir et remodeler la silhouette",
    longDescription: "Le lifting colombien est un traitement ancestral qui utilise des enveloppements d'argile et de plantes médicinales pour raffermir la peau, réduire les capitons et remodeler la silhouette. Cette technique naturelle offre des résultats visibles dès la première séance.",
    benefits: [
      "Raffermissement cutané",
      "Réduction de la cellulite",
      "Atténuation des vergetures",
      "Effet drainant et détoxifiant",
      "Sensation de légèreté"
    ],
    process: [
      "Examen de la zone à traiter",
      "Gommage pour activer la circulation",
      "Application de la mixture d'argile et plantes",
      "Enveloppement et pose de bandes",
      "Massage de modelage final"
    ]
  },
  {
    id: "lipocavitation-cuisses",
    title: "Lipocavitation des cuisses",
    category: "Perte De Poids Et Anti-cellulite",
    duration: "1 h - 6 h",
    price: "à partir de 70 €",
    description: "Technologie ultrasonique pour cibler et éliminer les cellules graisseuses",
    longDescription: "La lipocavitation est une technique non invasive qui utilise les ultrasons de basse fréquence pour cibler et éliminer les cellules graisseuses localisées. Idéale pour remodeler les zones récalcitrantes comme les cuisses, les hanches ou le ventre.",
    benefits: [
      "Réduction des amas graisseux localisés",
      "Non invasif et indolore",
      "Aucune période de récupération",
      "Résultats visibles rapidement",
      "Peau raffermie"
    ],
    process: [
      "Diagnostic et marquage des zones à traiter",
      "Application du gel conducteur",
      "Traitement par ultrasons",
      "Massage de drainage",
      "Conseils pour optimiser les résultats"
    ]
  },
  {
    id: "massage-anti-cellulite",
    title: "Massage anti-cellulite - palper-rouler",
    category: "Perte De Poids Et Anti-cellulite",
    duration: "1 h",
    price: "85 €",
    description: "Technique manuelle intensive pour combattre la cellulite",
    longDescription: "Notre massage anti-cellulite palper-rouler est une technique manuelle intensive qui déloge les capitons graisseux, active la circulation et relance le processus de drainage lymphatique. Un soin incontournable pour celles qui souhaitent retrouver une peau lisse et ferme.",
    benefits: [
      "Déstockage des graisses localisées",
      "Amélioration de la circulation sanguine",
      "Réduction de l'effet peau d'orange",
      "Action drainante et détoxifiante",
      "Sensation de légèreté immédiate"
    ],
    process: [
      "Préparation de la peau avec une huile spécifique",
      "Palper-rouler manuel sur les zones concernées",
      "Pétrissage et modelage profond",
      "Drainage lymphatique manuel",
      "Application d'un soin raffermissant"
    ]
  },

  // Massage Classique
  {
    id: "massage-californien",
    title: "Massage californien",
    category: "Massage Classique",
    duration: "1 h",
    price: "75 €",
    description: "Massage enveloppant et relaxant pour un bien-être profond",
    longDescription: "Le massage californien est un massage enveloppant et relaxant qui utilise de longs mouvements fluides pour dissoudre les tensions et apporter une détente profonde. Idéal pour évacuer le stress et retrouver une harmonie corps-esprit.",
    benefits: [
      "Détente musculaire profonde",
      "Réduction du stress et de l'anxiété",
      "Amélioration de la circulation",
      "Sensation de bien-être général",
      "Meilleure qualité de sommeil"
    ],
    process: [
      "Accueil et installation confortable",
      "Application d'huile chaude parfumée",
      "Mouvements longs et enveloppants",
      "Travail spécifique sur les zones de tension",
      "Temps de repos pour intégrer les bienfaits"
    ]
  },
  {
    id: "massage-dos-tonique",
    title: "Massage du dos tonique",
    category: "Massage Classique",
    duration: "30 min",
    price: "45 €",
    description: "Déverrouillage des tensions et revitalisation du dos",
    longDescription: "Notre massage du dos tonique cible spécifiquement les tensions accumulées dans la région dorsale. Par des manœuvres précises et tonifiantes, il déverrouille les muscles contractés et redonne vitalité à toute la zone du dos.",
    benefits: [
      "Soulagement des douleurs dorsales",
      "Amélioration de la mobilité",
      "Déverrouillage des tensions",
      "Stimulation énergétique",
      "Meilleure posture"
    ],
    process: [
      "Diagnostic des zones de tension",
      "Application d'huile de massage",
      "Pétrissage et pression des muscles dorsaux",
      "Travail spécifique sur les cervicales et lombaires",
      "Étirements doux pour terminer"
    ]
  },
  {
    id: "massage-tibetain",
    title: "Massage tibétain",
    category: "Massage Classique",
    duration: "1 h",
    price: "85 €",
    description: "Massage énergétique ancestral pour rééquilibrer les flux vitaux",
    longDescription: "Inspiré des traditions ancestrales tibétaines, ce massage énergétique vise à rééquilibrer les flux vitaux et harmoniser le corps et l'esprit. Par des pressions spécifiques et des mouvements circulaires, il libère les blocages énergétiques et restaure l'équilibre intérieur.",
    benefits: [
      "Rééquilibrage énergétique",
      "Libération des blocages émotionnels",
      "Stimulation des points d'acupression",
      "Harmonisation corps-esprit",
      "Sensation de renaissance"
    ],
    process: [
      "Échange sur vos besoins spécifiques",
      "Utilisation d'huiles essentielles spécifiques",
      "Pressions et mouvements circulaires énergétiques",
      "Travail sur les méridiens d'énergie",
      "Temps d'intégration des bienfaits"
    ]
  },
  {
    id: "massage-ayurvedique",
    title: "Massage ayurvédique",
    category: "Massage Classique",
    duration: "1 h",
    price: "80 €",
    description: "Soin traditionnel indien pour harmoniser les doshas",
    longDescription: "Le massage ayurvédique est un soin traditionnel indien qui vise à harmoniser les doshas (énergies vitales) selon les principes de la médecine ayurvédique. Adapté à votre constitution personnelle, il apporte équilibre et vitalité à tout votre être.",
    benefits: [
      "Équilibre des énergies vitales",
      "Élimination des toxines",
      "Renforcement du système immunitaire",
      "Apaisement du système nerveux",
      "Rajeunissement cellulaire"
    ],
    process: [
      "Détermination de votre constitution ayurvédique",
      "Préparation d'huiles médicinales personnalisées",
      "Mouvements spécifiques selon votre dosha",
      "Travail sur les points marma (points vitaux)",
      "Recommandations personnalisées"
    ]
  },
  {
    id: "massage-anti-age",
    title: "Massage anti-âge lifting du visage, du cou et du décolleté",
    category: "Massage Classique",
    duration: "1 h",
    price: "90 €",
    description: "Technique de lifting manuel pour raffermir et tonifier",
    longDescription: "Notre massage anti-âge est un véritable lifting manuel du visage, du cou et du décolleté. Par des manœuvres spécifiques de modelage et de drainage, il redessine l'ovale du visage, atténue les rides et redonne fermeté à la peau.",
    benefits: [
      "Redensification de la peau",
      "Atténuation des rides et ridules",
      "Redessin de l'ovale du visage",
      "Amélioration de l'éclat du teint",
      "Effet liftant immédiat"
    ],
    process: [
      "Nettoyage approfondi de la peau",
      "Application d'un sérum anti-âge",
      "Manœuvres de modelage spécifiques",
      "Drainage lymphatique du visage",
      "Pose d'un masque raffermissant"
    ]
  },
  {
    id: "massage-crane",
    title: "Massage du crâne",
    category: "Massage Classique",
    duration: "30 min",
    price: "30 €",
    description: "Détente intense pour libérer les tensions crâniennes",
    longDescription: "Le massage du crâne est une technique spécifique qui vise à libérer les tensions accumulées au niveau de la boîte crânienne. Par des pressions précises et des mouvements circulaires, il soulage les maux de tête, réduit le stress et favorise un état de détente profonde.",
    benefits: [
      "Soulagement des maux de tête et migraines",
      "Réduction du stress et de l'anxiété",
      "Amélioration de la concentration",
      "Stimulation de la pousse des cheveux",
      "Détente profonde immédiate"
    ],
    process: [
      "Installation en position assise ou allongée",
      "Application d'une huile légère spécifique",
      "Pressions et mouvements circulaires sur le cuir chevelu",
      "Travail des points d'acupression crâniens",
      "Étirements doux du cou et des épaules"
    ]
  },

  // Réflexologie Et Massage Lymphatique
  {
    id: "reflexologie-plantaire",
    title: "Réflexologie plantaire",
    category: "Réflexologie Et Massage Lymphatique",
    duration: "1 h",
    price: "70 €",
    description: "Stimulation des points réflexes pour un équilibre général",
    longDescription: "La réflexologie plantaire est une technique ancestrale qui consiste à stimuler des points réflexes précis sur les pieds, correspondant à différents organes et systèmes du corps. Cette méthode naturelle favorise l'équilibre général et l'auto-guérison de l'organisme.",
    benefits: [
      "Équilibre général de l'organisme",
      "Réduction du stress et de la fatigue",
      "Amélioration de la circulation",
      "Stimulation des fonctions organiques",
      "Détente profonde"
    ],
    process: [
      "Nettoyage et préparation des pieds",
      "Repérage des points réflexes",
      "Stimulation manuelle précise",
      "Travail adapté à vos besoins spécifiques",
      "Conseils pour entretenir les bienfaits"
    ]
  },
  {
    id: "drainage-lymphatique",
    title: "Drainage lymphatique - Méthode brésilienne",
    category: "Réflexologie Et Massage Lymphatique",
    duration: "1 h 30 min - 8 h",
    price: "à partir de 95 €",
    description: "Technique de drainage pour éliminer les toxines et réduire la rétention d'eau",
    longDescription: "Le drainage lymphatique selon la méthode brésilienne est une technique manuelle douce qui stimule la circulation de la lymphe, favorise l'élimination des toxines et réduit la rétention d'eau. Particulièrement recommandé après une chirurgie ou pour combattre la cellulite.",
    benefits: [
      "Réduction de la rétention d'eau",
      "Élimination des toxines",
      "Diminution des œdèmes",
      "Amélioration de l'aspect de la cellulite",
      "Renforcement du système immunitaire"
    ],
    process: [
      "Évaluation des zones à traiter",
      "Mouvements doux et rythmés",
      "Stimulation des ganglions lymphatiques",
-     "Travail spécifique sur les zones de stagnation",
      "Conseils pour optimiser les résultats"
    ]
  },

  // Blanchiment Dentaire
  {
    id: "blanchiment-dentaire",
    title: "Blanchiment dentaire américain",
    category: "Blanchiment Dentaire",
    duration: "1 h",
    price: "90 €",
    description: "Obtenez un sourire éclatant avec notre blanchiment dentaire professionnel",
    longDescription: "Notre blanchiment dentaire américain utilise une technologie de pointe pour vous offrir un sourire plusieurs tons plus blancs en une seule séance. Contrairement aux méthodes traditionnelles, notre procédé est sans sensibilité et respecte l'émail de vos dents.",
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
    ]
  }
];