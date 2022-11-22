// console.log(x, " 1st console");
// var x = 1;

// console.log(x, " 2st console");

// foo();
// function foo() {
//   console.log("barev");
// }

// function foo() {
//   var x = 1;
// }
// console.log(x);

// {
//   var x = 1;
// }

// console.log(x);

// function foo() {

// }

// const a = {
//     foo: function() {

//     }
// }

// function a() {
//   console.log(1);
// }

// function myFunc(obj) {
//   obj.make = "Toyota";
// }

// const myCar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// let x, y;

// x = myCar.make;

// myFunc(myCar);

// y = myCar.make;

// console.log(x);
// console.log(y);

// Function Expression example
// const square = function (number) {
//   return number * number;
// };

// console.log(square);
// var x = square(4);
// console.log(x);
// var x;
// x();
// var x = function () {
//   console.log("barev");
// };

// x = 1;

// console.log(x);

// var x = 1;
// function foo() {
//   console.log(x);
// }

// foo();

// let myFunc;

// let num = 0;

// if (num === 0) {
//   myFunc = function () {
//     console.log("Barev Dzez");
//   };
// }
// console.log(myFunc, " loog");
// myFunc();

// const globalVariable = 4;
// function high() {
//   const x = 1;

//   function nested() {
//     console.log(x);
//     console.log(globalVariable);
//   }
//   return nested;
// }

// high()();
// console.log(high());

// // const nested = high();

// // console.log(nested);

// nested();

// nested();
// high();
// console.log(high());

// function addSquare(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }

// const result = addSquare(5, 6);

// console.log(result);

// sum(1)(2)(3) //Output 6

// sum(1)(2)(3)(4);

// sum(1, 2, 3);
// sum(1)(2)(3); // 6

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

// function printUser(name) {
//   return name;
// }

// printUser()

// IIFE

// function printUser(name) {
//   return name;
// }
// printUser();

// (function a() {
//   console.log("kanchvec");
// })();

// (function a() {
//   console.log("kanchvec");
//   var x = 1;
// })();

// a();
// console.log(x);

// {
//     const x
// }

// a();

// function foo() {
//   const x = 1;
//   function nested() {
//     console.log(x);
//   }
//   nested();
// }

// foo();

// function closure(a) {
//   //   console.log(b);
//   return function j(b) {
//     return a + 10 + b;
//   };
// }

// console.log(closure);

// const firstLevelClosure = closure(5);
// console.log(firstLevelClosure);

// const result = firstLevelClosure(6);

// console.log(result);

// function a() {
//   console.log(arguments[4]);
// }

// a(1, 2, 3, 4, 5, 6, 7, 8);

// function calculateSum() {}

// calculateSum(1, 2, 3, 4);

// function b() {
//   var i = 1;
//   a();
//   //   return i;
// }

// var i = 0;

// b();

// function calcSum() {
//   return Array.from(arguments).reduce((a, b) => a + b);
// }

// console.log(calcSum(1, 2, 3, 4, 5, 6));

// const a = () => {

// }

// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// // console.log(materials.map();

// (material) => material.length;

// const foo = () => {};

// foo();

// const foo = () => {};

// foo(1, 2, 3, 4, 5);
// var name = "John";
// const obj = {
//   name: "John",
//   displayName: () => this.name,
// };

// const a = obj.displayName;

// console.log(a());
// console.log(obj.displayName());
// console.log(this);

// function cutString(str) {
//   return str.toUpperCase();
// }

// const cutString = (str) => str.toUpperCase();

// console.log(cutString("sdfdfdsfsd"));

// const obj = {
//   count: 10,
//   doSomethingLater: function () {
//     setTimeout(function () {
//       console.log(this.count);
//       this.count++;
//       console.log(this.count);
//     }, 300);
//   },
// };

// obj.doSomethingLater();

// var obj = {
//   num: 2,
// };

// function add(a) {
//   return this.num + a;
// }

// console.log(add.call(obj, 3));

// const obj = {
//   name: "Volodya",
//   displayName: function (lastname) {
//     console.log(this.name, lastname);
//   },
// };

// const obj2 = {
//   name: "Hasmik",
// };

// obj.displayName.call(obj2, "Serobyan", "dddd", "fff");
// const obj = {
//   num: 2,
// };

// function add() {
//   console.log(this.num + arguments[0] + arguments[1]);
// }

// const arr = [5, 6, 4, 6, 7, 878, 7];
// add.apply(obj, arr);

// const obj = {
//   num: 2,
// };

// function add(a, b) {
//   return this.num + a + b;
// }

// const newFunc = add.bind(obj);

// console.log(newFunc(4, 5));

// const swapKeyValue = (obj) => {
//   let newObj = {};
//   for (let key in obj) {
//     newObj[obj[key]] = key;
//   }

//   return newObj;
// };

// console.log(swapKeyValue({ key1: "value1", key2: "value2" }));

// const library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// // [true, true, false];

// const getStatus = (arr) => arr.map((item) => item.readingStatus);

// console.log(getStatus(library));

// function User() {
//   this.name = "Bob";
// }

// const user = new User();

// console.log(user);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.gender = "male";
// }

// const user1 = new User("John", 25);

// const user2 = new User("Jack", 32);

// console.log(user1.name, user2);

// const a = new Number(5);
// a.toString();

// function User() {
//   this.name = "Bob";
// }

// User.prototype.age = 25;

// let user1 = new User();

// let user2 = new User();

// console.log(user1.age);

function Person() {
  this.name = "John";
  this.age = 23;
  //   this.sayHello = function () {
  //     console.log("Say Hello");
  //   };
}

// Person.prototype.sayHello = function () {
//   console.log("say hello");
// };

// const person1 = new Person();

// person1.sayHello();

// const person2 = new Person();

// person2.sayHello();
// const person2 = new Person();

// console.log(person1);
// console.log(person2);

// person1.gender = "male";
// console.log(person1);
// console.log(person2);

// person1.greet = function () {
//   console.log("greet");
// };

// person1.greet();

// person2.greet();

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.walk = function () {
//   console.log("Walking...");
// };

// const animal1 = new Animal("Cat");

// const obj1 = {
//   a: 1,
// };

// console.log(Object.getPrototypeOf(animal1));
// console.log(animal1.hasOwnProperty("walk"));
// animal1.walk();

// const myObject = {
//   city: "Madrid",
//   greets: function () {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// console.log(myObject.toString());

// Array.prototype.toString = function () {
//   console.log("Barev");
// };

// const a = [1, 2, 3];

// a.toString();

// This will use when someone asks me to map throw prototype chain
// const myDate = new Array();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// const myDate = new Date(1995, 11, 17);

// Date.prototype.getFullYear = function () {
//   console.log("Something else...");
// };

// myDate.getFullYear();

// const personPrototype = {
//   greet() {
//     console.log(`hello ${this.name}`);
//   },
// };

// function Person(name) {
//   this.name = name;
// }

// Person.prototype = personPrototype;
// Person.prototype.constructor = Person;
// const carl = new Person("Carl");

// console.log(carl.greet());
// carl.greet();

// const carl = Object.create(personPrototype);

// console.log(carl);
