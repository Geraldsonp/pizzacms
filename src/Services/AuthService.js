import axios from "axios";

//const URL = "https://localhost:7197/api/";
const URL = "https://donremolopizzawebapi-production.up.railway.app/api/";

export class AuthService {
  async login(userName, password) {
    const response = await axios.post(URL + "auth/Login", {
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

  async DemoUser() {
    var userName = "DemoUser";
    var password = "DemoUser";
    const response = await axios.post(URL + "auth/Login", {
      userName,
      password,
    });
    if (response.status == 200) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  register(username, email, password) {
    return axios.post(URL + "auth/signup", {
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
