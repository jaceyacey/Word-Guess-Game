let pokemonArray = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran",
  "Nidorina",
  "Nidoqueen",
  "Nidoran",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetchd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "MrMime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew"
];
pokemonArray = pokemonArray.map(x => {
  return x.toUpperCase();
});

const blanks = document.querySelector("#blanks");
const guessed = document.querySelector("#guessed");
const guessesLeft = document.querySelector("#guessesLeft");
const winDisplay = document.querySelector("#wins");

let wins = 0;
let blankArray = [];
let guesses = 12;
let isInGuesses = false;
let guessedLetters = [];
let letter;
let pokemon;

// somputer selects pokemon
const selectPokemon = function() {
  pokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
  console.log(pokemon);
};

// set up blanks
const setupBlanks = function() {
  for (i = 0; i < pokemon.length; i++) {
    blankArray.push("_ ");
  }
  blankArray.forEach(item => {
    blanks.innerHTML += item;
  });
};

const adjustGuesses = function() {
  for (i = 0; i <= guessedLetters.length; i++) {
    if (guessedLetters[i] === letter) {
      isInGuesses = true;
    }
  }
  if (!isInGuesses) {
    //display guessed letter
    guessedLetters.push(letter);
    guessed.innerHTML = guessedLetters;
    //reduce guesses
    guesses--;
    guessesLeft.innerHTML = guesses;
  }
  isInGuesses = false;
};

const playGame = function() {
  selectPokemon();
  setupBlanks();
  //user presses key
  document.onkeyup = () => {
    letter = String.fromCharCode(event.keyCode);
    adjustGuesses();
    //update blank if letter matches
    for (i = 0; i < pokemon.length; i++) {
      if (letter === pokemon[i]) {
        blankArray[i] = letter;
      }
    }
    blanks.innerHTML = blankArray.join(" ");
    // FULL WORD GUESSED
    if (blankArray.join("") === pokemon) {
      winGame();
    }
    if (guesses === 0) {
      loseGame();
    }
  };
};

//LOSE SCENARIO
//reset
const loseGame = function() {
  wins = 0;
  winDisplay.innerHTML = wins;
  resetGame();
  playGame();
};

//WIN SCENARIO
const winGame = function() {
  wins++;
  winDisplay.innerHTML = wins;
  resetGame();
  playGame();
};

const resetGame = function() {
  blankArray = [];
  guesses = 12;
  isInGuesses = false;
  guessedLetters = [];
  guessesLeft.innerHTML = guesses;
  guessed.innerHTML = guessedLetters;
  blanks.innerHTML = "";
};

playGame();
