import { Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import AddProduct from "./Pages/AddProduct";
import { Toaster } from 'react-hot-toast';
import ProfilePage from "./Pages/ProfilePage";

const App = () => {
  return (
    <>
    <Navbar/>
    <Toaster/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/add-product' element={<AddProduct/>}/>
       <Route path='/profile' element={<ProfilePage/>}/>
     </Routes>
    </>
  );
};

export default App;