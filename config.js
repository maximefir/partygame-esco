/* =====================================================================
   🎉  CONFIG DE LA SOIRÉE  —  LE SEUL FICHIER À MODIFIER
   ---------------------------------------------------------------------
   Règles simples :
   - Chaque texte est entre guillemets "..."
   - Chaque élément d'une liste se termine par une virgule ,
   - Si un texte contient des guillemets, utilise plutôt des apostrophes ’
   - Les prénoms utilisés dans les duels doivent être ÉCRITS
     EXACTEMENT comme dans la liste "joueurs" (majuscules comprises).
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) FIREBASE  (Realtime Database)
   ---------------------------------------------------------------------
   Colle ici l'objet donné par la console Firebase.
   ⚠️ Vérifie que "databaseURL" est bien présent (sinon rien ne marche).
   Tant que ces valeurs ne sont pas remplies, l'app tourne en
   "MODE LOCAL" (test sur ton ordi uniquement, pas de synchro téléphones).
   --------------------------------------------------------------------- */
const firebaseConfig = {
  apiKey: "AIzaSyC_flmi7OUcIDLROearupboOSv2od-Rqd0",
  authDomain: "partygame-5c24c.firebaseapp.com",
  databaseURL: "https://partygame-5c24c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "partygame-5c24c",
  storageBucket: "partygame-5c24c.firebasestorage.app",
  messagingSenderId: "323126428878",
  appId: "1:323126428878:web:c00a7262b3276e94e03c9f",
  measurementId: "G-8DSDP4BPSJ"
};


