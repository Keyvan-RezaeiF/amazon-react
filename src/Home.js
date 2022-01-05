import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img
                    className='home_image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />

                <div className="home_row">
                    <Product
                        id="12321341"
                        title='The lean startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title='Wireless Rechargeable Battery
                        Powered Security Camera Outdoor
                        , 1080P 2.4G WiFi IP Camera with
                        Night Vision, Motion Detection'
                        price={239.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/61N67x8EAqL._AC_UL450_SR450,320_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home_row">
                <Product
                        id="86426345"
                        title='SEAAES Ice Scraper with Snow Brush
                            for Car Windshield, Extendable Snow
                            Brush with ... '
                        price={62.93}
                        image="https://images-na.ssl-images-amazon.com/images/I/51s0PxpWuSL._AC_UL450_SR450,320_.jpg"
                        rating={2}
                    />
                    <Product
                        id="83453347"
                        title='LORYERGO Adjustable Laptop Stand,
                            Portable Laptop Riser for 17.3inch
                            Laptops, Adjustment Laptop Stand ...'
                        price={21.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61KiPy7h5YL._AC_UL450_SR450,320_.jpg"
                        rating={5}
                    />
                    <Product
                        id="15739462"
                        title='Reolink E1 Outdoor WiFi Security
                            Camera, 5MP HD PTZ Camera for Home
                            Security, Auto Tracking ... '
                        price={175.5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51nVsRPSUiL._AC_UL604_SR604,400_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home_row">
                <Product
                        id="24967182"
                        title='Gskyer Telescope, 70mm Aperture
                            400mm AZ Mount Astronomical Refracting
                            Telescope for Kids Beginners - Travel
                            Telescope with Carry Bag, Phone Adapter
                            and Wireless Remote'
                        price={119.9}
                        image="https://images-na.ssl-images-amazon.com/images/I/7133ChhszhL._AC_UL450_SR450,320_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
