axios
  .get("https://api.github.com/users/crispassos")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.warn(err);
  });
