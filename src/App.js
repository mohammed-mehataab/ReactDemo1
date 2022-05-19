//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Posts from './components/Posts';
import './App.css';



function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
     
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/posts" element={<Posts />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
