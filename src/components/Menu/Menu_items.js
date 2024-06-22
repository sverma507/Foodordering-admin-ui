// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { URL } from '../../Constant/Constant';
// const Menu_items = ({additem}) => {
//   const [categoryData,setCategoryData]=useState(null);
//   const [itemdata,setItemdata]=useState({
//     categoryName:'',
//     productName:'',
//     description:'',
//     foodType:'',
//     price:'',
//     discount:'',
//     photo:null,
//     added:false,
//   })
//   const navigate=useNavigate();
//   const location=useLocation();
//   const tempData=location.state;
//   useEffect(()=>{
//     // console.log("tempdata=>",tempData);
//    if(tempData){ setItemdata(tempData);}
//   },[tempData])

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'photo') {
//       setItemdata((prev) => ({
//         ...prev,
//         [name]: files[0],
//       }));
//     } else {
//       setItemdata((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };


//   const handleAddProduct=async()=>{
//     await axios.post(`${URL}/additem`,itemdata)
//     .then((res)=>{
//       // console.log(res);
//       setItemdata({
//         categoryName:'',
//         productName:'',
//         description:'',
//         foodType:'',
//         price:'',
//         discount:'',
//         photo:null,
//         added:false,
//       })
//     })
//     .catch((err)=>{
//       console.log("error at sending item data to backend");
//     })
//   }

//   const getCategoryData=async()=>{
//       try {
//         const res = await axios.get(`${URL}/getcategory`);
//         setCategoryData(res.data);
//         // setSearchdata(res.data); 
//       } catch (err) {
//         console.log("error in getting data", err);
//       }

//   }
//   useEffect(()=>{getCategoryData()},[])

//   const handleUpdate=async()=>{
//     // console.log("tempdata=>",tempData);
//     const id=tempData._id;
   
//     try {
//       const res = await axios.put(`${URL}/updateitem`,itemdata);
//       // setCategoryData(res.data);
//       // setSearchdata(res.data); 
//       navigate('/itemdata');

//     } catch (err) {
//       console.log("error in updating item", err);
//     }

    
//   }
//   // console.log("category data=>",categoryData);
//   // console.log("tempData=>",tempData);
//   return (
//   categoryData && <div class= "bg-slate-300 w-full ">   
//   <div class=" max-w-lg mx-auto p-10 ">
//   <form class=" bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
//         Category
//       </label>
//       <select onChange={(e)=>{handleChange(e)}}  value={itemdata.categoryName} name='categoryName' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category">
//         <option>---Select---</option>
//         {
//            categoryData.map((item)=>{
//             return(
//               <option value={item.categoryName}>{item.categoryName}</option>
//             )
//            })
//         }
//       </select>
//     </div>
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="product-name">
//         Product Name
//       </label>
//       <input  onChange={(e)=>{handleChange(e)}} name='productName' value={itemdata.productName} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-name" type="text" placeholder="Product Name"/>
//     </div>
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
//         Description
//       </label>
//       <textarea  onChange={(e)=>{handleChange(e)}} name='description' value={itemdata.description}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Product Description...."></textarea>
//     </div>

//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" for="Food Type">
//         Food Type
//       </label>
//       <select  onChange={(e)=>{handleChange(e)}}  value={itemdata.foodType} name='foodType' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type">
//         <option>---Select---</option>
//         <option value='veg'>Veg</option>
//         <option value='nonveg'>Non Veg</option>
//       </select>
//     </div>
//     <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Price</label>
//             <input  onChange={(e)=>{handleChange(e)}} name='price' value={itemdata.price}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Price"/>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Price</label>
//             <input  onChange={(e)=>{handleChange(e)}} name='photo'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="file" placeholder="Price"/>
//           </div>      

//     <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Discount</label>
//             <input  onChange={(e)=>{handleChange(e)}} name='discount' value={itemdata.discount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Discount"/>
//           </div>
    

//     <div class="flex items-center justify-between">
//       <button onClick={additem ? handleAddProduct :handleUpdate} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//       <i class="fa-solid fa-plus"></i>  {additem ?'ADD ITEM' :"UPDATE"}
//       </button>
//     </div>
//   </form>
// </div>
// </div>
//   )
// }

// export default Menu_items;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { URL } from '../../Constant/Constant';

const Menu_items = ({ additem }) => {
    const [categoryData, setCategoryData] = useState(null);
    const [itemdata, setItemdata] = useState({
        categoryName: '',
        productName: '',
        description: '',
        foodType: '',
        price: '',
        discount: '',
        photo: null,
        added: false,
    });
    const navigate = useNavigate();
    const location = useLocation();
    const tempData = location.state;

    useEffect(() => {
        if (tempData) {
            setItemdata(tempData);
        }
    }, [tempData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'photo') {
            setItemdata((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        } else {
            setItemdata((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleAddProduct = async () => {
        const formData = new FormData();
        for (const key in itemdata) {
            formData.append(key, itemdata[key]);
        }

        try {
            const response = await axios.post(`${URL}/additem`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setItemdata({
                categoryName: '',
                productName: '',
                description: '',
                foodType: '',
                price: '',
                discount: '',
                photo: null,
                added: false,
            });
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const handleUpdate = async () => {
        const formData = new FormData();
        for (const key in itemdata) {
            formData.append(key, itemdata[key]);
        }

        try {
            const response = await axios.put(`${URL}/updateitem`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            navigate('/itemdata');
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const getCategoryData = async () => {
        try {
            const res = await axios.get(`${URL}/getcategory`);
            setCategoryData(res.data);
        } catch (err) {
            console.log("Error in getting data", err);
        }
    };

    useEffect(() => {
        getCategoryData();
    }, []);

    return (
        categoryData && <div className="bg-slate-300 w-full">
            <div className="max-w-lg mx-auto p-10">
                <form className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <select onChange={handleChange} value={itemdata.categoryName} name='categoryName' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category">
                            <option>---Select---</option>
                            {
                                categoryData.map((item) => (
                                    <option key={item._id} value={item.categoryName}>{item.categoryName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product-name">
                            Product Name
                        </label>
                        <input onChange={handleChange} name='productName' value={itemdata.productName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-name" type="text" placeholder="Product Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea onChange={handleChange} name='description' value={itemdata.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Product Description...."></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Food Type">
                            Food Type
                        </label>
                        <select onChange={handleChange} value={itemdata.foodType} name='foodType' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type">
                            <option>---Select---</option>
                            <option value='veg'>Veg</option>
                            <option value='nonveg'>Non Veg</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Price</label>
                        <input onChange={handleChange} name='price' value={itemdata.price} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Price" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Photo</label>
                        <input onChange={handleChange} name='photo' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="file" placeholder="Photo" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Discount</label>
                        <input onChange={handleChange} name='discount' value={itemdata.discount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Discount" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={additem ? handleAddProduct : handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <i className="fa-solid fa-plus"></i>  {additem ? 'ADD ITEM' : "UPDATE"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Menu_items;
