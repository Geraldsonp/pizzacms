import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = event => {
    event.preventDefault();
    props.OnLogIn(userName, password);
  };

  const handleUserNameChangeEvent = e => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handlPasswordChangeEvent = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div className=''>
      <div className='bg-pastel py-6 sm:py-8 lg:py-12'>
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <h2 className='text-dark text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8'>Login</h2>

          <form
            className='max-w-md border rounded-lg border-dark mx-auto p-5'
            onSubmit={onSubmit}
            noValidate
            autoComplete='off'>
            <div className='flex flex-col gap-4 p-4 md:p-8'>
              <div>
                <label htmlFor='email' className='inline-block text-gray-800 text-sm sm:text-base mb-2'>
                  User Name
                </label>
                <input
                  type='text'
                  name='userName'
                  className='w-full bg-gray-50 text-gray-800 border focus:ring ring-gold rounded outline-none transition duration-100 px-3 py-2'
                  value={userName}
                  onChange={handleUserNameChangeEvent}
                />
              </div>

              <div>
                <label htmlFor='password' className='inline-block text-gray-800 text-sm sm:text-base mb-2'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  className='w-full bg-gray-50 text-gray-800 border focus:ring ring-gold rounded outline-none transition duration-100 px-3 py-2'
                  value={password}
                  onChange={handlPasswordChangeEvent}
                />
              </div>
              <button
                type='Submit'
                className='block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'>
                Log in
              </button>
            </div>

            <div className='flex justify-center items-center bg-gold p-4'>
              <p className='text-dark text-sm text-center'>
                Don't have an account?{" "}
                <a
                  onClick={props.OnDemoLogIn}
                  className='text-indigo-500 font-bold cursor-pointer hover:text-indigo-600 active:text-indigo-700 transition duration-100'>
                  Demo It
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
