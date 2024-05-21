import axios from 'axios';
import './Home.css'
import React, { useEffect, useState } from 'react'

function Home() {
  const [count,setCount]=useState(null);
  const [data,setData]=useState(null);
  const get =async()=>{
    try{
      await axios.get('http://localhost:4000/countcategory')
    .then((res)=>{setCount(res?.data?.result);console.log(res?.data);})
    .catch((err)=>{console.log(err);})
    }
    catch{
      console.log("error");
    }

   
  };

  useEffect(()=>{get();},[])
  // data&&console.log(data.length);
  return (
    <div className='bg-slate-400 h-screen flex justify-center items-center'>

      <div className='flex flex-col sm:flex-row justify-between items-center w-96 '>
        <div className='bg-slate-100 h-40 w-40 text-center m-2 flex flex-col justify-evenly rounded border-solid border-4 border-indigo-600 '>
          <h1 className='text-xl'>Total Categories</h1>
          <div className='text-6xl text-red-500 font-bold '>{count}</div>
        </div>
        <div className='bg-slate-100 h-40 w-40 text-center m-2 flex flex-col justify-evenly rounded border-solid border-4 border-indigo-600 '>
          <h1 className='text-xl'>Total Food Items</h1>
          <div className='text-2xl'>{data?.length}</div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
