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

  
  