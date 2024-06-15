import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Nav({toggle}) {
    const navigate=useNavigate();
    const [showdropdown,setShowdropdown]=useState(false)
    // const [mobile,setMobile]=useState(window.innerWidth<768)
    // useEffect(()=>{window.innerWidth<768?setShowdropdown(true):setShowdropdown(false);console.log("hii")},[window.innerWidth])
  return (
    <div className=' h-16 bg-slate-100 flex justify-between items-center font-bold px-4'>
        <div className='text-3xl hover:cursor-pointer hover:text-green-500  ' onClick={()=>{navigate("/")}}>
            Sumit
        </div>
        <div className='text-2xl md:hidden relative' onClick={()=>{setShowdropdown(!showdropdown)}}>{ !showdropdown ? <i class="fa-solid fa-bars"></i> :<i class="fa-solid fa-xmark"></i>}</div>
        <div className={showdropdown ?'absolute md:hidden bg-slate-300  rounded top-14 left-0 w-full z-10':'hidden md:flex justify-between w-1/2'}>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl hover:bg-blue-500 hover:text-white  rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'}  onClick={()=>{navigate("/");setShowdropdown(false)}}> <i class="fa-solid fa-house"></i> Home</div>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl hover:bg-blue-500 hover:text-white  rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'}  onClick={()=>{navigate("/itemdata");setShowdropdown(false)}}> <i class="fa-solid fa-house"></i> All Items</div>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl hover:bg-blue-500 hover:text-white rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'} onClick={()=>{navigate("/additem");setShowdropdown(false)}}><i class="fa-solid fa-plus"></i> Add Item</div>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl hover:bg-blue-500 hover:text-white rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'} onClick={()=>{navigate("/addcategory");setShowdropdown(false)}}><i class="fa-solid fa-plus"></i> Add Category</div>
            <div className={showdropdown ?'px-4 flex items-center h-12 text-xl text-red-600 hover:bg-blue-500 hover:text-white rounded':'hover:cursor-pointer  hover:text-blue-500 transform hover:scale-110 transition-transform duration-200'} onClick={()=>{navigate('/');toggle(false)}}> Logout</div>
        </div>
    </div>
  )
}

export default Nav
