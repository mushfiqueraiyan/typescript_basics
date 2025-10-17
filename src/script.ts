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

let a: string;
let b: number;

a = "4";
//b = "4"; // 'string' is not assignable to type 'number'.

let arr: (number | string)[] = [];

arr.push("Raiyab");
arr.push(25);
//arr.push(30); // 'number' is not assignable to parameter of type 'string'.

let ra: string | number;

ra = "Raiyan";
ra = 25;

let o: object; // object also take as an array

//o = 5; //number' is not assignable to type 'object'.

o = {
  name: "Raiyan",
};

let k: {
  // But in this pattern it will not take as an array
  name: string;
  age: number;
  isMarried: boolean;
};

k = {
  name: "Raiyan",
  age: 20,
  //isMarried: "false", // isMarried: boolean;

  isMarried: false,
};

let x: any; // any data types
x = 5;
x = "raiyan";

let array: any[] = []; // any type array

array.push("bangla");
array.push(7);
array.push(true);

let l: {
  // any type object
  name: any;
  age: any;
};

l = {
  name: "raiyan",
  age: "20",
};

const myFunc = () => {
  console.log("Hello");
};

let yourFunc: Function;

yourFunc = () => {
  console.log(5);
};

const weFunc = (a: number, b: number, c?: string): number => {
  //c?:string is optional
  return a + b;
};

weFunc(9, 8);
// weFunc("Mushfique", 5); // string and number ❌

// Type Aliases -----

type stringOrNum = string | number;
type userType = {
  name: string;
  age: number;
};

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id} name is ${name} and age is ${age}`);
};

const sayHello = (user: userType) => {};

// Function Signature ----

let add: (a: number, b: number) => number;

add = (x: number, y: number) => {
  return x + y;
};

let calculation: (c: number, d: number, e: string) => number;

calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

let userDetail: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

userDetail = (
  id: number | string,
  user: {
    // can change the name of object
    name: string; // username: string but cant change the object value name
    age: number;
  }
) => {};

// Classes

// Access Modifier
class Player {
  private name: string; // make it private so dont access from outside
  public age: number; // access and edit from outside
  readonly country: string; // only readable from outside cant edit

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name}'s age is ${this.age} years old`);
  }
}

const raiyan = new Player("Raiyan", 20, "BD");
//const rai = new Player("Raiyan", "40"); //type 'string' is not assignable to parameter of type 'number'.

console.log(raiyan.age);

const players: Player[] = [];

//players.push("Raiyan"); //'string' is not assignable to parameter of type 'Player'.
players.push(raiyan);
