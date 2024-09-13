import React from 'react'
import EmpR from './EmpR'

function AdminReq() {
  return (
    <>
        <div className='w-full'>
            <h4>Requests</h4>
            <div className='flex'>
                <div className='w-full'>
                   <EmpR/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminReq