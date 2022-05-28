
// GAME SETUP
const wordList = ["abbey", "abhor", "abide", "abode", "abort", "about", "above", "abuse", "abyss", "aches", "acids", "acorn", "acres", "acrid", "acted", "actor", "acute", "adage", "adapt", "added", "adder", "adept", "admin", "admit", "adopt", "adore", "adorn", "adult", "aeons", "after", "again", "agent", "agile", "aging", "agony", "agree", "ahead", "aided", "aimed", "aired", "aisle", "alarm", "album", "alert", "algae", "alias", "alibi", "alien", "align", "alike", "alive", "alley", "allow", "alloy", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", "amend", "amity", "among", "ample", "amuse", "angel", "anger", "angle", "angry", "angst", "ankle", "annoy", "antic", "antsy", "anvil", "aorta", "apart", "aphid", "apple", "apply", "apron", "arena", "argon", "argue", "arise", "armed", "armor", "aroma", "arose", "array", "arrow", "arson", "ashes", "aside", "asked", "askew", "assay", "asset", "atlas", "atoms", "atone", "attic", "audio", "audit", "aught", "aunty", "aural", "auras", "avert", "avian", "avoid", "await", "awake", "award", "aware", "awash", "awful", "awoke", "axial", "bacon", "badge", "badly", "bagel", "baggy", "baked", "baker", "bakes", "balls", "banal", "bands", "banjo", "banks", "barge", "baron", "based", "bases", "basic", "basil", "basin", "basis", "batch", "bathe", "baton", "beach", "beady", "beans", "beard", "bears", "beast", "beefy", "beers", "began", "begin", "begun", "beige", "being", "belch", "belly", "below", "belts", "bench", "bends", "bendy", "beret", "berry", "bevel", "bible", "bicep", "bidet", "bigot", "biker", "binge", "bingo", "biome", "birch", "birds", "birth", "bison", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleed", "bleep", "blend", "bless", "blimp", "blind", "bling", "blink", "bliss", "blitz", "bloat", "blobs", "block", "bloke", "blood", "bloom", "blown", "blows", "blues", "bluff", "blunt", "blurb", "blurt", "blush", "board", "boast", "boats", "bodes", "bogey", "bogus", "boils", "bolts", "bombs", "bonds", "bones", "bongo", "books", "boost", "booth", "boots", "booze", "bored", "boron", "botch", "bound", "bowel", "bowls", "boxed", "boxer", "boxes", "brace", "braid", "brain", "brake", "brand", "brass", "brave", "bravo", "brawl", "brawn", "bread", "break", "breed", "briar", "bribe", "brick", "brief", "brine", "bring", "brink", "brisk", "broad", "broil", "broke", "broom", "broth", "brown", "brunt", "brush", "brute", "budge", "bugle", "build", "built", "bulbs", "bulge", "bulks", "bulky", "bulls", "bully", "bumps", "bumpy", "bunch", "bunny", "buoys", "burly", "burnt", "burps", "burst", "buses", "bushy", "buyer", "bytes", "cabin", "cable", "cacao", "cache", "caddy", "cadet", "cages", "caged", "cairn", "caked", "cakes", "camel", "cameo", "canal", "candy", "canes", "canoe", "canon", "caper", "carat", "cards", "carer", "cargo", "carry", "carve", "cased", "cases", "caste", "catch", "cater", "cause", "caves", "cease", "cello", "cells", "cents", "chafe", "chain", "chair", "chalk", "chant", "chaos", "charm", "chart", "chase", "cheap", "cheat", "check", "cheek", "cheer", "chefs", "chess", "chest", "chewy", "chick", "chief", "child", "chime", "chimp", "china", "chips", "chirp", "chive", "chock", "choir", "choke", "chomp", "chops", "chord", "chore", "chose", "chuck", "chunk", "churn", "chute", "cider", "cigar", "civil", "claim", "clamp", "clash", "clasp", "class", "claws", "clean", "clear", "clerk", "click", "cliff", "climb", "cloak", "clock", "clogs", "clone", "close", "cloth", "clots", "cloud", "clout", "clove", "clown", "clubs", "cluck", "clued", "clues", "clump", "coach", "coast", "coats", "cobra", "cocoa", "coded", "codes", "codex", "codon", "coils", "coins", "colds", "colon", "comet", "comic", "comma", "cones", "coped", "copes", "coral", "cores", "corks", "cough", "could", "count", "court", "coven", "cover", "coves", "cower", "crabs", "crack", "craft", "cramp", "crane", "crank", "crash", "crate", "crave", "crawl", "craze", "crazy", "creak", "cream", "creed", "creep", "creek", "crept", "cress", "crest", "cried", "crime", "crimp", "crisp", "croak", "crook", "crops", "cross", "crowd", "crown", "crows", "crude", "cruel", "crush", "crust", "crypt", "cubed", "cubes", "cubic", "cuffs", "cults", "cumin", "cured", "cures", "curls", "curly", "curry", "curse", "curve", "curvy", "cycle", "cynic", "cysts", "daily", "dairy", "daisy", "dales", "damns", "dance", "dandy", "dared", "dares", "darts", "dated", "dates", "daunt", "dawns", "dazed", "deals", "dealt", "death", "debit", "debts", "debug", "decay", "decks", "decor", "decoy", "deeds", "defer", "delay", "delve", "demon", "demos", "denim", "dense", "dents", "depot", "depth", "derby", "desks", "deter", "detox", "deuce", "devil", "dials", "diary", "diced", "diets", "digit", "dimly", "diner", "diode", "dirty", "disco", "discs", "ditch", "ditto", "diver", "dizzy", "docks", "dodge", "dodgy", "dogma", "doing", "dolls", "donor", "doors", "doped", "dopey", "dosed", "doses", "doubt", "dough", "doves", "dozed", "dozen", "draft", "drain", "drama", "drank", "drawn", "draws", "dread", "dream", "dress", "dried", "dries", "drift", "drill", "drink", "drips", "drive", "droid", "drone", "drool", "droop", "drops", "drove", "drown", "drugs", "druid", "drums", "drunk", "dryly", "duals", "ducks", "ducts", "duels", "duets", "dunes", "dusty", "dutch", "duvet", "dwarf", "dwell", "dying", "eager", "eagle", "early", "earns", "earth", "eased", "easel", "eaten", "ebony", "echos", "edged", "edges", "eerie", "eight", "eject", "elbow", "elder", "elect", "elite", "elope", "elude", "elves", "email", "embed", "ember", "emits", "emote", "empty", "enact", "ended", "endow", "enemy", "enjoy", "enrol", "ensue", "enter", "entry", "equal", "equip", "erase", "erect", "ergot", "erode", "erred", "error", "erupt", "essay", "ether", "ethic", "ethos", "evade", "evens", "event", "every", "evict", "exact", "exalt", "exams", "excel", "exert", "exile", "exist", "exits", "expel", "extra", "exude", "exult", "eyrie", "fable", "faced", "faces", "facet", "facts", "faded", "fades", "faint", "fairy", "faith", "faked", "fakes", "falls", "famed", "fancy", "fangs", "farce", "fared", "farms", "fatal", "fault", "fauna", "fazed", "fears", "feast", "fecal", "feces", "feign", "feint", "femur", "fence", "feral", "ferry", "fetch", "feuds", "fever", "fewer", "fibre", "field", "fiend", "fiery", "fifth", "fifty", "fight", "files", "films", "filth", "final", "finds", "fined", "fines", "fired", "fires", "firms", "first", "fishy", "fists", "fixed", "fixer", "fizzy", "flack","flags", "flail", "flair", "flake", "flaky", "flame", "flank", "flare", "flash", "flask", "flaws", "fleas", "flees", "fleet", "flesh", "flick", "fling", "float", "flood", "floor", "flour", "flown", "fluid", "focal", "focus", "folks", "fonts", "force", "forth", "forty", "forum", "found", "frank", "frame", "fraud", "fresh", "fried", "front", "frost", "fruit", "fuels", "fully", "funds", "funny", "gains", "games", "gamma", "gases", "gates", "gauge", "gears", "genes", "genre", "ghost", "giant","gifts", "girls", "given", "gives", "gland", "glass", "globe", "glory", "gloss", "glove", "glued", "goals", "goats", "going", "goods", "grace", "grade", "grain", "grams", "grand", "grant", "grape", "graph", "grasp", "grass", "grave", "great", "greek", "green", "greet", "grief", "grill", "grind", "grips", "gross", "group", "grove", "grown", "grows", "guard", "guess", "guest", "guide", "guild", "guilt", "habit", "hairs", "halls", "hands", "handy", "hangs", "happy", "harsh", "hated", "hates","haven", "hawks", "heads", "heard", "heart", "heavy", "hedge", "hello", "helps", "hence", "herbs", "highs", "hills", "hints", "hired", "hobby", "holds", "holes", "homes", "honey", "hooks", "hoped", "hopes", "horns", "horse", "hosts", "hotel", "hours", "house", "hover", "human", "hurts", "icons", "ideal", "ideas", "idiot", "image", "imply", "inbox", "incur", "index", "indie", "inner", "input", "intro", "issue", "items", "jeans", "jelly", "jewel", "joins", "joint", "jokes", "judge", "juice", "juicy", "jumps", "keeps", "kicks", "kills", "kinds", "kings", "knees", "knife", "knock", "knots", "known", "knows", "label", "lacks", "lakes", "lamps", "lands", "lanes", "large", "laser", "lasts", "later", "laugh", "layer", "leads", "leaks", "learn", "lease", "least", "leave", "legal", "lemon", "level", "lever", "light", "liked", "likes", "limbs", "limit", "lined", "linen", "liner", "lines", "links", "lions", "lists", "lived", "liver", "lives", "loads", "loans", "lobby", "local", "locks", "lodge", "logic", "logos", "looks", "loops", "loose", "lords", "loses", "loved", "lover", "loves", "lower", "loyal", "lucky", "lunar", "lunch", "lungs", "lying", "macro", "magic", "major", "maker", "makes", "males", "maple", "march", "marks", "marry", "masks", "match", "matte", "maybe", "mayor", "meals", "means", "meant", "medal", "media", "meets", "melee", "menus", "mercy", "merge", "merit", "merry", "messy", "metal", "meter", "metro", "micro", "midst", "might", "miles", "minds", "mines", "minor", "minus", "mixed", "mixer", "mixes", "model", "modem", "modes", "moist", "money", "month", "moral", "motor", "mount", "mouse", "mouth", "moved", "moves", "movie", "music", "myths", "nails", "naked", "named", "names", "nasal", "nasty", "naval", "needs", "nerve", "never", "newer", "newly", "nicer", "niche", "night", "ninja", "ninth", "noble", "nodes", "noise", "noisy", "norms", "north", "notch", "noted", "notes", "novel", "nurse", "nylon", "oasis", "occur", "ocean", "offer", "often", "older", "olive", "omega", "onion", "onset", "opens", "opera", "opted", "optic", "orbit", "order", "organ", "other", "ought", "ounce", "outer", "owned", "owner", "oxide", "packs", "pages", "pains", "paint", "pairs", "panel", "panic", "pants", "paper", "parks", "parts", "party", "pasta", "paste", "patch", "paths", "patio", "pause", "peace", "peach", "peaks", "pearl", "pedal", "peers", "perks", "pests", "petty", "phase", "phone", "photo", "piano", "picks", "piece", "piles", "pills", "pilot", "pinch", "pipes", "pitch", "pixel", "pizza", "place", "plain", "plane", "plans", "plant", "plate", "plays", "plaza", "plots", "plugs", "poems", "point", "poker", "polar", "poles", "polls", "pools", "porch", "pores", "ports", "posed", "poses", "posts", "pouch", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize", "probe", "prone", "proof", "props", "proud", "prove", "proxy", "psalm", "pulls", "pulse", "pumps", "punch", "pupil", "puppy", "purse", "queen", "queer", "query", "quest", "queue", "quick", "quiet", "quilt", "quite", "quote", "races", "racks", "radar", "radio", "rails", "rainy", "raise", "rally", "ranch", "range", "ranks", "rapid", "rated", "rates", "ratio", "razor", "reach", "react", "reads", "ready", "realm", "rebel", "refer", "reign", "relax", "relay", "renal", "renew", "reply", "reset", "resin", "retro", "rider", "rides", "ridge", "rifle", "right", "rigid", "rings", "rinse", "risen", "rises", "risks", "risky", "rival", "river", "roads", "robot", "rocks", "rocky", "rogue", "roles", "rolls", "roman", "rooms", "roots", "ropes", "roses", "rough", "round", "route", "royal", "rugby", "ruins", "ruled", "ruler", "rules", "rural", "sadly", "safer", "salad", "sales", "salon", "sandy", "satin", "sauce", "saved", "saves", "scale", "scalp", "scans", "scare", "scarf", "scary", "scene", "scent", "scoop", "scope", "score", "scout", "scrap", "screw", "seals", "seams", "seats", "seeds", "seeks", "seems", "sells", "sends", "sense", "serum", "serve", "setup", "seven", "sewer", "shade", "shaft", "shake", "shall", "shame", "shape", "share", "shark", "sharp", "sheep", "sheer", "sheet", "shelf", "shell", "shift", "shine", "shiny", "ships", "shirt", "shock", "shoes", "shook", "shoot", "shops", "shore", "short", "shots", "shown", "shows", "sides", "siege", "sight", "sigma", "signs", "silly", "since", "sites", "sixth", "sized", "sizes", "skies", "skill", "skins", "skirt", "skull", "slate", "slave", "sleek", "sleep", "slept", "slice", "slide", "slope", "slots", "small", "smart", "smell", "smile", "smoke", "snack", "snake", "sneak", "socks", "soils", "solar", "solid", "solve", "songs", "sonic", "sorry", "sorts", "souls", "sound", "south", "space", "spare", "spark", "speak", "speed", "spell", "spend", "spent", "spice", "spicy", "spike", "spine", "spite", "split", "spoke", "spoon", "sport", "spots", "spray", "squad", "stack", "staff", "stage", "stain", "stake", "stamp", "stand", "stark", "stars", "start", "state", "stays", "steak", "steal", "steam", "steel", "steep", "steer", "stems", "steps", "stick", "stiff", "still", "stock", "stole", "stone", "stood", "stool", "stops", "store", "storm", "story", "stove", "strap", "straw", "strip", "stuck", "study", "stuff", "style", "sucks", "sugar", "suite", "suits", "sunny", "super", "surge", "sushi", "swear", "sweat", "sweet", "swept", "swift", "swing", "swiss", "sword", "syrup", "table", "taken", "takes", "tales", "talks", "tanks", "tapes", "tasks", "taste", "tasty", "taxes", "teach", "teams", "tears", "teeth", "tempo", "tends", "tenth", "tents", "terms", "tests", "texts", "thank", "theft", "their", "theme", "there", "these", "thick", "thief", "thigh", "thing", "think", "third", "those", "three", "threw", "throw", "thumb", "tiger", "tight", "tiles", "timer", "times", "tired", "tires", "title", "toast", "today", "token", "tones", "tools", "tooth", "topic", "torch", "total", "touch", "tough", "tours", "towel", "tower", "towns", "toxic", "trace", "track", "tract", "trade", "trail", "train", "trait", "trans", "traps", "trash", "treat", "trees", "trend", "trial", "tribe", "trick", "tried", "tries", "trips", "trout", "truck", "truly", "trump", "trunk", "trust", "truth", "tubes", "tuned", "tunes", "turbo", "turns", "tweet", "twice", "twins", "twist", "types", "tyres", "ultra", "uncle", "under", "union", "unite", "units", "unity", "until", "upper", "upset", "urban", "urged", "urine", "usage", "users", "using", "usual", "vague", "valid", "value", "valve", "vault", "vegan", "veins", "vents", "venue", "verse", "video", "views", "vinyl", "viral", "virus", "visit", "vital", "vivid", "vocal", "vodka", "voice", "volts", "voted", "voter", "votes", "wages", "wagon", "waist", "walks", "walls", "wants", "warns", "waste", "watch", "water", "watts", "waves", "wears", "weeds", "weeks", "weigh", "weird", "wells", "whale", "wheat", "wheel", "where", "which", "while", "white", "whole", "whose", "wider", "widow", "width", "winds", "wines", "wings", "wiped", "wired", "wires", "witch", "wives", "woman", "women", "woods", "words", "works", "world", "worms", "worry", "worse", "worst", "worth", "would", "wound", "wrath", "wrist", "write", "wrong", "wrote", "yacht", "yards", "years", "yeast", "yield", "young", "yours", "youth", "zones"];


// Retrieve random daily word from html file
const chosenWord = $(".daily-word").text();
const chosenLetters = chosenWord.split("");
console.log(chosenWord);

let scoresChart;

const date = new Date();
const shortDate = date.toLocaleDateString("en-GB");
const shortDateStarted = shortDate + " started";
const shortDateCompleted = shortDate + " completed";

console.log("binary search enabled");

// Set up remaining game letiables
// Create letiables not held in localStorage
let userGuess = [];
let feedbackPresent = false;
let chartColours = ["grey", "grey", "grey", "grey", "grey", "grey"];
const letterKeys = $(".letter-key").text();

// Obtain other letiables from local localStorage
// Get game colours
let colour1 = JSON.parse(localStorage.getItem("colour1")) ?? "blue";
let colour2 = JSON.parse(localStorage.getItem("colour2")) ?? "yellow";

// Determine if daily challenge started
let gameRound;
const challengeStarted = JSON.parse(localStorage.getItem(shortDateStarted)) ?? "N";
if (challengeStarted === "Y") {
  // Find game round user reached
  gameRound = parseInt(JSON.parse(localStorage.getItem("gameRound")));
  // Load entered tiles
  loadTiles();
  // Load entered keys
  loadKeys();
} else {
  gameRound = 1;
}

// Get score for daily challenge today
let scoreToday = JSON.parse(localStorage.getItem("scoreToday")) ?? "";

// Get list of saved scores
// localStorage.removeItem("dailyChallengeScoresList");
const dailyChallengeScoresList = JSON.parse(localStorage.getItem("dailyChallengeScoresList")) ?? [];

// Get number of times played
// localStorage.removeItem("dailyChallengeTimesPlayed");
let dailyChallengeTimesPlayed = parseInt(JSON.parse(localStorage.getItem("dailyChallengeTimesPlayed")) ?? "0");

// Get current streak of wins player is on
// localStorage.removeItem("dailyChallengeCurrentStreak");
let dailyChallengeCurrentStreak = parseInt(JSON.parse(localStorage.getItem("dailyChallengeCurrentStreak")) ?? "0");

// Get max streak of wins player has had
// localStorage.removeItem("dailyChallengeMaxStreak");
let dailyChallengeMaxStreak = parseInt(JSON.parse(localStorage.getItem("dailyChallengeMaxStreak")) ?? "0");

// Get the player's scores distribution from won games
// localStorage.removeItem("dailyChallengeScoreDistribution");
let dailyChallengeScoreDistribution = JSON.parse(localStorage.getItem("dailyChallengeScoreDistribution")) ?? [0, 0, 0, 0, 0, 0];

// Update colour of logo and guide cards with colours chosen by user
$("#o-heading").addClass(colour1 + "-letter");
$("#d-heading").addClass(colour2 + "-letter");
$("#e-heading").addClass(colour1 + "-letter");

$(".card-1-letter-1").addClass(colour1);
$(".card-2-letter-3").addClass(colour2);

// Determine if daily challenge completed
let gameOn;
const challengeCompleted = JSON.parse(localStorage.getItem(shortDateCompleted)) ?? "N";
if (challengeCompleted === "Y") {
  gameOn = false;
  chartColours[scoreToday - 1] = $("#o-heading").css("color");
  createChart(dailyChallengeScoreDistribution, chartColours);
  showStats();
  $("#options-menu").fadeOut(300);
  $("#score-chart").fadeIn(300);
  $("#main-body").css("opacity", 0.5);
} else {
  gameOn = true;
}


// Set up navbar interactions

// Hover colour classes
// Change colour of guide button when hovered over
$(".guide-tag").hover(function() {
  $(".guide-tag").addClass("hover");
}, function() {
  $(".guide-tag").removeClass("hover");
});

// Change colour of options button when hovered over
$(".options-tag").hover(function() {
  $(".options-tag").addClass("hover");
}, function() {
  $(".options-tag").removeClass("hover");
});

// Change colour of dropdown-options when hovered over
$(".dropdown-options").hover(function() {
  $(this).addClass("hover");
}, function() {
  $(this).removeClass("hover");
});


// Change border colour of each scheme option when hovered cover
let hoveredScheme = "";

$(".scheme").hover(function() {

  if ($(this).hasClass("scheme-1")) {
    hoveredScheme = ".scheme-1";
  } else if ($(this).hasClass("scheme-2")) {
    hoveredScheme = ".scheme-2";
  } else if ($(this).hasClass("scheme-3")) {
    hoveredScheme = ".scheme-3";
  } else {
    hoveredScheme = ".scheme-4";
  }

  $(hoveredScheme).addClass("scheme-hover");

}, function() {
  $(hoveredScheme).removeClass("scheme-hover");
});


// Show popups when correct nav-tag is clicked
let popupPage = "";

$(".nav-tag").click(function() {
  gameOn = false;

  if ($(this).hasClass("guide-tag")) {
    popupPage = "#instructions";
    $("#main-body").animate({opacity: 0.5}, 200);
  } else {
    popupPage = "#options-menu";
  }
  $(popupPage).fadeIn(500);
});

// Close correct popup when X is clicked
$(".close-window").click(function() {
  gameOn = true;
  if ($(this).hasClass("close-instructions")) {
    popupPage = "#instructions";
  } else if ($(this).hasClass("close-dropdown")) {
    popupPage = "#options-menu";
  } else {
    popupPage = "#options-page";
  }
  $(popupPage).fadeOut(500);
  $("#main-body").animate({opacity: 1}, 200);
});

// Close stats window
$(".close-stats").click(function() {
  $("#score-chart").fadeOut(500);
  $("#main-body").animate({opacity: 1}, 200);
  scoresChart.destroy();
});

// Open options page to choose theme when Change Theme is clicked
$("#change-theme").click(function() {
  $("#options-menu").fadeOut(300);
  $("#options-page").fadeIn(500);
  $("#main-body").animate({opacity: 0.5}, 200);
});

// Open game stats page to show player in game statistics
$("#game-stats").click(function() {
  if (challengeCompleted === "Y") {
    chartColours[scoreToday - 1] = $("#o-heading").css("color");
  } else {
    chartColours = ["grey", "grey", "grey", "grey", "grey", "grey"];
  }
  createChart(dailyChallengeScoreDistribution, chartColours);
  showStats();
  $("#options-menu").fadeOut(300);
  $("#score-chart").fadeIn(500);
  $("#main-body").animate({opacity: 0.5}, 200);
});

// Change game theme depending upon the colour scheme clicked on and close popup when scheme selected
let newColour;
let newColour2;

$(".scheme").click(function() {

  let oldColour1 = colour1;
  let oldColour2 = colour2;

  if ($(this).hasClass("scheme-1")) {
    newColour1 = "blue";
    newColour2 = "yellow";
  } else if ($(this).hasClass("scheme-2")) {
    newColour1 = "red";
    newColour2 = "pink";
  } else if ($(this).hasClass("scheme-3")) {
    newColour1 = "green";
    newColour2 = "yellow";
  } else {
    newColour1 = "purple";
    newColour2 = "bright-pink";
  }

  if ([oldColour1, oldColour2] != [newColour1, newColour2]) {

    $(".card-1-letter-1").removeClass(oldColour1);
    $(".card-1-letter-1").addClass(newColour1);
    $(".card-2-letter-3").removeClass(oldColour2);
    $(".card-2-letter-3").addClass(newColour2);

    let keyArray = $(".letter-key").text().split("");
    keyArray.forEach(function(letter) {
      let key = $("#" + letter);
      if (key.hasClass(oldColour1)) {
        key.removeClass(oldColour1);
        key.addClass(newColour1)
      } else if (key.hasClass(oldColour2) && oldColour2 != newColour2) {
        key.removeClass(oldColour2);
        key.addClass(newColour2)
      }
    });

    for (let j = 1; j < gameRound; j++) {
      for (let i = 1; i < 7; i++) {
        let cardBack = $(".back-row-" + j + "-letter-" + i);
        if (cardBack.hasClass(oldColour1)) {
          cardBack.removeClass(oldColour1);
          cardBack.addClass(newColour1);
        } else if (cardBack.hasClass(oldColour2) && oldColour2 != newColour2) {
          cardBack.removeClass(oldColour2);
          cardBack.addClass(newColour2);
        }
      }
    }


    $("#o-heading").removeClass(oldColour1 + "-letter");
    $("#o-heading").addClass(newColour1 + "-letter");
    $("#d-heading").removeClass(oldColour2 + "-letter");
    $("#d-heading").addClass(newColour2 + "-letter");
    $("#e-heading").removeClass(oldColour1 + "-letter");
    $("#e-heading").addClass(newColour1 + "-letter");

    localStorage.setItem("colour1", JSON.stringify(newColour1));
    localStorage.setItem("colour2", JSON.stringify(newColour2));
    colour1 = JSON.parse(localStorage.getItem("colour1"));
    colour2 = JSON.parse(localStorage.getItem("colour2"));

  }

  loadTiles();

});


// GAME FUNCTIONALITY

// User inputs on keyboard
// Function to add each letter to guess row as user clicks a letter
$(".letter-key").click(function() {

  // Only allow user to enter letters when game is on and etner no more than 5 letters
  if (gameOn && userGuess.length < 5 && !feedbackPresent) {

    let letter = userGuess.length + 1;
    let letterEntered = $(this).text();
    let guessSquare = $(".front-row-" + gameRound + "-letter-" + letter);
    let answerSquare = $(".back-row-" + gameRound + "-letter-" + letter);

    // Add letters guessed by user into guess squares and answer squares
    guessSquare.text(letterEntered);
    answerSquare.text(letterEntered);
    userGuess.push(letterEntered);

    // animate guess squares to make them appear presssed
    animateLetterPressed($(".row-" + gameRound + "-letter-" + letter));

  }

});

// Function to utilise DEL key
$("#del").click(function() {

  if (!feedbackPresent) {

    let letter = userGuess.length;

    if (letter > 0) {
      let guessSquare = $(".front-row-" + gameRound + "-letter-" + letter);
      let answerSquare = $(".back-row-" + gameRound + "-letter-" + letter);

      // Remove letters from guess and answer squares
      guessSquare.text("");
      answerSquare.text("");

      // Remove letters from user guess array
      userGuess.pop();
    }

  }

});

// Function to utilise ENTER key
$("#enter").click(function() {

  // Change challengeStarted to Y
  localStorage.setItem(shortDateStarted, JSON.stringify("Y"));

  // Only allow user to guess when game is on
  if (gameOn && !feedbackPresent) {

    // Check user entered correct length word
    if (userGuess.length === 5) {

      let guessedWord = userGuess.join("");
      let lowerCaseGuess = guessedWord.toLowerCase();

      if (binarySearch(wordList, lowerCaseGuess)) {
        checkGuess();

        if (gameRound === 7 && guessedWord != chosenWord) {
          gameLost();
        } else if (guessedWord === chosenWord) {
          gameWon();
        } else {
          userGuess = [];
        }

      } else {
        incorrectSubmission("Not in word list");
      }

    } else {
      incorrectSubmission("Not enough letters");
    }

  }

});


// Functions called when ENTER key presssed

// Incorrect submission Function
function incorrectSubmission(response) {

  feedbackPresent = true;

  setTimeout(function() {
    feedbackPresent = false;
  }, 1000);

  $("#feedback").html("<strong>" + response + "</strong>");
  $("#feedback").animate({opacity: 1}).delay(750).animate({opacity: 0});
  $(".row-" + gameRound).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50);

};


