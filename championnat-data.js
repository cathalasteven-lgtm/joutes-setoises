// Données officielles de la Ligue des Joutes Languedociennes (Saison 2026)
// Comprend le programme des tournois, le classement et la liste détaillée des participants.

const DEFAULT_CHAMPIONNAT_DATA = {
  saison: "2026",
  derniereMiseAJour: "Août 2026 - Clôture de la Saint-Louis",
  
  // Classement général et liste des jouteurs engagés
  participants: [
    {
      id: "j1",
      nom: "Valentin Casenove",
      societe: "Lance Amicale Sétoise (LAS)",
      ville: "Sète",
      categorie: "Lourds",
      points: 84,
      victoires: 2,
      passesGagnees: 22,
      rang: 1,
      statut: "Sacré Vainqueur Saint-Louis 2026",
      historique: "1er sacre suprême à la Saint-Louis 2026, vainqueur après l'orage."
    },
    {
      id: "j2",
      nom: "Thibaut Lognos",
      societe: "Société Nautique des Jouteurs Agathois (SNJA)",
      ville: "Agde",
      categorie: "Lourds",
      points: 72,
      victoires: 2,
      passesGagnees: 19,
      rang: 2,
      statut: "Finaliste Saint-Louis 2026",
      historique: "Fils de la légende Thierry Lognos, vainqueur du Tournoi d'Agde."
    },
    {
      id: "j3",
      nom: "Mickaël Wolff",
      societe: "Nouvelle Lance Mézoise (NLM)",
      ville: "Mèze",
      categorie: "Lourds",
      points: 66,
      victoires: 1,
      passesGagnees: 17,
      rang: 3,
      statut: "Vainqueur Saint-Louis 2025",
      historique: "Colosse de l'étang de Thau, maître de la fente arrière."
    },
    {
      id: "j4",
      nom: "Sylvio Cuciniello",
      societe: "Société des Jouteurs Frontignanais (SJF)",
      ville: "Frontignan",
      categorie: "Lourds",
      points: 60,
      victoires: 1,
      passesGagnees: 15,
      rang: 4,
      statut: "Vainqueur Coupe de Frontignan 2026",
      historique: "Vainqueur Saint-Louis 2016, spécialiste du canal des Capucins."
    },
    {
      id: "j5",
      nom: "Jérôme Barthod",
      societe: "Lance Sportive Palavasienne (LSP)",
      ville: "Palavas-les-Flots",
      categorie: "Lourds",
      points: 58,
      victoires: 1,
      passesGagnees: 16,
      rang: 5,
      statut: "Vainqueur Saint-Louis 2024",
      historique: "Poids lourd redouté du canal du Lez, fente ultra-basse."
    },
    {
      id: "j6",
      nom: "Benjamin Arnau",
      societe: "Lance Amicale Sétoise (LAS)",
      ville: "Sète",
      categorie: "Lourds",
      points: 52,
      victoires: 1,
      passesGagnees: 14,
      rang: 6,
      statut: "Double vainqueur Saint-Louis (2014, 2022)",
      historique: "Lignée sétoise d'excellence, pilier de la tintaine rouge."
    },
    {
      id: "j7",
      nom: "Maxime Dalmon",
      societe: "Balaruc Société Nautique (BSN)",
      ville: "Balaruc-les-Bains",
      categorie: "Moyens",
      points: 48,
      victoires: 1,
      passesGagnees: 13,
      rang: 7,
      statut: "1er au classement Moyens",
      historique: "Prodige balarucois en pleine ascension vers les lourds."
    },
    {
      id: "j8",
      nom: "Simon Caselli",
      societe: "Lance Amicale Sétoise (LAS)",
      ville: "Sète",
      categorie: "Lourds",
      points: 45,
      victoires: 0,
      passesGagnees: 12,
      rang: 8,
      statut: "Double vainqueur Saint-Louis (2017, 2023)",
      historique: "L'un des jouteurs les plus titrés de la dernière décennie."
    },
    {
      id: "j9",
      nom: "David Aprile",
      societe: "Lance Sportive Palavasienne (LSP)",
      ville: "Palavas-les-Flots",
      categorie: "Lourds",
      points: 42,
      victoires: 0,
      passesGagnees: 11,
      rang: 9,
      statut: "Quadruple vainqueur Saint-Louis",
      historique: "Légende vivante de Palavas, 4 sacres au Cadre Royal (2009, 2013, 2015, 2016)."
    },
    {
      id: "j10",
      nom: "David Lopez",
      societe: "Pavois Agathois (PA)",
      ville: "Agde",
      categorie: "Lourds",
      points: 38,
      victoires: 0,
      passesGagnees: 10,
      rang: 10,
      statut: "Vainqueur Saint-Louis 2018",
      historique: "Grande puissance d'impact sur le plan d'eau de la Tamarissière."
    },
    {
      id: "j11",
      nom: "Sébastien Abellan",
      societe: "Jeune Lance Sétoise (JLS)",
      ville: "Sète",
      categorie: "Lourds",
      points: 36,
      victoires: 0,
      passesGagnees: 9,
      rang: 11,
      statut: "Double vainqueur Saint-Louis (2003, 2019)",
      historique: "Style pur sétois, technique chirurgicale au plastron."
    },
    {
      id: "j12",
      nom: "Fabien Pugliano",
      societe: "Avenir des Jouteurs Sétois (AJS)",
      ville: "Sète",
      categorie: "Moyens",
      points: 32,
      victoires: 1,
      passesGagnees: 8,
      rang: 12,
      statut: "Vainqueur Tournoi de Mèze Moyens",
      historique: "Jeune espoir sétois formé à l'école de joutes de la Pointe Courte."
    },
    {
      id: "j13",
      nom: "Loïc Cerrato",
      societe: "Jeune Lance Graulenne (JLG)",
      ville: "Le Grau-du-Roi",
      categorie: "Moyens",
      points: 28,
      victoires: 0,
      passesGagnees: 7,
      rang: 13,
      statut: "Finaliste Tournoi du Grau-du-Roi",
      historique: "Ambassadeur des joutes gardoises au Cadre Royal."
    },
    {
      id: "j14",
      nom: "Florian Carin",
      societe: "Société des Jouteurs Marseillanais (SJM)",
      ville: "Marseillan",
      categorie: "Seniors",
      points: 26,
      victoires: 1,
      passesGagnees: 8,
      rang: 14,
      statut: "Leader catégorie Seniors",
      historique: "Vainqueur du Critérium de l'Étang de Thau."
    },
    {
      id: "j15",
      nom: "Anthony Betti",
      societe: "Nouvelle Lance Mézoise (NLM)",
      ville: "Mèze",
      categorie: "Seniors",
      points: 24,
      victoires: 0,
      passesGagnees: 6,
      rang: 15,
      statut: "Demi-finaliste Tournoi de Frontignan",
      historique: "Héritier de la tradition mézoise de Bernard Betti."
    },
    {
      id: "j16",
      nom: "Théo Valette",
      societe: "Pavois d'Or Sète (POS)",
      ville: "Sète",
      categorie: "Seniors",
      points: 20,
      victoires: 0,
      passesGagnees: 5,
      rang: 16,
      statut: "Quart-de-finaliste Saint-Louis",
      historique: "Nouvelle recrue talentueuse du Pavois d'Or."
    }
  ],

  // Programme officiel des tournois de la saison
  tournois: [
    {
      id: "t1",
      nom: "282e Grand Prix de la Saint-Louis (Lourds & Moyens)",
      date: "Lundi 24 Août 2026",
      lieu: "Sète - Cadre Royal",
      categorie: "Lourds & Moyens",
      statut: "Terminé",
      vainqueur: "Valentin Casenove (LAS)",
      finaliste: "Thibaut Lognos (SNJA)",
      description: "Le tournoi suprême de l'année. Interrompu 2h par un orage cataclysmique, reprise en nocturne à 20h30.",
      participants: [
        "Valentin Casenove", "Thibaut Lognos", "Mickaël Wolff", "Sylvio Cuciniello",
        "Jérôme Barthod", "Benjamin Arnau", "Simon Caselli", "David Aprile", "David Lopez", "Sébastien Abellan"
      ]
    },
    {
      id: "t2",
      nom: "Tournoi d'Agde - Grand Prix de la Tamarissière",
      date: "Dimanche 16 Août 2026",
      lieu: "Agde - Canal du Midi / Hérault",
      categorie: "Lourds",
      statut: "Terminé",
      vainqueur: "Thibaut Lognos (SNJA)",
      finaliste: "Valentin Casenove (LAS)",
      description: "Grand duel agathois disputé dans une ambiance survoltée devant plus de 3000 spectateurs.",
      participants: [
        "Thibaut Lognos", "Valentin Casenove", "David Lopez", "Jérôme Barthod", "Sylvio Cuciniello", "Benjamin Arnau"
      ]
    },
    {
      id: "t3",
      nom: "Tournoi Officiel de Balaruc-les-Bains",
      date: "Dimanche 9 Août 2026",
      lieu: "Balaruc - Bord d'Étang de Thau",
      categorie: "Moyens & Lourds",
      statut: "Terminé",
      vainqueur: "Maxime Dalmon (BSN)",
      finaliste: "Fabien Pugliano (AJS)",
      description: "Triomphe local pour le balarucois Maxime Dalmon devant son public.",
      participants: [
        "Maxime Dalmon", "Fabien Pugliano", "Loïc Cerrato", "Anthony Betti", "Théo Valette"
      ]
    },
    {
      id: "t4",
      nom: "Grand Prix de la Ville de Frontignan",
      date: "Dimanche 2 Août 2026",
      lieu: "Frontignan - Canal des Capucins",
      categorie: "Lourds",
      statut: "Terminé",
      vainqueur: "Sylvio Cuciniello (SJF)",
      finaliste: "Mickaël Wolff (NLM)",
      description: "Victoire de Cuciniello à domicile après une 5e passe spectaculaire.",
      participants: [
        "Sylvio Cuciniello", "Mickaël Wolff", "Jérôme Barthod", "Benjamin Arnau", "Simon Caselli"
      ]
    },
    {
      id: "t5",
      nom: "Tournoi de la Fête de Mèze",
      date: "Dimanche 26 Juillet 2026",
      lieu: "Mèze - Port des Joutes",
      categorie: "Toutes Catégories",
      statut: "Terminé",
      vainqueur: "Mickaël Wolff (NLM)",
      finaliste: "David Aprile (LSP)",
      description: "Ambiance huîtres et brasucade, Wolff intraitable sur ses terres.",
      participants: [
        "Mickaël Wolff", "David Aprile", "Valentin Casenove", "Fabien Pugliano", "Florian Carin"
      ]
    },
    {
      id: "t6",
      nom: "Coupe de Palavas-les-Flots",
      date: "Dimanche 19 Juillet 2026",
      lieu: "Palavas - Canal du Lez",
      categorie: "Lourds & Seniors",
      statut: "Terminé",
      vainqueur: "Jérôme Barthod (LSP)",
      finaliste: "Thibaut Lognos (SNJA)",
      description: "Barthod confirme sa suprématie sur le Lez face à l'agathois Lognos.",
      participants: [
        "Jérôme Barthod", "Thibaut Lognos", "David Aprile", "Florian Carin", "Théo Valette"
      ]
    },
    {
      id: "t7",
      nom: "Challenge National d'Automne (Ligue 2026-2027)",
      date: "Samedi 12 Septembre 2026",
      lieu: "Sète - Cadre Royal",
      categorie: "Lourds & Moyens",
      statut: "À venir",
      vainqueur: "—",
      finaliste: "—",
      description: "Tournoi d'ouverture de l'arrière-saison qualificatif pour le Championnat de France des Joutes.",
      participants: [
        "Valentin Casenove", "Thibaut Lognos", "Mickaël Wolff", "Sylvio Cuciniello",
        "Jérôme Barthod", "Benjamin Arnau", "Maxime Dalmon", "Fabien Pugliano"
      ]
    }
  ]
};

