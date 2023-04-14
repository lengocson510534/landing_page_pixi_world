import React from 'react'

const WrapImage = ({ url_img }) => {
    return (
        <div className='w-[170px] h-[96px] rounded-[16px] bg-[#EBE6FA] flex items-center justify-center cursor-pointer shadow-img'>
            <img src={url_img} alt="logo" />
        </div>
    )
}

export default WrapImage