// Function to check user guess against chosen wordList, the colour is changed, the tiles are flipped and game round increased
function checkGuess() {

  let chosenLettersCopy = [...chosenLetters];

  // Turn correct letters in right place blue
  for (let i = 0; i < 5; i++) {

    let answerSquare = $(".back-row-" + gameRound + "-letter-" + (i + 1));
    let guessedLetter = userGuess[i];
    let keyPressed = $("#" + guessedLetter);

    if (chosenLettersCopy.includes(guessedLetter) && guessedLetter === chosenLetters[i]) {
      answerSquare.addClass(colour1);
      if (keyPressed.hasClass(colour2)) {
        keyPressed.removeClass(colour2);
      }
      keyPressed.addClass(colour1);
      let letterIndex = chosenLettersCopy.indexOf(guessedLetter);
      chosenLettersCopy.splice(letterIndex, 1);
    }

  };

  // Turn correct letters in wrong place yellow
  for (let i = 0; i < 5; i++) {

    let answerSquare = $(".back-row-" + gameRound + "-letter-" + (i + 1));
    let guessedLetter = userGuess[i];
    let keyPressed = $("#" + guessedLetter);

    if (chosenLettersCopy.includes(guessedLetter) && !answerSquare.hasClass(colour1)) {
      answerSquare.addClass(colour2);
      if (!keyPressed.hasClass(colour1)) {
        keyPressed.addClass(colour2);
      }
      let letterIndex = chosenLettersCopy.indexOf(guessedLetter);
      chosenLettersCopy.splice(letterIndex, 1);
    }

  };

  // Turn incorrect letters black
  for (let i = 0; i < 5; i++) {

    let answerSquare = $(".back-row-" + gameRound + "-letter-" + (i + 1));
    let guessedLetter = userGuess[i];
    let keyPressed = $("#" + guessedLetter);

    if (!chosenLettersCopy.includes(guessedLetter) && !answerSquare.hasClass(colour1) && !answerSquare.hasClass(colour2)) {
      answerSquare.addClass("black");
      if (!keyPressed.hasClass(colour1) && !keyPressed.hasClass(colour2)) {
        keyPressed.addClass("black");
      }
    }

  };

  // Flip letters after assigning colours to back of cards
  flipLetters();

  // Save tiles entered to local storage
  saveTiles();

  // Save letter keys to local storage
  saveKeys();

  // Increase game round by 1
  gameRound++;

  // Save game round to localStorage
  localStorage.setItem("gameRound", JSON.stringify(gameRound));

};


