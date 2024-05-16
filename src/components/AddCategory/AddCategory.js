import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function AddCategory() {
  const [category,setCategory]=useState({
    categoryName:'',
  });
  const navigate=useNavigate();
  const go_addCategory=()=>{
    // console.log("categorynamer=>",category.categoryName);
    axios.post('http://localhost:4000/addcategory',category)
    .then((res)=>{
      console.log(res);
    })
    .catch((res)=>{
      console.log(res);
    })
    setCategory({categoryName:''})
  }

  const go_get=(e)=>{
    setCategory({categoryName:e.target.value})
  }
  return (
    <div className=' bg-black flex justify-center items-center h-screen w-full'>
      <div className='bg-slate-400 h-60 w-60 rounded'>
        <h1 className='text-center m-3'>Add Category</h1>
        <div className=' flex justify-center items-center flex-column'>
          <input type="text" placeholder='enter category name' className='h-8 px-2 rounded outline-none' value={category.categoryName} onChange={(e)=>{go_get(e)}}/>
        </div>

        <div className=' flex justify-center items-center flex-column m-10'>
          <div className='bg-teal-400 h-8 w-80 text-center rounded leading-8 hover:cursor-pointer' onClick={go_addCategory}>ADD</div>
        </div>
        <div className=' flex justify-center items-center flex-column m-10'>
          <div className='bg-teal-400 h-8 w-80 text-center rounded leading-8 hover:cursor-pointer' onClick={()=>{navigate('/')}}>Close</div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
