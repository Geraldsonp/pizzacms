import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.jpg";
import "material-icons";

export default function NavBar({ categories, OnHandleCategory }) {
  return (
    <header className='w-full'>
      <nav className='bg-[#E0D98C] px-2 sm:px-4 py-2.5 rounded grid lg:grid-cols-5'>
        <div className='flex flex-col items-center justify-center xl:col-start-2'>
          <img src={logo} alt='Pizza Logo' className='mr-1 h-40 md:h-20 sm:h-25 rounded-3xl' />
          <span className='font-bold text-4xl'>CMS</span>
        </div>
        <div className='container flex flex-wrap justify-around items-center md:col-start-3'>
          <div className={" w-full md:block md:w-auto"} id='navbar-menu'>
            <ul className='flex  p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 '>
              {categories.map(category => (
                <li key={category.id}>
                  <a
                    onClick={() => OnHandleCategory(category)}
                    className='hover:cursor-pointer block py-2 pr-4 font-bold text-2xl pl-3  rounded md:bg-transparent text-orange-600 md:p-0'>
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