// End of game Functions

// lost game function
function gameLost() {

  gameOn = false;

  for (let i = 1; i < 7; i++) {
    $(".back-row-6-letter-" + i).addClass("game-lost");
  };

  setTimeout(function() {
    $("#feedback").html("<strong>" + chosenWord + "</strong>");
    $("#feedback").animate({opacity: 1});
  }, 1500);

  dailyChallengeTimesPlayed++;
  localStorage.setItem("dailyChallengeTimesPlayed", JSON.stringify(dailyChallengeTimesPlayed));

  dailyChallengeCurrentStreak = 0;

  localStorage.setItem("dailyChallengeCurrentStreak", JSON.stringify(dailyChallengeCurrentStreak));

  localStorage.setItem(shortDateCompleted, JSON.stringify("Y"));

  let winPercentage = Math.round(100 * (dailyChallengeScoresList.length / dailyChallengeTimesPlayed));

  $(".games-played").text(dailyChallengeTimesPlayed);
  $(".win-percent").text(winPercentage);
  $(".current-streak").text(dailyChallengeCurrentStreak);
  $(".max-streak").text(dailyChallengeMaxStreak);

  setTimeout(function() {
    $("#score-chart").fadeIn(700);
    $("#main-body").animate({opacity: 0.5}, 200);
    createChart(dailyChallengeScoreDistribution, chartColours);
  }, 3000);

};

