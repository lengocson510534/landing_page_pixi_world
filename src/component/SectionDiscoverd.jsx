import React from 'react'

const SectionDiscoverd = ({ url_img_main, url_img_tl, url_img_tr, url_img_bl, url_img_br, className }) => {
    return (
        <div className={`my-[222px] flex items-center gap-[92px] ${className}`}>
            <div className='flex-1 relative'>
                <img src={url_img_main} alt="img" />
                <img src={url_img_tl} alt="img" className='absolute top-[-80px] left-[-40px] animate-bounce-slow' />
                <img src={url_img_tr} alt="img" className='absolute top-[-80px] right-[100px] animate-bounce_slow_bottom' />
                <img src={url_img_bl} alt="img" className='absolute bottom-[-150px] left-[-80px] animate-bounce-slow' />
                <img src={url_img_br} alt="img" className='absolute bottom-[86px] right-[-20px] animate-bounce_slow_bottom' />

            </div>
            <div className='flex-1'>
                <h2 className='font-bold text-[48px] leading-[84/48]'>Discover Characters in Pixi-World</h2>
                <p className='my-[40px] text-[22px] leading-[35/22] font-medium'>We believe the world is more beautiful as each person gets better. We believe the world is more beautiful as each person gets better. Person gets better. </p>
                <button className='px-[36px] py-[18px] text-[#8C72FF] bg-[#FBFAFF] rounded-[100px]'>Try It Now</button>
            </div>
        </div>
    )
}

export default SectionDiscoverd