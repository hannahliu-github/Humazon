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
                        title='Cat Toys for Indoor Cats, Electronic Automated Cat Toys with Mouse Tail & Catnip Ball, Interactive Cat Toys with Battery, Exerciser Entertainment Hunting for Kitty Pet, Auto Shut Off'
                        price={19.99}
                        image='https://m.media-amazon.com/images/I/61Q3EeMJdtL._AC_SX425_.jpg'
                        rating={4}
                    />
                </div>
                <div className='home-row'>
                    <Product
                        id='3' 
                        title='15PCS Natural Silvervine Sticks for Cats, Catnip Sticks Matatabi Chew Sticks Teeth Molar Chew Toys for Cat Kitten Kitty Teeth Cleaning'
                        price={5.89}
                        image='https://m.media-amazon.com/images/I/71eDCfFRoQL._AC_SX425_.jpg'
                        rating={3}
                    />
                    <Product
                        id='4' 
                        title='Mr. Pen- Cat Nail Clipper, Cat Nail Trimmers, Cat Claw Clippers, Cat Claw Trimmers, Kitten Nail Clipper, Cat Clippers for Nails, Nail Clippers for Cats, Pet Nail Clippers for Cats, Cat Nail Cutter'
                        price={6.85}
                        image='https://m.media-amazon.com/images/I/71Mg3J8aSBS._AC_SX425_.jpg'
                        rating={5}
                    />
                    <Product
                        id="5" 
                        title='PetFusion 3-Sided Vertical Cat Scratching Post | Available in 18” & 24” | Multiple Angle Cat Scratching Pad, 6 Usable Sides. Scratch, Play, & Perch | 100% Recyclable Cardboard Cat Lounge. 1 Yr Warr'
                        price={53.69}
                        image='https://m.media-amazon.com/images/I/71MOg+ixisL._AC_SX425_.jpg'
                        rating={5}
                    />                 
                </div>
                <div className='home-row'>
                    <Product
                        id='6' 
                        title='pidan Cat Harness and Leash Set, Cats Escape Proof - Adjustable Kitten Harness for Large Small Cats, Lightweight Soft Walking Travel Petsafe Harness'
                        price={12.99}
                        image='https://m.media-amazon.com/images/I/71jXgsRq5LL._AC_SX425_.jpg'
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