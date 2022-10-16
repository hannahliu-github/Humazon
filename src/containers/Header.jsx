import React from 'react'
import '../style/Header.css'
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img src='/amazon.png' alt="logo" />
            </Link>
            <div className='search-bar'>
                <input className='search-input' type='text'/>
                <SearchIcon className='search-icon'/>
            </div>
            <div className='nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className='option'>
                        <span className='option-one'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='option-two'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className='option'>
                        <span className='option-one'>Returns</span>
                        <span className='option-two'>& Orders</span>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className='shopping-cart'>
                        <ShoppingCartIcon />
                        <span className='option-two cart-count'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
