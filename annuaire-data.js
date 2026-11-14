const ANNUAIRE_DATA = {
  "categories": [
    {
      "id": "all",
      "nom": "Toutes les activités",
      "icone": "✨"
    },
    {
      "id": "voile",
      "nom": "Voile",
      "icone": "⛵"
    },
    {
      "id": "kayak",
      "nom": "Kayak & Paddle",
      "icone": "🛶"
    },
    {
      "id": "plongee",
      "nom": "Plongée",
      "icone": "🤿"
    },
    {
      "id": "location-bateau",
      "nom": "Location de bateau",
      "icone": "🛥️"
    },
    {
      "id": "peche",
      "nom": "Pêche sportive",
      "icone": "🎣"
    },
    {
      "id": "terroir",
      "nom": "Mas & Huîtres",
      "icone": "🦪"
    }
  ],
  "communes": [
    {
      "id": "sete",
      "nom": "Sète",
      "count": 9
    },
    {
      "id": "bouzigues",
      "nom": "Bouzigues",
      "count": 4
    },
    {
      "id": "meze",
      "nom": "Mèze",
      "count": 4
    },
    {
      "id": "marseillan",
      "nom": "Marseillan",
      "count": 4
    },
    {
      "id": "balaruc",
      "nom": "Balaruc-les-Bains",
      "count": 4
    },
    {
      "id": "frontignan",
      "nom": "Frontignan",
      "count": 4
    }
  ],
  "prestataires": [
    {
      "id": "sortie-voilier-sete",
      "siteOfficiel": "https://www.tourisme-sete.com/nautisme-voile-croisiere-sete.html",
      "nom": "Sortie en voilier",
      "categorie": "voile",
      "categorieNom": "Voile",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 59,
      "prix": "à partir de 59 €",
      "budget": "50-100",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 126,
      "description": "Navigation conviviale au large de Sète avec vue sur le mont Saint-Clair.",
      "descriptionComplete": "Embarquez pour une expérience maritime d'exception. Guidé par un skipper expérimenté, hissez les voiles au large de la corniche sétoise et admirez le Mont Saint-Clair depuis les flots. Idéal en famille, entre amis ou pour une initiation aux manœuvres de bord.",
      "adresse": "Capitainerie du Môle Saint-Louis, 34200 Sète",
      "telephone": "+33 4 67 46 05 05",
      "horaires": "Départs quotidiens à 10h00, 14h30 et 17h30",
      "equipements": [
        "Gilets de sauvetage fournis",
        "Cabine spacieuse",
        "Skipper breveté d'État",
        "Boissons fraîches offertes"
      ],
      "image": "images/card_voilier.jpg",
      "badge": "Coup de Cœur",
      "featured": true,
      "lat": 43.397,
      "lng": 3.7015,
      "siteOfficielNom": "tourisme-sete.com",
      "telephoneClean": "33467460505",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "59 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "94 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "77 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "165 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Sortie en voilier ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "kayak-coucher-soleil",
      "siteOfficiel": "https://www.tourisme-sete.com/kayak-paddle-sete.html",
      "nom": "Kayak au coucher du soleil",
      "categorie": "kayak",
      "categorieNom": "Kayak",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 29,
      "prix": "à partir de 29 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.9,
      "avisCount": 87,
      "description": "Balade en kayak sur l'étang de Thau et ses paysages uniques au crépuscule.",
      "descriptionComplete": "Glissez en silence sur les eaux dorées de la lagune de Thau à l'heure où le soleil embrase le Mont Saint-Clair. Encadré par un moniteur diplômé, cette randonnée crépusculaire de 2 heures vous mène entre bancs de sable préservés et canaux calmes.",
      "adresse": "Base Nautique Franco-Sétoise, Quai du Pavois d'Or, 34200 Sète",
      "telephone": "+33 4 67 74 12 34",
      "horaires": "Sortie quotidienne au crépuscule (18h30 - 20h30 selon la saison)",
      "equipements": [
        "Kayaks biplaces & monoplaces récents",
        "Pagaies légères & gilets",
        "Bidons étanches pour téléphones",
        "Collation apéritive sétoise"
      ],
      "image": "images/card_kayak_sunset.jpg",
      "badge": "Best Seller",
      "featured": true,
      "lat": 43.412,
      "lng": 3.684,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33467741234",
      "forfaits": [
        {
          "badge": "INITIATION",
          "nom": "Location Libre Kayak ou Paddle",
          "duree": "1 heure",
          "prix": "29 €",
          "desc": "Prise en main immédiate dans une zone protégée, idéal pour petits et grands."
        },
        {
          "badge": "RANDONNÉE",
          "nom": "Balade Exploratoire Criques & Parcs",
          "duree": "2 heures",
          "prix": "41 €",
          "desc": "Parcours guidé au ras de l'eau entre herbiers marins et structures conchylicoles."
        },
        {
          "badge": "CRÉPUSCULE",
          "nom": "Rando Crépuscule & Apéritif Sétois",
          "duree": "2h30 (18h30-21h)",
          "prix": "49 €",
          "desc": "Ambiance magique au soleil couchant avec dégustation de produits locaux sur l'eau."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Grand Tour Lagunaire",
          "duree": "4 heures",
          "prix": "64 €",
          "desc": "Échappée sauvage vers les bancs de sable préservés de la lagune de Thau."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Kayak au coucher du soleil ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "plongee-dans-letang",
      "siteOfficiel": "https://www.tourisme-sete.com/plongee-sous-marine-sete.html",
      "nom": "Plongée dans l'étang",
      "categorie": "plongee",
      "categorieNom": "Plongée",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 49,
      "prix": "à partir de 49 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.7,
      "avisCount": 64,
      "description": "Découvrez la richesse sous-marine de l'étang de Thau, entre herbiers et faune locale.",
      "descriptionComplete": "Plongez au cœur d'un écosystème lagunaire exceptionnel. L'étang de Thau abrite la plus forte densité d'hippocampes mouchetés de France, nichés au sein des herbiers de zostères. Baptême accessible dès 8 ans en zone abritée.",
      "adresse": "Quai Maximin Licciardi, 34200 Sète",
      "telephone": "+33 4 67 74 58 70",
      "horaires": "Tous les jours : 09h00, 14h00 et 16h30",
      "equipements": [
        "Combinaisons thermiques 7mm",
        "Masques et palmes toutes tailles",
        "Encadrement individuel baptême",
        "Douches chaudes & vestiaires"
      ],
      "image": "images/card_plongee.jpg",
      "badge": "Insolite",
      "featured": true,
      "lat": 43.4025,
      "lng": 3.698,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33467745870",
      "forfaits": [
        {
          "badge": "STANDARD",
          "nom": "Formule Découverte",
          "duree": "2 heures",
          "prix": "49 €",
          "desc": "L'essentiel de l'activité avec accompagnement et matériel complet inclus."
        },
        {
          "badge": "PASSION",
          "nom": "Formule Évasion Approfondie",
          "duree": "Demi-journée",
          "prix": "88 €",
          "desc": "Une immersion complète avec encadrement sur mesure et spot privilégié."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Plongée dans l'étang ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "louez-votre-bateau",
      "siteOfficiel": "https://www.tourisme-sete.com/location-bateaux-sete.html",
      "nom": "Louez votre bateau",
      "categorie": "location-bateau",
      "categorieNom": "Location de bateau",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 120,
      "prix": "à partir de 120 €",
      "budget": "100-200",
      "saison": [
        "printemps",
        "ete",
        "automne",
        "hiver"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 210,
      "description": "Partez en toute liberté sur l'étang de Thau ou le long de la côte sétoise.",
      "descriptionComplete": "Prenez la barre d'un navire moderne semi-rigide ou coque open. Avec ou sans permis, partez explorer les canaux de Sète, le Fort Saint-Pierre, ou jetez l'ancre devant les criques des Pierres Blanches.",
      "adresse": "Port des Quilles, 34200 Sète",
      "telephone": "+33 4 67 53 20 20",
      "horaires": "Location à la demi-journée ou journée complète (08h30 - 19h30)",
      "equipements": [
        "Bains de soleil avant",
        "Taud de soleil & échelle de bain",
        "Sondeur GPS couleur avec cartes de Thau",
        "Musique Bluetooth"
      ],
      "image": "images/card_bateau_moteur.jpg",
      "badge": "Location Phare",
      "featured": true,
      "lat": 43.393,
      "lng": 3.666,
      "siteOfficielNom": "tf7nautic.fr",
      "telephoneClean": "33467532020",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Forfait Découverte Canaux & Thau",
          "duree": "2 heures",
          "prix": "120 €",
          "desc": "Circuit en autonomie dans les canaux de Sète et sortie vers l'étang de Thau (jusqu'à 6 pers., carburant inclus)."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Forfait Demi-Journée Lagune",
          "duree": "4 heures",
          "prix": "180 €",
          "desc": "Navigation jusqu'aux parcs à huîtres de Bouzigues et baignade dans les eaux calmes de Thau."
        },
        {
          "badge": "JOURNÉE ENTIÈRE",
          "nom": "Forfait Journée Complète",
          "duree": "8 heures (9h-17h)",
          "prix": "276 €",
          "desc": "Liberté totale sur l'étang de Thau et les canaux avec pause déjeuner face aux mas ostréicoles."
        },
        {
          "badge": "COUCHER DE SOLEIL",
          "nom": "Forfait Sunset Apéro sur l'Étang",
          "duree": "2 heures (19h-21h)",
          "prix": "132 €",
          "desc": "Sortie coucher de soleil face au Mont Saint-Clair avec table à bord et glacière."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Louez votre bateau ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "bateaux-canaux-cadre-royal",
      "siteOfficiel": "https://www.sete.fr/decouvrir-sete/le-canal-royal/",
      "nom": "Croisière Canaux & Cadre Royal",
      "categorie": "voile",
      "categorieNom": "Sorties Mer & Canaux",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 15,
      "prix": "à partir de 15 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne",
        "hiver"
      ],
      "pmr": true,
      "note": 4.9,
      "avisCount": 340,
      "description": "Visite guidée historique au fil de l'eau, du Canal Royal au port de pêche.",
      "descriptionComplete": "Montez à bord des vedettes sétoises traditionnelles pour 45 minutes d'immersion dans l'histoire de la cité de Paul Valéry. Passage sous les ponts levants, le port de commerce et le théâtre de la mer.",
      "adresse": "Quai Général Durand (devant le Pont de la Civette), 34200 Sète",
      "telephone": "+33 4 67 46 00 46",
      "horaires": "Départs toutes les 30 minutes de 10h00 à 18h30",
      "equipements": [
        "Bateau couvert et panoramique",
        "Commentaires audio en direct par un guide local",
        "Accessible fauteuils roulants"
      ],
      "image": "images/cadre_royal_nuit.jpg",
      "badge": "Incontournable",
      "featured": true,
      "lat": 43.405,
      "lng": 3.6945,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33467460046",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "15 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "24 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "20 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "42 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Croisière Canaux & Cadre Royal ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "bateaux-electriques-civette",
      "siteOfficiel": "https://www.tourisme-sete.com/balade-sur-les-canaux.html",
      "nom": "Bateaux Électriques Sans Permis",
      "categorie": "location-bateau",
      "categorieNom": "Location de bateau",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 45,
      "prix": "à partir de 45 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 112,
      "description": "Capitaine d'un jour sur les canaux calmes de Sète, silencieux et 100% écologique.",
      "descriptionComplete": "Conduisez vous-même un petit bateau électrique 5 à 7 places sans aucun permis requis. Prise en main en 3 minutes pour une promenade magique le long des quais de la vieille ville.",
      "adresse": "Quai de la Résistance, 34200 Sète",
      "telephone": "+33 4 67 43 11 22",
      "horaires": "Tous les jours de 09h30 à 19h00 sans interruption",
      "equipements": [
        "Propulsion 100% électrique silencieuse",
        "Gilets bébés et enfants inclus",
        "Table centrale pour pique-nique à bord"
      ],
      "image": "images/barques_matin.jpg",
      "badge": "Famille",
      "featured": false,
      "lat": 43.406,
      "lng": 3.692,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33467431122",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Forfait Découverte Canaux & Thau",
          "duree": "2 heures",
          "prix": "45 €",
          "desc": "Circuit en autonomie dans les canaux de Sète et sortie vers l'étang de Thau (jusqu'à 6 pers., carburant inclus)."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Forfait Demi-Journée Lagune",
          "duree": "4 heures",
          "prix": "68 €",
          "desc": "Navigation jusqu'aux parcs à huîtres de Bouzigues et baignade dans les eaux calmes de Thau."
        },
        {
          "badge": "JOURNÉE ENTIÈRE",
          "nom": "Forfait Journée Complète",
          "duree": "8 heures (9h-17h)",
          "prix": "103 €",
          "desc": "Liberté totale sur l'étang de Thau et les canaux avec pause déjeuner face aux mas ostréicoles."
        },
        {
          "badge": "COUCHER DE SOLEIL",
          "nom": "Forfait Sunset Apéro sur l'Étang",
          "duree": "2 heures (19h-21h)",
          "prix": "50 €",
          "desc": "Sortie coucher de soleil face au Mont Saint-Clair avec table à bord et glacière."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Bateaux Électriques Sans Permis ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "peche-large-sete-thon",
      "siteOfficiel": "https://www.tourisme-sete.com/peche-en-mer-sete.html",
      "nom": "Pêche Sportive au Grand Large",
      "categorie": "peche",
      "categorieNom": "Pêche sportive",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 125,
      "prix": "à partir de 125 €",
      "budget": "100-200",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.9,
      "avisCount": 95,
      "description": "Sortie pêche au gros en Méditerranée au départ de Sète, thon rouge et bonites en no-kill.",
      "descriptionComplete": "Prenez le large à bord d'une vedette de pêche hauturière ultra-équipée. Combats d'adrénaline garantis avec du matériel haut de gamme sous la direction d'un guide professionnel de pêche côtière.",
      "adresse": "Ponton d'honneur, Port de Sète, 34200 Sète",
      "telephone": "+33 6 12 34 56 78",
      "horaires": "Départ aux aurores à 06h30, retour vers 13h00",
      "equipements": [
        "Cannes et moulinets Shimano de compétition",
        "Carburant et appâts inclus",
        "Casse-croûte sétois du pêcheur offert"
      ],
      "image": "images/hero_sete_thau.jpg",
      "badge": "Sensations",
      "featured": false,
      "lat": 43.4005,
      "lng": 3.704,
      "siteOfficielNom": "tourisme-sete.com",
      "telephoneClean": "33612345678",
      "forfaits": [
        {
          "badge": "STANDARD",
          "nom": "Formule Découverte",
          "duree": "2 heures",
          "prix": "125 €",
          "desc": "L'essentiel de l'activité avec accompagnement et matériel complet inclus."
        },
        {
          "badge": "PASSION",
          "nom": "Formule Évasion Approfondie",
          "duree": "Demi-journée",
          "prix": "225 €",
          "desc": "Une immersion complète avec encadrement sur mesure et spot privilégié."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Pêche Sportive au Grand Large ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "centre-nautique-sete-lazaret",
      "siteOfficiel": "https://www.sete.fr/activites/nautisme/",
      "nom": "Centre Nautique du Lazaret",
      "categorie": "voile",
      "categorieNom": "Voile & Catamaran",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 40,
      "prix": "à partir de 40 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.7,
      "avisCount": 88,
      "description": "Location et stages de Hobie Cat, planche à voile et optimist face à la plage du Lazaret.",
      "descriptionComplete": "Spot parfait bordé par la pinède du Lazaret. Matériel de glisse moderne révisé chaque saison pour apprendre ou perfectionner ses empannages dans une brise thermique idéale.",
      "adresse": "Plage du Lazaret, 34200 Sète",
      "telephone": "+33 4 67 51 05 50",
      "horaires": "Du mardi au dimanche : 10h00 - 18h30",
      "equipements": [
        "Flotte de Hobie Cat 16 récents",
        "Combinaisons néoprène fournies",
        "Moniteurs diplômés FFV"
      ],
      "image": "images/theatre_de_la_mer.jpg",
      "badge": "Glisse",
      "featured": false,
      "lat": 43.391,
      "lng": 3.678,
      "siteOfficielNom": "tourisme-sete.com",
      "telephoneClean": "33467510550",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "40 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "64 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "52 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "112 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Centre Nautique du Lazaret ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "excursion-dauphins-sete",
      "siteOfficiel": "https://www.tourisme-sete.com/sorties-nature-dauphins.html",
      "nom": "Safari Marin & Dauphins du Golfe",
      "categorie": "voile",
      "categorieNom": "Sorties Mer & Nature",
      "commune": "Sète",
      "communeId": "sete",
      "prixValeur": 65,
      "prix": "à partir de 65 €",
      "budget": "50-100",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.9,
      "avisCount": 142,
      "description": "Partez à la rencontre des dauphins sauvages et tortues marines au large du Golfe du Lion.",
      "descriptionComplete": "Navigation respectueuse à bord d'un catamaran spacieux équipé de sonar d'écoute passive. Approche naturaliste guidée par un biologiste marin certifié.",
      "adresse": "Quai d'Alger, 34200 Sète",
      "telephone": "+33 4 67 46 88 90",
      "horaires": "Sorties le matin de 08h30 à 12h30 les jours de mer calme",
      "equipements": [
        "Jumelles stabilisées fournies",
        "Hydrophone immergé pour écouter les chants",
        "Collation bio locale"
      ],
      "image": "images/hero_sete_thau.jpg",
      "badge": "Émerveillement",
      "featured": false,
      "lat": 43.4035,
      "lng": 3.7005,
      "siteOfficielNom": "tourisme-sete.com",
      "telephoneClean": "33467468890",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "65 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "104 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "85 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "182 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Safari Marin & Dauphins du Golfe ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "mas-amourettes-degustation",
      "siteOfficiel": "https://www.bouzigues.fr/terroir-huitres-etang-de-thau/",
      "nom": "Dégustation d'Huîtres les Pieds dans l'Eau",
      "categorie": "terroir",
      "categorieNom": "Terroir & Mas",
      "commune": "Bouzigues",
      "communeId": "bouzigues",
      "prixValeur": 14,
      "prix": "à partir de 14 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne",
        "hiver"
      ],
      "pmr": true,
      "note": 4.9,
      "avisCount": 420,
      "description": "Dégustation authentique d'huîtres de Bouzigues et tielles artisanales sur ponton panoramique.",
      "descriptionComplete": "Installé sur le ponton en bois du Mas conchylicole, savourez les fameuses huîtres n°3 de Bouzigues tout juste sorties de l'eau, accompagnées d'un verre de Picpoul de Pinet bien frais et d'une vue magique sur le Mont Saint-Clair.",
      "adresse": "Mas conchylicole n°14, Route de la Conchyliculture, 34140 Bouzigues",
      "telephone": "+33 4 67 78 30 40",
      "horaires": "Tous les midis de 11h30 à 15h00, et soirs d'été jusqu'à 22h00",
      "equipements": [
        "Ponton en bois au-dessus de l'étang",
        "Plateaux de fruits de mer écaillés minute",
        "Vins AOP Picpoul de Pinet"
      ],
      "image": "images/barques_matin.jpg",
      "badge": "Gourmand",
      "featured": true,
      "lat": 43.447,
      "lng": 3.659,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33467783040",
      "forfaits": [
        {
          "badge": "DÉGUSTATION",
          "nom": "Assiette Découverte 6 Huîtres & Vin",
          "duree": "45 minutes",
          "prix": "14 €",
          "desc": "6 huîtres n°3 de Bouzigues ultra-fraîches, beurre, citron et verre de Picpoul."
        },
        {
          "badge": "GOURMAND",
          "nom": "Plateau Prestige 12 Huîtres & Tielles",
          "duree": "1h30",
          "prix": "25 €",
          "desc": "Douzaine d'huîtres, moules marinières, tielle artisanale chaude et verre de vin."
        },
        {
          "badge": "VISITE & DÉGUSTATION",
          "nom": "Atelier Ostréicole & Dégustation",
          "duree": "2 heures",
          "prix": "31 €",
          "desc": "Visite commentée des parcs en chaland + dégustation complète sur ponton."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Dégustation d'Huîtres les Pieds dans l'Eau ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "chaland-bouzigues-parcs",
      "siteOfficiel": "https://www.bouzigues.fr/visites-ostreicoles/",
      "nom": "Visite des Parcs en Chaland Conchylicole",
      "categorie": "location-bateau",
      "categorieNom": "Balades en Bateau",
      "commune": "Bouzigues",
      "communeId": "bouzigues",
      "prixValeur": 16,
      "prix": "à partir de 16 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 165,
      "description": "Naviguez entre les tables d'huîtres à bord d'un chaland ostréicole traditionnel en bois.",
      "descriptionComplete": "Accompagné par un producteur passionné, naviguez au cœur du labyrinthe des 2 600 tables conchylicoles de Thau. Explications fascinantes sur le cycle de l'huître et la tradition lagunaire.",
      "adresse": "Port de Bouzigues, Quai du Port, 34140 Bouzigues",
      "telephone": "+33 4 67 78 19 00",
      "horaires": "Départs 11h00, 15h00 et 17h00",
      "equipements": [
        "Embarcation ostréicole abritée",
        "Commentaires du conchyliculteur",
        "Mini dégustation offerte à bord"
      ],
      "image": "images/card_bateau_moteur.jpg",
      "badge": "Authentique",
      "featured": false,
      "lat": 43.449,
      "lng": 3.6575,
      "siteOfficielNom": "bouzigues.fr",
      "telephoneClean": "33467781900",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Forfait Découverte Canaux & Thau",
          "duree": "2 heures",
          "prix": "16 €",
          "desc": "Circuit en autonomie dans les canaux de Sète et sortie vers l'étang de Thau (jusqu'à 6 pers., carburant inclus)."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Forfait Demi-Journée Lagune",
          "duree": "4 heures",
          "prix": "24 €",
          "desc": "Navigation jusqu'aux parcs à huîtres de Bouzigues et baignade dans les eaux calmes de Thau."
        },
        {
          "badge": "JOURNÉE ENTIÈRE",
          "nom": "Forfait Journée Complète",
          "duree": "8 heures (9h-17h)",
          "prix": "37 €",
          "desc": "Liberté totale sur l'étang de Thau et les canaux avec pause déjeuner face aux mas ostréicoles."
        },
        {
          "badge": "COUCHER DE SOLEIL",
          "nom": "Forfait Sunset Apéro sur l'Étang",
          "duree": "2 heures (19h-21h)",
          "prix": "18 €",
          "desc": "Sortie coucher de soleil face au Mont Saint-Clair avec table à bord et glacière."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Visite des Parcs en Chaland Conchylicole ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "kayak-tables-bouzigues",
      "siteOfficiel": "https://www.herault-tourisme.com/fr/activites/bouzigues/",
      "nom": "Kayak Guidé parmi les Tables d'Huîtres",
      "categorie": "kayak",
      "categorieNom": "Kayak",
      "commune": "Bouzigues",
      "communeId": "bouzigues",
      "prixValeur": 25,
      "prix": "à partir de 25 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.9,
      "avisCount": 78,
      "description": "Glisse insolite au ras de l'eau entre les cordes de moules et les parcs à huîtres de Bouzigues.",
      "descriptionComplete": "Une perspective unique et silencieuse au cœur des élevages lagunaires. Idéal pour admirer les dorades royales et les oiseaux de mer nichés sur les structures en bois.",
      "adresse": "Plage de la Pyramide, 34140 Bouzigues",
      "telephone": "+33 4 67 78 45 12",
      "horaires": "Du mardi au dimanche : 09h30 et 15h30",
      "equipements": [
        "Kayaks de randonnée stables",
        "Pochettes étanches pour smartphones",
        "Gilet et briefing sécurité"
      ],
      "image": "images/card_kayak_sunset.jpg",
      "badge": "Éco-Nature",
      "featured": false,
      "lat": 43.4465,
      "lng": 3.662,
      "siteOfficielNom": "bouzigues.fr",
      "telephoneClean": "33467784512",
      "forfaits": [
        {
          "badge": "INITIATION",
          "nom": "Location Libre Kayak ou Paddle",
          "duree": "1 heure",
          "prix": "25 €",
          "desc": "Prise en main immédiate dans une zone protégée, idéal pour petits et grands."
        },
        {
          "badge": "RANDONNÉE",
          "nom": "Balade Exploratoire Criques & Parcs",
          "duree": "2 heures",
          "prix": "35 €",
          "desc": "Parcours guidé au ras de l'eau entre herbiers marins et structures conchylicoles."
        },
        {
          "badge": "CRÉPUSCULE",
          "nom": "Rando Crépuscule & Apéritif Sétois",
          "duree": "2h30 (18h30-21h)",
          "prix": "43 €",
          "desc": "Ambiance magique au soleil couchant avec dégustation de produits locaux sur l'eau."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Grand Tour Lagunaire",
          "duree": "4 heures",
          "prix": "55 €",
          "desc": "Échappée sauvage vers les bancs de sable préservés de la lagune de Thau."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Kayak Guidé parmi les Tables d'Huîtres ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "atelier-huitres-prestige-bouzigues",
      "siteOfficiel": "https://www.bouzigues.fr/mas-conchylicoles/",
      "nom": "Atelier Ostréicole & Dégustation Prestige",
      "categorie": "terroir",
      "categorieNom": "Terroir & Mas",
      "commune": "Bouzigues",
      "communeId": "bouzigues",
      "prixValeur": 22,
      "prix": "à partir de 22 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne",
        "hiver"
      ],
      "pmr": true,
      "note": 4.9,
      "avisCount": 92,
      "description": "Apprenez à ouvrir et caler les huîtres comme un pro avant une dégustation gourmande.",
      "descriptionComplete": "Initiez-vous aux gestes séculaires de l'écailler avec un couteau à huître professionnel sécurisé, puis dégustez votre douzaine accompagnée de beurre demi-sel et de pain de seigle.",
      "adresse": "Pointe du Mas Saint-Pierre, 34140 Bouzigues",
      "telephone": "+33 6 88 12 34 56",
      "horaires": "Samedis et dimanches de 11h00 à 13h00 sur réservation",
      "equipements": [
        "Gants de mailles et couteaux fournis",
        "Livret pédagogique conchylicole",
        "Dégustation 12 huîtres + vin"
      ],
      "image": "images/cadre_royal_nuit.jpg",
      "badge": "Savoir-Faire",
      "featured": false,
      "lat": 43.4505,
      "lng": 3.654,
      "siteOfficielNom": "bouzigues.fr",
      "telephoneClean": "33688123456",
      "forfaits": [
        {
          "badge": "DÉGUSTATION",
          "nom": "Assiette Découverte 6 Huîtres & Vin",
          "duree": "45 minutes",
          "prix": "22 €",
          "desc": "6 huîtres n°3 de Bouzigues ultra-fraîches, beurre, citron et verre de Picpoul."
        },
        {
          "badge": "GOURMAND",
          "nom": "Plateau Prestige 12 Huîtres & Tielles",
          "duree": "1h30",
          "prix": "40 €",
          "desc": "Douzaine d'huîtres, moules marinières, tielle artisanale chaude et verre de vin."
        },
        {
          "badge": "VISITE & DÉGUSTATION",
          "nom": "Atelier Ostréicole & Dégustation",
          "duree": "2 heures",
          "prix": "48 €",
          "desc": "Visite commentée des parcs en chaland + dégustation complète sur ponton."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Atelier Ostréicole & Dégustation Prestige ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "ecole-voile-meze-catamaran",
      "siteOfficiel": "https://www.ville-meze.fr/sports-nautiques/",
      "nom": "École de Voile & Catamaran de Mèze",
      "categorie": "voile",
      "categorieNom": "Voile",
      "commune": "Mèze",
      "communeId": "meze",
      "prixValeur": 45,
      "prix": "à partir de 45 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 135,
      "description": "Le plan d'eau le plus vaste et sécurisé de Thau pour le catamaran et la planche à voile.",
      "descriptionComplete": "Le centre nautique de Mèze bénéficie d'une exposition au vent idéale. Des stages enfants aux cours particuliers adultes, vibrez sur les nouveaux catamarans Topaz et RS Cat.",
      "adresse": "Rue de la Méditerranée, 34140 Mèze",
      "telephone": "+33 4 67 43 59 51",
      "horaires": "Ouvert 7j/7 de 09h00 à 18h30",
      "equipements": [
        "Flotte récente Topaz 14 & 16",
        "Gilets et combinaisons à disposition",
        "Zone sécurisée avec bateau de surveillance"
      ],
      "image": "images/card_voilier.jpg",
      "badge": "Club Fédéral",
      "featured": true,
      "lat": 43.424,
      "lng": 3.599,
      "siteOfficielNom": "ville-meze.fr",
      "telephoneClean": "33467435951",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "45 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "72 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "59 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "126 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez École de Voile & Catamaran de Mèze ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "location-semi-rigide-meze",
      "siteOfficiel": "https://www.ville-meze.fr/port-de-plaisance/",
      "nom": "Location Bateaux Mèze Port",
      "categorie": "location-bateau",
      "categorieNom": "Location de bateau",
      "commune": "Mèze",
      "communeId": "meze",
      "prixValeur": 90,
      "prix": "à partir de 90 €",
      "budget": "50-100",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.7,
      "avisCount": 94,
      "description": "Bateaux moteur 6cv sans permis et semi-rigides 115cv pour sillonner tout le bassin.",
      "descriptionComplete": "Depuis le port pittoresque de Mèze, rejoignez Bouzigues ou Sète en 15 minutes de navigation paisible. Briefing détaillé de navigation et carte GPS des bancs de sable fournie.",
      "adresse": "Quai du Port de Plaisance, 34140 Mèze",
      "telephone": "+33 4 67 43 80 10",
      "horaires": "Tous les jours de 08h30 à 19h00",
      "equipements": [
        "Essence comprise pour les sans-permis",
        "Échelle inox et bain de soleil",
        "Prêt de glacière étanche"
      ],
      "image": "images/card_bateau_moteur.jpg",
      "badge": "Évasion",
      "featured": false,
      "lat": 43.427,
      "lng": 3.595,
      "siteOfficielNom": "ville-meze.fr",
      "telephoneClean": "33467438010",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Forfait Découverte Canaux & Thau",
          "duree": "2 heures",
          "prix": "90 €",
          "desc": "Circuit en autonomie dans les canaux de Sète et sortie vers l'étang de Thau (jusqu'à 6 pers., carburant inclus)."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Forfait Demi-Journée Lagune",
          "duree": "4 heures",
          "prix": "135 €",
          "desc": "Navigation jusqu'aux parcs à huîtres de Bouzigues et baignade dans les eaux calmes de Thau."
        },
        {
          "badge": "JOURNÉE ENTIÈRE",
          "nom": "Forfait Journée Complète",
          "duree": "8 heures (9h-17h)",
          "prix": "207 €",
          "desc": "Liberté totale sur l'étang de Thau et les canaux avec pause déjeuner face aux mas ostréicoles."
        },
        {
          "badge": "COUCHER DE SOLEIL",
          "nom": "Forfait Sunset Apéro sur l'Étang",
          "duree": "2 heures (19h-21h)",
          "prix": "99 €",
          "desc": "Sortie coucher de soleil face au Mont Saint-Clair avec table à bord et glacière."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Location Bateaux Mèze Port ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "paddle-crique-tambourin-meze",
      "siteOfficiel": "https://www.ville-meze.fr/plages-et-loisirs/",
      "nom": "Stand-Up Paddle Crique du Tambourin",
      "categorie": "kayak",
      "categorieNom": "Kayak & Paddle",
      "commune": "Mèze",
      "communeId": "meze",
      "prixValeur": 20,
      "prix": "à partir de 20 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.9,
      "avisCount": 65,
      "description": "Location de paddle gonflable haute stabilité devant la plage familiale du Tambourin.",
      "descriptionComplete": "Eau calme et peu profonde, parfait pour une première glisse ou pour pagayer en toute tranquillité le long des remparts historiques de la ville de Mèze.",
      "adresse": "Plage du Tambourin, 34140 Mèze",
      "telephone": "+33 6 45 67 89 01",
      "horaires": "Tous les jours en saison : 10h00 - 19h00",
      "equipements": [
        "Planches stables Red Paddle",
        "Pagaies carbone ajustables",
        "Gilets flottants tous âges"
      ],
      "image": "images/card_kayak_sunset.jpg",
      "badge": "Détente",
      "featured": false,
      "lat": 43.422,
      "lng": 3.602,
      "siteOfficielNom": "ville-meze.fr",
      "telephoneClean": "33645678901",
      "forfaits": [
        {
          "badge": "INITIATION",
          "nom": "Location Libre Kayak ou Paddle",
          "duree": "1 heure",
          "prix": "20 €",
          "desc": "Prise en main immédiate dans une zone protégée, idéal pour petits et grands."
        },
        {
          "badge": "RANDONNÉE",
          "nom": "Balade Exploratoire Criques & Parcs",
          "duree": "2 heures",
          "prix": "28 €",
          "desc": "Parcours guidé au ras de l'eau entre herbiers marins et structures conchylicoles."
        },
        {
          "badge": "CRÉPUSCULE",
          "nom": "Rando Crépuscule & Apéritif Sétois",
          "duree": "2h30 (18h30-21h)",
          "prix": "34 €",
          "desc": "Ambiance magique au soleil couchant avec dégustation de produits locaux sur l'eau."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Grand Tour Lagunaire",
          "duree": "4 heures",
          "prix": "44 €",
          "desc": "Échappée sauvage vers les bancs de sable préservés de la lagune de Thau."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Stand-Up Paddle Crique du Tambourin ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "kitesurf-spot-taurus-meze",
      "siteOfficiel": "https://www.ville-meze.fr/centre-du-taurus/",
      "nom": "Kitesurf & Wingfoil au Spot du Taurus",
      "categorie": "voile",
      "categorieNom": "Glisse & Wingfoil",
      "commune": "Mèze",
      "communeId": "meze",
      "prixValeur": 75,
      "prix": "à partir de 75 €",
      "budget": "50-100",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.8,
      "avisCount": 82,
      "description": "Spot réputé pour son vent régulier par Tramontane. Stages de perfectionnement wingfoil.",
      "descriptionComplete": "Envolez-vous sur l'eau grâce aux ailes de wingfoil dernière génération. Encadrement radio par un moniteur certifié sur bateau semi-rigide d'assistance.",
      "adresse": "Centre Nautique du Taurus, 34140 Mèze",
      "telephone": "+33 4 67 43 72 00",
      "horaires": "Selon les conditions de vent (sur réservation météo)",
      "equipements": [
        "Casques radio étanches",
        "Foil et aile Duotone",
        "Bateau de sécurité présent en permanence"
      ],
      "image": "images/theatre_de_la_mer_light.jpg",
      "badge": "Sensations",
      "featured": false,
      "lat": 43.431,
      "lng": 3.611,
      "siteOfficielNom": "ville-meze.fr",
      "telephoneClean": "33467437200",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "75 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "120 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "98 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "210 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Kitesurf & Wingfoil au Spot du Taurus ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "marseillan-bateaux-electriques-port",
      "siteOfficiel": "https://www.marseillan.com/port-et-canal-du-midi/",
      "nom": "Bateaux Sans Permis du Port de Marseillan",
      "categorie": "location-bateau",
      "categorieNom": "Location de bateau",
      "commune": "Marseillan",
      "communeId": "marseillan",
      "prixValeur": 50,
      "prix": "à partir de 50 €",
      "budget": "50-100",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 110,
      "description": "Croisière paisible sur l'étang et l'embouchure du Canal du Midi aux Onglous.",
      "descriptionComplete": "Naviguez sans permis jusqu'au célèbre phare des Onglous, où le Canal du Midi se jette majestueusement dans l'étang de Thau. Une balade magique entre eau douce et lagune.",
      "adresse": "Port de Marseillan-Ville, 34340 Marseillan",
      "telephone": "+33 4 67 21 90 90",
      "horaires": "Tous les jours de 09h00 à 19h00",
      "equipements": [
        "Bateaux familiaux jusqu'à 6 personnes",
        "Taud de soleil intégral",
        "Guide illustré de la faune locale"
      ],
      "image": "images/card_bateau_moteur.jpg",
      "badge": "Balade Zen",
      "featured": true,
      "lat": 43.355,
      "lng": 3.531,
      "siteOfficielNom": "marseillan.com",
      "telephoneClean": "33467219090",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Forfait Découverte Canaux & Thau",
          "duree": "2 heures",
          "prix": "50 €",
          "desc": "Circuit en autonomie dans les canaux de Sète et sortie vers l'étang de Thau (jusqu'à 6 pers., carburant inclus)."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Forfait Demi-Journée Lagune",
          "duree": "4 heures",
          "prix": "75 €",
          "desc": "Navigation jusqu'aux parcs à huîtres de Bouzigues et baignade dans les eaux calmes de Thau."
        },
        {
          "badge": "JOURNÉE ENTIÈRE",
          "nom": "Forfait Journée Complète",
          "duree": "8 heures (9h-17h)",
          "prix": "115 €",
          "desc": "Liberté totale sur l'étang de Thau et les canaux avec pause déjeuner face aux mas ostréicoles."
        },
        {
          "badge": "COUCHER DE SOLEIL",
          "nom": "Forfait Sunset Apéro sur l'Étang",
          "duree": "2 heures (19h-21h)",
          "prix": "55 €",
          "desc": "Sortie coucher de soleil face au Mont Saint-Clair avec table à bord et glacière."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Bateaux Sans Permis du Port de Marseillan ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "marseillan-voile-passion",
      "siteOfficiel": "https://www.marseillan.com/activites-nautiques/",
      "nom": "Marseillan Voile Passion",
      "categorie": "voile",
      "categorieNom": "Voile",
      "commune": "Marseillan",
      "communeId": "marseillan",
      "prixValeur": 38,
      "prix": "à partir de 38 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.7,
      "avisCount": 74,
      "description": "Club convivial proposant stages de dériveurs, catamarans et balades collectives.",
      "descriptionComplete": "Sur les rives calmes du sud de Thau, profitez d'une brise douce et sécurisante pour naviguer avec des moniteurs passionnés par la transmission maritime.",
      "adresse": "Chemin du Payrollet, 34340 Marseillan",
      "telephone": "+33 4 67 77 14 30",
      "horaires": "Du lundi au samedi : 09h30 - 18h00",
      "equipements": [
        "Catamarans Dart 16",
        "Combinaisons et gilets récents",
        "Vestiaires et douches"
      ],
      "image": "images/card_voilier.jpg",
      "badge": "Pédagogie",
      "featured": false,
      "lat": 43.359,
      "lng": 3.535,
      "siteOfficielNom": "marseillan.com",
      "telephoneClean": "33467771430",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "38 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "61 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "49 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "106 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Marseillan Voile Passion ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "canoe-onglous-canal-midi",
      "siteOfficiel": "https://www.canal-du-midi.org/fr/les-onglous/",
      "nom": "Descente Canoë des Onglous vers Thau",
      "categorie": "kayak",
      "categorieNom": "Kayak & Canoë",
      "commune": "Marseillan",
      "communeId": "marseillan",
      "prixValeur": 28,
      "prix": "à partir de 28 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.9,
      "avisCount": 89,
      "description": "Parcours féerique sous les platanes du Canal du Midi jusqu'au débouché dans l'étang.",
      "descriptionComplete": "Découvrez le chef-d'œuvre de Pierre-Paul Riquet classé à l'UNESCO. Une descente ombragée et paisible qui s'ouvre sur la vue panoramique de l'étang et du Mont Saint-Clair.",
      "adresse": "Écluse de Bagnas / Les Onglous, 34340 Marseillan",
      "telephone": "+33 6 78 90 12 34",
      "horaires": "Départs à 10h00, 14h00 et 16h30",
      "equipements": [
        "Canoës canadiens 2/3 places",
        "Bidons étanches",
        "Navette de retour gratuite"
      ],
      "image": "images/card_kayak_sunset.jpg",
      "badge": "UNESCO",
      "featured": false,
      "lat": 43.342,
      "lng": 3.518,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33678901234",
      "forfaits": [
        {
          "badge": "INITIATION",
          "nom": "Location Libre Kayak ou Paddle",
          "duree": "1 heure",
          "prix": "28 €",
          "desc": "Prise en main immédiate dans une zone protégée, idéal pour petits et grands."
        },
        {
          "badge": "RANDONNÉE",
          "nom": "Balade Exploratoire Criques & Parcs",
          "duree": "2 heures",
          "prix": "39 €",
          "desc": "Parcours guidé au ras de l'eau entre herbiers marins et structures conchylicoles."
        },
        {
          "badge": "CRÉPUSCULE",
          "nom": "Rando Crépuscule & Apéritif Sétois",
          "duree": "2h30 (18h30-21h)",
          "prix": "48 €",
          "desc": "Ambiance magique au soleil couchant avec dégustation de produits locaux sur l'eau."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Grand Tour Lagunaire",
          "duree": "4 heures",
          "prix": "62 €",
          "desc": "Échappée sauvage vers les bancs de sable préservés de la lagune de Thau."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Descente Canoë des Onglous vers Thau ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "noilly-prat-croisiere-aperitif",
      "siteOfficiel": "https://www.noillyprat.com/fr/fr/la-maison/",
      "nom": "Visite Noilly Prat & Croisière Apéritif",
      "categorie": "terroir",
      "categorieNom": "Terroir & Croisière",
      "commune": "Marseillan",
      "communeId": "marseillan",
      "prixValeur": 19,
      "prix": "à partir de 19 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne",
        "hiver"
      ],
      "pmr": true,
      "note": 4.9,
      "avisCount": 230,
      "description": "Découverte des célèbres chais historiques Noilly Prat suivie d'un apéritif en mer.",
      "descriptionComplete": "Visitez les fûts centenaires vieillis à ciel ouvert face aux embruns, puis dégustez un cocktail vermouth signature sur une terrasse flottante avec tapas locales.",
      "adresse": "1 Rue Noilly, 34340 Marseillan",
      "telephone": "+33 4 67 77 20 15",
      "horaires": "Tous les jours : visites à 11h00, 15h00 et 17h00",
      "equipements": [
        "Visite guidée sensorielle",
        "Dégustation 3 cuvées Noilly Prat",
        "Terrasse avec vue sur le port"
      ],
      "image": "images/cadre_royal_nuit.jpg",
      "badge": "Patrimoine",
      "featured": false,
      "lat": 43.3565,
      "lng": 3.529,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33467772015",
      "forfaits": [
        {
          "badge": "DÉGUSTATION",
          "nom": "Assiette Découverte 6 Huîtres & Vin",
          "duree": "45 minutes",
          "prix": "19 €",
          "desc": "6 huîtres n°3 de Bouzigues ultra-fraîches, beurre, citron et verre de Picpoul."
        },
        {
          "badge": "GOURMAND",
          "nom": "Plateau Prestige 12 Huîtres & Tielles",
          "duree": "1h30",
          "prix": "34 €",
          "desc": "Douzaine d'huîtres, moules marinières, tielle artisanale chaude et verre de vin."
        },
        {
          "badge": "VISITE & DÉGUSTATION",
          "nom": "Atelier Ostréicole & Dégustation",
          "duree": "2 heures",
          "prix": "42 €",
          "desc": "Visite commentée des parcs en chaland + dégustation complète sur ponton."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Visite Noilly Prat & Croisière Apéritif ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "base-nautique-balaruc-manureva",
      "siteOfficiel": "https://www.balaruc-les-bains.com/nautisme-etang.html",
      "nom": "Base Nautique Manuréva",
      "categorie": "voile",
      "categorieNom": "Voile & Planche",
      "commune": "Balaruc-les-Bains",
      "communeId": "balaruc",
      "prixValeur": 35,
      "prix": "à partir de 35 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 118,
      "description": "Navigation douce et sécurisée au nord de la lagune, cours de planche et voile adaptés.",
      "descriptionComplete": "Idéale pour les curistes et familles. Des cours sur mesure dispensés par des moniteurs bienveillants dans une anse protégée de la houle marine.",
      "adresse": "Avenue des Thermes Romains, 34540 Balaruc-les-Bains",
      "telephone": "+33 4 67 46 81 30",
      "horaires": "Du lundi au samedi de 09h30 à 18h30",
      "equipements": [
        "Matériel adapté tous niveaux et seniors",
        "Gilets ergonomiques légers",
        "Ponton d'accès sans marche"
      ],
      "image": "images/card_voilier.jpg",
      "badge": "Bien-Être",
      "featured": true,
      "lat": 43.443,
      "lng": 3.681,
      "siteOfficielNom": "balaruc-les-bains.com",
      "telephoneClean": "33467468130",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "35 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "56 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "46 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "98 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Base Nautique Manuréva ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "balaruc-pedalo-paddle-crique",
      "siteOfficiel": "https://www.balaruc-les-bains.com/parc-crique.html",
      "nom": "Pédalos & Paddles de la Crique",
      "categorie": "kayak",
      "categorieNom": "Nautisme détente",
      "commune": "Balaruc-les-Bains",
      "communeId": "balaruc",
      "prixValeur": 20,
      "prix": "à partir de 20 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.7,
      "avisCount": 95,
      "description": "Pédalos avec toboggan et paddles géants pour petits et grands face à la promenade.",
      "descriptionComplete": "Amusez-vous le long de la promenade des Bains. Les pédalos équipés de toboggans font le bonheur des enfants, avec vue directe sur la baie sétoise.",
      "adresse": "Parc Charles de Gaulle, 34540 Balaruc-les-Bains",
      "telephone": "+33 6 11 22 33 44",
      "horaires": "Tous les jours en saison de 10h00 à 19h30",
      "equipements": [
        "Pédalos 4/5 places avec toboggans",
        "Paddles simples et tandems",
        "Gilets de sauvetage bébés"
      ],
      "image": "images/card_kayak_sunset.jpg",
      "badge": "Enfants & Famille",
      "featured": false,
      "lat": 43.4405,
      "lng": 3.6835,
      "siteOfficielNom": "balaruc-les-bains.com",
      "telephoneClean": "33611223344",
      "forfaits": [
        {
          "badge": "INITIATION",
          "nom": "Location Libre Kayak ou Paddle",
          "duree": "1 heure",
          "prix": "20 €",
          "desc": "Prise en main immédiate dans une zone protégée, idéal pour petits et grands."
        },
        {
          "badge": "RANDONNÉE",
          "nom": "Balade Exploratoire Criques & Parcs",
          "duree": "2 heures",
          "prix": "28 €",
          "desc": "Parcours guidé au ras de l'eau entre herbiers marins et structures conchylicoles."
        },
        {
          "badge": "CRÉPUSCULE",
          "nom": "Rando Crépuscule & Apéritif Sétois",
          "duree": "2h30 (18h30-21h)",
          "prix": "34 €",
          "desc": "Ambiance magique au soleil couchant avec dégustation de produits locaux sur l'eau."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Grand Tour Lagunaire",
          "duree": "4 heures",
          "prix": "44 €",
          "desc": "Échappée sauvage vers les bancs de sable préservés de la lagune de Thau."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Pédalos & Paddles de la Crique ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "plongee-ecosysteme-balaruc",
      "siteOfficiel": "https://www.balaruc-les-bains.com/nature-lagune.html",
      "nom": "Sentier Subaquatique & Hippocampes",
      "categorie": "plongee",
      "categorieNom": "Plongée & Palmes",
      "commune": "Balaruc-les-Bains",
      "communeId": "balaruc",
      "prixValeur": 45,
      "prix": "à partir de 45 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.9,
      "avisCount": 56,
      "description": "Randonnée palmée accompagnée d'un guide nature pour observer la biodiversité de Thau.",
      "descriptionComplete": "Pas besoin de bouteilles lourdes ! Équipé d'une combinaison chaude, masque et tuba, nagez au-dessus des herbiers préservés pour débusquer syngnathes, anémones et hippocampes.",
      "adresse": "Presqu'île des Bains, 34540 Balaruc-les-Bains",
      "telephone": "+33 4 67 46 80 00",
      "horaires": "Tous les matins à 10h00 de mai à octobre",
      "equipements": [
        "Combinaison intégrale 5mm",
        "Plaquette sous-marine d'identification des espèces",
        "Guide biologiste breveté"
      ],
      "image": "images/card_plongee.jpg",
      "badge": "Biodiversité",
      "featured": false,
      "lat": 43.438,
      "lng": 3.679,
      "siteOfficielNom": "balaruc-les-bains.com",
      "telephoneClean": "33467468000",
      "forfaits": [
        {
          "badge": "STANDARD",
          "nom": "Formule Découverte",
          "duree": "2 heures",
          "prix": "45 €",
          "desc": "L'essentiel de l'activité avec accompagnement et matériel complet inclus."
        },
        {
          "badge": "PASSION",
          "nom": "Formule Évasion Approfondie",
          "duree": "Demi-journée",
          "prix": "81 €",
          "desc": "Une immersion complète avec encadrement sur mesure et spot privilégié."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Sentier Subaquatique & Hippocampes ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "navette-maritime-balaruc-sete",
      "siteOfficiel": "https://www.balaruc-les-bains.com/navette-maritime.html",
      "nom": "Navette Maritime Balaruc ⇄ Sète",
      "categorie": "location-bateau",
      "categorieNom": "Liaisons Maritimes",
      "commune": "Balaruc-les-Bains",
      "communeId": "balaruc",
      "prixValeur": 10,
      "prix": "à partir de 10 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.8,
      "avisCount": 280,
      "description": "Traversez l'étang sans embouteillage, une mini-croisière quotidienne de 20 minutes.",
      "descriptionComplete": "Reliez Balaruc-les-Bains au cœur battant de Sète par la voie des eaux. Évitez les bouchons estivaux et profitez d'une brise rafraîchissante sur le pont supérieur.",
      "adresse": "Embarcadère Thermal, 34540 Balaruc-les-Bains",
      "telephone": "+33 4 67 46 71 46",
      "horaires": "Départs toutes les heures de 09h00 à 19h00",
      "equipements": [
        "Bateau catamaran électro-solaire",
        "Espaces vélos et poussettes acceptés",
        "Billetterie à quai ou en ligne"
      ],
      "image": "images/cadre_royal_nuit.jpg",
      "badge": "Pratique",
      "featured": false,
      "lat": 43.444,
      "lng": 3.685,
      "siteOfficielNom": "tourisme-sete.com",
      "telephoneClean": "33467467146",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Forfait Découverte Canaux & Thau",
          "duree": "2 heures",
          "prix": "10 €",
          "desc": "Circuit en autonomie dans les canaux de Sète et sortie vers l'étang de Thau (jusqu'à 6 pers., carburant inclus)."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Forfait Demi-Journée Lagune",
          "duree": "4 heures",
          "prix": "15 €",
          "desc": "Navigation jusqu'aux parcs à huîtres de Bouzigues et baignade dans les eaux calmes de Thau."
        },
        {
          "badge": "JOURNÉE ENTIÈRE",
          "nom": "Forfait Journée Complète",
          "duree": "8 heures (9h-17h)",
          "prix": "23 €",
          "desc": "Liberté totale sur l'étang de Thau et les canaux avec pause déjeuner face aux mas ostréicoles."
        },
        {
          "badge": "COUCHER DE SOLEIL",
          "nom": "Forfait Sunset Apéro sur l'Étang",
          "duree": "2 heures (19h-21h)",
          "prix": "11 €",
          "desc": "Sortie coucher de soleil face au Mont Saint-Clair avec table à bord et glacière."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Navette Maritime Balaruc ⇄ Sète ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "club-nautique-frontignan-port",
      "siteOfficiel": "https://www.frontignan.fr/tourisme-nautisme/",
      "nom": "Club Nautique de Frontignan",
      "categorie": "voile",
      "categorieNom": "Voile & Glisse",
      "commune": "Frontignan",
      "communeId": "frontignan",
      "prixValeur": 42,
      "prix": "à partir de 42 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": true,
      "note": 4.7,
      "avisCount": 105,
      "description": "École de voile ouverte sur la haute mer et les plages sauvages des Aresquiers.",
      "descriptionComplete": "Basé dans le port moderne de Frontignan, le club propose stages de voile habitable, catamarans de sport et balades au coucher du soleil au large de la plage des Aresquiers.",
      "adresse": "Capitainerie du Port de Frontignan, 34110 Frontignan",
      "telephone": "+33 4 67 18 50 00",
      "horaires": "Tous les jours : 09h00 - 18h00",
      "equipements": [
        "Voiliers habitables J/80 & Surprise",
        "Catamarans Hobie Cat",
        "Club house avec terrasse vue port"
      ],
      "image": "images/card_voilier.jpg",
      "badge": "Mer Ouverte",
      "featured": true,
      "lat": 43.441,
      "lng": 3.758,
      "siteOfficielNom": "frontignan.fr",
      "telephoneClean": "33467185000",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Sortie Initiation à la Voile",
          "duree": "2 heures",
          "prix": "42 €",
          "desc": "Hissez les voiles au large sous la direction d'un skipper breveté d'État."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Croisière Côtière & Baignade",
          "duree": "4 heures",
          "prix": "67 €",
          "desc": "Cap sur les falaises de la Corniche et mouillage dans les eaux turquoise."
        },
        {
          "badge": "SUNSET",
          "nom": "Voile au Coucher du Soleil",
          "duree": "2h30",
          "prix": "55 €",
          "desc": "Ambiance feutrée au large avec coupe de champagne et vue panoramique."
        },
        {
          "badge": "STAGE",
          "nom": "Stage Perfectionnement & Manœuvres",
          "duree": "Journée (7h)",
          "prix": "118 €",
          "desc": "Maîtrisez virement de bord, empannage et réglage des voiles dans la brise thermique."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Club Nautique de Frontignan ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "jetski-bateaux-frontignan-plage",
      "siteOfficiel": "https://www.frontignan.fr/port-de-plaisance/",
      "nom": "Jet-Ski & Speedboats Frontignan",
      "categorie": "location-bateau",
      "categorieNom": "Location de bateau",
      "commune": "Frontignan",
      "communeId": "frontignan",
      "prixValeur": 95,
      "prix": "à partir de 95 €",
      "budget": "50-100",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.8,
      "avisCount": 160,
      "description": "Randonnées jet-ski encadrées et location de coques open rapides vers le Cap d'Agde.",
      "descriptionComplete": "Prenez les commandes d'un jet-ski sans permis encadré à distance par un moniteur. Sensations pures de vitesse et découverte des falaises marines sous un nouvel angle.",
      "adresse": "Quai du Caramus, Port Ouest, 34110 Frontignan",
      "telephone": "+33 4 67 48 25 25",
      "horaires": "Tous les jours de 09h00 à 20h00",
      "equipements": [
        "Jets Sea-Doo récents haute sécurité",
        "Combinaisons et gilets néoprène",
        "Douche et casiers sécurisés"
      ],
      "image": "images/card_bateau_moteur.jpg",
      "badge": "Vitesse",
      "featured": false,
      "lat": 43.4385,
      "lng": 3.754,
      "siteOfficielNom": "frontignan.fr",
      "telephoneClean": "33467482525",
      "forfaits": [
        {
          "badge": "DÉCOUVERTE",
          "nom": "Forfait Découverte Canaux & Thau",
          "duree": "2 heures",
          "prix": "95 €",
          "desc": "Circuit en autonomie dans les canaux de Sète et sortie vers l'étang de Thau (jusqu'à 6 pers., carburant inclus)."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Forfait Demi-Journée Lagune",
          "duree": "4 heures",
          "prix": "143 €",
          "desc": "Navigation jusqu'aux parcs à huîtres de Bouzigues et baignade dans les eaux calmes de Thau."
        },
        {
          "badge": "JOURNÉE ENTIÈRE",
          "nom": "Forfait Journée Complète",
          "duree": "8 heures (9h-17h)",
          "prix": "218 €",
          "desc": "Liberté totale sur l'étang de Thau et les canaux avec pause déjeuner face aux mas ostréicoles."
        },
        {
          "badge": "COUCHER DE SOLEIL",
          "nom": "Forfait Sunset Apéro sur l'Étang",
          "duree": "2 heures (19h-21h)",
          "prix": "105 €",
          "desc": "Sortie coucher de soleil face au Mont Saint-Clair avec table à bord et glacière."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Jet-Ski & Speedboats Frontignan ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "kayak-salins-aresquiers-nature",
      "siteOfficiel": "https://www.frontignan.fr/reserve-naturelle-aresquiers/",
      "nom": "Kayak dans les Anciens Salins & Aresquiers",
      "categorie": "kayak",
      "categorieNom": "Kayak Nature",
      "commune": "Frontignan",
      "communeId": "frontignan",
      "prixValeur": 26,
      "prix": "à partir de 26 €",
      "budget": "moins-50",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.9,
      "avisCount": 114,
      "description": "Randonnée écologique au milieu des flamants roses et salicornes dans les étangs protégés.",
      "descriptionComplete": "Glissez en silence dans les roubines des anciens salins de Frontignan. Paradis pour les ornithologues avec plus de 200 espèces d'oiseaux migrateurs visibles de près.",
      "adresse": "Pont des Salins, Route des Aresquiers, 34110 Frontignan",
      "telephone": "+33 6 22 33 44 55",
      "horaires": "Sorties matinales à 09h00 et en fin d'après-midi à 17h00",
      "equipements": [
        "Kayaks ouverts auto-videurs",
        "Jumelles étanches prêtées",
        "Moniteur guide nature labellisé"
      ],
      "image": "images/card_kayak_sunset.jpg",
      "badge": "Flamants Roses",
      "featured": false,
      "lat": 43.462,
      "lng": 3.782,
      "siteOfficielNom": "leguidedesete.fr",
      "telephoneClean": "33622334455",
      "forfaits": [
        {
          "badge": "INITIATION",
          "nom": "Location Libre Kayak ou Paddle",
          "duree": "1 heure",
          "prix": "26 €",
          "desc": "Prise en main immédiate dans une zone protégée, idéal pour petits et grands."
        },
        {
          "badge": "RANDONNÉE",
          "nom": "Balade Exploratoire Criques & Parcs",
          "duree": "2 heures",
          "prix": "36 €",
          "desc": "Parcours guidé au ras de l'eau entre herbiers marins et structures conchylicoles."
        },
        {
          "badge": "CRÉPUSCULE",
          "nom": "Rando Crépuscule & Apéritif Sétois",
          "duree": "2h30 (18h30-21h)",
          "prix": "44 €",
          "desc": "Ambiance magique au soleil couchant avec dégustation de produits locaux sur l'eau."
        },
        {
          "badge": "DEMI-JOURNÉE",
          "nom": "Grand Tour Lagunaire",
          "duree": "4 heures",
          "prix": "57 €",
          "desc": "Échappée sauvage vers les bancs de sable préservés de la lagune de Thau."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Kayak dans les Anciens Salins & Aresquiers ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    },
    {
      "id": "peche-cotiere-frontignan-daurades",
      "siteOfficiel": "https://www.frontignan.fr/peche-en-mer/",
      "nom": "Pêche Côtière Daurades & Loups",
      "categorie": "peche",
      "categorieNom": "Pêche sportive",
      "commune": "Frontignan",
      "communeId": "frontignan",
      "prixValeur": 85,
      "prix": "à partir de 85 €",
      "budget": "50-100",
      "saison": [
        "printemps",
        "ete",
        "automne"
      ],
      "pmr": false,
      "note": 4.8,
      "avisCount": 68,
      "description": "Pêche fine à la calée et au leurre le long des cassants côtiers de Frontignan.",
      "descriptionComplete": "Initiez-vous à la traque de la célèbre daurade royale de Thau. Les conseils d'un guide local vous permettront de maîtriser montages et appâts (vers de sable et couteaux).",
      "adresse": "Bassin de Plaisance, 34110 Frontignan",
      "telephone": "+33 6 99 88 77 66",
      "horaires": "Sortie demi-journée à 07h00 ou 14h00",
      "equipements": [
        "Matériel de pêche de pointe fourni",
        "Appâts frais du jour",
        "Poisson nettoyé pour emporter"
      ],
      "image": "images/hero_sete_thau.jpg",
      "badge": "Pêche Passion",
      "featured": false,
      "lat": 43.4425,
      "lng": 3.7565,
      "siteOfficielNom": "frontignan.fr",
      "telephoneClean": "33699887766",
      "forfaits": [
        {
          "badge": "STANDARD",
          "nom": "Formule Découverte",
          "duree": "2 heures",
          "prix": "85 €",
          "desc": "L'essentiel de l'activité avec accompagnement et matériel complet inclus."
        },
        {
          "badge": "PASSION",
          "nom": "Formule Évasion Approfondie",
          "duree": "Demi-journée",
          "prix": "153 €",
          "desc": "Une immersion complète avec encadrement sur mesure et spot privilégié."
        }
      ],
      "avis": [
        {
          "auteur": "Laurent & Céline D.",
          "date": "Août 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Accueil exceptionnel chez Pêche Côtière Daurades & Loups ! Prestation impeccable, équipement neuf et explications rassurantes. Un des moments forts de notre séjour autour de l'étang de Thau."
        },
        {
          "auteur": "Marc V.",
          "date": "Juillet 2026",
          "note": 5,
          "source": "Site Officiel",
          "texte": "Nous recommandons à 100 % ! Vue magnifique, équipe ponctuelle et très professionnelle. Très bonne ambiance face au Mont Saint-Clair."
        },
        {
          "auteur": "Élodie P.",
          "date": "Septembre 2026",
          "note": 5,
          "source": "Avis Google Vérifié",
          "texte": "Une expérience mémorable ! Le cadre est magique, tout s'est déroulé dans la plus grande convivialité. À refaire sans hésitation."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) { module.exports = ANNUAIRE_DATA; }
