import { useState, useEffect } from "react";
import NavBar from "./Components/Header/NavBar";
import ItemsList from "./Components/ItemsList/ItemsList";
import { CreateProduct, DeleteProduct, getCategories, getProducts } from "./Services/ProductsService";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
    getCategories().then(data => setCategories(data));
  }, []);

  const handleCategory = cat => {
    setProducts(cat.products);
    catid = cat.id;
  };

  function removeProduct(id) {
    DeleteProduct(id);
    var newList = products.filter(x => x.id != id);
    setProducts(newList);
  }

  async function handleCreateProduct(product) {
    await CreateProduct(product)
      .then(response => {
        var temp = [...products, response];
        setProducts(temp);
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <NavBar OnHandleCategory={handleCategory} categories={categories}></NavBar>
      <div className='mx-auto w-11/12 lg:w-10/12 mt-3'>
        <ItemsList
          title={"Products"}
          products={products}
          onDelete={removeProduct}
          onSubmit={handleCreateProduct}></ItemsList>
      </div>
    </div>
  );
}

export default App;