// Game won Function
function gameWon() {

  scoreToday = gameRound - 1;
  localStorage.setItem("scoreToday", JSON.stringify(scoreToday));

  chartColours[scoreToday - 1] = $("#o-heading").css("color");

  let responses = ["Unbelievable!", "Amazing!", "Great!", "Well done!", "Nice!", "Finally!"];
  let response = responses[scoreToday - 1];

  gameOn = false;
  jumpTiles();

  setTimeout(function() {
    $("#feedback").html("<strong>" + response + "</strong>");
    $("#feedback").animate({opacity: 1});
  }, 1500);

  dailyChallengeScoresList.push(scoreToday);
  localStorage.setItem("dailyChallengeScoresList", JSON.stringify(dailyChallengeScoresList));
  dailyChallengeTimesPlayed++;
  localStorage.setItem("dailyChallengeTimesPlayed", JSON.stringify(dailyChallengeTimesPlayed));
  dailyChallengeCurrentStreak++;

  if (dailyChallengeCurrentStreak > dailyChallengeMaxStreak) {
    dailyChallengeMaxStreak = dailyChallengeCurrentStreak;
    localStorage.setItem("dailyChallengeMaxStreak", JSON.stringify(dailyChallengeMaxStreak));
  }

  localStorage.setItem("dailyChallengeCurrentStreak", JSON.stringify(dailyChallengeCurrentStreak));

  dailyChallengeScoreDistribution[gameRound - 2]++;
  localStorage.setItem("dailyChallengeScoreDistribution", JSON.stringify(dailyChallengeScoreDistribution));

  localStorage.setItem(shortDateCompleted, JSON.stringify("Y"));

  showStats();

  setTimeout(function() {
    $("#score-chart").fadeIn(700);
    $("#main-body").animate({opacity: 0.5}, 200);
  }, 3000);

  setTimeout(function() {
    createChart(dailyChallengeScoreDistribution, chartColours);
  }, 3000);

};


