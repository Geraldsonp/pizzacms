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
    <div className='mx-auto'>
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
      <div className='grid grid-cols-6 	place-items-center'>
        <h1 className=' font-bold text-3xl text-orange-600 col-span-5 text-center'>Manage {title}</h1>
        <span
          className='material-icons self-center border border-orange-400 rounded-2xl  text-green-400 text-4xl font-bold hover:cursor-pointer hover:bg-gray-200 px-3 mt-2'
          onClick={ShowEditModal}>
          add
        </span>
      </div>
      <div className='overflow-x-auto mt-3'></div>
      <table className=' text-left rounded-md'>
        <thead className='text-sm  uppercase bg-[#E0D98C]'>
          <tr className=''>
            <th className='py-3 px-6'>Image</th>
            <th className='py-3 px-6 '>Name</th>
            <th className='py-3 px-6'>Price</th>
            <th className='py-3 px-6 hidden md:table-cell'>Description</th>
            <th className='py-3 px-6 hidden md:table-cell'>Available</th>
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
