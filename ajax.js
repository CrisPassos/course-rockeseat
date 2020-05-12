//api do github
//https://api.github.com/users/crispassos

//Promises - códigos que nao interfere na execucao do codigo

var myPromisse = function() {
  // as váriaveis sao funcoes tambem
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/crispassos");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisicao");
        }
      }
    };
  });
};

myPromisse()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.warn(err);
  });
