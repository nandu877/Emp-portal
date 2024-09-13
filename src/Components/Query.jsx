import React from 'react'
import Qlist from './Qlist'

function Query({data}) {
  return (
    <>
        <div className='border-2 h-[78vh] rounded-2xl overflow-hidden'>
            <h1 className='h-20 bg-[var(--btn2)] sticky top-0 flex items-center justify-center text-white text-2xl font-[600]'>Query History</h1>
            <div className='px-5 pt-5 h-[67vh] overflow-y-auto'>
                {
                    data.map((item,i)=>{
                        return <Qlist key={i} title={item}/>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Query