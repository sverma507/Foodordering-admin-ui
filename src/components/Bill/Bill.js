import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
const Bill = () => {
  const {state}=useLocation();
  const [paid,setPaid]=useState(true);
  const order=state.order;
  let total_price=0;
  // console.log("order=====>",order);

  const handleClick=()=>{
    setPaid(false);
    order.forEach(async(item)=>{
        const tempItem={...item,["added"]:false}
       const result= await axios.put('http://localhost:4000/updateitem',tempItem);
    })
    localStorage.removeItem('order');
  }
  return (
    <div>
<body class="bg-gray-100 p-6">
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div class="text-center mb-6">
            <h1 class="text-2xl font-bold">Final Product Bill</h1>
            <p class="text-gray-600">Date: June 7, 2024</p>
        </div>

        <div class="mb-6">
            <h2 class="text-lg font-semibold">Customer Information</h2>
            <p class="text-gray-700">Name:</p>
            <p class="text-gray-700">Address:</p>
        </div>

        <div class="mb-6">
            <h2 class="text-lg font-semibold">Product Details</h2>
            <table class="min-w-full bg-white">
                <thead>
                    <tr class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-4 text-left">Item No.</th>
                        <th class="py-3 px-4 text-left">Item Name</th>
                        <th class="py-3 px-4 text-left">Quantity</th>
                        <th class="py-3 px-4 text-left">Unit Price</th>
                        <th class="py-3 px-4 text-left">Total Price</th>
                    </tr>
                   {
                      order?.map((item,index)=>{
                        total_price=total_price+item.qty*item.price
                        return(
                          <tr>
                            <td class="py-3 px-4 text-left">{index+1}</td>
                            <td class="py-3 px-4 text-left">{item.productName}</td>
                            <td class="py-3 px-4 text-left">{item.qty}</td>
                            <td class="py-3 px-4 text-left">{item.price}</td>
                            <td class="py-3 px-4 text-left">{item.qty*item.price}</td>
                          </tr>
                        )
                      })
                   }
                </thead>
                
            </table>
        </div>

        <div class="mb-6">
            {/* <h2 class="text-lg font-semibold">Summary</h2>
            <div class="flex justify-between py-2">
                <span class="text-gray-700">Subtotal</span>

            </div>
            <div class="flex justify-between py-2">
                <span class="text-gray-700">Discount (10%)</span>

            </div> */}
            <div class="flex justify-between py-2 font-bold">
                <span>Total Amount</span> <span> {total_price}</span>
               
            </div>
        </div>

        <div class="text-center mt-6">
            <p class="text-gray-700">Thank you for your purchase!</p>
            <p class="text-gray-700">XYZ Company</p>
        </div>
    </div>
   {paid && <div className='rounded w-52 h-14 bg-green-500 flex justify-center items-center text-white text-3xl hover:bg-green-700 hover:cursor-pointer' onClick={handleClick}>Pay</div>}
    </body>
    </div>
   

  )
}

export default Bill