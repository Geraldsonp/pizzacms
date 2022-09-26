import React, { useState } from "react";
import { Item } from "./Item";
import DeleteModal from "./Modals/DeleteModal";
import "material-icons/iconfont/material-icons.css";
import "material-icons/iconfont/material-icons.css";
import AddEditModal from "./Modals/AddEditModal";

export default function ItemsList({ title, products, onDelete, onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ShowEdit, setShowEditModal] = useState(true);
  const [productToDelete, setProductToDelete] = useState({});

  function ShowEditModal() {
    setShowEditModal(!ShowEdit);
  }

  function handleDeleteConfirmation(confirmation) {
    setIsOpen(!isOpen);
    if (confirmation) {
      onDelete(productToDelete.id);
    }
  }

  function ShowDeleteModal(product) {
    setIsOpen(!isOpen);
    setProductToDelete(product);
  }

  return (
    <div className='mx-auto overflow-x-auto w-10/12 xl:w-3/4 text-xl lg:text-[1rem] shadow-lg p-2 bg-pastel'>
      <AddEditModal
        isOpen={ShowEdit}
        OnClose={ShowEditModal}
        onFormSubmit={product => {
          onSubmit(product), ShowEditModal();
        }}></AddEditModal>
      <DeleteModal
        onDeleteConfirmation={handleDeleteConfirmation}
        isOpen={isOpen}
        OnClose={ShowDeleteModal}></DeleteModal>
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
      <table className=' text-center rounded-md w-full'>
        <thead className='text-sm  uppercase bg-gold '>
          <tr className=''>
            <th className='py-3 px-6'>Image</th>
            <th className='py-3 px-6 '>Name</th>
            <th className='py-3 px-6'>Price</th>
            <th className='py-3 px-6 hidden lg:table-cell'>Description</th>
            <td className='py-4 px-6'></td>
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
