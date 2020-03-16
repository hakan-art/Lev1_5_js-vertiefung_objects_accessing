let unserLager = {
  schreibtisch: {
    schublade: "Hefter"
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "eine Datei",
      Ordner2: "Geheimnisse"
    },
    "Untere schublade": "Cola"
  }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere schublade"]);
console.log(unserLager.schreibtisch.schublade);

unserLager.schreibtisch.schublade = "Locher";
console.log(unserLager);
console.log(Object.values(unserLager));
