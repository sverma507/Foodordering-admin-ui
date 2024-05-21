import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Nav() {
    const navigate=useNavigate();
    const [showdropdown,setShowdropdown]=useState(false)
  return (
    <div className=' h-16 bg-slate-100 flex justify-between items-center font-bold px-4'>
        <div className='text-3xl hover:cursor-pointer hover:text-green-500  ' onClick={()=>{navigate("/")}}>
            Sumit
        </div>
        <div className='text-2xl md:hidden relative' onClick={()=>{setShowdropdown(!showdropdown)}}>{ !showdropdown ? <i class="fa-solid fa-bars"></i> :<i class="fa-solid fa-xmark"></i>}</div>
        <div className={showdropdown ?'absolute bg-green-500  rounded top-14 w-full z-10':'sm:hidden md:flex justify-between w-1/2'}>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl hover:bg-blue-500 hover:text-white rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'}  onClick={()=>{navigate("/");setShowdropdown(false)}}> <i class="fa-solid fa-house"></i> Home</div>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl hover:bg-blue-500 hover:text-white rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'} onClick={()=>{navigate("/");setShowdropdown(false)}}><i class="fa-solid fa-plus"></i> Add Item</div>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl hover:bg-blue-500 hover:text-white rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'} onClick={()=>{navigate("/addcategory");setShowdropdown(false)}}><i class="fa-solid fa-plus"></i> Add Category</div>
        </div>
    </div>
  )
}

export default Nav
