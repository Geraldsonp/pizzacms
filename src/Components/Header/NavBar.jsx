import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.jpg";
import "material-icons";
import { useEffect } from "react";

export default function NavBar(props) {
  return (
    <div className='w-full'>
      <div class='bg-dark lg:pb-1'>
        <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <header class='flex justify-between items-center py-2 md:py-3'>
            <a
              href='/'
              class='inline-flex text-white items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
              aria-label='logo'>
              <img src={logo} alt='Pizza Logo' className='h-24 md:h-20 sm:h-25 rounded-3xl' />
              CMS
            </a>
            <nav className='flex flex-row gap-12'>
              {props.loginStatus ? (
                <div className='text-white text-center'>
                  <div className='block'>
                    <span className='material-icons'>manage_accounts</span>
                    <p className='block text-center'>{props.UserName}</p>
                  </div>
                  <button type='button' onClick={props.OnLogout} className='text-white rounded-sm bg-slate-700 px-4'>
                    Log Out
                  </button>
                </div>
              ) : null}
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
}
