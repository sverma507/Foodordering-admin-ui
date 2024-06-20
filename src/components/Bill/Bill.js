import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
// import SuccessAnimation from "actually-accessible-react-success-animation";

const Bill = ({ email }) => {
  const fname=localStorage.getItem('fname')
  const semail=localStorage.getItem('email')
  console.log("mail in bill ",email);
  const { state } = useLocation();
  const [paid, setPaid] = useState(true);
  const order = state.order;
  const data={order:[...order],email:semail}
  console.log("orderfrom Billl=>",order);
  let total_price = 0;

  const handleClick = async (e) => {
    e.preventDefault();
    setPaid(false);
    for (const item of order) {
      const tempItem = { ...item, added: false };
      await axios.put('http://localhost:4000/updateitem', tempItem);
    }
    localStorage.removeItem('order');
    
    await axios.post('http://localhost:4000/sendmail',data)
  };

  return (
    <div>
      <body className="bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Final Product Bill</h1>
            <p className="text-gray-600">Date: June 7, 2024</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold">Customer Information</h2>
            <p className="text-gray-700">Name: {fname}</p>
            <p className="text-gray-700">Address: {semail}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold">Product Details</h2>
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-4 text-left">Item No.</th>
                  <th className="py-3 px-4 text-left">Item Name</th>
                  <th className="py-3 px-4 text-left">Quantity</th>
                  <th className="py-3 px-4 text-left">Unit Price</th>
                  <th className="py-3 px-4 text-left">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  order?.map((item, index) => {
                    total_price += item.qty * item.price;
                    return (
                      <tr key={index}>
                        <td className="py-3 px-4 text-left">{index + 1}</td>
                        <td className="py-3 px-4 text-left">{item.productName}</td>
                        <td className="py-3 px-4 text-left">{item.qty}</td>
                        <td className="py-3 px-4 text-left">{item.price}</td>
                        <td className="py-3 px-4 text-left">{item.qty * item.price}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <div className="flex justify-between py-2 font-bold">
              <span>Total Amount</span> <span>{total_price}</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-700">Thank you for your purchase!</p>
            <p className="text-gray-700">XYZ Company</p>
          </div>
        </div>

        {paid &&
          <form onSubmit={handleClick}>
            <input type='hidden' value={email} />
            <button type="submit" className='rounded w-52 h-14 bg-green-500 flex justify-center items-center text-white text-3xl hover:bg-green-700 hover:cursor-pointer'>
              Pay
            </button>
          </form>
        }
      </body>
    </div>
  );
}

export default Bill;
