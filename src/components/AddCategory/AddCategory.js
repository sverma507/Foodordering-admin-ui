import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddCategory() {
  const [search, setSearch] = useState(''); 
  const [category, setCategory] = useState({ categoryName: '' });
  const [data, setData] = useState(null); 
  const [searchdata, setSearchdata] = useState(null); 
  const navigate = useNavigate();

  const go_addCategory = () => {
    axios.post('http://localhost:4000/addcategory', category)
      .then((res) => {
        getdata();
      })
      .catch((err) => {
        console.log("error in adding data", err);
      });
    setCategory({ categoryName: '' });
    setSearchdata(null);
  };

  const getdata = async () => {
    try {
      const res = await axios.get('http://localhost:4000/getcategory');
      setData(res.data);
      // setSearchdata(res.data); 
    } catch (err) {
      console.log("error in getting data", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const go_get = (e) => {
    setCategory({ categoryName: e.target.value });
  };

  const go_delete = async (id) => {
    try {
      await axios.delete('http://localhost:4000/deletecategory', { data: { id: id } });
      setSearch('')
      getdata();
      setSearchdata(null)
    } catch (err) {
      console.log("err in deletion", err);
    }
  };

  const go_search = () => {
    setSearch('')
    setSearchdata(data.filter(item => item.categoryName.toUpperCase().includes(search.toUpperCase())));
  };

  const set_search = (e) => {
    setSearch(e.target.value);
    // go_search()
  };
 
  // console.log("data=>",data);
  return (
    <div className='bg-slate-200 px-4 w-screen'>
      <div className='px-10 py-2 flex flex-col md:flex-row justify-between'>
        <div className='text-3xl'>Category</div>
        <div>Home/Category</div>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-4 w-full py-6'>
        <div className='flex flex-col '>
          <div className='bg-slate-100 w-3/6 md:w-96 rounded-lg'>
            <div className='bg-green-600 h-10 text-white flex justify-center items-center rounded-t-lg'>ADD CATEGORY</div>
            <div className='bg-slate-100 h-32 p-4'>
              <div className='m-2 font-bold'>Name of Category</div>
              <div className='m-2'>
                <input
                  className='px-2 rounded py-1 focus:outline outline-1 outline-blue-500 w-full'
                  type='text'
                  placeholder='Enter Category'
                  value={category.categoryName}
                  onChange={go_get}
                />
              </div>
            </div>
            <div className='bg-slate-300 h-14 text-white flex justify-center items-center py-2 px-4 rounded-b-lg'>
              <button
                className='hover:cursor-pointer hover:bg-blue-700 bg-blue-600 rounded w-full h-full'
                onClick={go_addCategory}
              >
                Create New Category
              </button>
            </div>
          </div>
        </div>
        <div className='rounded-lg bg-slate-100 md:w-4/6'>
          <div className='h-10 bg-blue-600 w-full flex justify-between items-center px-4 rounded-t-lg'>
            <div className='text-white font-bold'>All Listed Category</div>
            <div className='text-white font-bold hover:cursor-pointer' onClick={getdata}>Refresh</div>
          </div>
          <div className='m-4 flex flex-col justify-center items-center'>
            <div className='flex w-full justify-evenly'>
              <div>
                <label className='mx-2'>Search:</label>
                <input
                  type='text'
                  className='outline-2 focus:outline-blue-500 rounded border-2 border-gray-500'
                  value={search}
                  onChange={set_search}
                />
              </div>
              <button
                className='hover:cursor-pointer hover:bg-blue-700 bg-blue-600 rounded w-48 text-white'
                onClick={go_search}
              >
                <i className="fa-solid fa-magnifying-glass font-bold"></i> Search
              </button>
            </div>
            <div className='mt-2 w-full'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='border-2 border-gray-300'>S.No.</th>
                    <th className='border-2 border-gray-300'>Category</th>
                    <th className='border-2 border-gray-300'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data && (searchdata ?searchdata :data).map((item, index) => (
                    <tr key={index}>
                      <td className='border-2 border-gray-300 p-2 font-bold text-center'>{index + 1}</td>
                      <td className='border-2 border-gray-300 p-2 text-blue-700 font-bold text-center'>{item.categoryName}</td>
                      <td className='border-2 border-gray-300 p-2 text-blue-700 font-bold text-center hover:cursor-pointer hover:text-red-500' onClick={() => go_delete(item._id)}>
                        <i className="fa-regular fa-trash-can"></i> Remove
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
