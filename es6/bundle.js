"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** CLASS */
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.user = "Cristiana";
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.user);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function () {
  MinhaLista.add("New TODO");
};

MinhaLista.showUser(); //static não olha as outras informacoes da classes somente aguarda receber um parametro, fazer a acao e ir retornar outra coisa

var Math = /*#__PURE__*/function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Math;
}();

console.log("Soma " + Math.soma(2, 2));
/** CLASS */

/** CONST and LET */
//mutações são possíveis dentro de uma constante

var user = {
  name: "Cristiana"
};
user.name = "Alice";
console.log(user);
/** CONST and LET */

/** OPERATION WITH ARRAY (MAP, REDUCE, FILTER, FIND)*/

var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr); //total = 0 next 1
//total = 1 next 2
//total = 3 next 3

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //retorna os pares
//filter retorna true or false

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //find verificar alguma informacao dentro do array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
/** OPERATION WITH ARRAY (MAP, REDUCE, FILTER, FIND)*/

/** ARROW FUNCTIONS (FUNCTIONS with CALLBACKS)*/

var teste = function teste() {
  return [1, 2, 3, 4];
};

console.log(teste());

var teste2 = function teste2() {
  return {
    name: "Cristiana"
  };
};

console.log(teste2());
/** ARROW FUNCTIONS (FUNCTIONS with CALLBACKS)*/

/** VALUE DEFAULT IN PARAMS (FUNCTIONS with CALLBACKS)*/

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
};

console.log("Valores padrões");
console.log(soma(6));
console.log(soma());
/** VALUE DEFAULT IN PARAMS (FUNCTIONS with CALLBACKS)*/

/** DESESTRUTURAÇÃO */

var user2 = {
  nome: "Cristiana",
  idade: 27,
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};
var nome = user2.nome,
    idade = user2.idade,
    cidade = user2.endereco.cidade;
console.log("desestruturação");
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(user2);
/**  DESESTRUTURAÇÃO */

/** REST and SPREAD */
//REST - resto da propriedade

var user3 = {
  name: "Cristiana",
  age: 23,
  company: "CrisPassos"
};

var name = user3.name,
    others = _objectWithoutProperties(user3, ["name"]);

console.log("REST");
console.log(name);
console.log(others);
var arr1 = [1, 2, 3, 4];
var a = arr1[0],
    b = arr1[1],
    c = arr1.slice(2);
console.log(a);
console.log(b);
console.log(c);

function sumNumber() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  console.log(params);
  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(sumNumber(1, 1, 2)); //SPREAD - propaga, repassa a informação do array para outro lugar

var arr2 = [1, 2, 3];
var arr3 = [4, 5, 6];
var arr4 = [].concat(arr2, arr3);
console.log("SPREAD");
console.log(arr4);

var user4 = _objectSpread(_objectSpread({}, user3), {}, {
  name: "Angelica"
});

console.log(user4);
/** REST and SPREAD */

/** TEMPLATE LITERALS */

var phrase = "Thiago";
var phrase2 = "no barquinho";
console.log("Template Literals");
console.log("Pedro, ".concat(phrase, ", Jo\xE3o ").concat(phrase2));
/** TEMPLATE LITERALS */

/** OBJECT SHORT SYNTAX */

var nome1 = "Cristiana";
var age1 = 27;
var user5 = {
  nome1: nome1,
  age1: age1,
  company: "Cris Passos"
};
console.log("Object Short Syntax");
console.log(user5);
/** OBJECT SHORT SYNTAX */
