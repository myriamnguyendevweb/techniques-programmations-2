const fish = ["piranha", "barracuda", "cod", "eel"];
// Imprime chaque élément du tabelau
const printFish = fish.map((individualFish) => {
    console.log(individualFish);
});

printFish;

// Pluraliser tous les éléments du tableau de poissons
const pluralFish = fish.map((individualFish) => {
    return `${individualFish}s`;
});

pluralFish;