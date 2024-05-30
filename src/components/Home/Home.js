import axios from 'axios';
import './Home.css'
import React, { useEffect, useState } from 'react'

function Home() {
  const [count,setCount]=useState({
    totalCategory:0,
    totalItem:0,
  });
  const [data,setData]=useState(null);
  const get =async()=>{
    try{
      await axios.get('http://localhost:4000/countcategory')
    .then((res)=>{setCount((prev)=>{
        return(
          {
            ...prev,
            totalCategory:res?.data?.result
          }
        )
    });})
    .catch((err)=>{console.log(err);})
    }
    catch{
      console.log("error");
    }

   
  };

  const countItem=async()=>{
    try{
      await axios.get('http://localhost:4000/countitems')
      .then((res)=>{
        setCount((prev)=>{
          return(
            {
              ...prev,
              totalItem:res?.data?.result
            }
          )
        })
        // console.log(res?.data);
      })  
      .catch((err)=>{
        console.log("error in api of getting the total no of items");
      })
    }
    catch{
      console.log("error in getting the count of total no of items");
    }
  }
  useEffect(()=>{countItem();get();},[])
  // data&&console.log(data.length);
  return (
    <div className='bg-slate-400 h-screen flex justify-center items-center'>

      <div className='flex flex-col sm:flex-row justify-between items-center w-96 '>
        <div className='bg-slate-100 h-40 w-40 text-center m-2 flex flex-col justify-evenly rounded border-solid border-4 border-indigo-600 '>
          <h1 className='text-xl'>Total Categories</h1>
          <div className='text-6xl text-red-500 font-bold '>{count.totalCategory}</div>
        </div>
        <div className='bg-slate-100 h-40 w-40 text-center m-2 flex flex-col justify-evenly rounded border-solid border-4 border-indigo-600 '>
          <h1 className='text-xl'>Total Items</h1>
          <div className='text-6xl text-red-500 font-bold '>{count.totalItem}</div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
