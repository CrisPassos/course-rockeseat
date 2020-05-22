import axios from "axios";

export default class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.warn("Error in API");
    }
  }
}