// ANIMATIONS

// Animate letter entered
function animateLetterPressed(letter) {

  $(letter).addClass("pressed");

  setTimeout(function() {
    $(letter).removeClass("pressed");
  }, 100);

};

// Set up flip cards animation
function setAllCards() {

  for (let j = 1; j < 7; j++) {
    for (let i = 1; i < 6; i++) {
      let card = $("#card.row-" + j + "-letter-" + i);
      card.flip({
        axis: "x",
        trigger: "manual",
        speed: 650,
        front: ".front-row-" + j + "-letter-" + i,
        back: ".back-row-" + j + "-letter-" + i,
      });
    };
  };

};

setAllCards();

function flipLetters() {
  let i = gameRound;
  let delay = 300;
  $("#card.row-" + i + "-letter-1").flip(true);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-2").flip(true);
  }, delay);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-3").flip(true);
  }, delay*2);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-4").flip(true);
  }, delay*3);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-5").flip(true);
  }, delay*4);
};

// Tile jump animation
function jumpTiles() {

  let i = gameRound - 1;
  let start = 1200;
  let delay = 100;
  setTimeout(function() {
    $("#card.row-" + i + "-letter-1").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-2").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-3").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay*2);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-4").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay*3);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-5").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay*4);

};


// EXTRAS
// Create chart Function
function createChart(scores, colours) {

    let myScoresChart = {
        type: 'bar',
        data: {
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [{
            label: '',
            data: scores,
            backgroundColor: colours,
            borderColor: colours,
            borderWidth: 1,
            minBarLength: 30
          }]
        },
        plugins: [ChartDataLabels],
        options: {
          scales: {
            x: {
                ticks: {
                    display: false
                }
            },
            y: {
                ticks: {
                    font: {
                      size: 15,
                    },
                    color: 'white'
                }
            }
          },
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          plugins: {
            tooltip: {
              enabled: false
            },
            datalabels: {
              color: 'white',
              labels: {
                title: {
                  font: {
                    weight: 'bold',
                    size: 13
                  }
                }
              },
              value: {
                color: 'white'
              },
              clamp: true
            },
            legend: {
              display: false
            },
          }
        },
    };

    let ctx = $('#myChart');
    scoresChart = new Chart(ctx, myScoresChart);

};


