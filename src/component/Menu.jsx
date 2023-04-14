import React, { useState } from 'react'
// import img
import logo from '../assets/images/logoipsum-logo.png'

const Menu = () => {

    const [active, setActive] = useState(0)

    const menuData = ['Home', 'About', 'Feature']


    return (
        <div className='flex items-center justify-between h-[82px]'>
            <img src={logo} alt="logo" className='w-[171px] object-cover' />
            <ul className='flex items-center justify-center gap-[48px] font-bold'>
                {menuData.map((item, i) => (
                    <li
                        className={`${active === i ? 'text-[#6CD3FF] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#6CD3FF] before:absolute before:bottom-[-10px] before:right-[50%]' : ''} cursor-pointer relative`}
                        key={i}
                        onClick={() => setActive(i)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div>
                <button className='font-bold text-[#8C72FF] px-[18px] py-[10px] bg-[#FBFAFF] rounded-[100px] mr-[13px]'>Sign in</button>
                <button className='font-bold px-[18px] py-[10px] bg-[#8C72FF] rounded-[100px]'>Create Account</button>
            </div>
        </div>
    )
}

export default Menu