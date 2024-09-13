import React from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'

function Request() {
  const location=useLocation()
  return (
    <>
    <div className=''>
      <div className=' flex pt-4 pl-8'>
          <Link to="leave" className={` border-2 py-4 border-r-0 px-14  ${location.pathname.endsWith("leave") && 'bg-[var(--btn2)] text-white font-bold'}`}>Leave</Link>
          {/* <Link to="queries" className={` border-2 py-4 px-14  ${location.pathname.endsWith("queries") && 'bg-[var(--btn2)] text-white font-bold'}`}>Queries</Link> */}
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Request