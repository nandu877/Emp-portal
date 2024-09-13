import React, { useEffect, useState } from 'react'
import Emp from './Emp'
import { Link } from 'react-router-dom'
import axios from 'axios'

function EmpList() {
  const[employeesList,setEmpList]=useState([])
  useEffect(()=>{
    const fetch= async()=>{
      await axios.get("https://backend-vev7.onrender.com/api/employees").then((res)=>[
        setEmpList(res.data)
      ])
    }
    fetch()
  },[employeesList.length])
 
  return (
    <>
    <div className=' w-full border-r-2 over-for(let first in second) {third} w-80  h-full'>
        <h1 className=' font-bold text-2xl py-3 px-4'>Employee List</h1>
        <div className=' border-2'>
            <Link to="add">
            <div className=' flex items-center gap-3 pl-7 py-2'>
            <i className="fa-solid fa-plus w-16 h-16 border-[1px] bg-green-300 text-[2.5rem] flex justify-center items-center"></i>
            <h1 className=' text-xl font-[500]'>Add Employee</h1>
            </div>
            </Link>
        </div>
        <div className=' h-[77vh] overflow-y-auto px-2 py-5 flex flex-col gap-3'>
            {
              employeesList.map((item,i)=>{
                return <Emp key={i} name={item.name} id={item._id} empid={item.empid}/>
              })
            }
        </div>
    </div>
    </>
  )
}

export default EmpList