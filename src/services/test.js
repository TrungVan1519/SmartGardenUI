// console.log("==> Class vs Prototype");

// console.log("=> Prototype - ES5");
// const Person5 = function (age = 21, name = "dauXanh") {
//   this.age = age;
//   this.name = name;
// };
// Person5.prototype.showInfo = function () {
//   console.log(`Age: ${this.age} - Name: ${this.name}`);
// };

// const dauXanh5 = new Person5();
// dauXanh5.showInfo();

// console.log("=> Class - ES6");
// class Person6 {
//   constructor(age = 21, name = "rauMuong") {
//     this.age = age;
//     this.name = name;
//   }
//   showInfo() {
//     console.log(`Age: ${this.age}, Name: ${this.name}`);
//   }
// }

// const rauMuong6 = new Person6();
// rauMuong6.showInfo();

class Person {
  _age
  _name

  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  constructor(age = 21, name = "rauMuong") {
    this._age = age;
    this._name = name;
  }

  showInfo() {
    console.log(`Age: ${this._age}, Name: ${this._name}`);
  }
}

const student = new Student();
student.showInfo();
