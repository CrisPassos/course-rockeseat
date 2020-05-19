/** CLASS */
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.user = "Cristiana";
  }

  showUser() {
    console.log(this.user);
  }
}

const MinhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function() {
  MinhaLista.add("New TODO");
};

MinhaLista.showUser();

//static não olha as outras informacoes da classes somente aguarda receber um parametro, fazer a acao e ir retornar outra coisa
class Math {
  static soma(a, b) {
    return a + b;
  }
}

console.log("Soma " + Math.soma(2, 2));

/** CLASS */

/** CONST and LET */

//mutações são possíveis dentro de uma constante
const user = { name: "Cristiana" };
user.name = "Alice";

console.log(user);

/** CONST and LET */

/** OPERATION WITH ARRAY (MAP, REDUCE, FILTER, FIND)*/

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item, index) => item * index);

console.log(newArr);

//total = 0 next 1
//total = 1 next 2
//total = 3 next 3
const sum = arr.reduce((total, next) => total + next);

console.log(sum);

//retorna os pares
//filter retorna true or false
const filter = arr.filter(item => item % 2 === 0);

console.log(filter);

//find verificar alguma informacao dentro do array
const find = arr.find(item => item === 4);

console.log(find);

/** OPERATION WITH ARRAY (MAP, REDUCE, FILTER, FIND)*/

/** ARROW FUNCTIONS (FUNCTIONS with CALLBACKS)*/

const teste = () => [1, 2, 3, 4];
console.log(teste());

const teste2 = () => ({ name: "Cristiana" });
console.log(teste2());

/** ARROW FUNCTIONS (FUNCTIONS with CALLBACKS)*/

/** VALUE DEFAULT IN PARAMS (FUNCTIONS with CALLBACKS)*/

const soma = (a = 3, b = 4) => a + b;
console.log("Valores padrões");
console.log(soma(6));
console.log(soma());

/** VALUE DEFAULT IN PARAMS (FUNCTIONS with CALLBACKS)*/

/** DESESTRUTURAÇÃO */
const user2 = {
  nome: "Cristiana",
  idade: 27,
  endereco: {
    cidade: "São Paulo",
    estado: "SP",
  },
};

const { nome, idade, endereco: { cidade } } = user2;

console.log("desestruturação");
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(user2);

/**  DESESTRUTURAÇÃO */

/** REST and SPREAD */
//REST - resto da propriedade
const user3 = {
  name: "Cristiana",
  age: 23,
  company: "CrisPassos",
};

const { name, ...others } = user3;

console.log("REST");
console.log(name);
console.log(others);

const arr1 = [1, 2, 3, 4];

const [a, b, ...c] = arr1;

console.log(a);
console.log(b);
console.log(c);

function sumNumber(...params) {
  console.log(params);
  return params.reduce((total, next) => total + next);
}

console.log(sumNumber(1, 1, 2));

//SPREAD - propaga, repassa a informação do array para outro lugar
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];

const arr4 = [...arr2, ...arr3];

console.log("SPREAD");
console.log(arr4);

const user4 = { ...user3, name: "Angelica" };
console.log(user4);
/** REST and SPREAD */

/** TEMPLATE LITERALS */

const phrase = "Thiago";
const phrase2 = "no barquinho";

console.log("Template Literals");
console.log(`Pedro, ${phrase}, João ${phrase2}`);

/** TEMPLATE LITERALS */

/** OBJECT SHORT SYNTAX */
const nome1 = "Cristiana";
const age1 = 27;

const user5 = {
  nome1,
  age1,
  company: "Cris Passos",
};

console.log("Object Short Syntax");
console.log(user5);

/** OBJECT SHORT SYNTAX */
