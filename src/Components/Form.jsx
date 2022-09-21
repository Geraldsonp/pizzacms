import React, { Component } from "react";
import { CreateProduct } from "../Services/ProductsService";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Description: "",
      IsAvailable: true,
      Img: "",
      CategoryId: 0,
      Price: 0,
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className='m-1 grid grid-cols-4'>
            <label className='label' htmlFor='name'>
              Name
            </label>
            <input onChange={this.changeHandler} className='input' type='text' name='Name' id='name' />
          </div>
          <div className='m-1 grid grid-cols-4'>
            <label className='label' htmlFor='Description'>
              Description
            </label>
            <input onChange={this.changeHandler} className='input' type='text' name='Description' id='Description' />
          </div>
          <div className='m-1 grid grid-cols-4'>
            <label className='label' htmlFor='isAvailable'>
              Is Available
            </label>
            <select onChange={this.changeHandler} className='input' name='isAvailable' id='isAvailable'>
              <option value='true'>True</option>
              <option value='false'>false</option>
            </select>
          </div>
          <div className='m-1 grid grid-cols-4'>
            <label className='label' htmlFor='CategoryId'>
              Category
            </label>
            <select onChange={this.changeHandler} className='input' name='CategoryId' id='CategoryId'>
              <option value='1'>Pizzas</option>
              <option value='2'>Empanadas</option>
              <option value='3'>Bebidas</option>
              <option value='4'>Postres</option>
            </select>
          </div>
          <div className='m-1 grid grid-cols-4'>
            <label className='label' htmlFor='Img'>
              ImgUrl
            </label>
            <input onChange={this.changeHandler} className='input' type='text' name='Img' id='Img' />
          </div>
          <h4 className='text-center col-span-6 border-t border-b my-1 font-bold'>Prices</h4>
          <div className='m-1 grid grid-cols-4'>
            <label className='text-center col-span-2 text-xl' htmlFor='Price'>
              Price
            </label>
            <input
              onChange={this.changeHandler}
              className='col-span-2 px-3 col-start-3 border-solid border-2'
              type='text'
              name='Price'
              id='Price'
              value={this.state.Price}
            />
          </div>
          <div className='flex justify-end pt-2'>
            <button
              type='submit'
              className='px-4 bg-green-600 py-1  rounded-lg text-white hover:bg-orange-300 hover:text-indigo-400 mr-2 transition'>
              Save
            </button>
            <button
              type='button'
              onClick={this.props.OnClose}
              className='modal-close px-4 bg-indigo-500 py-1 rounded-lg text-white hover:bg-indigo-400 transition'>
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}
