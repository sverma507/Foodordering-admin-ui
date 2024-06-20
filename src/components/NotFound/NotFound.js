import React from 'react'
import { useNavigate } from 'react-router-dom'
function NotFound() {
const navigate=useNavigate()
  return (
    <div>
      Page Not Found Please Login 
      <button className="shrink-0 m-2 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white" onClick={()=>{navigate('/home');}}>Home Page </button>
    </div>
  )
}

export default NotFound
