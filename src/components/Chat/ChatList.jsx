import React from 'react'
import CustomSearchField from '../common/SearchField'
import CommonButton from '../ui/CommonButton'
import { profile } from '../../assets'

const ChatList = () => {
  return (
    <div className='w-96 border border-primary rounded-2xl p-5 h-[80vh] overflow-y-scroll'>
        <div className="flex justify-between space-x-5">
            <CustomSearchField placeholder="search" />
            <CommonButton text={"filter"} className=" hover:bg-[#eaf9c4]" />
        </div>

        <div className='mt-5 w-full space-y-2'>
            <div className='flex justify-around  space-x-2 bg-gray-100 py-3 rounded-xl'>
                <img src={profile} alt="profile" className='w-12 h-12 rounded-full ' />
                <div className='flex flex-col justify-center '>
                    <p>Diane Russel </p>
                    <p className='text-[12px] text-gray-400'>Ut enim ad minima veniam st..</p>
                </div>
                <p className='text-[14px] text-gray-800'>23:45</p>
            </div>
            <div className='flex justify-around  space-x-2 bg-gray-100 py-3 rounded-xl'>
                <img src={profile} alt="profile" className='w-12 h-12 rounded-full ' />
                <div className='flex flex-col justify-center '>
                    <p>Diane Russel </p>
                    <p className='text-[12px] text-gray-400'>Ut enim ad minima veniam st..</p>
                </div>
                <p className='text-[14px] text-gray-800'>23:45</p>
            </div>
            <div className='flex justify-around  space-x-2 bg-gray-100 py-3 rounded-xl'>
                <img src={profile} alt="profile" className='w-12 h-12 rounded-full ' />
                <div className='flex flex-col justify-center '>
                    <p>Diane Russel </p>
                    <p className='text-[12px] text-gray-400'>Ut enim ad minima veniam st..</p>
                </div>
                <p className='text-[14px] text-gray-800'>23:45</p>
            </div>
            <div className='flex justify-around  space-x-2 bg-gray-100 py-3 rounded-xl'>
                <img src={profile} alt="profile" className='w-12 h-12 rounded-full ' />
                <div className='flex flex-col justify-center '>
                    <p>Diane Russel </p>
                    <p className='text-[12px] text-gray-400'>Ut enim ad minima veniam st..</p>
                </div>
                <p className='text-[14px] text-gray-800'>23:45</p>
            </div>
            <div className='flex justify-around  space-x-2 bg-gray-100 py-3 rounded-xl'>
                <img src={profile} alt="profile" className='w-12 h-12 rounded-full ' />
                <div className='flex flex-col justify-center '>
                    <p>Diane Russel </p>
                    <p className='text-[12px] text-gray-400'>Ut enim ad minima veniam st..</p>
                </div>
                <p className='text-[14px] text-gray-800'>23:45</p>
            </div>
            <div className='flex justify-around  space-x-2 bg-gray-100 py-3 rounded-xl'>
                <img src={profile} alt="profile" className='w-12 h-12 rounded-full ' />
                <div className='flex flex-col justify-center '>
                    <p>Diane Russel </p>
                    <p className='text-[12px] text-gray-400'>Ut enim ad minima veniam st..</p>
                </div>
                <p className='text-[14px] text-gray-800'>23:45</p>
            </div>
            <div className='flex justify-around  space-x-2 bg-gray-100 py-3 rounded-xl'>
                <img src={profile} alt="profile" className='w-12 h-12 rounded-full ' />
                <div className='flex flex-col justify-center '>
                    <p>Diane Russel </p>
                    <p className='text-[12px] text-gray-400'>Ut enim ad minima veniam st..</p>
                </div>
                <p className='text-[14px] text-gray-800'>23:45</p>
            </div>
        </div>
    </div>
  )
}

export default ChatList