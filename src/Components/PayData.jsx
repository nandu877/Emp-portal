import React from 'react'

function PayData({data,i}) {
  return (
   <>
   <tr className={`h-20 ${i%2==0 && 'bg-slate-300'}`} >
            <td className='text-center text-xl'>{i}</td>
            <td className='text-center text-xl'>{data.MonthYear}</td>
            <td className=''>
              <div className=' flex justify-center gap-4'>
                <a href={data.slip} target='_blank' className=' flex justify-center gap-3 items-center border-[1px] border-[var(--btn2)] py-3 rounded-md bg-[var(--btn2)] hover:bg-white hover:border-2 hover:border-[var(--btn2)] hover:text-[var(--btn2)] w-32 text-white'>View <i class="fa-solid fa-eye"></i></a>
              </div>
            </td>
    </tr>
   </>
  )
}

export default PayData