import AddCategory from "./components/AddCategory/AddCategory";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Menu_items from "./components/Menu/Menu_items";
import ItemData from "./components/ItemData";
import ItemDataNav from "./components/ItemData";
import CreateBill from "./components/CreateBill/CreateBill";
import Bill from "./components/Bill/Bill";
import Register from './components/Register'
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      
      <Routes>
      

        <Route path="/" element={<Register/>}></Route>
        {/* <Route path="/" element={<CreateBill/>}></Route> */}
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/additem" element={<Menu_items additem={true}/>}></Route>
        <Route path="/updateitem" element={<Menu_items additem={false}/>}></Route>
        <Route path="/addcategory" element={<AddCategory/>}></Route>
        <Route path="/itemdata" element={<ItemData/>}></Route>
        <Route path="/bill" element={<Bill/>}></Route>
        {/* <Route path="/addcategory" element={<ItemDataNav/>}></Route> */}
      </Routes>
    </BrowserRouter>
   
     
    
  );
}

export default App;
