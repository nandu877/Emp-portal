import React from 'react'
import { useSelector } from 'react-redux'

function Nav2() {
  const user=useSelector((state)=>state.user.user)
  return (
    <>
  <div className=' bg-[var(--btn2)] h-16 font-bold text-white flex justify-end pr-20 items-center text-xl fixed top-0 right-0 w-[82%] '>
    <h1>Welcome! <span>{user.name}</span></h1>
  </div>
    </>
  )
}

export default Nav2