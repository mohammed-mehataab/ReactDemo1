//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import profile from "./components/profile";
import home from './components/home';
import signup from './components/signup';
import login from './components/login';
import './App.css';



function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
     
    <Route path="/" element={<home />}></Route>
    <Route path="/login" element={<login />}></Route>
    <Route path="/signup" element={<signup />}></Route>
    <Route path="/posts" element={<posts />}></Route>
    <Route path="/profile" element={<profile />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
