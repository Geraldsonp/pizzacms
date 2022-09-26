import { React } from "react";
import ReactDOM from "react-dom";
import "material-icons";

export default function DeleteModal({ isOpen, OnClose, onDeleteConfirmation }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className=' mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full bg-gray-800 bg-opacity-70'>
      <div className='relative top-[30%] m-auto p-4 w-full max-w-md '>
        <div className='relative bg-pastel rounded-lg shadow '>
          <button
            type='button'
            className='absolute top-3 right-2.5 text-dark bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
            onClick={OnClose}>
            <span className='material-icons'>close</span>
          </button>
          <div className='p-6 text-center'>
            <span className='material-icons text-red-600 text-4xl'>warning</span>
            <h3 className='mb-5 text-lg font-normal text-dark '>Are you sure you want to delete this product?</h3>
            <button
              onClick={() => onDeleteConfirmation(true)}
              data-modal-toggle='popup-modal'
              type='button'
              className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>
              Yes, I'm sure
            </button>
            <button
              onClick={() => onDeleteConfirmation(false)}
              data-modal-toggle='popup-modal'
              type='button'
              className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