// Fonctions de stockage et gestion des données dynamiques
const CHAMPIONNAT_STORAGE_KEY = 'joutes_sete_championnat_data_v1';

function getChampionnatData() {
  try {
    const stored = localStorage.getItem(CHAMPIONNAT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && Array.isArray(parsed.participants) && Array.isArray(parsed.tournois)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Erreur lecture localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CHAMPIONNAT_DATA));
}

function saveChampionnatData(data) {
  try {
    localStorage.setItem(CHAMPIONNAT_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Erreur sauvegarde localStorage:", e);
    return false;
  }
}

function resetChampionnatData() {
  try {
    localStorage.removeItem(CHAMPIONNAT_STORAGE_KEY);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_CHAMPIONNAT_DATA));
}

// Validation et Import de nouvelles données
function parseImportedProgram(content) {
  content = (content || "").trim();
  if (!content) throw new Error("Le contenu fourni est vide.");

  // Essai 1 : JSON
  if (content.startsWith("{") || content.startsWith("[")) {
    try {
      const parsed = JSON.parse(content);
      // Format complet
      if (parsed.participants && parsed.tournois) {
        return {
          saison: parsed.saison || "2026 / Actualisé",
          derniereMiseAJour: "Importé le " + new Date().toLocaleDateString('fr-FR'),
          participants: normalizeParticipants(parsed.participants),
          tournois: normalizeTournois(parsed.tournois)
        };
      }
      // Liste de participants seulement
      if (Array.isArray(parsed)) {
        return {
          saison: "Saison Actualisée",
          derniereMiseAJour: "Importé le " + new Date().toLocaleDateString('fr-FR'),
          participants: normalizeParticipants(parsed),
          tournois: DEFAULT_CHAMPIONNAT_DATA.tournois
        };
      }
    } catch (err) {
      throw new Error("Format JSON invalide : " + err.message);
    }
  }

  // Essai 2 : CSV ou Lignes de texte
  // Format attendu par ligne : Nom;Societe;Ville;Categorie;Points
  // ou Nom, Societe, Ville
  const lines = content.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0 && !l.startsWith("#"));
  if (lines.length === 0) throw new Error("Aucune ligne valide trouvée dans le texte.");

  const newParticipants = [];
  lines.forEach((line, idx) => {
    // Séparateur ; ou virgule ou tabulation
    let parts = line.split(/[;\t]/);
    if (parts.length === 1 && line.includes(",")) {
      parts = line.split(",");
    }
    const nom = (parts[0] || "").trim();
    if (!nom || nom.toLowerCase() === "nom") return; // skip header

    const societe = (parts[1] || "Société Indépendante").trim();
    const ville = (parts[2] || "Bassin de Thau").trim();
    const categorie = (parts[3] || "Lourds").trim();
    const points = parseInt(parts[4], 10) || 0;

    newParticipants.push({
      id: "imported_" + (idx + 1),
      nom: nom,
      societe: societe,
      ville: ville,
      categorie: categorie,
      points: points,
      victoires: 0,
      passesGagnees: 0,
      rang: idx + 1,
      statut: "Jouteur Engagé",
      historique: "Inscrit au nouveau programme."
    });
  });

  if (newParticipants.length === 0) {
    throw new Error("Impossible d'extraire des participants depuis ce format de texte.");
  }

  // Trier par points décroissants
  newParticipants.sort((a, b) => b.points - a.points);
  newParticipants.forEach((p, idx) => p.rang = idx + 1);

  return {
    saison: "Saison Actualisée",
    derniereMiseAJour: "Importé le " + new Date().toLocaleDateString('fr-FR') + " (" + newParticipants.length + " participants)",
    participants: newParticipants,
    tournois: DEFAULT_CHAMPIONNAT_DATA.tournois
  };
}

