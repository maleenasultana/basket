
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";


 function App() {


  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>

              <Route path="/" element={<> <Header />< Home/>{" "}</>} />
    
              <Route path="/checkout" element={<><Header/><Checkout/></>} />
           
              
      </Routes>
      </BrowserRouter>
     

     </div>
     </>
  );
}

export default App;
