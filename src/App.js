import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Page/Shared/Navbar/Navbar";
import  Home from "./Page/Home/Home";
import  Blogs from "./Page/Blogs/Blogs";
import  NotFoundPage from "./Page/NotFoundPage/NotFoundPage";
import  Login from "./Page/Login/Login";
import  Signup from "./Page/Login/Signup";
import Dashboard from './Page/Dashboard/Dashboard';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
