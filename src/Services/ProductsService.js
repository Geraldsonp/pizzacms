import axios from "axios";

const URL = "https://pizzeriawebapi.herokuapp.com/api/";

const headers = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export function getProducts() {
  return fetch(URL + "products", {
    headers: headers,
    method: "Get",
  }).then(response => response.json());
}
export function getCategories() {
  return fetch(URL + "categories", {
    headers: headers,
    method: "Get",
  }).then(response => response.json());
}

export async function CreateProduct(product) {
  return await axios
    .post(URL + "products", JSON.stringify(product), {
      headers: headers,
    })
    .then(response => {
      if (!response.status == 200) throw new Error("Status:" + response.status);
      else return response.data;
    });
}

export function DeleteProduct(id) {
  axios.delete(URL + "Products/" + id).then(response => response.json);
}
