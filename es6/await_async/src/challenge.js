import axios from "axios";
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export async function oneForSec() {
  try {
    await delay();
    console.log("1s");
    await delay();
    console.log("2s");
    await delay();
    console.log("3s");
  } catch (error) {
    console.warn("Error no delay");
  }
}

export default class Challenge {
  static async getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log(response.data);
    } catch (error) {
      console.warn("User doesn`t exist");
    }
  }

  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (error) {
      console.warn("Repositories doesn`t exist");
    }
  }
}
