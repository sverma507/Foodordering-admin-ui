import React from 'react'

 import ReactDOM from "react-dom/client";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register'
import Login0 from './components/Login0'

export default function App() {
 
  return (
    <div>
      {/* <Login0/> */}
      <Register/>
      
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);