// Display game statistics
function showStats() {

  let winPercentage;
  if (dailyChallengeTimesPlayed > 0) {
    winPercentage = Math.round(100 * (dailyChallengeScoresList.length / dailyChallengeTimesPlayed));
  } else {
    winPercentage = 0;
  }

  $(".games-played").text(dailyChallengeTimesPlayed);
  $(".win-percent").text(winPercentage);
  $(".current-streak").text(dailyChallengeCurrentStreak);
  $(".max-streak").text(dailyChallengeMaxStreak);

};


// Save tiles to localStorage in case of refresh
function saveTiles() {

  for (let j = 1; j < 6; j++) {
    let cardBack = ".back-row-" + gameRound + "-letter-" + j;
    let cardBackText = $(cardBack).text();
    let cardBackColourClass = "";
    if ($(cardBack).hasClass("black")) {
      cardBackColourClass = "black";
    } else if ($(cardBack).hasClass(colour1)) {
      cardBackColourClass = "colour1";
    } else if ($(cardBack).hasClass(colour2)) {
      cardBackColourClass = "colour2";
    }
    localStorage.setItem((cardBack + " text"), JSON.stringify(cardBackText));
    localStorage.setItem((cardBack + " colourClass"), JSON.stringify(cardBackColourClass));
  }

};


