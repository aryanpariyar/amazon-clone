import React from 'react';
import '../Css/Home.css'
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            {/* banner image */}
            <img className='home__image' src="https://m.media-amazon.com/images/I/51xKzY1ecjL._SX1500_.jpg" alt="" />


            {/* Product id  title price rating image */}
            <div className="home__row">
                <Product id="123434"
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                    price={64.66}
                />
                <Product id="123431"
                    title="SMK270 Wireless Keyboard and Mouse Combo, Six-months warrenty on both of the products"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg"
                    price={60}
                />
            </div>
            <div className="home__row">
                <Product id="123432"
                    title="HP DeskJet 4155e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+ (26Q90A)"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/612G5AUOZWL._AC_SL1500_.jpg"
                    price={164.99}
                />
                <Product id="123433"
                    title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
                    price={264}
                />
                <Product id="123434"
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                    price={64.66}
                />
            </div>
            <div className="home__row">
                <Product id="123435"
                    title="SAMSUNG 75-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75AU8000FXZA, 2021 Model), TV Only, Black"
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
                    price={674.66}
                />

            </div>






        </div>


    );
}

export default Home;


