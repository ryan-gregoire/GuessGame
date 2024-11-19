const ReadLine = require("readline-sync");
const Guess = require("./GuessGame/GuessName");

class GetNames {
  getNameOne() {
    const name1 = ReadLine.question("Enter Name One: ");
  }

  getNameTwo() {
    const name2 = ReadLine.question("Enter Name Two: ");
  }

  getNameThree() {
    const name3 = ReadLine.question("Enter Name Three: ");
  }
}

const names = GetNames();

const mappedArray = [];
mappedArray.push(names.name1);
mappedArray.push(names.name2);
mappedArray.push(names.name3);

if (names.name1.toLowerCase() == Guess.name1) {
  console.log("Correct");
} else {
  console.log("Wrong Name 1 was: " + Guess.name1);
}
if (names.name2.toLowerCase() == Guess.name2) {
  console.log("Correct");
} else {
  console.log("Wrong Name 2 was: " + Guess.name2);
}

if (names.name3.toLowerCase() == Guess.name3) {
  console.log("Correct");
} else {
  console.log("Wrong Name 3 was: " + Guess.name3);
}
