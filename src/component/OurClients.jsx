import React from 'react'
// import img
import logo_microsoft from '../assets/images/Microsoft Logo.png'
import logo_google from '../assets/images/Google Logo.png'
import logo_airbnb from '../assets/images/Airbnb Logo.png'
import logo_bookmyshow from '../assets/images/BookMyShow Logo.png'
import logo_fedex from '../assets/images/FedEx Logo.png'
import logo_walmart from '../assets/images/Walmart Logo.png'
import logo_oyo from '../assets/images/OYO Logo.png'
import logo_ola from '../assets/images/Group.png'
import logo_amazon from '../assets/images/Amazon Logo.png'
import WrapImage from './WrapImage'






const OurClients = () => {
    return (
        <div className='my-[170px] text-center'>
            <h2 className='font-extrabold text-[48px] leading-[64/48] mb-[10px]'>Our Clients</h2>
            <p className='text-[18px] leading-[32/18]'>We have been working with some Fortune 500 clients</p>
            <div className='flex items-center justify-center gap-[24px] mt-[80px]'>
                <div>
                    <WrapImage url_img={logo_airbnb} />
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <WrapImage url_img={logo_google} />
                    <WrapImage url_img={logo_bookmyshow} />
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <WrapImage url_img={logo_microsoft} />
                    <WrapImage url_img={logo_fedex} />
                    <WrapImage url_img={logo_walmart} />
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <WrapImage url_img={logo_oyo} />
                    <WrapImage url_img={logo_ola} />
                </div>
                <div>
                    <WrapImage url_img={logo_amazon} />
                </div>
            </div>
        </div>
    )
}

export default OurClients