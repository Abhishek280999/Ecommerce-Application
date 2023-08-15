import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
