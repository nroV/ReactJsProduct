import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import ProductDetail from './pages/ProductDetail';
import Homepage from './pages/Homepage';
import ErrorPage from './pages/ErrorPage';
import CardDetail from './componets/CardDetail';
import {  ModifyProduct } from './pages/AddProduct';
import { UpdateProduct } from './pages/UpdateProduct';
import SkeletonProduct from './componets/SkeletonCard';
import RegisterPage from './pages/RegisterPage';
import Loginform from './pages/Login';

import { ProductFilter } from './pages/FilterProduct';


function App() {
  return (
    <>    
        <Routes>
            <Route  index path='/' element={<Homepage />} />
            <Route  exact path='/read/:id' element={<ProductDetail />} />
            <Route  path='/add/' element={ <ModifyProduct />} />
            <Route  path='/update/:id' element={ <UpdateProduct />} />
            <Route  path='*' element={<ErrorPage />}></Route>
            <Route  path='/register' element={<RegisterPage />}></Route>
            <Route  path='/login' element={<Loginform />}></Route>
            <Route  path='/filter/:price_min/:price_max' element={<ProductFilter />}></Route>
            {/* <Route path='/' element={ <SkeletonProduct />} /> */}
            {/* <Route exact path='/' element={<CardDetail />}></Route> */}
        </Routes>
    </>
  );
}

export default App;
