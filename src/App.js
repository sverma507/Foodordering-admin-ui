import AddCategory from "./components/AddCategory/AddCategory";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import { Routes,Route,useNavigate } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Menu_items from "./components/Menu/Menu_items";
import ItemData from "./components/ItemData";
import CreateBill from "./components/CreateBill/CreateBill";
import Bill from "./components/Bill/Bill";
import Register from './components/Register';
import Login0 from "./components/Login0";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound/NotFound";
// const nodemailer = require("nodemailer");
function App() {
  

  const [userFound, setUserFound] = useState({
    loggedin:false,
    admin:false
  });
  const [email,setEmail]=useState('');
  const navigate=useNavigate();

  const handleEmail=(mail)=>{
    setEmail(mail);
    console.log("mail=>",mail);
  }
  const toggle=(adminData,loggedinData)=>{
    console.log("adminData==>",adminData);
    setUserFound({
      admin:adminData,
      loggedin:loggedinData
    })
  }

  useEffect(()=>{
    console.log("sumit ");
    const token=localStorage.getItem('token')
    if(token){
      setUserFound((prev)=>{
        return({
          ...prev,
          ["loggedin"]:true
        })
      })
      
      navigate('/home')
    }else{
      alert("Please Login !!")
    }
  },[])
  // console.log("userfound=>",userFound);
  return (
    <>
      {userFound.loggedin && <Nav userFound={userFound} toggle={toggle} />}
      <Routes>
        <Route path="/" element={<Login0 toggle={toggle} handleEmail={handleEmail}  />} />
        <Route path="/register" element={<Register />} />
        {userFound.loggedin &&
          <>
            <Route path="/home" element={<CreateBill />} />
           { userFound.admin&&
              <>
                <Route path="/itemdata" element={<ItemData />} />
                <Route path="/additem" element={<Menu_items additem={true}/>} />
                <Route path="/updateitem" element={<Menu_items/>} />
                <Route path="/addcategory" element={<AddCategory />} />
              </>
            }
         
            <Route path="/bill" element={<Bill email={email}/>}></Route>
            </>
          }
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
     </>
  );
}

export default App;
