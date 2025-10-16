"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let placerName = "Raiyan 501";
console.log(placerName);
let age = 35;
//placerName = 50;
console.log(placerName);
//age = "40";
console.log(age);
// another way
let player;
player = "raiyan";
console.log(player); // undefined
player = 30;
console.log(player); // 30
// const multi = (a, b) => { // Parameter 'b' implicitly has an 'any' type.
//   return a * b;
// };
// console.log(multi(3, 4));
// let fruits = ["apple", "banana", "pineapple"];
// fruits.push(34); // 'number' is not assignable to parameter of type 'string'.
let person = {
    name: "Raiyan",
    age: 20,
    isCaptain: false,
};
// person.name = 45; // number' is not assignable to type 'string'.
// person.country = "Bangladesh"; // 'country' does not exist on type
let a;
let b;
a = "4";
//b = "4"; // 'string' is not assignable to type 'number'.
let arr = [];
arr.push("Raiyab");
arr.push(25);
//arr.push(30); // 'number' is not assignable to parameter of type 'string'.
let ra;
ra = "Raiyan";
ra = 25;
let o; // object also take as an array
//o = 5; //number' is not assignable to type 'object'.
o = {
    name: "Raiyan",
};
let k;
k = {
    name: "Raiyan",
    age: 20,
    //isMarried: "false", // isMarried: boolean;
    isMarried: false,
};
let x; // any data types
x = 5;
x = "raiyan";
let array = []; // any type array
array.push("bangla");
array.push(7);
array.push(true);
let l;
l = {
    name: "raiyan",
    age: "20",
};
//# sourceMappingURL=script.js.map