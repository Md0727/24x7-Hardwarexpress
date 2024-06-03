import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages/PubliceRoutes/Login/Login';
import { Register } from '../pages/PubliceRoutes/Register/Register';
import ForgotePassword from '../pages/PubliceRoutes/ForgotePassword/ForgotePassword';
import { Home } from '../pages/PrivateRoutes/Home/Home';
import { Auth } from './Auth';
import { AccountVerification } from '../pages/PubliceRoutes/AccountVerification/AccountVerification';
import { Profile } from '../pages/PrivateRoutes/Profile/Profile';
import { Orders } from '../pages/PrivateRoutes/Orders/Orders';
import { Furniture_Home } from '../pages/PrivateRoutes/Furniture_Pages/Furniture_Home/Furniture_Home';
import { Furniture_Listing } from '../pages/PrivateRoutes/Furniture_Pages/Furniture_Listing/Furniture_Listing';
import { Furniture_Details } from '../pages/PrivateRoutes/Furniture_Pages/Furniture_Details/Furniture_Details';
import { Add_To_Card } from '../pages/PrivateRoutes/Furniture_Pages/Add_To_Card/Add_To_Card';
import { Checkout } from '../pages/PrivateRoutes/Furniture_Pages/Checkout/Checkout';
import { Vendor_Product_Listing } from '../pages/PrivateRoutes/Furniture_Pages/Vendor_Product_Listing/Vendor_Product_Listing';
import { Sucess_Payment } from '../pages/PrivateRoutes/Sucess_Payment/Sucess_Payment';
import { ChakraProvider } from '@chakra-ui/react';
import { Payment_Failed } from '../pages/PrivateRoutes/Payment_Failed/Payment_Failed';
import { My_Order_Details } from '../pages/PrivateRoutes/Orders/component/My_Order_Detail/My_Order_Details';
import { Mover_Sucess_Payment } from '../pages/PrivateRoutes/Movers_Packers_Payments/Mover_Sucess_Payment/Mover_Sucess_Payment';
import { Mover_Payment_Failed } from '../pages/PrivateRoutes/Movers_Packers_Payments/Mover_Payment_Failed/Mover_Payment_Failed';
import { AboutsPage } from '../pages/PrivateRoutes/Abouts/Abouts';
import { ContactUs } from '../pages/PrivateRoutes/ContactUs/ContactUs';
import { My_Wish_List } from '../pages/PrivateRoutes/My_Wish_List/My_Wish_List';
import ScrollToTop from '../ScrollToTop';
import NotFound from '../pages/PubliceRoutes/NotFound/NotFound';
import Blogs from '../pages/PrivateRoutes/Blogs/Blogs';

export const MainRoutes = () => {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgote-password" element={<ForgotePassword />} />
                <Route path="/account-verification" element={<AccountVerification />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/abouts" element={<AboutsPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/my-wish-list" element={<My_Wish_List />} />
                <Route path="/login" element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/my-order-details' element={<My_Order_Details />} />

                {/* Furniture Pages Route Start Here ! */}
                <Route path='/product/cart' element={<Add_To_Card />} />
                <Route path='/product/checkout' element={<Checkout />} />
                <Route path='/products' element={<Furniture_Home />} />
                <Route path='/products/products-listing' element={<Furniture_Listing />} />
                <Route path='/products/vendor-products-listing' element={<Vendor_Product_Listing />} />
                <Route path='/products/products-details' element={<Furniture_Details />} />
                <Route path='/Transaction/Success' element={<ChakraProvider><Sucess_Payment /></ChakraProvider>} />
                <Route path='/Transaction/Failed' element={<Payment_Failed />} />
                <Route path='/Transaction/Movers-Packers/Success' element={<ChakraProvider><Mover_Sucess_Payment /></ChakraProvider>} />
                <Route path='/Transaction/Movers-Packers/Failed' element={<Mover_Payment_Failed />} />

                {/* Add a wildcard route for Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
