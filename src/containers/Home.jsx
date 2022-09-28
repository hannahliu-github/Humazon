import React from 'react'
//import Product from '../components/Product'
import '../style/Home.css'
import { Link } from 'react-router-dom';

function Home() { 
    return (
        <div className='home'>
            <div className='home-container'>
                <img id='home' className='home-img' src='https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_prime_day_2021_846-usen_d_hp_tallhero_smb_3000x1200._CB668775095_.jpg' alt='background' />
                <div className='home-row'>
                    Row_1
                </div>
                <div className='home-row'>
                    Row_2                   
                </div>
                <div className='home-row'>
                    Row_3                   
                </div>
                <a href="/">
                    <div className='backtotop-btn'>
                        <span>Back to top</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home