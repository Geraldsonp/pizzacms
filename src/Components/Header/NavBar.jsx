import React from "react";
import logo from "../../assets/logo.jpg";

export default function NavBar({ categories, OnHandleCategory }) {
  return (
    <header>
      <nav className='bg-[#E0D98C] px-2 sm:px-4 py-2.5 rounded flex'>
        <div className='flex items-center '>
          <img src={logo} alt='Pizza Logo' className='mr-1 h-20 sm:h-25 rounded-3xl' />
          <span className='font-bold'>CMS</span>
        </div>
        <div className='container flex flex-wrap justify-around items-center'>
          <div className='hidden w-full md:block md:w-auto' id='navbar-menu'>
            <ul className='flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 '>
              {categories.map(category => (
                <li key={category.id}>
                  <a
                    onClick={() => OnHandleCategory(category)}
                    className='hover:cursor-pointer block py-2 pr-4 font-bold text-2xl pl-3 bg-blue-700 rounded md:bg-transparent text-orange-600 md:p-0'>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}
