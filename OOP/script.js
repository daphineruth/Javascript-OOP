'use strict';
const Person = function (firstName, birthYear) {
    
    this.firstName = firstName;
    this.birthYear = birthYear;
  
 };
  
  const jonas = new Person('Jonas', 1991);
  console.log(jonas);

  const matilda = new Person('Matilda', 2017);
  const jack = new Person('Jack', 1975);



// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();  
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//prototypeOfLinked objects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//prototype chaining
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

//array prototype

const arr = [2, 5, 5, 5, 7, 11, 11]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

//console.log(arr.unique());

//ES6 Classes

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.prototype.greet = function ()
 {
    console.log(`Hey ${this.firstName}`);
  };
  jessica.greet();

  //Object.create

  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);  
    
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven = Object.create(PersonProto);
  console.log(steven);
  steven.name = 'Steven';
  steven.birthYear = 2002;
  steven.calcAge();
  
  //console.log(steven.__proto__ === PersonProto);
  
  const sarah = Object.create(PersonProto);
  sarah.init('Sarah', 1979);
  sarah.calcAge();

  

  // Inheritance Between "Classes"  -:Constructor Functions


Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();


  