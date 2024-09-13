import React, { useState } from 'react'
import EmpPayData from './EmpPayData'
import { PaysLipsForm } from '../Forms'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../firebase'
import { toast } from 'react-toastify'

function EmpPaySlips({id,data}) {
    const[formOpen,setFormOpen]=useState(false)
    
    
  return (
    <>
      <div className='mt-4'>
        <div>
            <button onClick={()=>setFormOpen(true)} className='text-xl flex items-center border-2 w-36 hover:bg-[var(--btn2)] hover:text-white border-[var(--btn2)]'><i className="fa-solid fa-plus w-12 flex items-center justify-center text-2xl font-bold h-12 "></i> Upload</button>
        </div>
        <div className='mt-3 w-full'>
            <table className='w-full'>
                <tr className='border-2 h-10 bg-[var(--body)] text-white'>
                    <th className='w-[15%] border-r'>S.No</th>
                    <th className='w-[50%] border-r'>Month</th>
                    <th className='w-[45%]'>Actions</th>
                </tr>
                {
                  data && data ? data.map((item,i)=>{
                    return <EmpPayData key={i} data={item} i={i+1}/>
                  }): <tr><td>Nodata</td></tr>
                }
            </table>
        </div>
      </div>
        {
            formOpen && <PaysLipsForm Open={setFormOpen} id={id}/>
        }
    </>
  )
}

export default EmpPaySlips