import './App.css';
import Footer from './Common/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './Common/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import Pro_detail from './Pages/Pro_detail';
import Cart from './Pages/Cart';
import CategoryWise from './Pages/CategoryWise';


function App() {
  return (
  <>
 <BrowserRouter>
 <Header/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/> 
    <Route path='/productdetail/:id' element={<Pro_detail/>} />  
    <Route path='/cart' element={<Cart/>} />  
    <Route path='/categorywiseproduct/:category_id' element={<CategoryWise/>}/>

 </Routes>
  <Footer/>
 </BrowserRouter>
  </>
  );
}

export default App;