// Save keys entered
function saveKeys() {

  for (let i = 0; i < letterKeys.length; i++) {
    let letter = letterKeys[i];
    let letterSelector = $("#" + letter);
    let letterColourClass = "";
    if (letterSelector.hasClass("black")) {
      letterColourClass = "black";
    } else if (letterSelector.hasClass(colour1)) {
      letterColourClass = "colour1";
    } else if (letterSelector.hasClass(colour2)) {
      letterColourClass = "colour2";
    }
    localStorage.setItem(letter + " colourClass", JSON.stringify(letterColourClass));
  }

};


// Reload entered tiles if game started and then refreshed
function loadTiles() {

  for (let i = 1; i < gameRound; i++) {
    for (let j = 1; j < 6; j++) {
      let cardBack = ".back-row-" + i + "-letter-" + j;
      let cardFront = ".front-row-" + i + "-letter-" + j;
      let cardBackText = JSON.parse(localStorage.getItem(cardBack + " text")) ?? "";
      let cardBackColourClass = JSON.parse(localStorage.getItem(cardBack + " colourClass")) ?? "";
      if (cardBackColourClass === "colour1") {
        cardBackColourClass = colour1;
      } else if (cardBackColourClass === "colour2") {
        cardBackColourClass = colour2;
      }
      $(cardFront).text(cardBackText);
      $(cardFront).addClass(cardBackColourClass);
    }
  }

};


// Reload entered letter kets if game started and then refreshed
function loadKeys() {

  for (let i = 0; i < letterKeys.length; i++) {
    let letter = letterKeys[i];
    let letterSelector = $("#" + letter);
    let letterColourClass = JSON.parse(localStorage.getItem(letter + " colourClass"));
    if (letterColourClass === "colour1") {
      letterColourClass = colour1;
    } else if (letterColourClass === "colour2") {
      letterColourClass = colour2;
    }
    letterSelector.addClass(letterColourClass);
  }

};


// Binary search algorithm to search for word in wordList
function binarySearch(array, value) {

  let midIndex = Math.floor(array.length / 2);
  let midValue = array[midIndex];
  let comparison = value.localeCompare(midValue);

  if (comparison === 0) {
    return true;
  } else if (array.length === 1) {
    return false;
  } else if (comparison < 0) {
    array = array.slice(0, midIndex);
  } else {
    array = array.slice(midIndex);
  }

  return binarySearch(array, value);
}
