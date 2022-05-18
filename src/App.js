//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/login" element={<login/>}></Route>
    <Route path="/signup" element={<signup/>}></Route>
    <Route path="/posts" element={<posts/>}></Route>
    <Route path="/profile" element={<profile/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
