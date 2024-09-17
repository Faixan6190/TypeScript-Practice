//// PART 1 TYPESCRIPT PREPARATION////

// let userName: string = "Muhammad Faizan Ahmed";
// userName = "Faizan";
// // userName = 24;

//DATA TYPES//
// let userName: string = "Faizan Ahmed";
// let age: number = 23;
// let isStudent: boolean = false;
// let randomValue: any = "http://www.google.com";

//TYPE INFERENCE//

//strongly typed syntax
// let a: string = "Pakistan";
// let b: number = 9;
// let c: boolean = true;

// //type inference
// let e = "USA";
// let f = 10.9;
// let g = false;

//STRING CONCATENATION//
// let firstName: string = "Faizan";
// let lastName: string = "Ahmed";
// let fullName: string = firstName + " " + lastName;
// console.log(fullName);

// //TEMPLATE LITERALS//
// let nameFirst: string = "Faizan";
// let nameLast: string = "Ahmed";
// let nameFull = `${nameFirst} ${nameLast}`;
// console.log(nameFull);

//OPERATORS//
// let num1: number = 5;
// let num2: number = 3;
// let cart: number = num1 % num2;
// console.log(cart);

//UNINARY OPERATORS//
// let a: number = 5;
// console.log(a++);
// a++;
// console.log(a);
// let b: number = 2;
// ++b;
// console.log(b);
// let c: number;

// c = ++a + a++ + --b + b-- + a + b++ + b;
// console.log(c);

//COMBINING OPERATORS//
// let result = 3 + 4 * 5;
// result++;
// console.log(result);

//INQUIRER//
// import inquirer from "inquirer";

// const input1 = await inquirer.prompt({
//   name: "num1",
//   type: "number",
//   message: "Kindly enter your first no:",
// });

// const input2 = await inquirer.prompt({
//   name: "num2",
//   type: "number",
//   message: "kindly enter your second no:",
// });

// let total: number = input1.num1 + input2.num2;
// console.log(total);

// import inquirer from "inquirer";

// const currency: any = {
//   USD: 1,
//   INR: 74.57,
//   EUR: 0.91,
//   DHIRAM: 3.67,
//   PKR: 278.25,
// };

// let user_answer = await inquirer.prompt([
//   {
//     name: "from",
//     message: "Enter the currency you want to exchange",
//     type: "list",
//     choices: ["USD", "INR", "EUR", "DHIRAM", "PKR"],
//   },
//   {
//     name: "to",
//     message: "Enter the currency in which you want to exchange",
//     type: "list",
//     choices: ["USD", "INR", "EUR", "DHIRAM", "PKR"],
//   },
//   {
//     name: "amount",
//     message: "Enter your amount",
//     type: "number",
//   },
// ]);

// let userfromcurrency = user_answer.from;
// let usertocurrency = user_answer.to;
// let amounttoconvert = currency[userfromcurrency];
// let amountinwhichconverted = currency[usertocurrency];
// let amount = user_answer.amount;
// let baseAmount = amount / amounttoconvert;
// let amountconverted = baseAmount * amountinwhichconverted;
// console.log(amountconverted);

//ASSIGNMENT OPERATORS//
// let c = 10;
// c += 5;
// console.log(c);

//COMPARISON OPERATORS//
// let a = 5;
// let b = 2;
// let isEqual = a == b;
// let isNotEqual = a != b;
// let isGreaterThan = a > b;
// let isLessThan = a < b;
// console.log(isEqual, isNotEqual, isGreaterThan, isLessThan);

//LOGICAL OPERATORS//
// let a = 5;
// let b = 2;
// let logicalAnd = a > 0 && b > 0;
// let logicalOr = a < 0 || b > 0;
// let logicalNot = !(a > 0);
// console.log(logicalAnd, logicalOr, logicalNot);

//LOGIC STATEMENTS//
// let isRaining = false;
// if (isRaining) {
//   console.log("Wear a raincoat.");
// } else {
//   console.log("Wear Sunglasses.");
// }

// let weather = "raining";
// if (weather === "raining") {
//   console.log("wear a raincoat.");
// } else if (weather === "cloudy") {
//   console.log("wear a light jacket.");
// } else {
//   console.log("wear a sunglasses.");
// }

// import inquirer from "inquirer";

