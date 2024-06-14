import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const Menu_items = ({additem}) => {
  const [categoryData,setCategoryData]=useState(null);
  const [itemdata,setItemdata]=useState({
    categoryName:'',
    productName:'',
    description:'',
    foodType:'',
    price:'',
    discount:'',
    added:false,
  })
  const navigate=useNavigate();
  const location=useLocation();
  const tempData=location.state;
  useEffect(()=>{
    // console.log("tempdata=>",tempData);
   if(tempData){ setItemdata(tempData);}
  },[tempData])

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setItemdata((prev)=>{
      return({
        ...prev,
        [name]:value,
      })
    })
  }
  const handleAddProduct=async()=>{
    await axios.post('http://localhost:4000/additem',itemdata)
    .then((res)=>{
      // console.log(res);
      setItemdata({
        categoryName:'',
        productName:'',
        description:'',
        foodType:'',
        price:'',
        discount:'',
        added:false,
      })
    })
    .catch((err)=>{
      console.log("error at sending item data to backend");
    })
  }

  const getCategoryData=async()=>{
      try {
        const res = await axios.get('http://localhost:4000/getcategory');
        setCategoryData(res.data);
        // setSearchdata(res.data); 
      } catch (err) {
        console.log("error in getting data", err);
      }

  }
  useEffect(()=>{getCategoryData()},[])

  const handleUpdate=async()=>{
    // console.log("tempdata=>",tempData);
    const id=tempData._id;
   
    try {
      const res = await axios.put('http://localhost:4000/updateitem',itemdata);
      // setCategoryData(res.data);
      // setSearchdata(res.data); 
      navigate('/itemdata');

    } catch (err) {
      console.log("error in getting data", err);
    }

    
  }
  // console.log("category data=>",categoryData);
  // console.log("tempData=>",tempData);
  return (
  categoryData && <div class= "bg-slate-300 w-full ">   
  <div class=" max-w-lg mx-auto p-10 ">
  <form class=" bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
        Category
      </label>
      <select onChange={(e)=>{handleChange(e)}}  value={itemdata.categoryName} name='categoryName' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category">
        <option>---Select---</option>
        {
           categoryData.map((item)=>{
            return(
              <option value={item.categoryName}>{item.categoryName}</option>
            )
           })
        }
      </select>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="product-name">
        Product Name
      </label>
      <input  onChange={(e)=>{handleChange(e)}} name='productName' value={itemdata.productName} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-name" type="text" placeholder="Product Name"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <textarea  onChange={(e)=>{handleChange(e)}} name='description' value={itemdata.description}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Product Description...."></textarea>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Food Type">
        Food Type
      </label>
      <select  onChange={(e)=>{handleChange(e)}}  value={itemdata.foodType} name='foodType' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type">
        <option>---Select---</option>
        <option value='veg'>Veg</option>
        <option value='nonveg'>Non Veg</option>
      </select>
    </div>
    <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Price</label>
            <input  onChange={(e)=>{handleChange(e)}} name='price' value={itemdata.price}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Price"/>
          </div>

    <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Discount</label>
            <input  onChange={(e)=>{handleChange(e)}} name='discount' value={itemdata.discount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Discount"/>
          </div>
    

    <div class="flex items-center justify-between">
      <button onClick={additem ? handleAddProduct :handleUpdate} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      <i class="fa-solid fa-plus"></i>  {additem ?'ADD ITEM' :"UPDATE"}
      </button>
    </div>
  </form>
</div>
</div>
  )
}

export default Menu_items;
