import React from 'react'
// import img
import logo from '../assets/images/logoipsum-logo.png'
// import icons
import { AiOutlineTwitter, AiFillFacebook, AiOutlineGoogle } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className='mx-[120px] flex pb-[114px] border-solid border-b-[1px] border-[#2B2931]'>
                <div className='flex-1 mr-[255px]'>
                    <img src={logo} alt="logo" className='max-w-[172px] object-cover' />
                    <p className='my-[28px] font-medium'>Insurance is too complicated. Draft understands its customers and make the process simple for them. </p>
                    <button className='py-[12px] px-[8px] text-[#FBFAFF] bg-[#8C72FF] rounded-[100px] text-[13px] font-bold leading-[20/13]'>Ask Question</button>
                </div>
                <ul className='flex-[0.5] flex flex-col gap-y-[16px]'>
                    <li className='text-[18px] leading-[32/18] mb-[15px]'>Community</li>
                    <li>For Talents</li>
                    <li>For Companies</li>
                    <li>Facebook Group</li>
                    <li>FAQ</li>
                </ul>
                <ul className='flex-[0.5] flex flex-col gap-y-[16px] mx-[30px]'>
                    <li className='text-[18px] leading-[32/18] mb-[15px]'>About us</li>
                    <li>Meet the team</li>
                    <li>Our story</li>
                    <li>Career</li>
                </ul>
                <ul className='flex-1 flex flex-col gap-y-[21px]'>
                    <li className='text-[18px] leading-[32/18] mb-[15px]'>Contact</li>
                    <li>Feel free to get in touch with us vie phone or send us a message</li>
                    <li className='text-[#785EEB]'>+1-301-340-3946 <br />
                        info@draft.com
                    </li>
                </ul>
            </div>
            <div className='mx-[162px] flex items-center justify-between pt-[21px] pb-[80px] text-[13px] leading-[28/13] text-[#A7A4AF]'>
                <span>© Draft 2021, All Rights Reserved.</span>
                <div className='flex items-center gap-[20px]'>
                    <AiOutlineTwitter className='cursor-pointer' />
                    <AiFillFacebook className='cursor-pointer' />
                    <AiOutlineGoogle className='cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Footer