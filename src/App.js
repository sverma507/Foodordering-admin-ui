import AddCategory from "./components/AddCategory/AddCategory";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Menu_items from "./components/Menu/Menu_items";
import ItemData from "./components/ItemData";
import CreateBill from "./components/CreateBill/CreateBill";
import Bill from "./components/Bill/Bill";
import Register from './components/Register';
import Login0 from "./components/Login0";
import { useEffect, useState } from "react";

function App() {
  const [userFound, setUserFound] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const loggedin = localStorage.getItem('loggedin');
    if (loggedin) {
      setUserFound(true);
    } else {
      // navigate('/');
    }
  }, []);

  return (
    <BrowserRouter>
      {userFound && <Nav />}
      <Routes>
        <Route path="/" element={<Login0 toggle={setUserFound} />} />
        <Route path="/register" element={<Register />} />
        {/* {userFound && */}
          {/* <> */}
            <Route path="/home" element={<CreateBill />} />
            <Route path="/additem" element={<Menu_items additem={true} />} />
            <Route path="/updateitem" element={<Menu_items additem={false} />} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/itemdata" element={<ItemData />} />
            <Route path="/bill" element={<Bill />} />
          {/* </> */}
        {/* } */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