function normalizeParticipants(list) {
  if (!Array.isArray(list)) return [];
  return list.map((p, idx) => ({
    id: p.id || ("j_" + (idx + 1)),
    nom: p.nom || p.name || "Jouteur Anonyme",
    societe: p.societe || p.club || "Société Inconnue",
    ville: p.ville || p.city || "Sète",
    categorie: p.categorie || p.category || "Lourds",
    points: typeof p.points === 'number' ? p.points : (parseInt(p.points, 10) || 0),
    victoires: typeof p.victoires === 'number' ? p.victoires : (parseInt(p.victoires, 10) || 0),
    passesGagnees: typeof p.passesGagnees === 'number' ? p.passesGagnees : 0,
    rang: idx + 1,
    statut: p.statut || "Jouteur Engagé",
    historique: p.historique || p.info || "Participant à la compétition."
  })).sort((a, b) => b.points - a.points).map((p, idx) => {
    p.rang = idx + 1;
    return p;
  });
}

function normalizeTournois(list) {
  if (!Array.isArray(list)) return [];
  return list.map((t, idx) => ({
    id: t.id || ("t_" + (idx + 1)),
    nom: t.nom || t.name || ("Tournoi " + (idx + 1)),
    date: t.date || "Date à préciser",
    lieu: t.lieu || t.location || "Cadre Royal",
    categorie: t.categorie || "Lourds",
    statut: t.statut || "À venir",
    vainqueur: t.vainqueur || "—",
    finaliste: t.finaliste || "—",
    description: t.description || "",
    participants: Array.isArray(t.participants) ? t.participants : []
  }));
}

// Export pour utilisation Node.js ou Navigateur
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DEFAULT_CHAMPIONNAT_DATA,
    getChampionnatData,
    saveChampionnatData,
    resetChampionnatData,
    parseImportedProgram
  };
}
