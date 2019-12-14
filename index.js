var Dog = require('./dog')
var Cat = require('./cat')
var long = new Dog('Tom');
long.sayHi();
var quyen = new Cat();
long.eat(quyen);
console.log(long);