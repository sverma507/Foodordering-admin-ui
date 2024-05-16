import './Home.css'
import React from 'react'

function Home() {
  return (
    <div className='bg-indigo-500 h-screen flex justify-center items-center'>

      <div className='flex justify-between w-96'>
        <div className='bg-slate-100 h-40 w-40 text-center'>
          <h1>Total Categories</h1>
        </div>
        <div className='bg-slate-100 h-40 w-40 text-center'>
          <h1>Total Food Items</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Home
