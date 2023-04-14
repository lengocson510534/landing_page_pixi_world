import React from 'react'
// import img
import img_1 from '../assets/images/Other 07.png'
import img_2 from '../assets/images/section_2.png'
import img_3 from '../assets/images/Other 02.png'

const SectionNextCharacter = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='ml-[28px]'>
                <div className='w-[263px] h-[263px] rounded-full bg-[#291C52] flex items-center justify-center'>
                    <img src={img_1} alt="img" />
                </div>
                <div className='w-[51px] h-[51px] rounded-full bg-[#291C52] flex items-center justify-center'>
                    <img src={img_2} alt="img" />
                </div>
            </div>
            <div className='mr-[96px] text-right'>
                <div className='flex flex-col items-center justify-center relative'>
                    <img src={img_3} alt="img" className='absolute top-[-80px]' />
                    <div className='w-[43px] h-[43px] rounded-full bg-[#291C52]'></div>
                </div>
                <p className='text-[48px] leading-[84/48] font-bold mt-[27px]'>You are one step away from discovering your next Character in Pixi-World</p>
            </div>
        </div>
    )
}

export default SectionNextCharacter