/** CHALLENGE 1 - Create Classes */
class User {
  constructor() {
    this.email = "";
    this.password = "";
  }

  isAdmin() {
    return false;
  }
}

class Admin extends User {
  constructor() {
    super();
  }

  isAdmin() {
    return true;
  }
}

const User1 = new User("cristiana@email.com", "cris123");
const Admin1 = new Admin("emilia@email.com", "emilia123");

console.log("Is Admin? ");
console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

/** CHALLENGE 1 - Create Classes */

/** CHALLENGE 2 - Array (map, reduce, filter and find) */
const users = [
  { name: "Cristiana", age: 27, company: "CrisPassos" },
  { name: "Gabriel", age: 15, company: "JessicaCompany" },
  { name: "Jessica", age: 37, company: "JessicaCompany" },
];

const ages = users.map(a => a.age);
console.log(`All ages ${ages}`);

const funcs = users.filter(a => a.age >= 18 && a.company === "JessicaCompany");
console.log("All funcs from JessicaCompany major age");
console.log(funcs);

const google = users.find(a => a.company === "Google");
console.log(`Is from Google: ${google}`);

const multiple = users.map(a => ({
  name: a.name,
  age: a.age * 2,
  company: a.company,
}));

console.log(multiple);
console.log(multiple.filter(a => a.age <= 50));

/** CHALLENGE 2 - Array (map, reduce, filter and find) */

/** CHALLENGE 3 - Arrow Functions */

const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log("Arrow Function");
console.log(arr);

const user2 = { name: "Cristiana", age: 24 };
const showAge = user => user.age;

console.log(showAge(user2));

const name1 = "Cristiana";
const age1 = 27;

const showUser1 = (name = "Ana", age = 37) => ({ name, age });

console.log(showUser1(name1, age1));
console.log(showUser1(name1));

const promise = () => {
  return new Promise((resolve, reject) => resolve());
};

/** CHALLENGE 3 - Arrow Functions */

/** CHALLENGE 4 - Desestruturação */
console.log("Desestruturação");

const company = {
  nameCompany: "Rockeseat",
  address: {
    city: "Rio do Sul",
    state: "SC",
  },
};

const { nameCompany, address: { city, state } } = company;

console.log(nameCompany);
console.log(city);
console.log(state);

function showInfo({ name, age }) {
  return `${name} tem ${age} anos`;
}

console.log(showInfo({ name: "Cristiana", age: 27 }));

/** CHALLENGE 4 - Desestruturação */

/** CHALLENGE 5 - REST/SPREAD */
const arr1 = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr1;

console.log(x);
console.log(y);

function sumRest(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(sumRest(1, 2, 3, 4, 5, 6));
console.log(sumRest(1, 2));

console.log("SPREAD");
const userSpread = {
  name: "Cristiana",
  age: 23,
  address: {
    city: "São Paulo",
    country: "Brazil",
  },
};

const userSpread1 = { ...userSpread, name: "Thiago" };
console.log(userSpread1);

const userSpread2 = { ...userSpread, address: { city: "Rio de Janeiro" } };
console.log(userSpread2);

/** CHALLENGE 5 - REST/SPREAD */

/** CHALLENGE 6 - Template Literals */
const userLiterals = "Cristiana";
const ageLiterals = 27;

console.log(`O usuário ${userLiterals} possui ${ageLiterals} anos`);
/** CHALLENGE 6 - Template Literals */

/** CHALLENGE 7 - Object Short Syntaxy */
const nameShort = "Cristiana";
const ageShort = 27;

const userShort = {
  nameShort,
  ageShort,
  cityShort: "São Paulo",
};

console.log("Short Syntaxy");
console.log(userShort);
/** CHALLENGE 7 - Object Short Syntaxy */
