import React from 'react'

function Letter(props) {
  return (
    <div className='w-full p-3 flex items-start flex-col gap-3 justify-start'>
        <div>
            <p>To</p>
            <p>The Hr,</p>
            <p>Ascus Tech</p>
        </div>
        <div>
            <p>Subject: <span className=' font-[700]'>{props.sub ? props.sub :props.data.subject}</span></p>
        </div>
        <div>
            <p>Respected Sir/Madam</p>
        </div>
        <div>
            <p className=' indent-16'>I am writing to request leave for <span className=' font-[700]'>{props.reason ? props.reason : props.data.reason}</span>. I will be unable to come to the office from <span className=' font-[700]'>{props.leave ? props.leave : props.data.fromDate}</span> to <span className=' font-[700]'>{props.re ? props.re : props.data.toDate}</span>. Kindly grant me leave for the mentioned period. I will make sure to finish my pending work before leaving and will resume work as soon as I come back.</p>
        </div>
        <div>
            <p>Thank You!</p>
        </div>
        <div className=' font-[500]'>
            <p>{props.name ? props.name : props.data.employee.name}</p>
            <p>{props.empid ? props.empid : props.data.employee.empid}</p>
        </div>
        {
            props.confirm &&
            <div className=' self-end space-x-3'>
            <button className=' bg-red-700 py-2 px-5 text-white font-[600]' onClick={props.del}>Cancel</button>
            <button className='bg-green-400 py-2 px-5 text-white font-[600]'>Send</button>
            </div>
        }
    </div>
  )
}

export default Letter