import React, { useState } from 'react'
import Letter from './Letter';
import { DeleteConfirm } from './Forms';
import axios from "axios"
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
axios.defaults.withCredentials=true
function Leave() {
    const[values,setValues]=useState({reason:"",leave:"",rejoin:"",subject:""});
    const[error,setError]=useState({})
    const[pre,setPre]=useState(false)
    const[confirm2,setConfirm]=useState(false)
    const[loading,Setloading]=useState(false)
    const user=useSelector((state)=>state.user.user)
    const validate=()=>{
        const err={}
        if(!values.reason) err.reason="Enter Reason"
        if(!values.subject) err.subject="Enter Reason"
        if(!values.leave) err.leave="Select Leave Date"
        if(!values.rejoin) err.rejoin="Select Rejoin Date"
        return err
    }

    const handleData=()=>{
        const errors=validate();
        if(Object.keys(errors).length===0){
            console.log(values)
            setPre(true)
            setError({})
        }
        else{
            setError(errors)
        }

    }
    const handleDel=()=>{
        setPre(false)
        setValues({reason:"",subject:"",rejoin:"",leave:""})
        setConfirm(true)
    }
    const handleApi=async()=>{
        Setloading(true)
        await axios.post("https://backend-vev7.onrender.com/post/createreq",values,{
            withCredentials:true
        }).then((res)=>{
            
            toast.success(res.data.message)
            handleDel()
        }).catch((err)=>{toast(err.message)})
        setConfirm(false)
        Setloading(false)
    }
  return (
    <>
    <div className='px-8 mt-3'>
        <p className=' font-[600]'>Request for Leave</p>
        <div className=' flex pt-5 gap-5'>
           <div className='w-[40%]   '>
           <form action="" className='  flex flex-col gap-3' onSubmit={(e)=>{e.preventDefault()}}>
                <div className=' flex flex-col'>
                <label htmlFor="" className=' font-[500]'>Subject</label>
                <input type="text" placeholder='Enter Reason' value={values.subject} onChange={(e)=>setValues({...values,subject:e.target.value})}  className={`border-2 py-3 px-5 ${error.subject && 'border-red-700'} ${values.subject && 'border-green-400'}`}/>
                </div>
                <div className=' flex flex-col'>
                <label htmlFor="" className=' font-[500]'>Reason</label>
                <input type="text" placeholder='Enter Reason' value={values.reason} onChange={(e)=>setValues({...values,reason:e.target.value})}  className={`border-2 py-3 px-5 ${error.reason && 'border-red-700'} ${values.reason && 'border-green-400'}`}/>
                </div>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="" className=' font-[500]'>Leave on</label>
                    <input type="date"  value={values.leave} onChange={(e)=>setValues({...values,leave:e.target.value})}  className={`border-2 py-3 px-5 ${error.leave && 'border-red-700'} ${values.leave && 'border-green-400'}`}/>
                </div>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="" className=' font-[500]'>Re-Join</label>
                    <input type="date" value={values.rejoin}  onChange={(e)=>setValues({...values,rejoin:e.target.value})} className={`border-2 py-3 px-5 ${error.rejoin && 'border-red-700'} ${values.rejoin && 'border-green-400'}`}/>
                </div>
                {
                    pre?<div className='flex gap-4'><button onClick={()=>{setConfirm((p)=>!p)}} className=' self-end bg-[var(--body)] text-white py-2 px-5'>Send</button>
                <button onClick={()=>setPre((p)=>!p)} className=' self-end bg-[var(--body)] text-white py-2 px-5 bg-red-400'>Clear</button></div>:
                <button onClick={handleData} className=' self-end  text-white py-2 bg-[var(--body)] px-5'>Preview</button>

                }

            </form>
           </div>
            <div className=' w-[60%] '>
                {
                    pre ? <Letter sub={values.subject} reason={values.reason} leave={values.leave} re={values.rejoin} del={handleDel} name={user.name} empid={user.empid}/> : <p className=' w-full flex justify-center items-center '>No Priview</p>
                }
            </div>
        </div>
        {confirm2 && <DeleteConfirm name={"Confirm To Send"} Open={setConfirm} apiCall={handleApi} loading={loading}/>}
    </div>
    </>
  )
}

export default Leave