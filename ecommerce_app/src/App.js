import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';

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

        </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
