import React from 'react'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className='ml-64 h-screen '>
        <Outlet/>
    </div>
  )
}

export default Admin