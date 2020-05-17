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

//mutações são possíveis dentro de uma constante
const user = { name: "Cristiana" };
user.name = "Alice";

console.log(user);

//Operações em vetores
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item, index) => {
  return item * index;
});

console.log(newArr);

//total = 0 next 1
//total = 1 next 2
//total = 3 next 3
const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log(sum);

//retorna os pares
//filter retorna true or false
const filter = arr.filter(item => {
  return item % 2 === 0;
});

console.log(filter);

//find verificar alguma informacao dentro do array
const find = arr.find(item => {
  return item === 4;
});

console.log(find);
