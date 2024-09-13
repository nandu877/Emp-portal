import React from 'react'

function Panel() {
  return (
    <>
    <div className='border-2 h-32 flex justify-center items-center'>
        <h1 className='text-[2.5rem] flex items-center gap-3 w-1/2 justify-center border-r-2'><i class="fa-solid fa-users text-[var(--btn2)]"></i><span className=' text-[4rem] font-bold'>13</span></h1>
        <h1 className='text-[2.5rem] flex items-center gap-3 w-1/2 justify-center'><i class="fa-brands fa-telegram text-[var(--btn2)]"></i><span className=' text-[4rem] font-bold'>13</span></h1>
    </div>
    </>
  )
}

export default Panel