import React from "react";
import "material-icons/iconfont/material-icons.css";

export const Item = ({ pizza, onDelete }) => {
  let availableText = "No Disponible";
  const AvailableBadge = isAvailable => {
    availableText = isAvailable ? "Disponible" : "No Disponible";
    return isAvailable
      ? "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
      : "bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900";
  };
  return (
    <tr className='border-b border-gray-700 mb-5' key={pizza.id}>
      <td>
        <img className='w-36' src={pizza.img} alt='' />
      </td>
      <td className='py-4 px-6 font-bold'>{pizza.name}</td>
      <td className='py-4 px-6'>
        {pizza.tamaños.map(price => (
          <p key={price.id}>
            {price.size}:{price.price}
          </p>
        ))}
      </td>
      <td className='py-4 px-6 hidden md:table-cell max-w-[200px]'>{pizza.description}</td>
      <td className='py-4 px-6 hidden md:table-cell'>
        <span className={AvailableBadge(pizza.isAvailable)}>{availableText}</span>
      </td>
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
