import React, { useEffect, useState } from "react";
import "material-icons/iconfont/material-icons.css";
import ReactDOM from "react-dom";
import Form from "../../Form";

export default function AddEditModal({ isOpen, OnClose, onFormSubmit }) {
  if (isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <div
        className={
          "opacity-100 fixed w-full h-full top-0 left-0 flex items-center justify-center transition duration-300 "
        }>
        <div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

        <div className='modal-container bg-white w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-y-auto'>
          <div className=' absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50'>
            <span className='text-sm material-icons hover:cursor-pointer' onClick={OnClose}>
              close
            </span>
          </div>

          <div className='modal-content py-4 text-left px-6'>
            <div className='flex justify-between items-center pb-3'>
              <p className='text-2xl font-bold text-center flex-grow'>Create Product</p>
              <span
                className='modal-close cursor-pointer z-50 material-icons hover:text-orange-500 transition '
                onClick={OnClose}>
                close
              </span>
            </div>
            <Form OnClose={OnClose} onFormSubmit={onFormSubmit}></Form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
