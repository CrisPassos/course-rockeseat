var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  todos.forEach(todo => {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    var id = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + id + ")");

    var linkText = document.createTextNode(" Excluir");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  });
}

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

function deleteTodo(id) {
  todos.splice(id, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

renderTodos();

buttonElement.onclick = addTodo;
