/* LeesLig — original Afrikaans DEMO practice items (enrichment only, not CAPS). */
window.LEESLIG_CONTENT = {
  meta: {
    demo: true,
    note: "Oorspronklike oefenitems vir tuispraktyk. Nie CAPS/DBE-materiaal nie."
  },

  /* Junior: letter sounds — simple Afrikaans grapheme → tip */
  sounds: {
    1: [
      { prompt: "a", tip: "soos in appel", choices: ["a", "e", "o", "u"], answer: "a" },
      { prompt: "e", tip: "soos in eg", choices: ["a", "e", "i", "o"], answer: "e" },
      { prompt: "i", tip: "soos in is", choices: ["i", "e", "u", "a"], answer: "i" },
      { prompt: "o", tip: "soos in os", choices: ["u", "o", "a", "e"], answer: "o" },
      { prompt: "u", tip: "soos in ups", choices: ["u", "i", "o", "a"], answer: "u" },
      { prompt: "m", tip: "mmm — mond toe", choices: ["n", "m", "b", "p"], answer: "m" },
      { prompt: "n", tip: "nnn — neus", choices: ["m", "n", "l", "t"], answer: "n" },
      { prompt: "s", tip: "sss — slang", choices: ["s", "z", "f", "v"], answer: "s" },
      { prompt: "t", tip: "ttt — tong", choices: ["d", "t", "k", "p"], answer: "t" },
      { prompt: "p", tip: "ppp — lippe", choices: ["b", "p", "d", "t"], answer: "p" },
      { prompt: "b", tip: "bbb — ballon", choices: ["p", "b", "d", "v"], answer: "b" },
      { prompt: "k", tip: "kkk — kat", choices: ["g", "k", "t", "d"], answer: "k" }
    ],
    2: [
      { prompt: "aa", tip: "soos in aap", choices: ["aa", "ee", "oo", "uu"], answer: "aa" },
      { prompt: "ee", tip: "soos in eet", choices: ["aa", "ee", "ie", "oe"], answer: "ee" },
      { prompt: "oo", tip: "soos in boot", choices: ["oe", "oo", "ou", "ui"], answer: "oo" },
      { prompt: "uu", tip: "soos in muur", choices: ["uu", "oe", "ui", "eu"], answer: "uu" },
      { prompt: "ie", tip: "soos in sien", choices: ["ie", "ee", "ei", "ui"], answer: "ie" },
      { prompt: "oe", tip: "soos in boek", choices: ["oe", "oo", "ou", "eu"], answer: "oe" },
      { prompt: "ou", tip: "soos in goud", choices: ["ui", "ou", "au", "oe"], answer: "ou" },
      { prompt: "ui", tip: "soos in huis", choices: ["ui", "eu", "ou", "oe"], answer: "ui" },
      { prompt: "ei", tip: "soos in eier", choices: ["ei", "y", "ie", "ee"], answer: "ei" },
      { prompt: "ng", tip: "soos in sing", choices: ["nk", "ng", "n", "g"], answer: "ng" }
    ],
    3: [
      { prompt: "sk", tip: "soos in skool", choices: ["sk", "sch", "st", "sp"], answer: "sk" },
      { prompt: "st", tip: "soos in stoel", choices: ["sp", "st", "sk", "str"], answer: "st" },
      { prompt: "str", tip: "soos in straat", choices: ["st", "str", "skr", "tr"], answer: "str" },
      { prompt: "tj", tip: "soos in tjank", choices: ["tj", "dj", "ch", "j"], answer: "tj" },
      { prompt: "dj", tip: "soos in djembe", choices: ["tj", "dj", "j", "g"], answer: "dj" },
      { prompt: "ch", tip: "soos in chemie (sag)", choices: ["g", "ch", "k", "sj"], answer: "ch" },
      { prompt: "sj", tip: "soos in sjaal", choices: ["sj", "ch", "sk", "j"], answer: "sj" },
      { prompt: "eu", tip: "soos in neus", choices: ["eu", "ui", "oe", "ee"], answer: "eu" }
    ],
    4: [
      { prompt: "aai", tip: "soos in saai (DEMO)", choices: ["aai", "ooi", "ei", "ou"], answer: "aai" },
      { prompt: "ooi", tip: "soos in mooi (DEMO)", choices: ["ooi", "aai", "oe", "ou"], answer: "ooi" }
    ],
    5: [
      { prompt: "ieu", tip: "soos in nieuws (DEMO stub)", choices: ["ieu", "eu", "ui", "oe"], answer: "ieu" }
    ],
    6: [
      { prompt: "g (sag)", tip: "soos in geel — DEMO stub", choices: ["g", "ch", "k", "h"], answer: "g" }
    ],
    7: [
      { prompt: "r", tip: "rol of sagte r — DEMO stub", choices: ["r", "l", "w", "n"], answer: "r" }
    ]
  },

  words: {
    1: [
      { word: "ma", choices: ["ma", "pa", "sa", "na"], answer: "ma" },
      { word: "pa", choices: ["ba", "pa", "da", "ta"], answer: "pa" },
      { word: "so", choices: ["so", "se", "sa", "si"], answer: "so" },
      { word: "is", choices: ["as", "is", "os", "us"], answer: "is" },
      { word: "ek", choices: ["ek", "ak", "ok", "ik"], answer: "ek" },
      { word: "jy", choices: ["jy", "sy", "my", "hy"], answer: "jy" },
      { word: "ons", choices: ["ons", "oos", "as", "en"], answer: "ons" },
      { word: "kat", choices: ["kat", "hat", "mat", "rat"], answer: "kat" },
      { word: "hond", choices: ["hand", "hond", "land", "mond"], answer: "hond" },
      { word: "bal", choices: ["bal", "bel", "bol", "bul"], answer: "bal" },
      { word: "huis", choices: ["huis", "muis", "suis", "luis"], answer: "huis" },
      { word: "boom", choices: ["boom", "boem", "room", "doom"], answer: "boom" }
    ],
    2: [
      { word: "skool", choices: ["skool", "stoel", "spoel", "skoen"], answer: "skool" },
      { word: "vriend", choices: ["vriend", "vrede", "vreemd", "vrind"], answer: "vriend" },
      { word: "water", choices: ["water", "watter", "vater", "wader"], answer: "water" },
      { word: "brood", choices: ["brood", "broed", "braad", "breed"], answer: "brood" },
      { word: "speel", choices: ["speel", "spel", "steel", "smeer"], answer: "speel" },
      { word: "lees", choices: ["lees", "lies", "loos", "laas"], answer: "lees" },
      { word: "skryf", choices: ["skryf", "skrif", "skrywe", "stryf"], answer: "skryf" },
      { word: "klein", choices: ["klein", "klei", "klain", "klin"], answer: "klein" },
      { word: "groot", choices: ["groot", "grote", "groet", "graat"], answer: "groot" },
      { word: "sonnig", choices: ["sonnig", "sonig", "sunnig", "sonlik"], answer: "sonnig" }
    ],
    3: [
      { word: "vriendelik", choices: ["vriendelik", "vriendlik", "vrindelike", "vriendig"], answer: "vriendelik" },
      { word: "biblioteek", choices: ["biblioteek", "bibliotek", "bieblioteek", "bibliotiek"], answer: "biblioteek" },
      { word: "interessant", choices: ["interessant", "interresant", "interesant", "interessend"], answer: "interessant" },
      { word: "verstaan", choices: ["verstaan", "verstan", "verstaaan", "verstaan"], answer: "verstaan" },
      { word: "opgewonde", choices: ["opgewonde", "opgewond", "opgewoonde", "opgewondee"], answer: "opgewonde" },
      { word: "stilte", choices: ["stilte", "stilheid", "stiltte", "stilte"], answer: "stilte" },
      { word: "verhaal", choices: ["verhaal", "verhal", "verhaaal", "verhaël"], answer: "verhaal" },
      { word: "vraag", choices: ["vraag", "vrae", "vraaq", "vra"], answer: "vraag" }
    ],
    4: [
      { word: "omgewing", choices: ["omgewing", "omgeewing", "omgeving", "omgeving"], answer: "omgewing" },
      { word: "samelewing", choices: ["samelewing", "samlewing", "sameleving", "samenlewing"], answer: "samelewing" }
    ],
    5: [
      { word: "verantwoordelik", choices: ["verantwoordelik", "verantwoordlik", "verantwordelik", "verantwoordelike"], answer: "verantwoordelik" }
    ],
    6: [
      { word: "demokraties", choices: ["demokraties", "demokraties", "demokrasies", "demokraties"], answer: "demokraties" }
    ],
    7: [
      { word: "krities", choices: ["krities", "krities", "kritiese", "krities"], answer: "krities" }
    ]
  },

  sentences: {
    1: [
      { text: "Die kat sit.", q: "Wat sit?", choices: ["Die kat", "Die hond", "Die bal", "Die boom"], answer: "Die kat" },
      { text: "Pa lees ’n boek.", q: "Wie lees?", choices: ["Ma", "Pa", "Ouma", "Die hond"], answer: "Pa" },
      { text: "Ek sien ’n boom.", q: "Wat sien ek?", choices: ["’n boom", "’n huis", "’n bal", "’n kat"], answer: "’n boom" },
      { text: "Die son is warm.", q: "Hoe is die son?", choices: ["koud", "warm", "nat", "donker"], answer: "warm" },
      { text: "Ons speel buite.", q: "Waar speel ons?", choices: ["binne", "buite", "in die bed", "in die kar"], answer: "buite" },
      { text: "Die hond hardloop.", q: "Wat doen die hond?", choices: ["slaap", "hardloop", "eet", "sit"], answer: "hardloop" }
    ],
    2: [
      { text: "Mia pak haar skoolsak.", q: "Wat pak Mia?", choices: ["haar skoolsak", "haar bal", "haar kos", "haar kat"], answer: "haar skoolsak" },
      { text: "Die reën val sag op die dak.", q: "Waar val die reën?", choices: ["op die dak", "in die see", "op die pad", "in die koppie"], answer: "op die dak" },
      { text: "Oupa drink warm tee.", q: "Wat drink Oupa?", choices: ["koffie", "warm tee", "melk", "water"], answer: "warm tee" },
      { text: "Die kinders help in die tuin.", q: "Waar help die kinders?", choices: ["in die tuin", "by die winkel", "in die kar", "by die skool"], answer: "in die tuin" },
      { text: "Thabo skop die bal ver.", q: "Wie skop die bal?", choices: ["Mia", "Thabo", "Ouma", "Pa"], answer: "Thabo" },
      { text: "Ons lees saam stil.", q: "Hoe lees ons?", choices: ["hard", "stil", "vinnig", "buite"], answer: "stil" }
    ],
    3: [
      { text: "Na skool speel Lara netbal met haar vriende.", q: "Watter sport speel Lara?", choices: ["sokker", "netbal", "krieket", "swem"], answer: "netbal" },
      { text: "Die biblioteek is stil en vol interessante boeke.", q: "Hoe is die biblioteek?", choices: ["lawaaiig", "stil", "leeg", "donker"], answer: "stil" },
      { text: "Sipho is opgewonde oor die skooluitstappie na die museum.", q: "Waarheen gaan die uitstappie?", choices: ["na die strand", "na die museum", "na die winkel", "na die park"], answer: "na die museum" },
      { text: "As dit winderig is, hou ons die vensters toe.", q: "Wat doen ons as dit winderig is?", choices: ["maak vensters oop", "hou vensters toe", "gaan swem", "speel buite"], answer: "hou vensters toe" },
      { text: "Die klas skryf ’n kort verhaal oor ’n vriendelike hond.", q: "Oor wat skryf die klas?", choices: ["’n kat", "’n vriendelike hond", "’n boom", "’n trein"], answer: "’n vriendelike hond" }
    ],
    4: [
      { text: "Die omgewingsklub plant bome by die skool (DEMO).", q: "Wat plant hulle?", choices: ["blomme", "bome", "groente", "gras"], answer: "bome" }
    ],
    5: [
      { text: "Leerders bespreek verantwoordelike internetgebruik (DEMO stub).", q: "Waaroor praat hulle?", choices: ["sport", "internetgebruik", "kos", "klere"], answer: "internetgebruik" }
    ],
    6: [
      { text: "Die debatspan oefen argumente vir en teen skooluniforms (DEMO stub).", q: "Wat oefen die span?", choices: ["liedjies", "argumente", "danse", "toetse"], answer: "argumente" }
    ],
    7: [
      { text: "Kritiese lees beteken jy vra vrae oor die teks (DEMO stub).", q: "Wat doen jy by kritiese lees?", choices: ["slaap", "vra vrae", "teken net", "hardloop"], answer: "vra vrae" }
    ]
  },

  passages: {
    1: [
      {
        title: "Die rooi bal",
        text: "Sara het ’n rooi bal. Sy skop die bal in die tuin. Die kat kyk. Sara lag.",
        q: "Waar speel Sara?",
        choices: ["in die tuin", "in die huis", "by die winkel", "op die pad"],
        answer: "in die tuin"
      },
      {
        title: "Warm sop",
        text: "Dit is koud buite. Ma maak warm sop. Ons sit by die tafel. Die sop is lekker.",
        q: "Wat maak Ma?",
        choices: ["brood", "warm sop", "koek", "tee"],
        answer: "warm sop"
      }
    ],
    2: [
      {
        title: "Markdag",
        text: "Op Saterdag gaan die familie na die mark. Pa koop vars vrugte. Nomsa kies ’n oranje. Ouma soek vars brood. Almal help om die sakke te dra.",
        q: "Wat kies Nomsa?",
        choices: ["’n appel", "’n oranje", "brood", "melk"],
        answer: "’n oranje"
      },
      {
        title: "Reëndag",
        text: "Die wolke is donker. Dit begin reën. Die kinders speel binne. Hulle bou ’n tent met komberse. Later drink hulle warm sjokolade.",
        q: "Waar speel die kinders?",
        choices: ["buite", "binne", "by die see", "op die dak"],
        answer: "binne"
      },
      {
        title: "Die bus",
        text: "Jabu wag by die bushalte. Die geel bus kom. Hy wys sy kaartjie. Hy sit by die venster en kyk na die strate.",
        q: "Watter kleur is die bus?",
        choices: ["rooi", "geel", "blou", "groen"],
        answer: "geel"
      }
    ],
    3: [
      {
        title: "Die skooltuin",
        text: "Mev. Botha se klas het ’n klein groentetuin. Elke Vrydag water die leerders die plante. Hulle plant wortels, spinasie en boontjies. As die groente gereed is, deel die klas dit met die skoolkombuis. Die kinders is trots op hulle harde werk.",
        q: "Wanneer water die leerders die plante?",
        choices: ["Elke Maandag", "Elke Vrydag", "Elke dag", "Net in die winter"],
        answer: "Elke Vrydag"
      },
      {
        title: "’n Brief vir Ouma",
        text: "Lindiwe skryf ’n brief aan Ouma. Sy vertel van haar nuwe vriendin by die skool en van die storieboek wat sy by die biblioteek geleen het. Sy teken ’n sonnetjie onderaan. Pa help haar om die koevert te plak en te pos.",
        q: "Wie help Lindiwe om die brief te pos?",
        choices: ["Ma", "Pa", "Ouma", "Die onderwyseres"],
        answer: "Pa"
      },
      {
        title: "Die stil biblioteek",
        text: "Aan die einde van die gang is die skoolbiblioteek. Dit ruik na papier en hout. Mev. Dlamini fluister as sy boeke uitgee. Kinders mag stil lees of ’n storiekaartjie invul. As die bel lui, sit almal die boeke netjies terug.",
        q: "Hoe praat Mev. Dlamini?",
        choices: ["hard", "fluister", "sing", "skree"],
        answer: "fluister"
      }
    ],
    4: [
      {
        title: "Water spaar (DEMO)",
        text: "Die klas meet hoeveel water hulle by die huis spaar. Hulle maak ’n eenvoudige grafiek en bespreek wenke soos korter storte.",
        q: "Wat maak die klas?",
        choices: ["’n grafiek", "’n koek", "’n lied", "’n tent"],
        answer: "’n grafiek"
      }
    ],
    5: [
      {
        title: "Nuuslees (DEMO stub)",
        text: "Leerders lees ’n kort, ouderdomsgeskikte nuusstuk en soek feite versus menings.",
        q: "Wat soek hulle?",
        choices: ["feite vs menings", "net prente", "net getalle", "net name"],
        answer: "feite vs menings"
      }
    ],
    6: [
      {
        title: "Debatnotas (DEMO stub)",
        text: "Voor ’n klasdebat skryf leerders drie punte vir en drie punte teen die stelling.",
        q: "Hoeveel punte skryf hulle per kant?",
        choices: ["een", "drie", "tien", "nul"],
        answer: "drie"
      }
    ],
    7: [
      {
        title: "Kritiese vrae (DEMO stub)",
        text: "By Gr 7-praktyk vra jy: Wie praat? Wat word weggelaat? Stem ek saam? Dit is oefening — nie ’n amptelike toets nie.",
        q: "Is hierdie ’n amptelike toets?",
        choices: ["Ja", "Nee — net oefening", "Slegs CAPS", "Slegs DBE"],
        answer: "Nee — net oefening"
      }
    ]
  }
};
