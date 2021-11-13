import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import FeaturedProduct from '../components/home/FeaturedProduct';
import NewArrival from '../components/home/NewArrival';
import HomeTop  from '../components/home/HomeTop';
import HomePage from '../pages/HomePage'
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import Favorite from '../components/Favorite/Favorite';
import FavoritePage from '../pages/FavoritePage';
import CartPage from '../pages/CartPage';
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                    <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/login' element={<UserLoginPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route  path="/purchase" element={<PurchasePage/>} />
                    <Route  path="/privacy" element={<PrivacyPage/>} />
                    <Route  path="/refund" element={<RefundPage/>} />
                    <Route  path="/productdetails" element={<ProductDetailsPage/>} />
                    <Route  path="/notification" element={<NotificationPage/>} />
                    <Route  path="/favorite" element={<FavoritePage/>} />
                    <Route  path="/cart" element={<CartPage/>} />

                    </Routes>
              

            </Fragment>
        )
    }
}

export default AppRoute
