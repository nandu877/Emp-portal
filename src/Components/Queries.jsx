import React, { useState } from 'react'
import Query from './Query'

function Queries() {
  const [list,setList]=useState([]);
  const [query,setQuery]=useState("");
  const submitQ=()=>{
    const newQuery=query;
    setList([...list,newQuery])
    setQuery("")
  }
  console.log(list);
  return (
    <>
      <div className='w-full flex'>
        <div className='w-[60%] py-6 px-10 flex flex-col'>
          <h1 className='text-3xl mt-10 mb-5 font-[600]'>Write your Queries here..</h1>
          <textarea name="" id="" className='w-full border-2 h-60  outline-none p-5 rounded-lg' placeholder="Enter here...." value={query} onChange={(e)=>setQuery(e.target.value)}></textarea>
          <button className='bg-[var(--btn2)] text-white font-[600] w-32 h-11 self-end mt-8' onClick={submitQ}>Submit</button>
        </div>
        <div className='w-[40%] pr-8'>
          <Query data={list}/>
        </div>
      </div>
    </>
  )
}

export default Queries