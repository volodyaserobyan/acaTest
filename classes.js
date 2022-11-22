// const rectangle = new Rectangle(10, 10);

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log(Rectangle.name);

// var y = "Outer Y";

// class A {
//   static field = "Inner Y";

//   static {
//     var y = this.field;
//   }
// }

// console.log(y);

// Object.values({ a: 1 });

// class Helper {
//   static calcTheSymbols(str) {
//     return str.length;
//   }
// }

// const helper = new Helper();

// helper.calcTheSymbols("jjjjjj");
// console.log(Helper.calcTheSymbols("hhhhhhhh"));

// Array.isArray()

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area);
// console.log(square);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = "Point";

//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// console.log(Point.distance({ x: 2, y: 3 }, { x: 8, y: 9 }));

// class Animal {
//   speak() {
//     return this;
//   }

//   static eat() {
//     return this;
//   }
// }

// const obj = new Animal();

// console.log(obj.speak());

// const speak = obj.speak;

// console.log(speak());

// console.log(Animal.eat());

// const eat = Animal.eat;

// console.log(eat());

// function Animal() {}

// Animal.prototype.speak = function () {
//   return this;
// };

// Animal.eat = function () {
//   return this;
// };

// const obj = new Animal();

// const speak = obj.speak;

// console.log(speak());

// class Rectangle {
//   #height = 0;
//   #width;

//   constructor(height, width) {
//     this.#height = height;
//     this.#width = width;
//     this.area = 1000;
//   }

//   a() {
//     console.log(this.#height);
//     console.log(this.#width);
//   }
// }

// const recatangle1 = new Rectangle(10, 100);

// console.log(recatangle1);

// recatangle1.a();

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};

class Dog extends Animal {
  //   speak() {
  //     console.log(`${this.name} barks`);
  //   }
}

const d = new Dog("Rex");

d.speak();
