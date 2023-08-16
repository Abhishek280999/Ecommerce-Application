import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Cart from './Pages/Cart';




function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>

        </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
