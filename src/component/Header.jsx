import React from 'react'
import Menu from './Menu'

// import img
import hero_main_img from '../assets/images/Frame 12.png'
import hero_tl_img from '../assets/images/Other 15.png'
import hero_tr_img from '../assets/images/Marni 4.png'
import hero_bl_img from '../assets/images/Badrun 6.png'
import hero_br_img from '../assets/images/Other 21.png'

const Header = () => {
    return (
        <div className='max-w-[1440px] px-[96px]'>
            <Menu />
            <div className='mt-[120px] flex items-center justify-between gap-[161px]'>
                <div className='flex-1'>
                    <h2 className='text-[56px] leading-[84/56] font-bold'>
                        Discover
                        <span className='text-transparent bg-clip-text bg-color-linear'> Characters </span>
                        in <br /> Pixi-World
                    </h2>
                    <p className='mt-[24px] mb-[48px] font-medium text-[22px] leading-[35/22]'>We believe the world is more beautiful as each person gets better. We believe the world is more beautiful as each person gets better. Person gets better.</p>
                    <button className='text-[#8C72FF] px-[36px] py-[18px] bg-[#FBFAFF] rounded-[100px]'>Get Started for free</button>
                </div>
                <div className='flex-1 relative'>
                    <img src={hero_main_img} alt="img" />
                    <img src={hero_tl_img} alt="img" className='absolute top-[-40px] max-w-[185px] animate-bounce-slow' />
                    <img src={hero_tr_img} alt="img" className='absolute top-[-90px] right-[-10px] max-w-[383px] animate-bounce-slow' />
                    <img src={hero_bl_img} alt="img" className='absolute bottom-[-90px] left-[-110px] max-w-[383px] animate-bounce_slow_bottom' />
                    <img src={hero_br_img} alt="img" className='absolute bottom-[-70px] right-[80px] max-w-[383px] animate-bounce_slow_bottom' />
                </div>
            </div>
        </div>
    )
}

export default Header