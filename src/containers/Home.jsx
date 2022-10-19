import React from 'react'
import Product from '../components/Product'
import '../style/Home.css'
import { Link } from 'react-router-dom';

function Home() { 
    return (
        <div className='home'>
            <div className='home-container'>
                <img id='home' className='home-img' src='https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_prime_day_2021_846-usen_d_hp_tallhero_smb_3000x1200._CB668775095_.jpg' alt='background' />
                <div className='home-row'>
                    <Product
                        id='1' 
                        title='All Natural Freeze Dried Wild Alaskan Salmon Treats for Cats & Dogs - Single Ingredient No Grain Snack With No Additives or Preservatives, - 5 Ounce Bag - 6 Pack'
                        price={109.99}
                        image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61BgEBmNwbL._AC_SX425_.jpg'
                        rating={5}
                    />
                    <Product
                        id='2' 
                        title='Sboly Single Serve Coffee Maker Brewer for K-Cup Pod & Ground Coffee Thermal Drip Instant Coffee Machine with Self Cleaning Function, Brew Strength Control'
                        price={39.99}
                        image='https://chefman.com/wp-content/uploads/2018/12/RJ14-12-P.png'
                        rating={4}
                    />
                </div>
                <div className='home-row'>
                    <Product
                        id='3' 
                        title='Sony Alpha a7 III Mirrorless Digital Camera with 28-70mm Lens'
                        price={2254.95}
                        image='https://1.img-dpreview.com/files/p/articles/9946986042/ILCE-7_wSEL2870_right.png'
                        rating={4}
                    />
                    <Product
                        id='4' 
                        title='Clorox Disinfecting Wipes, Bleach Free Cleaning Wipes, Fresh Scent, Moisture Seal Lid, 75 Wipes, Pack of 3 (New Packaging)'
                        price={19.99}
                        image='https://cdn.shopify.com/s/files/1/0362/3167/6040/products/clorox_handi_green-removebg-preview_874ef86f-a9a7-46ed-98b5-f478e7084c5f_grande.png?v=1605632484'
                        rating={5}
                    />
                    <Product
                        id="5" 
                        title='EVGA GeForce RTX 3090 FTW3 Ultra Gaming, 24GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate, 24G-P5-3987-KR'
                        price={2124.99}
                        image='https://images.evga.com/products/gallery/png/24G-P5-3987-KR_XL_1.png'
                        rating={5}
                    />                 
                </div>
                <div className='home-row'>
                    <Product
                        id='6' 
                        title='LG 27 Class Premium IPS Flat Panel Ultra-Thin Bezel Monitor 27” FHD (1920 x 1080) Resolution'
                        price={299.99}
                        image='https://img.pngio.com/lg-ultrawide-full-hd-ips-gaming-monitor-29-inch-29um69g-b-att-ultrawide-monitor-png-636_569.png'
                        rating={5}
                    />                
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