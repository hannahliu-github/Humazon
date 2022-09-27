import React, { useState } from 'react'
import '../style/Login.css'
import { auth } from "../firebase.js";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate  = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className='login-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG6.png' alt='logo' />
            </Link>
            <div className='login-container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} type='submit' className='signin-btn'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <p>
                    <b>Please click Create Your Amazon Account after you enter the email and password if you don't have an account.</b>
                </p>
                <button onClick={register} className='register-btn'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login