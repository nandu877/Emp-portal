import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteConfirm, DeleteConfirm2 } from '../Forms'
import { toast } from 'react-toastify'

function RqShow() {
    const{id}=useParams()
    const[post,setPost]=useState(null)
    const [loading, setLoading] = useState(true);
    const[open,setOpen]=useState(false)
    const[newStatus,setNew]=useState("")
    const navigate=useNavigate()
    console.log(open,newStatus)
    useEffect(()=>{
        const getPost=async()=>{
            await axios.get(`https://backend-vev7.onrender.com/post/posts/${id}`).then((res)=>{
                setPost(res.data)
                setLoading(false)
            })
        }
        getPost()
    },[id])
    const updateStatus = async (newStatus) => {
        try {
          await axios.put(`https://backend-vev7.onrender.com/post/updateStatus/${id}`, { status: newStatus }).then((res)=>{
            toast.success(res.data.message)
           
            setOpen(false)
            navigate("/admin",{replace:true})
          });
          
        } catch (error) {
          toast.error('Error updating status');
        }
      };
    if (loading) {
        return <div>Loading...</div>;
      }
  return (
    <>
    <div className='w-full p-3 flex items-start flex-col gap-3 justify-start px-5 pt-9'>
        <div>
            <p>To</p>
            <p>The Hr,</p>
            <p>Ascus Tech</p>
        </div>
        <div>
            <p>Subject: <span className=' font-[700]'>{post.subject}</span></p>
        </div>
        <div>
            <p>Respected Sir/Madam</p>
        </div>
        <div>
            <p className=' indent-16'>I am writing to request leave for <span className=' font-[700]'>{post.reason}</span>. I will be unable to come to the office from <span className=' font-[700]'>{post.fromDate}</span> to <span className=' font-[700]'>{post.toDate}</span>. Kindly grant me leave for the mentioned period. I will make sure to finish my pending work before leaving and will resume work as soon as I come back.</p>
        </div>
        <div>
            <p>Thank You!</p>
        </div>
        <div className=' font-[500]'>
            <p>{post.employee.name}</p>
            <p>{post.employee.empid}</p>
        </div>
       {
        post.status==="Pending" ?
        <div className='flex justify-end w-full gap-2'>
            <button onClick={()=>{
                setNew("Accepted")
                setOpen((p)=>!p)
            }} className=' text-white bg-green-600 text-[0.8rem] flex justify-center items-center gap-1 py-2 px-5 rounded-md'><i class="fa-regular fa-circle-check"></i>Accept</button>
            <button onClick={()=>{
                setNew("Rejected")
                setOpen((p)=>!p)
            }} className='text-[0.8rem] flex justify-center items-center gap-1 py-2 px-5  rounded-md text-white bg-red-600'><i class="fa-regular fa-circle-xmark"></i>Reject</button>
        </div> :
        <div>
            <h2 className={`text-xl font-bold ${post.status==="Accepted" && 'text-green-600'} ${post.status==="Rejected" && 'text-red-600'}`}>{post.status}</h2>
        </div>
       }
       {
        open && <DeleteConfirm2 Open={setOpen} name={newStatus} apiCall={updateStatus}/>
       }
    </div>
    </>
  )
}

export default RqShow