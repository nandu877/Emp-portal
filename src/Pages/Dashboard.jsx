import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div className=' ml-72 mt-16'>
    <Outlet/>
    </div>
    </>
  )
}

export default Dashboard