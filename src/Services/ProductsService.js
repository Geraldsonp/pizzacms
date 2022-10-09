import axios from "axios";
import AuthHeader from "./AuthHeader";

const URL = "https://localhost:7197/api/";
//const URL = "https://pizzeriawebapi.herokuapp.com/api/";

const headers = AuthHeader();

class productService {
  getProducts() {
    console.log(headers);
    return fetch(URL + "products", {
      headers: headers,
      method: "Get",
    }).then(response => response.json());
  }

  getCategories() {
    return fetch(URL + "categories", {
      headers: headers,
      method: "Get",
    }).then(response => response.json());
  }

  async CreateProduct(product) {
    var newformData = new FormData();
    newformData.append("Name", product.Name);
    newformData.append("Description", product.Description);
    newformData.append("IsAvailable", product.IsAvailable);
    newformData.append("Img", product.Img, product.Img.name);
    newformData.append("CategoryId", product.CategoryId);
    newformData.append("Price", product.Price);

    return await axios({
      method: "POST",
      url: URL + "products",
      headers: headers,
      data: newformData,
    }).then(response => {
      if (!response.status == 200) throw new Error("Status:" + response.status);
      else return response.data;
    });
  }

  DeleteProduct(id) {
    axios
      .delete(URL + "Products/" + id, {
        headers: headers,
      })
      .then(response => response.json);
  }
}

export default new productService();
