// Banque de questions pour les 3 modes de Quiz des Joutes Sétoises

const quizLevels = {
  courtoisie: {
    id: "courtoisie",
    name: "Sétois de Courtoisie",
    tagline: "Les bases pour briller au bord du Cadre Royal sans passer pour un touriste",
    badge: "🌱 Niveau Débutant • 10 Questions",
    color: "seteblue",
    questions: [
      {
        question: "Dans quelle ville ont lieu les joutes nautiques les plus célèbres sur le Cadre Royal ?",
        options: ["Marseille", "Sète (L'Île Singulière)", "Agde", "Toulon"],
        answer: 1,
        feedback: "Évidemment, Sète ! Surnommée la Venise du Languedoc ou l'Île Singulière."
      },
      {
        question: "Quelle est la couleur obligatoire de la tenue des jouteurs ?",
        options: ["Bleue ou Rouge selon le bateau", "Intégralement blanche", "Noire et blanche", "Rayée marinière"],
        answer: 1,
        feedback: "Blanc immaculé de la tête aux pieds ! Symbole historique de pureté et d'élégance sportive."
      },
      {
        question: "Comment s'appelle l'échafaudage surélevé à l'arrière de la barque où monte le jouteur ?",
        options: ["La Tintaine", "La Caravelle", "Le Bastinguage", "La dunette"],
        answer: 0,
        feedback: "La Tintaine ! Elle culmine à près de 3 mètres au-dessus de l'eau."
      },
      {
        question: "Comment s'appelle le lourd bouclier de bois porté sur la poitrine ?",
        options: ["Le Pavois", "L'Écu", "Le Plastron", "La Targe"],
        answer: 0,
        feedback: "Le Pavois ! En bois du Nord rouge, il pèse lourd pour amortir le choc."
      },
      {
        question: "Quelle est la grande fête de Sète où se déroule le mythique tournoi des Lourds le lundi ?",
        options: ["La Saint-Pierre", "La Fête de la Saint-Louis (fin août)", "Les Floralies", "La Fête du Canal"],
        answer: 1,
        feedback: "La Saint-Louis ! Créée le 29 juillet 1666 pour l'inauguration du port, c'est l'événement roi de l'année."
      },
      {
        question: "Quelle est la spécialité culinaire incontournable des jouteurs et des Sétois, tourte garnie de poulpe épicé ?",
        options: ["La Tielle sétoise", "La Quiche lorraine", "La Pissaladière", "La Fougasse"],
        answer: 0,
        feedback: "La Tielle ! Apportée par les pêcheurs italiens de Gaète au XIXe siècle."
      },
      {
        question: "Que se passe-t-il lors d'un « Bouquet » ?",
        options: [
          "Le maire jette des fleurs dans le canal",
          "Les deux jouteurs tombent à l'eau simultanément et sont éliminés",
          "Les rameurs s'arrêtent pour saluer",
          "La lance se plante dans le mât"
        ],
        answer: 1,
        feedback: "Le bouquet : les deux ajustaïres tombent à l'eau ensemble. Tous deux éliminés !"
      },
      {
        question: "Comment se nomment les deux barques qui s'affrontent ?",
        options: ["La Verte et la Jaune", "La Rouge et la Bleue", "La Blanche et la Noire", "La Dorée et l'Argentée"],
        answer: 1,
        feedback: "La Rouge (La Poncha) et la Bleue (Lo Quartier Naut) !"
      },
      {
        question: "Qu'est-ce qui propulse les barques de joutes pendant le tournoi ?",
        options: ["Un moteur thermique", "8 à 10 rameurs synchronisés", "Le courant du canal", "Des voiles latines"],
        answer: 1,
        feedback: "8 à 10 rameurs aguerris par barque, à la seule force des bras !"
      },
      {
        question: "Quel instrument de musique traditionnel accompagne le tambour à la proue des barques ?",
        options: ["L'accordéon", "Le hautbois languedocien", "La trompette", "La clarinette"],
        answer: 1,
        feedback: "Le hautbois languedocien ! Son timbre aigu et puissant galvanise les jouteurs."
      }
    ]
  },

  temeraire: {
    id: "temeraire",
    name: "Sétois Téméraire",
    tagline: "Pour les passionnés qui connaissent les règlements officiels FFJSN, l'arbitrage et la tactique",
    badge: "⚔️ Niveau Intermédiaire • 25 Questions",
    color: "amber",
    questions: [
      {
        question: "Quelle est la longueur réglementaire officielle de la lance de joutes ?",
        options: ["2,00 m", "2,50 m", "2,80 m", "3,20 m"],
        answer: 2,
        feedback: "Exactement 2,80 mètres de bois massif !"
      },
      {
        question: "Quel est le poids approximatif du contrepoids (lest) installé à la proue de la barque ?",
        options: ["100 kg", "300 kg", "Environ 600 kg", "1 200 kg"],
        answer: 2,
        feedback: "Environ 600 kg pour équilibrer la bigue et les jouteurs à l'arrière lors du choc !"
      },
      {
        question: "Par quel côté les deux barques doivent-elles obligatoirement se croiser ?",
        options: ["Par tribord (leur droite)", "Par bâbord (leur gauche)", "Au choix des patrons", "Face à face pile au milieu"],
        answer: 0,
        feedback: "Par tribord (à droite), ce qui permet un duel face-à-face pour les droitiers."
      },
      {
        question: "En catégorie reine (Lourds/Seniors), combien d'hommes faut-il faire tomber en éliminatoires pour accéder aux Revanches ?",
        options: ["1 homme", "2 hommes", "3 hommes (ou 2 si 50 inscrits ou moins)", "4 hommes"],
        answer: 2,
        feedback: "3 hommes ! C'est la règle d'or pour avoir son billet pour les revanches de l'après-midi."
      },
      {
        question: "Qu'est-ce que l'« Épure » (ou crampon) ?",
        options: [
          "Le fer dentelé à 3 pointes fixé au bout de la lance",
          "Le nom du patron de barque",
          "La poignée du pavois",
          "La planche de sécurité de la tintaine"
        ],
        answer: 0,
        feedback: "L'épure est la pièce d'acier trempé à 3 pointes qui vient mordre dans le bois du pavois."
      },
      {
        question: "Que risque un jouteur qui commet la faute dite de « Lance courte » ?",
        options: ["Un simple avertissement", "Une disqualification immédiate", "Une pénalité de 5 points", "Un bain forcé"],
        answer: 1,
        feedback: "Disqualification directe ! Ne pas caler la base sous l'aisselle modifie le bras de levier et devient dangereux."
      },
      {
        question: "Qu'est-ce que la « Barelle » sur le pavois ?",
        options: [
          "La sangle en cuir",
          "Le liteau vertical de séparation au milieu du pavois",
          "Le clou de fixation",
          "La pointe supérieure"
        ],
        answer: 1,
        feedback: "La barelle est la latte centrale verticale divisant le pavois."
      },
      {
        question: "Quels sont les repères de couleur peints sur la lance pour surveiller la main du jouteur ?",
        options: ["Les gardes (1ère et 2ème garde)", "Les cibles", "Les bagues de friction", "Les marques de victoire"],
        answer: 0,
        feedback: "Les gardes ! Si la main glisse au-delà de la 2ème garde (zone blanche masquée), c'est la disqualification."
      },
      {
        question: "Quelle est la limite de poids pour concourir dans la catégorie des « Moyens » ?",
        options: ["Jusqu'à 75 kg", "Jusqu'à 85 kg", "Jusqu'à 90 kg inclus", "Jusqu'à 95 kg"],
        answer: 2,
        feedback: "90 kg maximum ! Au-dessus de 90 kg, le jouteur bascule chez les Lourds."
      },
      {
        question: "Comment s'appelle l'air musical traditionnel joué lors du croisement des barques ?",
        options: ["La Pastorale", "La Charge", "Le Chant des Rameurs", "L'Encierro"],
        answer: 1,
        feedback: "« La Charge » ! Dès qu'elle retentit, le public retient son souffle."
      },
      {
        question: "Combien de points rapporte une victoire au 1er Prix d'un tournoi officiel du Championnat de Ligue ?",
        options: ["10 points", "15 points", "20 points", "25 points"],
        answer: 2,
        feedback: "20 points pour le grand vainqueur de la journée !"
      },
      {
        question: "Que signifie le terme « Filer » pour un jouteur ?",
        options: [
          "Partir en courant",
          "Laisser glisser la lance dans sa main sous la violence du choc",
          "Esquiver le coup en se baissant",
          "Ramer plus vite"
        ],
        answer: 1,
        feedback: "Filer signifie que la pression adverse force la main à reculer sur la perche de bois."
      },
      {
        question: "Quelle est la faute appelée « Passer en avant » ?",
        options: [
          "Sauter dans le bateau adverse",
          "Relâcher volontairement sa poussée pour attirer l'adversaire dans le vide",
          "Taper avant le croisement",
          "Avancer son pied droit"
        ],
        answer: 1,
        feedback: "Geste antisportif puni d'exclusion : feinter en enlevant la résistance pour faire piquer l'autre dans le vide."
      },
      {
        question: "Combien de jouteurs d'attente prennent place sur la bigue pour équilibrer la barque ?",
        options: ["1 seul", "2 ou 3", "4 à 5 jouteurs", "10 jouteurs"],
        answer: 2,
        feedback: "4 à 5 jouteurs répartis selon leur poids sur les marches pour stabiliser l'assiette."
      },
      {
        question: "Quelles sont les dimensions officielles du pavois en bois de joute languedocienne ?",
        options: ["50 cm × 30 cm", "70 cm de haut × 40 cm de large", "90 cm × 50 cm", "1 m × 60 cm"],
        answer: 1,
        feedback: "70 cm de hauteur sur 40 cm de largeur, en bois du Nord rouge."
      },
      {
        question: "Qu'est-ce que le « Cintre » de la lance ?",
        options: [
          "Le crochet pour la suspendre au port",
          "La flexion élastique prononcée de la lance lors de l'impact",
          "La pointe arrière",
          "L'anneau d'attache"
        ],
        answer: 1,
        feedback: "C'est la courbure extrême que prend le bois sous la charge titanesque de l'impact !"
      },
      {
        question: "Où doit impérativement se situer la pointe de la lance au croisement des barques ?",
        options: [
          "Pointée vers le bas dans l'eau",
          "Levée à l'horizontale en direction du pavois adverse",
          "Vers le ciel",
          "Posée sur le genou"
        ],
        answer: 1,
        feedback: "À l'horizontale dès le croisement des pavillons de proue."
      },
      {
        question: "Si les deux finalistes du Grand Prix de la Saint-Louis tombent tous les deux à l'eau lors du choc final, qui gagne ?",
        options: [
          "Le match est annulé et reporté",
          "Celui qui touche l'eau en dernier (le plus tard possible)",
          "Celui qui est le plus âgé",
          "Tirage au sort"
        ],
        answer: 1,
        feedback: "Règle absolue : lors de la finale, un vainqueur doit être couronné. C'est celui qui touche l'eau en dernier !"
      },
      {
        question: "Sur quoi les enfants de 3 à 8 ans apprennent-ils à jouter à terre avant d'aller sur l'eau ?",
        options: ["Sur des planches à roulettes", "Sur des Chariots sur roulettes tractés", "Sur des tapis de mousse", "Sur des chevaux à bascule"],
        answer: 1,
        feedback: "Les célèbres chariots sur roulettes des écoles de joutes sétoises !"
      },
      {
        question: "Quelle partie du corps le jouteur n'a-t-il JAMAIS le droit de poser sur le plancher ?",
        options: ["La plante des pieds", "La main ou le genou", "Le talon", "Les orteils"],
        answer: 1,
        feedback: "Poser la main ou le genou au sol pour ne pas tomber entraîne la perte immédiate de la passe."
      },
      {
        question: "Quelle est la célèbre société sétoise d'apprentissage fondée en 1921 ?",
        options: ["L'Amicale des Rameurs", "L'École de Joutes de la Marine de Sète (EJMS)", "Le Club Nautique Royal", "Les Chevaliers du Môle"],
        answer: 1,
        feedback: "L'EJMS (École de Joutes de la Marine de Sète), véritable vivier de champions !"
      },
      {
        question: "Qu'est-ce qu'une « Double Frappe » ?",
        options: [
          "Deux jouteurs qui frappent en même temps",
          "Retirer la lance puis redonner un deuxième à-coup après l'impact",
          "Taper avec le pavois et la lance",
          "Une passe rejouée deux fois"
        ],
        answer: 1,
        feedback: "Une infraction disqualifiante : décoller l'épure pour remettre un deuxième coup de bélier."
      },
      {
        question: "Quel rôle tient le « Timonier Patron » ?",
        options: [
          "Il paie les repas de l'équipage",
          "Il tient la barre franche, dirige la barque et ordonne la cadence aux rameurs",
          "Il arbitre depuis la berge",
          "Il soigne les jouteurs blessés"
        ],
        answer: 1,
        feedback: "C'est le chef d'orchestre marin de l'embarcation !"
      },
      {
        question: "En quelle année s'est tenu le tout premier tournoi de joutes marquant la naissance de Sète ?",
        options: ["1515", "1666 (le 29 juillet)", "1789", "1804"],
        answer: 1,
        feedback: "Le 29 juillet 1666, lors de la pose de la première pierre du môle Saint-Louis !"
      },
      {
        question: "Que se passe-t-il lors d'une « Double Casse » nette de lances sans faute ?",
        options: [
          "Les deux sont éliminés",
          "La passe est déclarée nulle et rejouée avec de nouvelles lances",
          "Le public vote",
          "On compte les éclats de bois"
        ],
        answer: 1,
        feedback: "Passe nulle ! On change de lances et les deux guerriers remontent immédiatement sur la tintaine."
      }
    ]
  },

  pur_souche: {
    id: "pur_souche",
    name: "Sétois Pur Souche",
    tagline: "Le défi suprême : langue d'oc, argot sétois, secrets de comptoir, histoire légendaire et traditions de l'Île Singulière",
    badge: "👑 Niveau Légende • 50 Questions",
    color: "red",
    questions: [
      {
        question: "En dialecte sétois, comment appelle-t-on le jouteur qui monte au combat ?",
        options: ["L'Ajustaire (ou Ajustaïre)", "Lo Pechador", "L'Arpenteur", "Lou Capelan"],
        answer: 0,
        feedback: "L'Ajustaïre, du verbe ajustar (joindre le combat, s'affronter) !"
      },
      {
        question: "Quel quartier populaire et fier de Sète est historiquement associé à la Barque Rouge ?",
        options: ["Le Mont Saint-Clair", "La Pointe-Courte (La Poncha)", "Les Salins", "Le Barrou"],
        answer: 1,
        feedback: "La Pointe-Courte ! Quartier des pêcheurs de l'étang, berceau d'une identité farouche."
      },
      {
        question: "Et quel quartier emblématique défend la Barque Bleue (Lo Quartier Naut) ?",
        options: ["Le Quartier Haut (peuplé historiquement de pêcheurs d'origine italienne)", "L'Île de Thau", "La Plage du Lazaret", "Villeroy"],
        answer: 0,
        feedback: "Le Quartier Haut ! Perché sur le flanc sud du Mont Saint-Clair face à la mer."
      },
      {
        question: "Où sont immortalisés pour l'éternité les noms des vainqueurs du Grand Prix de la Saint-Louis ?",
        options: [
          "Gravés sur le Pavois d'Or exposé dans la salle des mariages de la Mairie de Sète",
          "Sur une stèle au sommet du Mont Saint-Clair",
          "Au fond du canal sur une plaque de marbre",
          "Sur le phare du Môle"
        ],
        answer: 0,
        feedback: "Sur le mythique Pavois d'Or de l'Hôtel de Ville ! Chaque vainqueur y gagne l'immortalité sétoise."
      },
      {
        question: "Que signifie l'interjection sétoise incontournable « Macarel ! » ?",
        options: ["Un plat de poissons", "Une exclamation d'étonnement ou de colère (équivalent de bon sang / mince alors !)", "Un cri de victoire des rameurs", "Le nom d'un nœud marin"],
        answer: 1,
        feedback: "Macarel ! Cri du cœur du Sud pour marquer la surprise ou l'admiration."
      },
      {
        question: "Que veut dire « Empéguer » à Sète ?",
        options: [
          "Prendre un carton ou se faire attraper par la patrouille (ou boire un coup de trop)",
          "Peindre un bateau en blanc",
          "Pêcher des daurades",
          "Réparer une lance brisée"
        ],
        answer: 0,
        feedback: "S'empéguer ou être empégué : se faire choper ou avoir trop forcé sur le pastis !"
      },
      {
        question: "Quel illustre poète et chanteur sétois a chanté « Supplique pour être enterré à la plage de Sète » ?",
        options: ["Georges Brassens", "Paul Valéry", "Jean Vilar", "Léo Ferré"],
        answer: 0,
        feedback: "Le grand Georges Brassens ! Enfant chéri de la ville, enterré au cimetière Le Py."
      },
      {
        question: "Et quel académicien et poète a immortalisé « Le Cimetière marin » qui surplombe la Méditerranée à Sète ?",
        options: ["Paul Valéry", "Arthur Rimbaud", "Marcel Pagnol", "Charles Baudelaire"],
        answer: 0,
        feedback: "Paul Valéry, qui y repose face à la mer qui 'marche sur les toits' !"
      },
      {
        question: "Qu'est-ce qu'un « Chapaïre » dans le parler sétois des joutes ?",
        options: [
          "Un jouteur réputé pour frapper lourd et fort (un gros cogneur)",
          "Le monsieur qui vend les chichis sur le quai",
          "Le petit chien du pêcheur",
          "Un rameur qui perd le rythme"
        ],
        answer: 0,
        feedback: "Un Chapaïre : un briseur de lances, un frappeur redouté qui ne fait pas dans la dentelle !"
      },
      {
        question: "Que signifie le mot « Mourre » en occitan et sur le pavois ?",
        options: ["Le museau ou la figure (la partie supérieure arrondie du pavois sous le menton)", "La queue du poisson", "La rame de secours", "La vague"],
        answer: 0,
        feedback: "Mourre = le museau / la tronche. C'est le haut du pavois."
      },
      {
        question: "Quel plat convivial à base de moules cuites sur une plaque brûlante au feu de bois de cagettes est roi à Sète ?",
        options: ["La Brasucade de moules", "Les moules marinières simples", "Le couscous de la mer", "La paella"],
        answer: 0,
        feedback: "La Brasucade ! Avec la sauce secrète à l'huile d'olive, herbes et pastis."
      },
      {
        question: "Comment appelle-t-on le pont mobile qui s'ouvre pour laisser passer les barques de joutes dans le Cadre Royal ?",
        options: ["Le Pont Tivoli", "Le Pont de Pierre", "Le Pont d'Avignon", "Le Golden Gate sétois"],
        answer: 0,
        feedback: "Le Pont Tivoli (et le pont Maréchal Foch) !"
      },
      {
        question: "Comment surnomme-t-on la ville de Sète depuis Paul Valéry ?",
        options: ["L'Île Singulière", "La Cité Phocéenne", "La Perle de l'Esturgeon", "Le Rocher Noir"],
        answer: 0,
        feedback: "L'Île Singulière, en raison de son relief isolé entre mer et étang."
      },
      {
        question: "Qu'est-ce que la « Macaronade » sétoise ?",
        options: [
          "Un plat de pâtes aux macaronis mijoté avec des paupiettes de bœuf (brageoles) et sauce tomate riche",
          "Un dessert aux amandes",
          "Une salade de coquillages",
          "Un jeu de cartes de bistrot"
        ],
        answer: 0,
        feedback: "La Macaronade ! Le plat dominical familial et le repas sacré des fêtes de joutes."
      },
      {
        question: "Quel terme sétois désigne le fait d'être perché en hauteur, comme sur la tintaine ?",
        options: ["Quillé", "Branché", "Planté", "Épinglé"],
        answer: 0,
        feedback: "Être quillé là-haut ! 'Vé, il est quillé sur le plancher !'"
      },
      {
        question: "Que crie la foule sétoise sur les quais quand une passe magnifique fait voler des éclats de bois ?",
        options: ["Aïoli !", "Santé !", "Vlan !", "Hourra !"],
        answer: 0,
        feedback: "Aïoli ! Le grand cri de ralliement et de fête en tribune."
      },
      {
        question: "Quelle célèbre famille sétoise compte plusieurs générations de vainqueurs légendaires de la Saint-Louis ?",
        options: ["La dynastie Azaïs / Molinier / Castillan / Lubrano", "Les Dupont", "Les De Caunes", "Les Martin"],
        answer: 0,
        feedback: "Des familles de légendes : les Molinier, Castillan, Lubrano, Azaïs, D'Elia..."
      },
      {
        question: "Combien de fois le légendaire Barthélémy-Louis dit 'Le Mouton' a-t-il marqué l'histoire des joutes ?",
        options: ["Il a régné au XIXe siècle comme une force de la nature indéboulonnable", "Il a refusé de jouter", "Il a coulé son propre bateau", "Il était musicien"],
        answer: 0,
        feedback: "Une figure mythique qui a forgé le folklore et le respect des chevaliers de l'eau !"
      },
      {
        question: "Comment s'appelle l'étang majestueux qui borde Sète et où sont élevées les fameuses huîtres de Bouzigues ?",
        options: ["L'Étang de Thau", "L'Étang de Berre", "L'Étang de Vaccarès", "L'Étang de Leucate"],
        answer: 0,
        feedback: "L'Étang de Thau, véritable mer intérieure nourricière."
      },
      {
        question: "Que fait le jouteur qui « Cale » au moment du choc ?",
        options: [
          "Il bloque net la poussée adverse et arrête les deux barques sur place",
          "Il prend peur et saute",
          "Il cale sa jambe dans le vide",
          "Il demande un temps mort"
        ],
        answer: 0,
        feedback: "Caler : prouesse physique où la force d'inertie stoppe net les deux bateaux lancés !"
      },
      {
        question: "Quel peintre sétois mondialement connu a créé le mouvement de la Figuration Libre et a peint des pavois ?",
        options: ["Hervé Di Rosa (et Robert Combas)", "Claude Monet", "Paul Cézanne", "Henri Matisse"],
        answer: 0,
        feedback: "Hervé Di Rosa et Robert Combas, figures de proue artistiques de Sète !"
      },
      {
        question: "Que désigne un « Fada » à Sète ?",
        options: ["Un peu fou, touché par les fées, un original téméraire", "Un poisson maigre", "Une barque à moteur", "Un coup de vent"],
        answer: 0,
        feedback: "Un fada ! Celui qui ose défier le géant des Lourds sur la tintaine."
      },
      {
        question: "Quelle société de joutes porte les couleurs de la Jeune Lance Sétoise ?",
        options: ["La JLS (Jeune Lance Sétoise)", "Le Club des Pins", "Les Rameurs Réunis", "L'Olympe Thau"],
        answer: 0,
        feedback: "La JLS, société historique avec la JLSM, l'EJMS et la SNJA !"
      },
      {
        question: "À quelle date précise Louis XIV a-t-il ordonné la création du port de Cette (ancienne graphie de Sète) ?",
        options: ["1666", "1715", "1600", "1580"],
        answer: 0,
        feedback: "1666, sous l'impulsion de Colbert et les travaux de Pierre-Paul Riquet pour déboucher le Canal du Midi !"
      },
      {
        question: "Jusqu'en quelle année le nom de la ville s'écrivait-il officiellement « Cette » avec un C ?",
        options: ["1928", "1850", "1980", "1789"],
        answer: 0,
        feedback: "C'est en 1928 que le Conseil d'État a officialisé l'orthographe 'Sète'."
      },
      {
        question: "Qu'est-ce que le « Môle Saint-Louis » ?",
        options: [
          "La jetée historique de 650 mètres protégeant l'entrée du port",
          "Un gâteau sétois",
          "La tribune présidentielle",
          "Un poisson de roche"
        ],
        answer: 0,
        feedback: "La digue séculaire terminée par son phare, berceau des premières passes de 1666."
      },
      {
        question: "Qu'est-ce qu'une « Peñá » lors des défilés de joutes ?",
        options: [
          "Une fanfare de cuivres et percussions qui joue des morceaux festifs et paso dobles",
          "Une boisson anisée",
          "Une casquette blanche",
          "Une récompense en argent"
        ],
        answer: 0,
        feedback: "La fanfare vivante qui donne le frisson et le rythme du défilé dans toute la ville !"
      },
      {
        question: "Que signifie l'expression « Vé ! » en début de phrase à Sète ?",
        options: ["Regarde ! Vois !", "Va-t'en !", "Vite !", "Viens !"],
        answer: 0,
        feedback: "Vé ! (de l'occitan veire, voir). 'Vé l'ajustaïre comme il est solide !'"
      },
      {
        question: "Comment appelle-t-on la tribune officielle dressée au-dessus de l'eau pour les arbitres et officiels ?",
        options: ["La Tribune d'Honneur (ou Tribune officielle)", "Le Trône marin", "La Cabane du pont", "La Vigie"],
        answer: 0,
        feedback: "La Tribune d'honneur installée sur le quai du Cadre Royal."
      },
      {
        question: "Quel poisson emblématique pêché au 'chalut' ou au 'thonier' fait la fierté de la criée de Sète ?",
        options: ["Le Thon rouge et la Daurade royale", "Le Saumon", "La Morue d'Islande", "La Truite"],
        answer: 0,
        feedback: "Le Thon rouge de Méditerranée et la daurade de l'étang de Thau !"
      },
      {
        question: "Dans le tournoi de la Saint-Louis, quel jour se dispute le Grand Tournoi des Lourds (le sommet de l'année) ?",
        options: ["Le lundi après-midi de la Saint-Louis", "Le samedi matin", "Le dimanche soir", "Le mercredi des cendres"],
        answer: 0,
        feedback: "Le saint lundi de la Saint-Louis ! Tout Sète s'arrête de travailler pour vivre le tournoi."
      },
      {
        question: "Que fait le jouteur qui met « le pied sur la planche de devant » de la tintaine ?",
        options: ["Il perd la passe immédiatement", "Il gagne un bonus", "On lui donne une nouvelle lance", "Le barreur s'arrête"],
        answer: 0,
        feedback: "Passe perdue ! Franchir la bordure avant est formellement interdit."
      },
      {
        question: "Quel oiseau marin est l'emblème familier volant au-dessus des joutes sur le canal ?",
        options: ["Le gabian (le goéland leucophée)", "Le pigeon voyageur", "Le pélican", "L'albatros"],
        answer: 0,
        feedback: "Le gabian ! Indissociable du ciel et des quais de Sète."
      },
      {
        question: "Que signifie « Bonne mère ! » ou « Fan de chichourle ! » ?",
        options: ["Des jurons d'affection et d'étonnement marseillo-sétois", "Une prière obligatoire", "Une recette de confiture", "Une faute de rame"],
        answer: 0,
        feedback: "Des expressions colorées qui fusent dans les tribunes à chaque coup magistral !"
      },
      {
        question: "Quel met sucré sétois est composé d'une pâte à beignets en spirale parfumée à la fleur d'oranger ?",
        options: ["La Zézette de Sète", "Le canelé", "Le macaron parisien", "Le kouign-amann"],
        answer: 0,
        feedback: "La Zézette de Sète créée par Gaston Bentata dans les années 70 !"
      },
      {
        question: "Quel rôle tient le « tambourinaïre » avec son tambornet ?",
        options: [
          "Frapper le rythme régulier et accélérer lors de la sonnerie de la Charge",
          "Donner des ordres au jouteur adverse",
          "Pêcher entre deux passes",
          "Vérifier la météo"
        ],
        answer: 0,
        feedback: "Il donne la pulsation cardiaque de l'équipage en symbiose avec le hautbois !"
      },
      {
        question: "Que craint le plus un jouteur au moment où la lance touche le pavois ?",
        options: [
          "Que l'épure ripe hors du bois vers le dehors ou blesse l'opposant",
          "Que son chapeau s'envole",
          "Que l'eau soit trop chaude",
          "Que le soleil brille"
        ],
        answer: 0,
        feedback: "Le dérapage de la pointe (ripage) qui peut déséquilibrer ou causer une faute."
      },
      {
        question: "Combien d'années de joutes environ séparent les premiers combats de 1666 d'aujourd'hui ?",
        options: ["Plus de 360 ans d'histoire ininterrompue", "50 ans", "100 ans", "200 ans"],
        answer: 0,
        feedback: "Plus de 360 ans ! Une tradition vivante et unique au monde."
      },
      {
        question: "Qu'est-ce qu'une « Passe Nulle » déclarée par les jurés ?",
        options: [
          "Une passe où aucun des deux jouteurs n'est tombé et aucune faute n'a été commise",
          "Une passe où les rameurs sont tombés à l'eau",
          "Une passe sans public",
          "Une passe annulée pour cause de vent"
        ],
        answer: 0,
        feedback: "Passe nulle : choc parfait, les deux restent debout. On repart pour un tour !"
      },
      {
        question: "Quelle spécialité de poulpe en salade avec ail et persil est servie au comptoir à Sète ?",
        options: ["Le poufre à l'aïllade", "Le steak tartare", "La brandade nîmoise", "Le foie gras"],
        answer: 0,
        feedback: "Le poufre (poulpe en occitan) à l'aïllade ! Un délice pour reprendre des forces."
      },
      {
        question: "Pourquoi les jouteurs mettent-ils de la résine ou de la craie sur la semelle de leurs espadrilles ou chaussons ?",
        options: ["Pour éviter de glisser sur le plancher humide de la tintaine", "Pour décorer le bois", "Pour aller plus vite", "C'est interdit par le règlement"],
        answer: 0,
        feedback: "Pour l'adhérence maximale sur le plancher sous les embruns !"
      },
      {
        question: "Quel peintre sétois a fondé le Festival de Théâtre de Sète et le Festival d'Avignon ?",
        options: ["Jean Vilar (le Théâtre de la Mer porte son nom)", "Molière", "Victor Hugo", "Marcel Pagnol"],
        answer: 0,
        feedback: "Jean Vilar ! Le Théâtre de la Mer Jean Vilar est un joyau au bord des flots."
      },
      {
        question: "Comment appelle-t-on le grand canal qui traverse le cœur de Sète ?",
        options: ["Le Canal Royal (ou Cadre Royal pour les joutes)", "La Seine", "Le Canal du Midi maritime", "Le Rhin"],
        answer: 0,
        feedback: "Le Canal Royal, rebaptisé Cadre Royal dans sa configuration de joutes avec tribunes."
      },
      {
        question: "Que risque une société de joutes si un de ses jurés officiels ne se présente pas au tournoi ?",
        options: ["20 points de pénalité au classement des sociétés", "Une amende de 10 000 €", "L'interdiction de ramer", "Rien"],
        answer: 0,
        feedback: "20 points de pénalité fédérale ! La discipline est prise très au sérieux."
      },
      {
        question: "Quelle est la particularité des joutes languedociennes par rapport aux joutes lyonnaises ou alsaciennes ?",
        options: [
          "La hauteur exceptionnelle de la tintaine (près de 3 m), le lourd pavois de bois et la violence du choc frontal",
          "On joute avec des épées",
          "Les barques sont en plastique",
          "On joute assis"
        ],
        answer: 0,
        feedback: "La méthode languedocienne est la plus haute, la plus lourde et la plus spectaculaire d'Europe !"
      },
      {
        question: "Comment appelle-t-on les fanfares qui rythment la Saint-Louis toute la nuit dans les rues ?",
        options: ["Les Peñas et bandas", "Les chorales d'église", "Les orchestres de chambre", "Les ensembles symphoniques"],
        answer: 0,
        feedback: "Les Peñas ! Cuivres chauds, tambours et bonne humeur communicative."
      },
      {
        question: "À quelle heure environ s'achève souvent le tournoi des Lourds le lundi de la Saint-Louis ?",
        options: ["À la tombée de la nuit, aux lampions, parfois après 20h30 après des heures de combat épique", "À midi pile", "À 14h00", "À minuit"],
        answer: 0,
        feedback: "À la nuit tombante ! Les revanches et la finale se jouent souvent dans une ambiance crépusculaire magique."
      },
      {
        question: "Quel cri de fierté lance un Sétois à un ami qui a triomphé d'une épreuve ?",
        options: ["T'es un brave, t'es un crack de la tintaine !", "Tu as de la chance", "Bof pas mal", "C'est moyen"],
        answer: 0,
        feedback: "T'es un brave ! Le compliment ultime qui consacre la vaillance."
      },
      {
        question: "Que reçoit le vainqueur de la Saint-Louis en plus de l'immortalité ?",
        options: ["Le Pavois d'Honneur richement sculpté et peint, et son nom à jamais dans l'histoire", "Un sac de coquillages", "Un vélo de course", "Une rame dorée"],
        answer: 0,
        feedback: "Le Pavois d'Honneur personnalisé, porté en triomphe sur les épaules à travers la ville !"
      },
      {
        question: "Si tu es monté sur la tintaine, que tu n'as pas tremblé, que tu as calé au choc et fais lever le Cadre Royal, qui es-tu ?",
        options: ["Un Sétois Pur Souche, seigneur du Cadre Royal !", "Un simple spectateur", "Un touriste égaré", "Le marchand de glaces"],
        answer: 0,
        feedback: "Un véritable Sétois Pur Souche ! Félicitations, tu es digne de la légende de Sète !"
      }
    ]
  }
};