// const outputWeather = await inquirer.prompt({
//   name: "weather",
//   message: "Enter your weather: ",
// });

// if (outputWeather.weather === "raining") {
//   console.log("wear a raincoat.");
// } else if (outputWeather.weather === "cloudy") {
//   console.log("wear a light jacket.");
// } else if (outputWeather.weather === "snow") {
//   console.log("wear a heavy jacket");
// } else {
//   console.log("wear a sunglasses.");
// }

// TERNARY OPERATORS//
// let isHungry = false;
// let snack = isHungry ? "apple" : "water";
// console.log(`You should have some ${snack}.`);

//SWITCH STATEMENTS//
// let dayOff = "Friday";
// switch (dayOff) {
//   case "Saturday":
//     console.log("Go for hiking");
//     break;
//   case "Sunday":
//     console.log("Read a book.");
//     break;
//   case "Monday":
// console.log("Go for Office");
//     break;
//   case "Tuesday":
// console.log("Go for Gym");
//     break;
//   case "Wednesday":
// console.log("Go for Shopping");
//     break;
//   case "Thursday":
// console.log("Go for Relatives");
//     break;
//   case "Friday":
// console.log("Go for Swimming");
//     break;
//   //   default:
// console.log("Work on a hobby");
// }

// NUMBER GAME//
// let guess: number = 7;
// let target: number = 5;
// if (guess < target) {
//   console.log("your guess is too low");
// } else if (guess > target) {
//   console.log("your guess is too high");
// } else {
//   console.log("your guessed correctly");
// }

//FRIEND CHECKER GAME//
// import inquirer from "inquirer";

// let isFriend = await inquirer.prompt([
//   {
//     name: "name",
//     type: "input",
//     message: "Enter your friend name:",
//   },
// ]);

// if (isFriend.name.toLowerCase() === "faizan" || isFriend.name.toLowerCase() === "sheikh") {
//   console.log(`${isFriend.name} is your friend`);
// } else {
//   console.log(`${isFriend.name} is not your friend`);
// }

//FUNCTION//
// function halfFryEgg() {
//   let cooked = 1 + 1.5 + 2;
//   console.log(cooked);
// }
// halfFryEgg();

//RETURNING FUNCTION//
// function halfFryEgg(): number {
//   let cooked = 1 + 1.5 + 2;
//   return cooked;
// }

// let response: number = halfFryEgg();
// console.log(response)

//PARAMETERS AND ARGUMENTS
// function halfFryEgg(egg: number, butter: number, salt: number): number {
//   return egg + butter + salt;
// }

// let response: number = halfFryEgg(1, 3, 6);
// console.log(response);

//DEFAULT PARAMETERS//
// function halfFryEgg(egg: number = 1, butter: number = 2, salt: number = 7): number {
//   return egg + butter + salt;
// }
// let response: number = halfFryEgg();
// console.log(response);

//REST PARAMETERS//
// function halfFryEgg(egg: number = 1, ...ingredients: number[]) {
//   console.log(egg);
//   console.log(ingredients);
// }
// halfFryEgg(1, 3, 5, 6);

//ARROW FUNCITON//
// let halfFryEgg = () => 1 + 3 + 6;
// let response: number = halfFryEgg();
// console.log(response);

// let halfFryEgg = (egg: number, butter: number, salt: number): number => egg + butter + salt;
// let response: number = halfFryEgg(10, 2, 5);
// console.log(response);

// let halfFryEgg = () => {
//   return 3 + 5 + 2;
// };
// let response: number = halfFryEgg();
// console.log(response);

// let halfFryEgg = () => {
//   let cooked = 3 + 5 + 4;
//   return cooked;
// };
// let response: number = halfFryEgg();
// console.log(response);

// let halfFryEgg = (egg: number, butter: number, salt: number): number => {
//   let cooked = egg + butter + salt;
//   return cooked;
// };
// let response: number = halfFryEgg(1, 1.5, 2);
// console.log(response);

//VARIABLE SCOPE//
// let globalVar = "Accessible Everywhere";
// function showExample() {
//   let localVar = "Accessible only inside this function";
//   console.log(globalVar);
// }
// console.log(localVar);

