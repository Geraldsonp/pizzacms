import axios from "axios";

const URL = "https://pizzeriawebapi.herokuapp.com/api/";

export function getProducts() {
  return fetch(URL + "products").then(response => response.json());
}
export function getCategories() {
  return fetch(URL + "categories").then(response => response.json());
}

export async function CreateProduct(product) {
  var headers = {
    Host: "localhost:7197",
    "Content-Type": "application/json",
    Accept: "*/*",
    Origin: "https://localhost:7197",
  };
  return await fetch(URL + "products", {
    headers: headers,
    method: "POST",
    body: JSON.stringify(product),
  }).then(response => {
    if (!response.ok) throw new Error("Status:" + response.status);
    else return response.json();
  });
}

export function DeleteProduct(id) {
  console.log(id);
  axios.delete(URL + "Products/" + id).then(response => response.json);
}
