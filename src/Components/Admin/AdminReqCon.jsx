import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function AdminReqCon({data}) {
    const location=useLocation()
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');  
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      }
  return (
    <>
    <Link to={`/admin/posts/${data._id}`} >
    <div className={`border-2 px-4 py-3 mb-2 ${location.pathname.endsWith(data._id) && 'bg-[var(--btn2)] text-white'}`}>
        <div className='flex justify-between'>
            <div className=''>
            <h4 className='font-semibold'>{data.employee.name}</h4>
            <p>{data.employee.empid}</p>
            </div>
            <p>{formatDate(data.createdAt)}</p>
        </div>
        <div>
            <p className='w-[90%] text-[0.9rem] text-ellipsis overflow-hidden whitespace-nowrap'>{data.subject} | {data.reason}</p>
        </div>
    </div>
    </Link>
    </>
  )
}

export default AdminReqCon