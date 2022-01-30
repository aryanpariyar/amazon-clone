import React from 'react';
import img from '../Img/logo.png';
import '../Css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Navbar() {

    let history = useNavigate();

    const [{ basket, user }] = useStateValue();
    console.log(basket);
    const login = () => {
        if (user) {
            auth.signOut()
                .then((auth) => {
                    // logged in, redirect to homepage .. 
                    history("/");
                });
        }
    }
    return <nav className='header'>
        {/* logo on the left -> img */}
        <Link to="/">
            <img className='header__logo' src={img} alt="" />
        </Link>
        {/* search box */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className='header__searchIcon' />
        </div>
        {/* 3 links  */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className='header__link'>
                <div onClick={login} className="header__option">
                    <span className='header__optionLineOne'>Hello {user?.email}</span>
                    <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to="/" className='header__link'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>
            {/* 3rd link */}
            <Link to="/" className='header__link'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>

            {/* Basket icon with number */}
            <Link to="/checkout" className='header__link'>
                <div className="header__optionBasket">
                    {/* Shopping Basket icon */}
                    <ShoppingCartCheckoutIcon />
                    {/* Number of items in the basket */}
                    <span className='header__optionLineTwo header_basketCount'>{basket?.length}</span>
                </div>
            </Link>

        </div>

    </nav>;
}

export default Navbar;
