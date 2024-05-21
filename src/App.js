import AddCategory from "./components/AddCategory/AddCategory";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addcategory" element={<AddCategory/>}></Route>
      </Routes>
    </BrowserRouter>
   
     
    
  );
}

export default App;
