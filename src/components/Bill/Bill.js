import React from 'react'
import { useLocation } from 'react-router-dom'

function Bill() {
    const {state}=useLocation();
  return (
    <div>
      {state.order[0].productName}
      {/* {state.order[1]} */}
      {/* {state.order.} */}
    </div>
  )
}

export default Bill
