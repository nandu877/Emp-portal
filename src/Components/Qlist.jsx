import React from 'react'

function Qlist({title}) {
  return (
    <>
        <div className='py-3 px-6 border-2 rounded-lg shadow-sm flex flex-col gap-4 mb-5'>
             <div className='flex justify-between'>
                <h5 className='font-[700] text-xl'>Query</h5>
                <p>12/01/2404</p>
             </div>
             <p className='w-[90%] text-[0.9rem] h-7 text-ellipsis overflow-hidden whitespace-nowrap'>{title}</p>
        </div>
    </>
  )
}

export default Qlist