const CONFIG = {

  /* -------------------------------------------------------------------
     2) INFOS GÉNÉRALES
     ------------------------------------------------------------------- */
  titreSoiree: "La Soirée des Légendes",

  // Dossier utilisé dans la base Firebase. Change-le (ex: "soiree-2026-10-29")
  // pour repartir d'une base vierge sans rien effacer.
  dossierBase: "soiree",


  /* -------------------------------------------------------------------
     3) JOUEURS PRÉSENTS
     ------------------------------------------------------------------- */
  joueurs: ["Max", "Benja", "Mich", "Jules", "Lozet", "Grem", "Louis"],


  /* -------------------------------------------------------------------
     4) JEU 1 — "QUI EST LE PLUS..."
     Une question par ligne. Chaque joueur vote pour 1 personne.
     ------------------------------------------------------------------- */
  quiEstLePlus: [
    "Qui tient le mieux l'alcool ?",
    "Qui est le roi de la mauvaise foi absolue ?",
    "Qui conduit le mieux ?",
    "À qui il ne faut JAMAIS laisser le contrôle de la musique ?",
    "Qui a l'hygiène la plus déplorable ?",
    "Qui deviendra le plus riche ici ?",
  ],


  /* -------------------------------------------------------------------
     5) JEU 2 — DUELS FACE-À-FACE
     Format : { question: "...", joueurA: "Prénom", joueurB: "Prénom" },
     joueurA = côté CYAN (gauche) / joueurB = côté ROSE (droite)
     ------------------------------------------------------------------- */
  duels: [
    { question: "Apocalypse zombie : tu fais équipe avec qui pour survivre ?",                     joueurA: "Jules", joueurB: "Mich"  },
    { question: "Débat sur un sujet qu'ils ne maîtrisent pas : qui gagne à l'usure et au bluff ?", joueurA: "Benja", joueurB: "Lozet" },
    { question: "Tu dois cacher un corps ou un gros secret à 3h du mat, qui tu appelles ?",         joueurA: "Grem",  joueurB: "Louis" },
    { question: "Qui est le plus susceptible de lâcher une dinguerie au pire moment ?",             joueurA: "Max",   joueurB: "Jules" },
    { question: "Combat 1v1 sur le ring : qui gagne ?",                                             joueurA: "Lozet", joueurB: "Mich"  },
  ],


  /* -------------------------------------------------------------------
     6) JEU 3 — QUI EST QUI ?
     Chaque joueur répond sur LUI-MÊME. Ce soir, toutes les réponses
     s'affichent en vrac et la table doit relier chaque réponse au bon prénom.
     Format : { titre, question, aide, exemple },
       titre    = court, affiché sur le grand écran
       question = posée sur le téléphone
       aide     = petite indication sous le champ (facultatif)
       exemple  = texte grisé dans le champ (facultatif)
     ------------------------------------------------------------------- */
  quiEstQui: [
    { titre: "Temps d'écran d'hier",       question: "Ton temps d'écran d'hier ?",                    aide: "iPhone : Réglages → Temps d'écran · Android : Réglages → Bien-être numérique", exemple: "5h12" },
    { titre: "Dernière branlette",         question: "Quand date ta dernière branlette ?",            aide: "",                                                                             exemple: "il y a 2 jours" },
    { titre: "Guilty pleasure musical",    question: "Ton guilty pleasure musical ?",                 aide: "Le son que tu écoutes en cachette… assume",                                    exemple: "Les Démons de Minuit" },
    { titre: "Dernière recherche Google",  question: "La dernière chose que tu as cherchée sur Google ?", aide: "Ouvre ton historique, pas de triche 👀",                                  exemple: "est-ce que les poissons dorment" },
    { titre: "Salaire actuel (ou espéré)", question: "Ton salaire actuel ? (espéré si tu es au chômdu 😉)", aide: "Net par mois",                                                       exemple: "2 100 €" },
  ],


  /* -------------------------------------------------------------------
     7) TEXTES DES AUTRES ÉTAPES (modifiables)
     {nom} est remplacé automatiquement par le prénom.
     ------------------------------------------------------------------- */
  // Le Tribunal : chaque joueur reçoit 1 cible secrète au hasard (façon Secret Santa)
  // et lui écrit UNE vérité. {nom} = la cible.
  texteTribunal: "Écris à {nom} une vérité, positive ou négative, ce que tu veux. Lâche-toi, c'est anonyme :",
  exempleTribunal: "Ex : Tu es tout le temps en retard. ATTENTION : ne mets pas le nom de la personne dans le texte :)",

  // Change ce mot pour refaire un tirage des cibles du Tribunal.
  // ⚠️ Ne le change plus (ni la liste des joueurs) une fois les liens envoyés !
  graineTribunal: "soiree-legendes",

  // Un gage ou t'affonnes : chaque joueur reçoit 1 autre cible au hasard et lui donne UN gage.
  // {nom} = la cible. Ce soir : on affiche le nom, puis le gage. Pas cap ? Il affonne.
  texteGage: "Donne à {nom} un gage à faire ce soir. S'il n'est pas cap… il affonne son verre 🍺",
  exempleGage: "Ex : Faire une déclaration d'amour à la personne de ton choix devant tout le monde.",

  texteTop3: "Ton Top 3 des filles que tu trouves les plus belles sur Liège (Prénom ou @Insta) :",

  texteVotePlus:  "Qui a géré ces temps-ci ?",
  texteVoteMoins: "Qui est en flop en ce moment ?",

  // true = on ne peut pas voter pour soi-même au Conseil de Tribu
  conseilInterdireAutoVote: true,


  /* -------------------------------------------------------------------
     8) PHOTO ROULETTE
     Chaque joueur poste 1 photo, ce soir on devine qui l'a postée.
     ------------------------------------------------------------------- */
  textePhotoRoulette: "Poste UNE photo (dossier, souvenir, screen, meme...). Ce soir, la table devra deviner que c'est toi qui l'as postée 🕵️",

  // true = impossible d'envoyer ses réponses sans photo
  photoObligatoire: true,


  /* -------------------------------------------------------------------
     9) LIENS PERSONNALISÉS
     Adresse publique de ton site (GitHub Pages), utilisée pour générer
     les liens à envoyer à chacun depuis l'écran admin (⚙️ → Liens).
     Exemple : "https://ton-pseudo.github.io/partygame/"
     Laisse "" pour utiliser automatiquement l'adresse de la page admin.
     ------------------------------------------------------------------- */
  urlSite: "https://maximefir.github.io/partygame-esco/",
};
