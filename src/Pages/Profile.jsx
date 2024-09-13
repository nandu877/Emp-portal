import React from 'react'
import logo from "../Assests/Logo_W.png"
import { useState } from 'react'
import { useSelector } from 'react-redux'
function Profile() {
  const user=useSelector((state)=>state.user.user)
  return (
    <div className='w-full flex items-center justify-center h-[91vh] bg-[]'>
      <div className=' border-2 shadow-xl px-10 w-1/2 relative pt-24 pb-14  rounded-xl flex flex-col items-center after:content-[""] after:w-full after:h-full bg-white after:top-0 after:left-0 after:-z-10 after:blur-[300px] after:bg-[var(--button)] after:absolute'>
          <div className='w-32 h-32 rounded-full overflow-hidden  border-2 border-black absolute -top-16 left-auto'>
            <img src="https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" alt=""  className=' w-full h-full object-cover'/>
          </div>
          <div>
              <div className=' flex justify-center flex-col items-center space-y-1'>
                <p className=' text-2xl font-bold'>{user.name}</p>
                <p className=' font-[600]'>{user.empid}</p>
                <p className=' font-[500] text-gray-700'>{user.role}</p>
              </div>
              <div className=' mt-8 flex gap-3 text-lg'>
                <div className=' text-start'>
                  <p className=' flex justify-between'>Email <span>:</span></p>
                  <p className=' flex justify-between'>Contact <span>:</span></p>
                  <p className=' flex justify-between'>Join <span>:</span></p>
                </div>
                <div className=' font-[600]'>
                  <p>{user.email}</p>
                  <p>{user.mobile}</p>
                  <p>{user.join}</p>
                </div>
              </div>
          </div>
          <i className="fa-solid fa-ghost absolute right-3 text-2xl bottom-3"></i>
          
      </div>
      
    </div>
  )
}

export default Profile