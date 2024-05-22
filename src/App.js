import AddCategory from "./components/AddCategory/AddCategory";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Menu_items from "./components/Menu/Menu_items";
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      
      <Routes>
      

        <Route path="/" element={<Home/>}></Route>
        <Route path="/additem" element={<Menu_items/>}></Route>
        <Route path="/addcategory" element={<AddCategory/>}></Route>
      </Routes>
    </BrowserRouter>
   
     
    
  );
}

export default App;
