import React from 'react'
import PayData from '../Components/PayData'
import {useSelector} from "react-redux"
function Payslips() {
  const user=useSelector((state)=>state.user.user)
  return (
    <>
      <div className='w-full px-8 py-10'>
        <table className='border w-full'>
          <tr className='border bg-[var(--body)] text-white text-xl h-16'>
            <th className='w-[10%] border'>S.no</th>
            <th className='w-[50%] border'>Month</th>
            <th className='w-[40%] border'>Action</th>
          </tr>
          {
            user.payslip && user.payslip ? user.payslip.map((item,i)=>{
              return <PayData key={i} data={item} i={i+1}/>
            }): <tr><td colSpan={3}>Nodata</td></tr>
          }
        
        </table>
      </div>
    </>
  )
}

export default Payslips