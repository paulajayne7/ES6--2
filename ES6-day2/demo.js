// Write out the syntax for each of the below core ES6 elements
// a. Spread operator

const obj1 = { name: "Paula" };

const person1 = { ...obj1, location: "Bracknell" };
console.log(person1);

// b. Rest operator

const animals = ["cat", "dog", "bird", "fish", "hamster"];

const [myPet, ...otherPets] = animals;
console.log(myPet, otherPets);

// c. Object shorthand

function getFavs(favColour, favFood) {
  return {
    favColour,
    favFood,
  };
}
console.log(getFavs("purple", "apple"));

// d. Dynamic keys (place 3 items in an object using dynamic keys)

const obj = {};

obj.name = "Paula";

const key = "favColour";
obj[key] = "purple";

const key2 = "favFood";
obj[key2] = "choc";

const key3 = "favDrink";
obj[key3] = "water";

console.log(obj);

// e. Sets, convert an array with duplicates to an array without (using a set)
const fridge = ["milk", "cheese", "juice", "milk"];
const deDupe = new Set(fridge);
console.log(deDupe);

// f. Create a promise around setTimeout

const thePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
console.log(thePromise);

// g. Consume the promise using ES6 .then

thePromise.then(() => {
  console.log("resolved via ES6");
});

// h. Consume the promise using ES7 async/await

const test = async () => {
  const result = await thePromise;
  console.log("resolved via ES7");
};
test();
