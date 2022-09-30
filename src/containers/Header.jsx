import React from 'react'
import '../style/Header.css'
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'


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
                {/*<SearchIcon className='search-icon'/>*/}
            </div>
            <div className='nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className='option'>
                        <span className='option-one'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='option-two'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
