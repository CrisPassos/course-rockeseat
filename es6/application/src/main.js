class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");
    this.registerHandlers();
  }

  //registra os eventos do DOM
  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    //não carrega a página ou envia um get
    event.preventDefault();
    this.repositories.push({
      name: "rocketseat.com.br",
      description: "Tire a sua ideia do papel e de vida a sua startup",
      avatar_urls: "https://avatars0.githubusercontent.com/u/28929274?v=4",
      html_url: "http://github.com/rocketseat/rocketseat.com.br",
    });

    console.log(this.repositories);
    this.render();
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_urls);

      let strongEl = document.createElement("strong");
      strongEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("Acessar"));
      linkEl.setAttribute("href", repo.html_url);

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(strongEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
