// const, let, var

// if (true) {
//   var a = 1;
// }

// console.log(a);

// const a = [];
// console.log(a, " const variale");
// a.push(5);
// console.log(a, " change the value");

// const a = [1, 2, 3];
// console.log(a[1n]);

// console.log(a["2"]);

// const b = a;

// console.log(b);

// a.push(4);

// console.log(b, " again");

// console.log(
//   Array.from({
//     a: 1,
//   })
// );

// console.log(Array.isArray([1, 2]));

// const a = ["apple", "banana"];

// const arr1 = new Array("apple", " banana");

// const arr2 = "apple,banana".split(",");

// console.log(a, arr1, arr2);

// const of = Array.of(7, "sdsds", ["sds"]);

// console.log(of);

// const newArray = new Array(3, 4);

// console.log(newArray);
// const arr = [1, 2, 3, 4];

// console.log(arr.at(2));

// const arr1 = ["a", "b", "c"];

// const arr2 = [1, 2, 3];

// const arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr2);
// console.log(arr1);

// const a = [1, 2, 3, 4, 5];

// const b = [...a, ["dd"]];
// console.log(b);

// a.push(6);
// console.log(b);

// const arr1 = [1, 4, 9, 16];

// const arr2 = arr1.map(function (item, index, array) {
//   console.log(index, " index");
//   console.log(array, " array");
//   return item * 2;
// });

// console.log(arr2);

// Array.prototype.myMap = function (cb) {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };

// const arr2 = arr1.myMap((item) => item + 1);
// console.log(arr2);

// const array = [
//   "dddd",
//   "ssss",
//   "vvvv",
//   "hhhhh",
//   "iiiiiiiii",
//   "ffff",
//   "kkkkk",
//   "mmmm",
// ];
// array.copyWithin(2, 5, 7);
// console.log("Array", array);

// const arr = [1]

// arr.copyWithin()

// const arr = ["a", "b", "c"];

// const obj = arr.entries();

// console.log(obj, " obj");

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(
//   array1.every(function (value) {
//     return value <= 39;
//   })
// );

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj1 = {
//   ...obj,
//   c: 3,
//   d: 4,
// };

// console.log(obj1);

// const array1 = [1, 2, 3, 4];

// console.log(array1.fill("ff", 2, 3));

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const newFilteredArray = words.filter((item, index, array) => item.length > 6);

// console.log(newFilteredArray, " new");

// const array = [
//   {
//     name: "John",
//     age: 22,
//     gender: "male",
//   },
//   {
//     name: "Kate",
//     age: 12,
//     gender: "female",
//   },
//   {
//     name: "Jack",
//     age: 50,
//     gender: "male",
//   },
//   {
//     name: "Rack",
//     age: 17,
//     gender: "male",
//   },
//   {
//     name: "Dave",
//     age: 10,
//     gender: "male",
//   },
// ];

// Array.prototype.myFilter = function (cb) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       newArray.push(this[i]);
//     }
//   }

//   return newArray;
// };

// function getAdults(array) {
//   const adults = array.myFilter(function (item, index, array) {
//     return item.age >= 18;
//   });

//   return adults;
// }

// console.log(getAdults(array));

// function getOrdinarySuffix(i) {
//   let j = i % 10,
//     k = i % 100;

//   if (j === 1 && k !== 11) return i + "st";
//   if (j === 2 && k !== 12) return i + "nd";
//   if (j === 3 && k !== 13) return i + "rd";

//   return i + "th";
// }

// const numbers = [1, 2, 3];

// let call = 1;

// Array.prototype.myReduce = function (cb, init) {
//   let i = 0;

//   if (!init) {
//     init = this[0];
//     i = 1;
//   }

//   for (i; i < this.length; i++) {
//     init = cb(init, this[i], i);
//   }

//   return init;
// };

// const sum = numbers.myReduce(function (
//   accumulator,
//   currentValue,
//   currentIndex
// ) {
//   let result = accumulator + currentValue;

//   console.log(`${getOrdinarySuffix(call)} call`);

//   call++;

//   console.table({
//     accumulator,
//     currentValue,
//     currentIndex,
//     result,
//   });
//   return result;
// },
// 100);

// console.log(sum, numbers);

// const array = [5, 12, 8, 130, 44];

// const findedElement = array.find((item) => item === 12);

// console.log(findedElement, " find");

// const arr1 = [0, 1, 2, [3, [5], 4]];

// const arr2 = arr1.flat(Number.POSITIVE_INFINITY);

// console.log(arr2);
// console.log(arr1);

// [1, 2, 3, 4, [5], 5, 9, 43].flatMap()

// const arr = [1, 2, 3, 4, [5, 51], 5, 9, 43];

// const result = arr.flatMap(function (item) {
//   return Number(item) + 1;
// });

// console.log(result);

// for (let i = 0; i < arr.length; i++) {
//   // Logic
//   arr[i]
// }

// arr.forEach(item => {
// if (item === undefined) {
// item = 1;
// }
// })

// const a = new Array(7);

// console.log(a, " a");

// const elements = ["Fire", "Air", "Water"];
// const result = elements.join("-");
// console.log(result.split("-"), " result");

// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// const result = plants.pop();
// console.log(result);
// console.log(plants);
// console.log(plants.pop());

// const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("cows", "elephant");

// console.log(animals);
// console.log(count);

// const arr = [1, 2, 3];

// const length = arr.unshift(4, 5);

// console.log(arr);
// console.log(length);

// const array1 = [1, 2, 3];

// console.log(array1.includes(7));

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const newArray = animals.slice(2, 4);

// console.log(animals);
// console.log(newArray);
// console.log(animals);

// console.log(animals.slice(2));

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 1, "Feb");
// months.splice(4, 1);
// months.splice(2, 1);

// console.log(months);

// const months = ["March", "Jdsfdsfdsfdsan", "Feb", "D"];
// months.sort(function (a, b) {
//   return b.length - a.length;
// });

// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort(function (a, b) {
//   // console.log(b, " b");
//   // console.log(a, " a");
//   return b - a;
// });

// console.log(array1);

// const a = ["dsf", "fdgfd", "gfgf", 5, 3];

// a.sort();
// console.log(a);

// const a = [
//   {
//     count: [1, 2, 3, 4, 5, 6, 7],
//   },
//   {
//     count: [6, 8, 3, 5],
//   },
//   {
//     count: [5, 6],
//   },
// ];

// const result = a.map(function (item) {
//   return item.count.reduce(function (acc, current) {
//     return (acc += current);
//   });
// });

// console.log(result);

// [
//   {
//     count: 1000,
//   },
//   {
//     count: 1000,
//   },
//   {
//     count: 1000,
//   },
// ];
