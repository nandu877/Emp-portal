import React, { useState } from 'react'
import { ProfileForm } from '../Forms'

function EmpDetails({data}) {

    const[ProfileEditOpen,setProfileOpen]=useState(false)
  return (
    <>
        <div className='mt-3'>
           <div className='flex gap-3'>
            <div>
                <p>Full Name</p>
                <p>Email</p>
                <p>Mobile</p>
                <p>Role</p>
            </div>
            <div>
                <p>: {data.name}</p>
                <p>: {data.email}</p>
                <p>: {data.mobile}</p>
                <p>: {data.role}</p>
            </div>
           </div>
            <div className='flex justify-end pr-16'>
                <button className='text-[1.2rem] font-[500]' onClick={()=>setProfileOpen((p)=>!p)}><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
        </div>
        {
            ProfileEditOpen && <ProfileForm Open={setProfileOpen}/>
        }
    </>
  )
}

export default EmpDetails