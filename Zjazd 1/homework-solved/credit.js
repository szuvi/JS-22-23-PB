// let creditCardNumber = "379504636620647"; // American Express
// let creditCardNumber = "5334376555870351"; // Master Card
let creditCardNumber = "4017248410453540"; // Visa
let cardNumLength = creditCardNumber.length;

let luhnSum = 0;
for (let i = 0; i < cardNumLength; i++) {
  let currentNumber = +creditCardNumber[cardNumLength - i - 1]; // loop over card number backwards
  if (i % 2 === 1) {
    // every second number is doubled
    currentNumber *= 2;
    if (currentNumber > 9) {
      currentNumber -= 9; // if the doubled result is > 10 we need to add both digits ex. 16 => 1 + 6 = 7, it's same if you substract 9
    }
  }
  luhnSum += currentNumber; // add result to luhn sum
}

let didPassLuhn = luhnSum % 10 === 0;

let firstTwoNumbers = creditCardNumber.slice(0, 2);

let americanLengthCheck = cardNumLength === 15;
let americanStartCheck = firstTwoNumbers === "34" || firstTwoNumbers === "37";

let visaLenghtCheck = cardNumLength === 13 || cardNumLength === 16;
let visaStartCheck = creditCardNumber[0] === "4";

let masterLengthCheck = cardNumLength === 16;
let masterStartCheck =
  firstTwoNumbers === "51" ||
  firstTwoNumbers === "52" ||
  firstTwoNumbers === "53" ||
  firstTwoNumbers === "54" ||
  firstTwoNumbers === "55";

if (didPassLuhn && americanLengthCheck && americanStartCheck) {
  console.log("American Express");
} else if (didPassLuhn && visaLenghtCheck && visaStartCheck) {
  console.log("Visa");
} else if (didPassLuhn && masterLengthCheck && masterStartCheck) {
  console.log("Master Card");
} else {
  console.log("INVALID");
}
