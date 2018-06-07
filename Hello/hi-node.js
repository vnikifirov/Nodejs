console.log('Hi Node.js!');

// Primitives types
console.log(typeof String);
console.log(typeof Number);
console.log(typeof Boolen);
console.log(typeof Undefine);
console.log(typeof Null);
console.log(typeof RegExp);

// Everything else is a object
console.log((
  'a' === new String('a') // false
));

console.log((
  'a' === new String('a').toString() // true
));

console.log((
  'a' == new String('a') // true
));

// Obj Literal Notation

var obj = {
 color: "green",
 type: "suv",
 owner: { /* ... */ }
}

// Remember, functions are objects
var obj = function () {
   this.color : "green",
   this.type : "suv",
   this.owner : { /* ... */ }
 }

// A func with prop (Remeber a func are object), as follows:
var funcProp = function () { console.log('Hi, A function and property'); }
funcProp.boo = 1;

console.log(funcProp());
console.log(funcProp.boo);

// Pass Functions as Parameters
// JS treats functions like any other objects
var convertNum = function (num) {
 return num + 10;
}

var processNum = function (num, fn) {
 return fn(num);
}

processNum(10, convertNum);

// Arrays
// Arr are objects that have special methods Array.prototype2 (From global obj).
// Nevertheless, JS arr're not real arr; instead, they are obj with unique int keys.
var arr = [];
var arr2 = [1, "Hi", {a:2}, function () {console.log('boo');}];
var arr3 = new Array();
var arr4 = new Array(1,"Hi", {a:2}, function () {console.log('boo');});

// Prototypal Nature
// There're no classes in JS cas obj inherit from other obj which is prototypal
// inheritance. Types of inher patterns in JS:
//	 Classical
//   Pseudoclassical
//   Functional
// This's an exx of the func inheritance pattern:
var user = function (ops) {
 return
 { //  Comma-first approach
   firstName: ops.name || 'John'
   , lastName: ops.name || 'Doe'
   , email: ops.email || 'test@test.com'
   , name: function() { return this.firstName + this.lastName}
 }
}

var agency = function(ops) {
 ops = ops || {};
 var agency = user(ops);
 agency.customers = ops.customers || 0;
 agency.isAgency = true;
 return agency;
}
