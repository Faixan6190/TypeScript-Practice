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
let a = 5;
let b = 2;
let isEqual = a == b;
let isNotEqual = a != b;
let isGreaterThan = a > b;
let isLessThan = a < b;
console.log(isEqual, isNotEqual, isGreaterThan, isLessThan);
