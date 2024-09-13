import React from 'react'
import AdminReqList from './AdminReqList'
import { Outlet } from 'react-router-dom'

function EmpR() {
  return (
    <>
    <div className='w-full flex  h-[76vh]'>
        <div className='w-5/12 border-r-2'>
            <AdminReqList/>
        </div>
        <div className='w-7/12'>
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default EmpR