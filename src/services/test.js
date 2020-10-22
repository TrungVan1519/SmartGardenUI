const student = { name: "dauXanh" };

console.log(Object.getPrototypeOf(student) === Object.prototype);

// console.log("==> Class vs Prototype");

// console.log("=> Prototype - ES5");
// function Person5(age = 21, name = "dauXanh") {
//   this.age = age;
//   this.name = name;
// }
// Person5.prototype.showInfo = function () {
//   console.log(`Age: ${this.age} - Name: ${this.name}`);
// };

// function Student5(age, name, gender) {
//   Person5.call(this, age, name);
//   this.gender = gender;
// }
// Student5.prototype = Object.create(Person5.prototype);

// const student5 = new Student5(21, "dauXanh", "male");
// student5.showInfo();

// console.log("=> Class - ES6");
// class Person6 {
//   constructor(age = 21, name = "rauMuong") {
//     this.age = age;
//     this.name = name;
//   }
//   showInfo() {
//     console.log(`Age: ${this.age} - Name: ${this.name}`);
//   }
// }

// class Student6 extends Person6 {
//   constructor(age, name, gender) {
//     super(age, name);
//     this.gender = gender;
//   }
// }

// const student6 = new Student6(21, "rauMuong", "female");
// student6.showInfo();

// const _age = Symbol();
// const _name = Symbol();
// const _showInfo = Symbol();
// class Student {
//   [_age];
//   [_name];

//   constructor(age = 21, name = "rauMuong") {
//     this[_age] = age;
//     this[_name] = name;
//   }

//   [_showInfo]() {
//     console.log(`Age: ${this[_age]}, Name: ${this[_name]}`);
//   }

//   show() {
//     this[_showInfo]();
//   }
// }

// const student = new Student();
// console.log(student[_name], student[_age]);
// student.show();

// class Student {
//   _age;
//   _name;

//   get Age() {
//     return this._age;
//   }
//   set Age(age) {
//     this._age = age;
//   }

//   get Name() {
//     return this._name;
//   }
//   set Name(name) {
//     this._name = name;
//   }

//   constructor(age = 21, name = "rauMuong") {
//     this._age = age;
//     this._name = name;
//   }

//   show = () => {
//     console.log(`Age: ${this._age}, Name: ${this._name}`);
//   };

//   showInfo() {
//     this.show();
//   }
// }

// const student = new Student();
// console.log(student.Name, student.Age);
// student.showInfo();
