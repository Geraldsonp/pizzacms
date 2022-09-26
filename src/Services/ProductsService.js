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
    headers: { "Content-Type": "multipart/form-data", Accept: "*/*" },
    data: newformData,
  }).then(response => {
    if (!response.status == 200) throw new Error("Status:" + response.status);
    else return response.data;
  });
}

export function DeleteProduct(id) {
  axios.delete(URL + "Products/" + id).then(response => response.json);
}
