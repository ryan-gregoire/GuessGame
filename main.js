const ReadLine = require("readline-sync");
const Guess = require("./GuessName");

const name1 = ReadLine.question("Enter Name One: ");
const name2 = ReadLine.question("Enter Name Two: ");
const name3 = ReadLine.question("Enter Name Three: ");

const mappedArray = [];
mappedArray.push(name1);
mappedArray.push(name2);
mappedArray.push(name3);

if (name1.toLowerCase() == Guess.name1) {
  console.log("Correct");
} else {
  console.log("Wrong Name 1 was: " + Guess.name1);
}
if (name2.toLowerCase() == Guess.name2) {
  console.log("Correct");
} else {
  console.log("Wrong Name 2 was: " + Guess.name2);
}

if (name3.toLowerCase() == Guess.name3) {
  console.log("Correct");
} else {
  console.log("Wrong Name 3 was: " + Guess.name3);
}
