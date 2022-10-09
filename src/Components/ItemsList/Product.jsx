import React from "react";
import "material-icons/iconfont/material-icons.css";

export const Item = ({ pizza, onDelete }) => {
  let availableText = pizza.isAvailable ? "Disponible" : "No Disponible";

  return (
    <tr className='border-b border-gray-700 mb-5 file:' key={pizza.id}>
      <td className='relative p-2'>
        <span className={pizza.isAvailable ? "disponible-badge" : "nodisponible-badge"}>{availableText}</span>
        <img className='w-[90px]' src={pizza.img} alt='' />
      </td>
      <td className='py-2 px-6 font-bold '>{pizza.name}</td>
      <td className='py-2 px-6'>{pizza.price}</td>
      <td className='py-4 px-6 hidden lg:table-cell max-w-[18rem] min-w-[250px]'>{pizza.description}</td>
      <td className='py-4 px-6'>
        <a>
          <span className='hover:cursor-pointer material-icons text-blue-500 text-3xl'>edit</span>
        </a>
        <a>
          <span className='hover:cursor-pointer material-icons text-red-500 text-3xl' onClick={onDelete}>
            delete
          </span>
        </a>
      </td>
    </tr>
  );
};
