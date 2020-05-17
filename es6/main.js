class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
  }
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push("novo todo");
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function() {
  MinhaLista.addTodo();
};
