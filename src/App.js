import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Route path="/login" element={<login/>}></Route>
    <Route path="/signup" element={<signup/>}></Route>
    <Route path="/posts" element={<posts/>}></Route>
    <Route path="/profile" element={<profile/>}></Route>
    </BrowserRouter>
  );
}

export default App;
