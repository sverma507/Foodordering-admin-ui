import React from 'react';

const Footer = () => {
  return (
    <body className="bg-gray-50">
      <div className="container mx-center py-8">
        <h1 className="text-2xl font-bold mb-4">Food Cart and Order Form</h1>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item">Item:</label>
            <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item" type="text" placeholder="Enter item"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Quantity:</label>
            <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Enter quantity"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">Notes:</label>
            <textarea className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="notes" placeholder="Enter notes"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Add to Cart
            </button>
          </div>
        </form>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-2">
              <span className="font-bold">Item:</span> Cheeseburger <br />
              <span className="font-bold">Quantity:</span> 2 <br />
              <span className="font-bold">Notes:</span> No onions
            </li>
          </ul>
          <div className="mt-4 text-right">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Footer;
