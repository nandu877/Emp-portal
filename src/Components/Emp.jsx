import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Emp({name,id,empid}) {
  const location=useLocation()
  return (
    <>
      <Link to={`/admin/employees/employee/${id}`}>
      <div className={`border-2 py-2 px-3 flex gap-1 items-center shadow-sm rounded-md  ${location.pathname.endsWith(id) && 'bg-[var(--btn2)] text-white'} `}>
        <div className=' w-16 h-16 border-2 rounded-full overflow-hidden'>
          <img src="https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" alt="" className='w-full h-full object-cover'/>
        </div>
        <div>
          <h1 className=' text-sm font-[600]'>{name}</h1>
          <p className=' font-[500] '>{empid}</p>
        </div>
      </div>
      </Link>
    </>
  )
}

export default Emp