//ANONYMOUS FUNCTIONS//
// let halfFryEgg = function () {
//   let cooked = 1 + 2 + 4;
//   console.log(cooked);
// };
// halfFryEgg();

//IMMEDIATELY INVOKED FUNCTION EXPRESSION//
// (function () {
//   console.log("runs immediately");
// })();

//RECURSIVE FUNCTIONS//
// function countDown(number: number): void {
//   if (number <= 0) {
//     console.log("Done!");
//     return;
//   }
//   console.log(number);
//   countDown(number - 1);
// }
// countDown(5);

// function factorial(n: number): number {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// let response = factorial(5);
// console.log(response);

//NESTED FUNCTIONS//
// function outerFunction() {
//   const innerFunction = function () {
//     console.log("Hello from inside!");
//   };
//   console.log("Hello fron outside");
//   innerFunction();
// }
// outerFunction();

//FUNCTION CALLBACKS//
// function processUserInput(callback: any) {
//   let name = "Muhammad Faizan Ahmed";
//   callback(name);
// }
// processUserInput(function (name: string) {
//   console.log("Hello, " + name);
// });

// function processUserInput(callback: (fullName: string) => void) {
//   let fullName = "Faizan Ahmed";
//   callback(fullName);
// }

// processUserInput((fullName: string) => {
//   console.log("Hello, " + fullName);
// });

//SET TIMEOUT ORDER//
// setTimeout(() => {
//   console.log("Cake is ready!");
// }, 2000);
// console.log("Cake is Making Start!");

//SELF-CHECK QUIZ//
// import inquirer from "inquirer";
// let correctAnswer = ["Dubai", "Singapore", "Malaysia"];
// let input1 = await inquirer.prompt([
//   {
//     name: "userAnswer",
//     type: "string",
//     message: "What is the capital of France?",
//   },
// ]);

// function quiz(question: string, correctAnswer: string) {
//   if (input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//     console.log("correct!");
//   } else {
//     console.log("Wrong answer. Try again.");
//   }
// }
// quiz("What is the capital of France?", "Paris");

// import inquirer from "inquirer";

// let correctAnswers = ["Dubai", "Singapore", "Malaysia"];
// let input1 = await inquirer.prompt([
//   {
//     name: "userAnswer",
//     type: "input",
//     message: "What is the capital of France?",
//   },
// ]);

// function quiz(userAnswer: string, correctAnswers: string[]) {
//   if (correctAnswers.includes(userAnswer.toLowerCase())) {
//     console.log("correct!");
//   } else {
//     console.log("Wrong answer. Try again.");
//   }
// }
// quiz(input1.userAnswer, correctAnswers);

// import inquirer from "inquirer";

// let correctAnswers = ["Singapore", "Dubai", "Malaysia", "Island"];

// let input1 = await inquirer.prompt([
//   {
//     name: "userAnswer",
//     type: "input",
//     message: "What is the capital of France?",
//   },
// ]);

// function quiz(userAnswer: string, correctAnswers: string[]) {
//   if (correctAnswers.some((answer) => answer.toLowerCase() === userAnswer.toLowerCase())) {
//     console.log("Correct!");
//   } else {
//     console.log("Wrong answer. Try again.");
//   }
// }

// quiz(input1.userAnswer, correctAnswers);

//OBJECTS//
// let person = {
//   name: "Faizan Ahmed",
//   email: "faizan@gmail.com",
//   phoneNumer: "12345",
//   id: 1334,
//   course: "Web And App Development",
// };
// console.log(person.name);
// console.log(person["email"]);
// console.log(person["phoneNumer"]);
// console.log(person["course"], person["id"]);

// let person: { name: string } = {
//   name: "Faizan Ahmed",
// };
// console.log(person.name)

// let person: { name: string; email: string; phoneNumber: number } = {
//   name: "Faizan",
//   email: "faizan@gmail.com",
//   phoneNumber: 12345,
// };
// person.name = "Faizan Ahmed";
// console.log(person);

//TYPE ALIAS//
// type User = {
//   name: string;
//   age: number;
//   hasCar: boolean;
// };

// let user1: User = {
//   name: "Sheikh",
//   age: 23,
//   hasCar: true,
// };
// console.log(user1);

// type Operation = (x: number, y: number) => number;
// const add: Operation = (x, y) => x + y;
// const subtract: Operation = (x, y) => x - y;
// console.log(add(5, 3));
// console.log(subtract(10, 4));

