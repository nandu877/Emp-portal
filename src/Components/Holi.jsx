import React from 'react'
import Holilist from './Holilist'

function Holi() {
  return (
    <div>
        <div className='w-full h-[64vh] mt-5  border-2 rounded-xl overflow-hidden'>
            <div className='bg-[var(--body)] h-24 w-full flex items-center justify-center'>
                <h1 className=' text-white text-3xl font-extrabold'>Holidays List</h1>
            </div>
            <div className='px-8 py-5 overflow-y-auto h-full'>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
                <Holilist/>
            </div>
        </div>
    </div>
  )
}

export default Holi