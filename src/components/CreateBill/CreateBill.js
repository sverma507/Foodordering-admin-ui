import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../Constant/Constant';
function CreateBill() {
    const [grandTotal, setGrandTotal] = useState(0);
    const [data, setData] = useState(null);
    const [itemByCategory, setItemByCategory] = useState([]);
    const [show, setShow] = useState({});
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        getdata();
        // getOrder()
    },[]);

    const getdata = async () => {
        try {
            const res = await axios.get(`${URL}/getcategory`);
            setData(res.data);
        } catch (err) {
            console.log("error in getting data", err);
        }
    };

    const handleAdd = async (item) => {
        try {
            // console.log("itemByCategory======>", res.data);
            const res = await axios.get(`${URL}/getitembycategory`, { params: { categoryName: item.categoryName } });
            console.log("itemByCategory======>", res.data);
            // if (res.data.result.length > 0) {
                setItemByCategory(res.data);
                showItemDropDown(item._id);
                // }
                } catch (err) {
                    console.log("error while getting items by category in handleAdd function", err);
                }
    };

    const showItemDropDown = (categoryId) => {
        setShow((prevShow) => {
            const newShow = { [categoryId]: !prevShow[categoryId] };
            return newShow;
        });
    };

    const handleCheck = async (item, category) => {
        let itemdata = { ...item, added: !item.added };
        let temp;
        console.log("itemdata=>", itemdata);
        try {
            await axios.put(`${URL}/updateitem`, itemdata);
        } catch (err) {
            console.log("error in updating item data", err);
        }
        if (!item.added) {
            setOrder((prev) =>{temp= [
                ...prev,
                { ...item, qty: 1 }
            ] ;
            return temp
        });
        } else {
            setOrder((prev) =>{temp= prev.filter((i) => i._id !== item._id); return temp});
        }
        // Refresh items for the current category without toggling the dropdown
        const res = await axios.get(`${URL}/getitembycategory`, { params: { categoryName: category.categoryName } });
        setItemByCategory(res.data.result);
        localStorage.setItem('order', JSON.stringify(temp));
        updateGrandTotal(temp)

    };

    const handleQty = (item, e, idx) => {
        const updatedOrder = order.map((orderItem, orderIdx) => {
            if (orderIdx === idx) {
                return { ...orderItem, qty: e.target.value };
            }
            return orderItem;
        });
        setOrder(updatedOrder);
        updateGrandTotal(updatedOrder);
    };

    const updateGrandTotal = (order) => {
        const total = order.reduce((sum, item) => sum + item.price * item.qty, 0);
        setGrandTotal(total);
    };

    const deleteOrder = async (itemId) => {
        try {
            await axios.put(`${URL}/updateitem`, { _id: itemId, added: false });
        } catch (err) {
            console.log("Error updating item:", err);
        }

        // Remove the item from the order
        const updatedOrder = order.filter(item => item._id !== itemId);
        setOrder(updatedOrder);
        localStorage.setItem('order', JSON.stringify(updatedOrder));
        updateGrandTotal(updatedOrder);

        // Close the dropdown for the corresponding category
        const deletedItem = order.find(item => item._id === itemId);
        if (deletedItem) {
            const category = data.find(cat => cat.categoryName === deletedItem.categoryName);
            if (category) {
                setShow((prevShow) => ({
                    ...prevShow,
                    [category._id]: false
                }));
            }
        }
    };

    const handleOrder=()=>{
        console.log("order===>",order);
       localStorage.setItem('order', JSON.stringify(order));
        // console.log("called");
        // try{
        //     const result=await axios.post('http://localhost:4000/addorder',order)
        //     console.log("response=>",result);
        //     const Odr=result.data[0];
        //     console.log("odr_id=>",Odr._id);
        //     localStorage.setItem('orderId',Odr._id);
            
        // }
        // catch(err){
        //     console.log("error while sending the data to the backend of order");
        // }
        // // localStorage.setItem('orderID',)
        
       
    }
    useEffect(()=>{const t=localStorage.getItem('order');
        console.log("local====>",t);
        if(!t){

            setOrder([])
        }
        else{
            setOrder(JSON.parse(t))
        }
    },[])
    const getOrder=async()=>{
        const orderId=localStorage.getItem('orderId')
       if(orderId){
            try{
                const result=await axios.get(`${URL}/getorder`,{params:{id:orderId}})
                console.log("getOrder=>",result.data);
                setOrder(result.data.result)
            }catch(err){
                console.log("error in get data of order from the backend");
            }
       }
    }

       
     console.log("ItemBy Category=======>",itemByCategory);

    return (
        <div className='flex justify-between p-4'>
            {data && 
                <div className=''>
                    <div className='flex gap-4 flex-wrap '>
                        {
                            data.map((item) => {
                                return (
                                    <div className='m-2' key={item._id}>
                                        <div className=' h-12 w-60 bg-blue-500 text-white p-4 items-center text-2xl font-bold flex justify-between'>
                                            <div>{item.categoryName}</div>
                                            <div className='hover:cursor-pointer hover:text-green-400' onClick={() => { handleAdd(item) }}><i className="fa-solid fa-plus"></i></div>
                                        </div>
                                        {
                                           (show[item._id] && itemByCategory &&(
                                        //   show[item._id] &&    (
                                            itemByCategory.length>0 ? (<div className=' left-0 text-lg text-black top-12 w-60 bg-slate-200'>
                                                    <div className=''>
                                                        <div className='flex justify-evenly border-b-2 border-slate-500'>
                                                            <div className='w-1/2 text-center'>Product</div>
                                                            <div className='w-1/4 text-center'>Price</div>
                                                            <div className='w-1/4 text-center'> Add</div>
                                                        </div>
                                                        {
                                                            itemByCategory.map((item1) => {
                                                                return (
                                                                    <div className='flex justify-evenly items-center text-lg font-light text-center border-b border-slate-500' key={item1._id}>
                                                                        <div className='w-1/2 text-center'>{item1.productName}</div>
                                                                        <div className='w-1/4 text-center'>{item1.price}</div>
                                                                        <div className='w-1/4 text-center'>
                                                                            <div className="border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                                <div className="flex items-center ps-3">
                                                                                    <input id="react-checkbox" type="checkbox" checked={item1.added} onChange={() => { handleCheck(item1, item) }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>):<div>No Item!</div>
                                            ))
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            <div className='bg-slate-300 w-4/5 p-2'>
                <div className='w-full h-12 flex items-center p-2 border bg-slate-100 rounded border-gray-500'>Cash</div>
                <div className='w-full h-16 border-b border-gray-500 flex justify-between items-center'>
                    <div className='text-3xl '>Food Cart</div>
                    <div className='text-xl'>Date:</div>
                </div>
                <div className='font-bold flex justify-between items-center h-10'>
                    <div className='w-20'>Item</div>
                    <div>Qty</div>
                    <div>Price</div>
                    <div>Subtotal</div>
                    <div>Action</div>
                </div>
                {
                    order?.map((item, idx) => {
                        return (
                            <div className='my-2 pb-2 flex justify-between border-b border-gray-500 h-16 items-center' key={item._id}>
                                <div className='w-20 '>{item.productName}</div>
                                <div className=''><input type='number' className=' text-center w-12 border border-gray-500' value={item.qty} onChange={(e) => { handleQty(item, e, idx) }} /></div>
                                <div className=''>{item.price}</div>
                                <div className=''>{parseInt(item.price) * parseInt(item.qty)}</div>
                                <div className='w-8 hover:cursor-pointer hover:text-red-500' onClick={() => { deleteOrder(item._id) }}><i className="fa-solid fa-trash-can"></i></div>
                            </div>
                        )
                    })
                }
                <div className='flex justify-center items-center h-14 bg-slate-400'>
                    <div className='font-bold px-4 '>Grand Total</div>
                    <div>{grandTotal}</div>
                </div>
                <div className='h-16 w-full p-2'>
                    <div className='rounded h-14 bg-green-500 flex justify-center items-center text-white text-3xl hover:bg-green-700 hover:cursor-pointer' onClick={() => { navigate("/bill",{state:{order}});handleOrder()}}>ORDER</div>
                </div>
            </div>
        </div>
    );
}

export default CreateBill;

