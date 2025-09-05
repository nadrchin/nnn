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
  restrictions?: string[];
  popular?: boolean;
}

export const services: Service[] = [
  // Beauté du regard
  {
    id: "rehaussement-cils",
    title: "Rehaussement de cils",
    category: "Beauté Du Regard",
    duration: "45 min",
    price: "50 €",
    description: "Regard intense et yeux de biche pendant 6 à 8 semaines",
    longDescription: `Le rehaussement des cils vous permet d'obtenir un regard intense et d'afficher des yeux de biche pendant six à huit semaines.

Le rehaussement des cils permet d'allonger et de recourber les cils. Excellente alternative à la permanente des cils, cette technique permet d'obtenir des résultats spectaculaires et naturels sans fragiliser vos cils. Vos cils sont plus recourbés et paraissent plus longs.

Vos yeux semblent agrandis. Votre regard est sublimé.`,
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

  // Soin du visage
  {
    id: "microneedling",
    title: "Microneedling",
    category: "Soin Du Visage",
    duration: "1 h",
    price: "90 €",
    description: "Stimulation naturelle du collagène pour une peau rajeunie",
    longDescription: `La technique du micro-needling est réalisée à l'aide d'un appareil doté d'aiguilles microscopiques qui injectent de l'acide hyaluronique au cœur du derme pour agir sur la fermeté et l'éclat des tissus cutanés.

L'acide hyaluronique est une protéine naturellement présente dans la peau, dont elle assure le soutien et l'élasticité. Sa quantité diminuant avec l'âge, la peau perd peu à peu de sa densité et de son rebondi. Grâce à cette injection par micro-aiguilles qui stimulent les fibroblastes, votre peau est visiblement repulpée et lissée. Elle bénéficie en prime d'une hydratation en profondeur grâce à la propriété de l'acide hyaluronique de retenir jusqu'à vingt fois son poids en eau.

Vos ridules sont atténuées et vos traits retrouvent leur fermeté grâce à un effet tenseur léger et parfaitement naturel.`,
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

  // Maquillage permanent et semi-permanent
  {
    id: "maquillage-levres",
    title: "Maquillage semi-permanent - Lèvres",
    category: "Maquillage Permanent Et Semi-permanent",
    duration: "1 h - 1 h 30 min",
    price: "à partir de 90 €",
    description: "Contour et couleur naturelle pour des lèvres parfaites au quotidien",
    longDescription: `Vous rêvez d'une bouche sensuelle et pulpeuse ? Optez pour le maquillage permanent pour le contour ou le remplissage de vos lèvres.

La séance commence par un échange qui permet à l'équipe professionnelle de comprendre vos attentes et vos goûts et d'identifier le maquillage le plus adapté à votre morphologie et à votre carnation.

Après un contour préalablement tracé au crayon, les pigments sont alors introduits dans le derme à l'aide d'un dermographe et d'une fine aiguille stérile. Le remplissage s'obtient en partant du contour de la lèvre vers l'intérieur, la couleur étant implantée en dégradé pour un effet naturel.

Votre bouche est redéfinie et sensuelle : vous vous sentez belle tout au long de la journée !`,
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
    ],
    restrictions: [
      "Évitez les UV dans les 8 jours suivant le soin",
      "Évitez le sauna et le hammam pendant la cicatrisation",
      "Évitez les bains de mer et la piscine",
      "Ne grattez ou frottez pas la zone concernée"
    ]
  },
  {
    id: "eye-liner",
    title: "Maquillage semi-permanent - Eye Liner",
    category: "Maquillage Permanent Et Semi-permanent",
    duration: "1 h 30 min",
    price: "à partir de 100 €",
    description: "Regard magnifié avec un eye-liner parfait et durable",
    longDescription: `Ouvrez votre regard et offrez-vous un regard de biche grâce au maquillage permanent.

La séance débute par l'étude de votre morphologie et de la forme de votre œil. Un dessin au crayon est alors réalisé sur votre paupière supérieure afin de valider avec vous l'intensité et la forme du trait d'eye-liner que vous souhaitez avoir.
Les pigments sont alors introduits dans le derme à l'aide d'un dermographe et d'une fine aiguille stérile.

Votre regard s'ouvre. Quelque soit le moment de la journée, vous êtes resplendissante !`,
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
    ],
    restrictions: [
      "Évitez les UV dans les 8 jours suivant le soin",
      "Évitez le sauna et le hammam pendant la cicatrisation",
      "Évitez les bains de mer et la piscine",
      "Ne grattez ou frottez pas la zone concernée"
    ]
  },

  // Perte de poids et anti-cellulite
  {
    id: "lifting-colombien",
    title: "Lifting colombien",
    category: "Perte De Poids Et Anti-cellulite",
    duration: "1 h - 6 h",
    price: "à partir de 80 €",
    description: "Technique ancestrale pour raffermir et remodeler la silhouette",
    longDescription: `Des courbes, oui, mais avec fermeté ! Alors optez pour ce soin de "Lifting Fessier" !

Basé sur la thérapie drainante de vacuum, ou aspiration, ce soin est effectué à l'aide d'une machine stimulant la circulation sanguine.

Ce soin est idéal pour galber la zone du fessier tout en apportant tonicité et fermeté à votre peau. Ainsi :

Vos fesses sont tonifiées et rehaussées,
Un drainage lymphatique efficace est effectué,
Votre corps est remodelé.
Votre silhouette est transformée !`,
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
    longDescription: `La lipocavitation est une technique de soin qui permet de se débarrasser de la cellulite de manière non invasive et indolore.

Agissant grâce à l'émission d'ultrasons à travers la peau, la lipocavitation fait fondre les amas graisseux de manière progressive : les cellules adipeuses et l'eau infiltrée sont destockées des tissus avant d'être naturellement éliminées par l'organisme.

Les effets sont visibles après deux ou trois séances en moyenne, cette méthode étant considérée comme particulièrement efficace sous forme de cure de six à huit séances.

Vous pouvez enfin say adieu à la peau d'orange et retrouver un corps lisse et ferme !`,
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
    ],
    restrictions: [
      "Grossesse ou allaitement",
      "Port d'implants métalliques",
      "Port de prothèses",
      "Maladies cardio-vasculaires",
      "Diabète",
      "Prise de médicaments photosensibilisants",
      "Problèmes de coagulation",
      "Problèmes rénaux",
      "Épilepsie",
      "Phlébite",
      "Hypertension",
      "Infection de la peau",
      "Mineurs"
    ]
  },
  {
    id: "massage-anti-cellulite",
    title: "Massage anti-cellulite - palper-rouler",
    category: "Perte De Poids Et Anti-cellulite",
    duration: "1 h",
    price: "85 €",
    description: "Technique manuelle intensive pour combattre la cellulite",
    longDescription: `Le palper-rouler manuel est un massage du corps amincissant réalisé avec une huile. Grâce aux pressions, aux pincements et aux malaxages, le corps s’affine, des bras au ventre en passant par la taille, les hanches et les fesses.

Ce soin offre plusieurs bienfaits :

Affine l’ensemble de la silhouette,
Diminue l’aspect peau d'orange,
Tonifie la peau,
Hydrate la peau,
Favorise la fonte des graisses et relance la circulation veineuse, lymphatique et énergétique.

Votre peau est lissée et raffermie, votre silhouette affinée et remodelée et l'effet peau d'orange gommé.`,
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

  // Massage classique
  {
    id: "massage-californien",
    title: "Massage californien",
    category: "Massage Classique",
    duration: "1 h",
    price: "75 €",
    description: "Massage enveloppant et relaxant pour un bien-être profond",
    longDescription: `Le massage californien combine les bienfaits des huiles essentielles aux longs mouvements fluides et harmonieux pour dénouer les points de tension et relaxer vos muscles.

Les bienfaits de ce massage sont nombreux :

Dénouement des tensions,
Éveil de la sensibilité,
Harmonie du corps,
Équilibre nerveux,
Anti-stress.

Empli d'un durable sentiment de quiétude et de sérénité, c'est léger comme une plume que vous quittez l'institut.`,
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
    ],
    popular: true
  },
  {
    id: "massage-dos-tonique",
    title: "Massage du dos tonique",
    category: "Massage Classique",
    duration: "30 min",
    price: "45 €",
    description: "Déverrouillage des tensions et revitalisation du dos",
    longDescription: `Vous en avez littéralement "plein le dos" et vous avez besoin d'une pause ?

Ce massage relaxant du dos combine les vertus apaisantes des huiles essentielles à des mouvements circulaires et des pressions douces pour :

Éliminer vos tensions,
Détendre vos muscles,
Réduire le stress et les crispations,
Créer un véritable bien-être.

Une parenthèse bienfaisante qui vous permet de faire le plein d'énergie !`,
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
    ],
    popular: true
  },
  {
    id: "massage-tibetain",
    title: "Massage tibétain",
    category: "Massage Classique",
    duration: "1 h",
    price: "85 €",
    description: "Massage énergétique ancestral pour rééquilibrer les flux vitaux",
    longDescription: `Offrez-vous un moment de détente et de bien-être absolu grâce à ce massage relaxant.

Réalisé avec des gestes doux et précis, ce massage vient :

Décontracter vos muscles,
Soulager vos tensions,
Apaiser votre esprit pour une relaxation intense et totale.

De la pointe des pieds jusqu'au sommet de la tête, tout votre corps se délasse tandis que l'huile de massage laisse un sillage délicatement parfumé et un fini satiné sur votre peau.

Quel plaisir de quitter le salon parfaitement détendu, prêt à savourer chaque instant de la journée !`,
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
    longDescription: `Inspiré de techniques indiennes ancestrales, ce massage utilise une huile ayurvédique pour rééquilibrer tout à la fois l'esprit, le corps et la peau.

Alternant des manœuvres douces et profondes, il permet de :

Dénouer vos nœuds et tensions,
Décontracter vos muscles,
Soulager stress, fatigue et douleur.

Il contribue par ailleurs à stimuler la circulation sanguine et à apaiser le système nerveux.

Régénérant et revitalisant, ce massage vous procure un durable sentiment d'harmonie et de bien-être.`,
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
    longDescription: `Offrez-vous un moment de relaxation grâce à ce massage du visage.

Réalisé avec délicatesse, ce massage consiste à agir sur les méridiens en se concentrant sur le visage, les tempes et le crâne.
Les mouvements doux et fluides de ce massage visent à :

Détendre vos traits et à estomper les signes de fatigue,
Relancer la circulation sanguine et lymphatique,
Raviver l'éclat de votre peau,
Redessiner l'ovale du visage et repulper la peau,
Soulager les maux de tête, les tensions dans la mâchoire, l'asthme, la fatigue oculaire, le rhume et les sinusites.

Libéré de toutes tensions et crispations, votre visage rayonne.`,
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
    longDescription: `En plus de procurer un délassement profond à l'ensemble du corpo, le massage de la tête exerce une action bénéfique sur l'équilibre et la beauté des cheveux. Ce massage permet en effet de stimuler la micro-circulation sanguine, vecteur d'éléments nutritifs indispensables à la pousse et à la vitalité de vos cheveux.

Un véritable soin capillaire doublé d'une délicieuse parenthèse de relaxation et de bien-être !`,
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
    ],
    popular: true
  },

  // Réflexologie et massage lymphatique
  {
    id: "reflexologie-plantaire",
    title: "Réflexologie plantaire",
    category: "Réflexologie Et Massage Lymphatique",
    duration: "1 h",
    price: "70 €",
    description: "Stimulation des points réflexes pour un équilibre général",
    longDescription: `La réflexologie est une méthode de soin développée par les civilisations les plus anciennes d'Asie. Elle est exercée par des pressions marquées du bout des doigts sur des points précis, appelés points réflexes, qui correspondent chacun à un organe, une glande ou une partie du corpo spécifique.

Les mouvements toniques et précis de votre praticienne localisent les zones de tensions afin de :

Libérer vos blocages sur la totalité de votre corpo,
Procurer une profonde relaxation bercée des arômes d'huiles naturelles,
Harmoniser les fonctions vitales,
Éliminer les toxines,
Évacuer le stress,
Apporter un regain d'énergie.
Plusieurs millénaires de civilisation l'ont testée, vous en profitez !`,
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
    longDescription: `Régénérez votre corpo avec ce massage drainant !

Les effets drainants de ce massage permettent de :

Déplacer le liquide tissulaire d'un endroit à un autre pour ainsi stimuler la circulation lymphatique,
Nettoyer et désintoxiquer la musculature en dynamisant la circulation sanguine et en régularisant la motricité des intestins,
Favoriser la régénération des cellules de l'organisme.

Grâce à ce massage, votre système immunitaire est renforcé : vous vous sentez mieux dans votre corpo !`,
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
      "Travail spécifique sur les zones de stagnation",
      "Conseils pour optimiser les résultats"
    ]
  },

  // Blanchiment dentaire
  {
    id: "blanchiment-dentaire",
    title: "Blanchiment dentaire américain",
    category: "Blanchiment Dentaire",
    duration: "1 h",
    price: "90 €",
    description: "Obtenez un sourire éclatant avec notre blanchiment dentaire professionnel",
    longDescription: `Retrouvez un sourire lumineux et éclatant en un temps record grâce à ces séances de blanchiment dentaire.

L'institut vous conseille et vous accompagne au cours de votre soin afin de vous offrir un résultat efficace et naturel, sans aucun danger pour vos dents.`,
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
    restrictions: [
      "Grossesse ou allaitement",
      "Problèmes dentaires",
      "Intervention de chirurgie buccale récente",
      "Mineurs"
    ]
  }
];