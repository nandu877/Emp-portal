import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Emp from '../Components/Emp'
import EmpList from '../Components/EmpList'

function Employees() {
  return (
    <div className='w-full relative flex h-screen'>
        <div className=' h-full w-[30%]'>
          <EmpList/>
        </div>
        <div className=' w-[70%]'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Employees