import React, { useState } from 'react'
import logo from "../Assests/Logo_W.png"
import { useLocation, useNavigate} from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { login } from '../Store'
import { toast } from 'react-toastify'
axios.defaults.withCredentials=true
function Login() {
    const[lvalues,setValues]=useState({empid:"",password:""})
    const[errors,setErrors]=useState({})
    const navigate=useNavigate()
    const dispatch=useDispatch()
    

    const validate=()=>{
        const error={};
        if(!lvalues.empid) error.empid="Enter Employee Id"
        if(!lvalues.password) error.password="Enter Password"

        return error;
    }

    const loginUser=()=>{
        const re=validate();

        if(Object.keys(re).length===0){
            axios.post("https://backend-vev7.onrender.com/auth/login",lvalues).then((res)=>{
                if(res.status===200){
                    toast.success(res.data.message)
                    dispatch(login({isLogin:true,role:res.data.user.role}))
                    navigate("/Dashboard",{replace:true})
                    setValues({empid:"",password:""})
                }
              
            }).catch((err)=>{
                toast(err.message)
            })
            
        }
        else{
            setErrors(re);
        }

    }
  return (
    <>
        <div className=' shadow-xl border-2 rounded-md w-1/3 mx-auto my-24 flex flex-col items-center gap-8 py-16 px-5'>
        <div className=' w-20 h-20'>
        <img src={logo} alt="" className='w-full h-full object-cover'/>
        </div>
        <form action="" onSubmit={(e)=>e.preventDefault()} className=' w-full px-8 space-y-3'>
            <div className=' flex flex-col w-full gap-1'> 
                <label htmlFor="" className=' font-bold'>Employee ID</label>
                <input  type="text" placeholder='Enter employee ID' onChange={(e)=>{setValues({...lvalues,empid:e.target.value})}} value={lvalues.empid} name="empid" className={`${errors.empid && 'border-red-700'} rounded-md border-2 py-2 px-4 w-full`}/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className=' font-bold'>Password</label>
                <input type="password" placeholder='Enter Password'onChange={(e)=>{setValues({...lvalues,password:e.target.value})}} value={lvalues.password} name="password" className={`${errors.password && 'border-red-700'} rounded-md border-2 py-2 px-4 w-full`} />
            </div>
            <button onClick={loginUser} className=' text-xl bg-[var(--button)] w-full py-3 text-white font-bold rounded-md'>Login</button>
        </form>
        </div>
    </>
  )
}

export default Login