//TYPE LITERAL//
// let drinkSize: "Small" | "Medium" | "Large";
// drinkSize = "Medium";
// drinkSize = "Small";

//TYPE UNIONS//
// let mixedBag: string | number | boolean;
// mixedBag = "Sunscreen";
// mixedBag = 30;
// mixedBag = true;

//TYPE INTERSECTION//
// type BeachGear = {
//   sunscreen: boolean;
//   towel: boolean;
// };
// type MountainGear = {
//   waterBottle: boolean;
//   map: boolean;
// };
// type AdventureGear = BeachGear & MountainGear;
// let myGear: AdventureGear = {
//   sunscreen: true,
//   towel: true,
//   waterBottle: true,
//   map: true,
// };
// console.log(myGear)

//ARRAY//
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.length);
// console.log(fruits[1]);

// let fruits: string[] = ["Apple", "Banana", "Cherry"];
// console.log(fruits.length);
// console.log(fruits[1]);

//ARRAY METHOD//
// let colors: string[] = ["Red", "Green", "Blue"];
// colors.push("Purple", "Orange");
// colors.pop();
// colors.unshift("Golden");
// colors.shift();
// console.log(colors);

//MULTIDIMENSIONAL ARRAY//
// let matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];
// console.log(matrix[3][1]);

// type Book = {
//   title: string;
//   author: string;
//   isbn: string;
// };
// let library: Book[] = [
//   { title: "The Hobbit", author: "J.J.R. Tolkien", isbn: "1234567" },
//   { title: "1984", author: "George Orwell", isbn: "09876543" },
// ];
// console.log(library);

// type Book = {
//   title: string;
//   author: string;
//   isbn: string;
// };
// let library: Book[] = [
//   { title: "The Hobbit", author: "J.J.R. Tolkien", isbn: "1234567" },
//   { title: "1984", author: "George Orwell", isbn: "09876543" },
// ];
// library.push({
//   title: "The Catcher in the Rye",
//   author: "Harry",
//   isbn: "321321321",
// });
// console.log("library", library);

// let foundBook = library.find((book) => book.author === "Harry");
// if (foundBook) {
//   console.log("Author found:", foundBook.author);
// } else {
//   console.log("Author not found");
// }

//TUPLES//
// let coffeeOrder: [string, string] = ["Cappuccino", "Medium"];
// console.log("coffeeOrder", coffeeOrder);

//ENUM//
// enum CoffeeType {
//   Espresso,
//   Latte,
//   Cappuccino,
//   Americano,
// }
// let myCoffee: CoffeeType = CoffeeType.Espresso;
// console.log(myCoffee);

//WHILE LOOP//
// let minutesUntilBusArrives = 10;
// while (minutesUntilBusArrives > 0) {
//   console.log(`Bus Arrives in ${minutesUntilBusArrives} minutes.`);
//   minutesUntilBusArrives--;
// }

//DO WHILE LOOP//
// let minutesUntilBusArrives = 5;

// do {
//   console.log("Checking for the bus...");
//   minutesUntilBusArrives--;
// } while (minutesUntilBusArrives > 0);

// let minutesUntilBusArrives = 5;
// const checkBusArrival = () => {
//   minutesUntilBusArrives--;
//   if (minutesUntilBusArrives != 0) {
//     return "Checking for the bus";
//   } else return false;
// };

// do {
//   let response = checkBusArrival();
//   console.log(response);
// } while (minutesUntilBusArrives > 0);

//FOR LOOP//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//FOR IN LOOP//
// type personObj = {
//   name: string;
//   age: number;
//   city: string;
// };

// let person: any = {
//   name: "Faizan",
//   age: 23,
//   city: "Karachi",
// };

// for (let key in person) {
//   // console.log(`${key}: ${person[key as keyof personObj]}`);
//   console.log(`${key}: ${person[key]}`);
// }

//FOR OF LOOP//
// let flavors = ["Vanilla", "Chocolate", "Strawberry", "Mint"];
// for (let flavor of flavors) {
//   console.log(flavor);
// }

// for (let i = 0; i < 5; i++) {
//   // console.log("Hello", +i);
//   console.log("Chai pila do");
// }
