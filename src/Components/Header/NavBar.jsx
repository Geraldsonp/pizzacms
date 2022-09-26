import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.jpg";
import "material-icons";

export default function NavBar({ categories, OnHandleCategory }) {
  return (
    <header className='w-full'>
      <nav className='bg-dark px-2 sm:px-4 py-2.5 rounded grid xl:grid-cols-6'>
        <div className='flex flex-col col-span-4 lg:col-span-1 items-center justify-center'>
          <img src={logo} alt='Pizza Logo' className='h-40 md:h-20 sm:h-25 rounded-3xl' />
          <span className='font-bold text-4xl text-white lg:mr-3'>CMS</span>
        </div>
        <div
          className='container col-span-4 justify-center flex flex-wrap items-center 
        lg:col-start-2 text-white'>
          <div className={" w-full md:block"} id='navbar-menu'>
            <ul className='flex justify-center mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium '>
              {categories.map(category => (
                <li key={category.id}>
                  <a
                    onClick={() => OnHandleCategory(category)}
                    className='hover:cursor-pointer hover:bg-gray-600 hover:text-gold block py-2 pr-4 font-bold text-2xl pl-3  rounded md:bg-transparent text-orange-600'>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
