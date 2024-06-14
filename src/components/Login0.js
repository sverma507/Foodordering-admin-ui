import React from 'react'
import abc from "./assets/Image1.jpg"
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login0() {

 

	const [data,setData]= useState({
			Email:"",
			Password:"",
			
	  })
	
	  const go_get=(e)=>{
		console.log("e=>",e.target.name);
		const {name,value}=e.target;
		setData((prev)=>{
		  return({
			...prev,
			[name]:value
		  })
		})
	
	  }
    function refreshPage() {
      window.location.reload(false);
    }
    function App(){
      const notify = () => toast("Wow so easy!");

	  const submit = async (e)=>{
       refreshPage();
		e.preventDefault();
		console.log("data=> login", data)
		  await axios
      .post('http://localhost:8000/login', data)
			.then((response) => {
			  console.log("res=>",response);
        alert("User Found")
			})
      
			.catch((error) => {
			  console.log(error);
        alert("Sorry User Not Found");
			})
	  }
		
	  
  return (
    <div>
          <div class="h-full bg-gray-400 dark:bg-gray-900  "  >

<div class="mx-auto" 	style={{backgroundImage: `url(${abc})`}}>
    <div class="flex justify-center px-6  ">
    
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        
            <div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                    style={{backgroundImage: `url(${abc})`}}
     
      >
      </div>
      <div class="flex h-screen w-screen items-center overflow-hidden px-2">
 
  <div class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
    <div class="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
    <div class="mx-auto mb-2 space-y-3">
      <h1 class="text-center text-3xl font-bold text-gray-700">Sign in</h1>
      <p class="text-gray-500">Sign in to access your account</p>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="text" id="email"  class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " name='Email' value={data.Email}  onChange={(e)=>{go_get(e)}} />
        <label for="email" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Email </label>
      </div>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="text" id="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " name='Password' value={data.Password}  onChange={(e)=>{go_get(e)}}  />
        <label for="password" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Password</label>
      </div>
    </div>
    <div class="flex w-full items-center">
      <button class="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"  type="button" onClick={(e)=>{submit(e)}} >Login</button>
      <a class="w-full text-center text-sm font-medium text-gray-600 hover:underline"   href="#">Forgot your password?</a>
    </div>
    <p class="text-center text-gray-600">
      Don't have an account?
      <a href="" class="whitespace-nowrap font-semibold text-gray-900 hover:underline">Sign up</a>
    </p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>

   
  )
}
}