import React, { useState, useEffect } from "react";
import { Item } from "./Product";
import DeleteModal from "./Modals/DeleteModal";
import "material-icons/iconfont/material-icons.css";
import "material-icons/iconfont/material-icons.css";
import AddEditModal from "./Modals/AddEditModal";
import produtService from "../../Services/ProductsService";
import { Navigate, useNavigate } from "react-router-dom";

function Products(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [ShowEdit, setShowEditModal] = useState(true);
  const [productToDelete, setProductToDelete] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  if (!props.isLogin) {
    return <Navigate to={"/Login"} />;
  }

  useEffect(() => {
    produtService.getProducts().then(data => setProducts(data));
    produtService.getCategories().then(data => setCategories(data));
  }, []);

  const handleCategory = cat => {
    setProducts(cat.products);
  };

  function removeProduct() {
    setIsOpen(!isOpen);
    produtService.DeleteProduct(productToDelete.id);
    var newList = products.filter(x => x.id != productToDelete.id);
    setProducts(newList);
  }

  async function handleCreateProduct(product) {
    await produtService
      .CreateProduct(product)
      .then(response => {
        var temp = [...products, response];
        setProducts(temp);
      })
      .catch(error => console.log(error));
  }

  function ShowEditModal() {
    setShowEditModal(!ShowEdit);
  }

  function ShowDeleteModal(product) {
    setIsOpen(!isOpen);
    setProductToDelete(product);
  }

  return (
    <div className='mx-auto overflow-x-auto text-md shadow-lg p-2 bg-pastel'>
      <AddEditModal
        isOpen={ShowEdit}
        OnClose={ShowEditModal}
        onFormSubmit={product => {
          handleCreateProduct(product), ShowEditModal();
        }}></AddEditModal>
      <DeleteModal onDeleteConfirmation={removeProduct} isOpen={isOpen} OnClose={ShowDeleteModal}></DeleteModal>
      <div className='grid grid-cols-6 place-items-center '>
        <h1 className=' font-bold text-3xl text-orange-600 col-span-5 text-center'>Manage Products</h1>
        <span
          className='material-icons px-3  rounded-lg  
           text-orange text-4xl font-bold hover:cursor-pointer hover:bg-gray-200 my-2'
          onClick={ShowEditModal}>
          add
        </span>
      </div>
      <div className=' mt-3 '></div>
      <table className=' text-center min-w-[360px] max-w-2xl rounded-md w-full'>
        <thead className='text-sm bg-gold '>
          <tr className=''>
            <th className='py-2 px-10'>Image</th>
            <th className='py-2 px-10 '>Name</th>
            <th className='py-2 px-10'>Price</th>
            <th className='py-2 px-10 hidden lg:table-cell'>Description</th>
            <td className='py-2 px-10'></td>
          </tr>
        </thead>
        <tbody className='mt-5'>
          {products.map(product => (
            <Item key={product.id} pizza={product} onDelete={() => ShowDeleteModal(product)}></Item>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Products;
