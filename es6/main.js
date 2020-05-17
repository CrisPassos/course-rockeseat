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
