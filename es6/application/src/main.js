import api from "./api";

class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");
    this.inputEl = document.querySelector("input[name=repository]");
    this.registerHandlers();
  }

  //registra os eventos do DOM
  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    //não carrega a página ou envia um get
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) return;

    try {
      const response = await api.get(`/repos/${repoInput}`);
      console.log(response);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      this.inputEl.value = "";
    } catch (error) {
      console.warn("Error API");
    }

    console.log(this.repositories);
    this.render();
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

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
