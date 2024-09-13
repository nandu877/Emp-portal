import React, { useState } from 'react'
import { DeleteConfirm, PaysLipsForm } from '../Forms'

function EmpPayData({data,i}) {
  const[DeleteCon,setDele]=useState(false)
  const[EditCon,setEdit]=useState(false)
  return (
    <>
        <tr className='text-center h-10'>
            <td>{i}</td>
            <td>{data.MonthYear}</td>
            <td>
            <div className='flex gap-8 text-xl justify-center'>
            <button onClick={()=>setDele((p)=>!p)}><i class="fa-solid fa-trash text-red-500"></i></button>
           
            <a href={data.slip}><i class="fa-solid fa-eye"></i></a>
            </div>
            </td>
        </tr>
        {
          DeleteCon && <DeleteConfirm Open={setDele}/>
        }
        
    </>
  )
}

export default EmpPayData