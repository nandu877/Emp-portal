import React, { useState } from 'react'
import { LtterShow } from './Forms'

function Req({status}) {
    const[showLetter,setLetter]=useState(false)
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');  // Ensure two digits
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
  
  return (
    <>
    <div onClick={()=>{setLetter((p)=>!p)}}>
         <div className='flex justify-between items-center my-3 py-4 px-3 border-2  rounded-md'>
                <div className='flex flex-col justify-center gap-5 w-[70%]'>
                    <h4 className='font-bold'>Leave</h4>
                    <p className='text-[0.9rem] w-full h-8 text-ellipsis overflow-hidden whitespace-nowrap'>{status.subject} | {status.reason}</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='self-end'>{formatDate(status.createdAt)}</p>
                    <p className={`text-[0.8rem] flex justify-center items-center gap-1 py-1  rounded-md ${status.status==="Rejected" && ' text-red-700 bg-red-200'} ${status.status==="Accepted" && 'text-green-600 bg-green-200'} ${status.status==="Pending" && 'text-gray-600 bg-gray-200'}`}><i class={`fa-regular fa-circle-${status.status==="Accepted" && 'check'} ${status.status==="Rejected" && 'fa-circle-xmark'} ${status.status==="Pending" && 'fa-clock'} text-[0.7rem]`}></i> {status.status}</p>
                </div>
            </div>
    </div>
    {
      showLetter && <LtterShow Open={setLetter} data={status}/>
    }
    </>
  )
}

export default Req