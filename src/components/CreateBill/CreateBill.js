import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateBill() {
    const [grandTotal,setGrandTotal]=useState(0)
    const [data, setData] = useState(null);
    const [itemByCategory, setItemByCategory] = useState(null);
    const [show, setShow] = useState({});
    const [order,setOrder]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        setGrandTotal(()=>{
            let sum=0
            for(const item of order ){
               sum=sum+item.price*item.qty 
            }
            return sum
        })
    })
    const getdata = async () => {
        try {
            const res = await axios.get('http://localhost:4000/getcategory');
            setData(res.data);

        } catch (err) {
            console.log("error in getting data", err);
        }
    };

    useEffect(() => {
        getdata();
    },[]);
    //   console.log("datadgsdg=>",data);

    const handleAdd = async (item) => {

        console.log("show=>", show);
       
            setShow((prev) => {
                for (const key of Object.keys(prev)) {
                    if (key !== item._id) {
                        prev[key] = false
                    }
                }
                return ({
                    ...prev,
                    [item._id]: !prev[item._id]
                })
    
            })
        
        // console.log("categoryName=>",categoryName);
        try {
            const res = await axios.get('http://localhost:4000/getitembycategory', { params: { categoryName: item.categoryName } });
            console.log("length=>", res.data.result.length);
            if (res.data.result.length > 0) {
                setItemByCategory(res.data.result)
            }
            else {
                setItemByCategory(null)
            }
            // console.log(itemByCategory); 
        } catch {
            console.log("error while fetching the data from the backend on the basis of category name");
        }
    }

    const handleCheck=async(item,category_id)=>{
        console.log("item=>",item);
            let itemdata={...item,["added"]:!item.added}
            console.log("itemdata=>",itemdata);
            try {
              const res = await axios.put('http://localhost:4000/updateitem',itemdata);
            //   navigate('/itemdata');
            } catch (err) {
              console.log("error in getting data", err);
            }
            handleAdd(category_id);
        if(itemdata.added)
        {
            setOrder((prev)=>{
                return([
                    ...prev,
                    {...item,["qty"]:1}  
                ])
            })
        }
        else
        {
            setOrder((order.filter((i)=>(i._id!==item._id))))
        }   
       

        console.log("order=>",order);
        console.log("item=>",item);
        // console.log("checkbox=>",e.target.checked);

    }

    const deleteOrder=(del_id)=>{
        setOrder((order.filter((i)=>(i._id!==del_id))))
    }

    const handleQty=(item,e,idx)=>{
        item={...item,["qty"]:e.target.value}
        const a=[...order]
        a.splice(idx,1,item)
       setOrder(a)
    }
    console.log("itemby category=>", itemByCategory);
    console.log("order=>",order);
    return (
        <div className='flex justify-between p-4'>
            {data && <div className=''>
                <div className='flex gap-4 flex-wrap '>
                    {

                        data.map((item) => {
                            return (
                                <>
                                    <div className='m-2'>
                                        <div className=' h-12 w-60 bg-blue-500 text-white p-4 items-center text-2xl font-bold flex justify-between'>
                                            <div>{item.categoryName}</div>
                                            <div className='hover:cursor-pointer hover:text-green-400' onClick={() => { handleAdd(item) }}><i class="fa-solid fa-plus"></i></div>

                                        </div>
                                        {

                                            itemByCategory ? (show[item._id] && <div className=' left-0 text-lg text-black top-12 w-60 bg-slate-200'>
                                                <div className=''>
                                                    <div className='flex justify-evenly border-b-2 border-slate-500'>
                                                        <div className='w-1/2 text-center'>Product</div>
                                                        <div className='w-1/4 text-center'>Price</div>
                                                        <div className='w-1/4 text-center'> Add</div>
                                                    </div>
                                                    {
                                                        itemByCategory && itemByCategory.map((item1) => {
                                                            return (

                                                                <div className={show ? 'flex justify-evenly items-center text-lg font-light text-center border-b border-slate-500' : 'hidden'}>
                                                                    <div className='w-1/2 text-center'>{item1.productName}</div>
                                                                    <div className='w-1/4 text-center'>{item1.price}</div>
                                                                    <div className='w-1/4 text-center'>
                                                                        <div class=" border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                            <div class="flex items-center ps-3">
                                                                                <input id="react-checkbox" type="checkbox" checked={item1.added} onChange={()=>{handleCheck(item1,item._id)}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>


                                            </div>) : (show[item._id] &&
                                                (<div className='flex justify-evenly border-b-2 bg-slate-200 border-slate-500'>!No item</div>))


                                        }


                                    </div>

                                </>
                            )
                        })

                    }
                </div>
            </div>}
            <div className='bg-slate-300 w-3/5 p-2'>
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
                  order&& order.map((item,idx)=>{
                   return(
                    <div className='my-2 pb-2 flex justify-between border-b border-gray-500 h-16 items-center'>
                        <div className='w-20 '>{item.productName}</div>
                        <div className=''><input type='number' className=' text-center w-10 border border-gray-500' value={item.qty} onChange={(e)=>{handleQty(item,e,idx)}} /></div>
                        <div className=''>{item.price}</div>
                        <div className=''>{parseInt(item.price)*parseInt(item.qty)}</div>
                        <div className='w-8 hover:cursor-pointer hover:text-red-500' onClick={()=>{deleteOrder(item._id)}}><i class="fa-solid fa-trash-can"></i></div>
                    </div>
                   )
                  })
                }
                <div className='flex justify-center items-center h-14 bg-slate-400'>
                    <div className='font-bold px-4 '>Grand Total</div>
                    <div>{grandTotal}</div>
                </div>
                <div className='h-16 w-full p-2'>
                    <div className='rounded h-14 bg-green-500 flex justify-center items-center text-white text-3xl hover:bg-green-700 hover:cursor-pointer' onClick={()=>{navigate("/bill",{state:{order}})}}>ORDER</div>
                </div>
            </div>
        </div>
    )
}

export default CreateBill
