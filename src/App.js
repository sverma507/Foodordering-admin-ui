import AddCategory from "./components/AddCategory/AddCategory";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Menu_items from "./components/Menu/Menu_items";
import ItemData from "./components/ItemData";
import CreateBill from "./components/CreateBill/CreateBill";
import Bill from "./components/Bill/Bill";
import Register from './components/Register';
import Login0 from "./components/Login0";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [userFound, setUserFound] = useState({
    loggedin:false,
    admin:false
  });
  const toggle=(adminData,loggedinData)=>{
    console.log("adminData==>",adminData);
    setUserFound({
      admin:adminData,
      loggedin:loggedinData
    })
  }

  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token){
      setUserFound((prev)=>{
        return({
          ...prev,
          ["loggedin"]:true
        })
      })
    }else{
      alert("Please Login !!")
    }
  })
  console.log("userfound=>",userFound);
  return (
    <BrowserRouter>
      {userFound.loggedin && <Nav userFound={userFound} toggle={toggle} />}
      <Routes>
        <Route path="/" element={<Login0 toggle={toggle} />} />
        <Route path="/register" element={<Register />} />
        {userFound.loggedin &&
          <>
            <Route path="/home" element={<CreateBill />} />
           { userFound.admin&&
              <>
                <Route path="/itemdata" element={<ItemData />} />
              </>
            }
         
            <Route path="/bill" element={<Bill />}/>
            </>
          }
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
