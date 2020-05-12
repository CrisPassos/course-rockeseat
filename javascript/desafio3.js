function checarIdade(idade) {
  return new Promise(function(resolve, reject) {
    if (idade >= 18) {
      resolve("É maior que 18");
    } else {
      reject("É menor que 18");
    }
  });
}

checarIdade(20)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });

function ownerRepo() {
  var inputValue = document.getElementById("user");

  axios
    .get(`https://api.github.com/users/${inputValue.value}/repos`)
    .then(function(response) {
      debugger;
      console.log(response);
      response.data.forEach(element => {
        createList(element.name);
      });
    })
    .catch(function(err) {
      debugger;
      console.log(err.status);
      if (status === 404) createList("user not found");
      else createList("No Repo");
    });
}

function createList(element) {
  var ulElement = document.getElementById("listDiv");
  var liElement = document.createElement("li");
  var textElement = document.createTextNode(element);
  liElement.appendChild(textElement);
  ulElement.appendChild(liElement);
}
