"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/** CHALLENGE 1 - Create Classes */
var User = /*#__PURE__*/function () {
  function User() {
    _classCallCheck(this, User);

    this.email = "";
    this.password = "";
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return false;
    }
  }]);

  return User;
}();

var Admin = /*#__PURE__*/function (_User) {
  _inherits(Admin, _User);

  var _super = _createSuper(Admin);

  function Admin() {
    _classCallCheck(this, Admin);

    return _super.call(this);
  }

  _createClass(Admin, [{
    key: "isAdmin",
    value: function isAdmin() {
      return true;
    }
  }]);

  return Admin;
}(User);

var User1 = new User("cristiana@email.com", "cris123");
var Admin1 = new Admin("emilia@email.com", "emilia123");
console.log("Is Admin? ");
console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
/** CHALLENGE 1 - Create Classes */

/** CHALLENGE 2 - Array (map, reduce, filter and find) */

var users = [{
  name: "Cristiana",
  age: 27,
  company: "CrisPassos"
}, {
  name: "Gabriel",
  age: 15,
  company: "JessicaCompany"
}, {
  name: "Jessica",
  age: 37,
  company: "JessicaCompany"
}];
var ages = users.map(function (a) {
  return a.age;
});
console.log("All ages ".concat(ages));
var funcs = users.filter(function (a) {
  return a.age >= 18 && a.company === "JessicaCompany";
});
console.log("All funcs from JessicaCompany major age");
console.log(funcs);
var google = users.find(function (a) {
  return a.company === "Google";
});
console.log("Is from Google: ".concat(google));
var multiple = users.map(function (a) {
  return {
    name: a.name,
    age: a.age * 2,
    company: a.company
  };
});
console.log(multiple);
console.log(multiple.filter(function (a) {
  return a.age <= 50;
}));
/** CHALLENGE 2 - Array (map, reduce, filter and find) */

/** CHALLENGE 3 - Arrow Functions */

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log("Arrow Function");
console.log(arr);
var user2 = {
  name: "Cristiana",
  age: 24
};

var showAge = function showAge(user) {
  return user.age;
};

console.log(showAge(user2));
var name1 = "Cristiana";
var age1 = 27;

var showUser1 = function showUser1() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Ana";
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 37;
  return {
    name: name,
    age: age
  };
};

console.log(showUser1(name1, age1));
console.log(showUser1(name1));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
/** CHALLENGE 3 - Arrow Functions */

/** CHALLENGE 4 - Desestruturação */


console.log("Desestruturação");
var company = {
  nameCompany: "Rockeseat",
  address: {
    city: "Rio do Sul",
    state: "SC"
  }
};
var nameCompany = company.nameCompany,
    _company$address = company.address,
    city = _company$address.city,
    state = _company$address.state;
console.log(nameCompany);
console.log(city);
console.log(state);

function showInfo(_ref) {
  var name = _ref.name,
      age = _ref.age;
  return "".concat(name, " tem ").concat(age, " anos");
}

console.log(showInfo({
  name: "Cristiana",
  age: 27
}));
/** CHALLENGE 4 - Desestruturação */

/** CHALLENGE 5 - REST/SPREAD */

var arr1 = [1, 2, 3, 4, 5, 6];
var x = arr1[0],
    y = arr1.slice(1);
console.log(x);
console.log(y);

function sumRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(sumRest(1, 2, 3, 4, 5, 6));
console.log(sumRest(1, 2));
console.log("SPREAD");
var userSpread = {
  name: "Cristiana",
  age: 23,
  address: {
    city: "São Paulo",
    country: "Brazil"
  }
};

var userSpread1 = _objectSpread(_objectSpread({}, userSpread), {}, {
  name: "Thiago"
});

console.log(userSpread1);

var userSpread2 = _objectSpread(_objectSpread({}, userSpread), {}, {
  address: {
    city: "Rio de Janeiro"
  }
});

console.log(userSpread2);
/** CHALLENGE 5 - REST/SPREAD */

/** CHALLENGE 6 - Template Literals */

var userLiterals = "Cristiana";
var ageLiterals = 27;
console.log("O usu\xE1rio ".concat(userLiterals, " possui ").concat(ageLiterals, " anos"));
/** CHALLENGE 6 - Template Literals */

/** CHALLENGE 7 - Object Short Syntaxy */

var nameShort = "Cristiana";
var ageShort = 27;
var userShort = {
  nameShort: nameShort,
  ageShort: ageShort,
  cityShort: "São Paulo"
};
console.log("Short Syntaxy");
console.log(userShort);
/** CHALLENGE 7 - Object Short Syntaxy */
