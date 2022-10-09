import axios from "axios";

//const URL = "https://localhost:7197/api/";
const URL = "https://pizzeriawebapi.herokuapp.com/api/";

export class AuthService {
  async login(userName, password) {
    const response = await axios.post(API_URL + "Login", {
      userName,
      password,
    });
    if (response.status == 200) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
