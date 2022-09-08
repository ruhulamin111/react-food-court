import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/About/About';
import AddProduct from './components/AddProduct/AddProduct';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import Drinks from './components/Drinks/Drinks';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Orders from './components/Orders/Orders';
import Product from './components/Product/Product';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import SocialLogIn from './components/SocialLogIn/SocialLogIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/productdetails/:id' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/cart/:id' element={
          <RequireAuth>
            <Cart></Cart>
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/manageproduct' element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/drinks' element={<Drinks></Drinks>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/sociallogin' element={<SocialLogIn></SocialLogIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
