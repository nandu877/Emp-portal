import { useState } from "react"
import Letter from "./Letter"
import { toast } from "react-toastify";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";

export const PaysLipsForm=(props)=>{

    const[uploading,setUploading]=useState(false)
    const [file, setFile] = useState(null);
    const[MonthYear,setMonth]=useState("")
    const UploadPaySlip=async()=>{
        setUploading(true)
        if(file){
          try {
          setUploading(true)
          const storageRef=ref(storage,"Payslips/"+file.name);
          await uploadBytes(storageRef,file)
          const url=await getDownloadURL(storageRef);
          console.log(MonthYear,url)
          if(url){
              try{
                  await axios.post(`https://backend-vev7.onrender.com/api/uploadPayslip/${props.id}`,{url,MonthYear}).then((res)=>{
                      if(res.status===200){
                          toast.success(res.data.message)
                          props.Open(false)
                      }
                  })
              }catch(err){
                  toast(err.message)
              }
          }
          } catch (error) {
              toast(error.message)
          }finally{
              setUploading(false)
          }
      }
      else{
          toast("select File")
      }
    }

    return(
        <>
        <div className=' flex justify-center items-center fixed  after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:-z-10 after:opacity-50 after:inset-0 isolate  top-0 left-0 text-white   w-screen h-screen'>
        <div className='bg-white text-black w-[30%] py-5 relative'>
        <h1 className='text-center text-xl font-[600]'>Upload Pay Slip</h1>
            <form action="" className='w-full px-7' onSubmit={(e)=>{e.preventDefault()}}>
                
               <div className=' mt-6 flex flex-col gap-4'>
               <div className='flex flex-col'>
                    <label htmlFor="">Enter Month(MM YYYY)</label>
                    <input type="text" value={MonthYear} onChange={(e)=>setMonth(e.target.value)} name="month" placeholder='Enter Month' className='border-2 px-5 py-2'/>
                </div>
                <div>
                    <input type="file" id="hh" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className="flex justify-around text-white">
                <button onClick={UploadPaySlip} type='submit' className="bg-[var(--btn2)] w-[50%] py-2 hover:border-[1px] hover:border-[var(--btn2)] hover:bg-white hover:text-[var(--btn2)]">{uploading ? "uploading..." : "Upload"}</button>
                <button onClick={()=>{props.Open((prev)=>!prev)}} type='submit' className="bg-red-400 w-[50%] py-2 hover:border-[1px] hover:border-red-400 hover:bg-white hover:text-red-400 ">Cancel</button>
                </div>
               </div>
               
            </form>
            
            <button onClick={()=>{props.Open((prev)=>!prev)}} className=" absolute top-0 right-0 w-8 h-8 bg-[var(--btn2)] text-white flex justify-center items-center border-2"><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
        </>
    )
}


export const ProfileForm=(props)=>{
    const[EmpData,setEmpData]=useState({name:"",email:"",mobile:"",role:""})
    const handelEdit=(e)=>{
        const {name,value}=e.target
        setEmpData({...EmpData,[name]:value})
       
    }

    return(
        <>
        <div className=' flex justify-center items-center fixed  after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:-z-10 after:opacity-50 after:inset-0 isolate  top-0 left-0 text-white   w-screen h-screen'>
        <div className='bg-white text-black w-[30%] py-5 relative'>
        <h1 className='text-center text-xl font-[600]'>Edit Employee Details</h1>
            <form action="" className='w-full px-7' onSubmit={(e)=>{e.preventDefault()}}>
               <div className=' mt-6 flex flex-col gap-4'>
                <div className="space-y-3">
                    <input type="text" name="name" value={EmpData.name} onChange={handelEdit} className="w-full border-2 py-1 px-3"/>
                    <input type="text" name="email" value={EmpData.email} onChange={handelEdit} className="w-full border-2 py-1 px-3"/>
                    <input type="text" name="mobile" value={EmpData.mobile} onChange={handelEdit} className="w-full border-2 py-1 px-3"/>
                    <select
                            name="role"
                            className="w-full border-2 py-1 px-3"
                            value={EmpData.role}
                            onChange={handelEdit}
                        >
                            <option value="">Select Role</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                        </select>
                </div>
                <div className="flex justify-around text-white">
                <button onClick={()=>console.log(EmpData)} type='submit' className="bg-[var(--btn2)] w-[50%] py-2 hover:border-[1px] hover:border-[var(--btn2)] hover:bg-white hover:text-[var(--btn2)]">Edit</button>
                <button onClick={()=>{props.Open((prev)=>!prev)}} type='submit' className="bg-red-400 w-[50%] py-2 hover:border-[1px] hover:border-red-400 hover:bg-white hover:text-red-400 ">Cancel</button>
                </div>
               </div>
               
            </form>
            
            <button onClick={()=>{props.Open((prev)=>!prev)}} className=" absolute top-0 right-0 w-8 h-8 bg-[var(--btn2)] text-white flex justify-center items-center border-2"><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
        </>
    )
}


export const DeleteConfirm=(props)=>{


    return(
        <>
         <div className=' flex justify-center items-center fixed  after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:-z-10 after:opacity-50 after:inset-0 isolate  top-0 left-0 text-white   w-screen h-screen'>
         <div className='bg-white text-black w-[30%] py-5 relative'>
        <h1 className='text-center text-xl font-[600]'>{props.name ? props.name : "Delete Confirm?"}</h1>
            <form action="" className='w-full px-7' onSubmit={(e)=>{e.preventDefault()}}>
               <div className=' mt-6 flex flex-col gap-4'>
                <div className="flex justify-around text-white">
                <button onClick={props.apiCall}  type='submit' className="bg-[var(--btn2)] w-[50%] py-2 hover:border-[1px] hover:border-[var(--btn2)] hover:bg-white hover:text-[var(--btn2)]">{props.loading ? "Sending..." : "Confirm"}</button>
                <button onClick={()=>{props.Open((prev)=>!prev)}} type='submit' className="bg-red-400 w-[50%] py-2 hover:border-[1px] hover:border-red-400 hover:bg-white hover:text-red-400 ">Cancel</button>
                </div>
               </div>
            </form>
            
            <button onClick={()=>{props.Open((prev)=>!prev)}} className=" absolute top-0 right-0 w-8 h-8 bg-[var(--btn2)] text-white flex justify-center items-center border-2"><i className="fa-solid fa-plus"></i></button>
        </div>
         </div>
        </>
    )
}
export const DeleteConfirm2=(props)=>{


    return(
        <>
         <div className=' flex justify-center items-center fixed  after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:-z-10 after:opacity-50 after:inset-0 isolate  top-0 left-0 text-white   w-screen h-screen'>
         <div className='bg-white text-black w-[30%] py-5 relative'>
        <h1 className='text-center text-xl font-[600]'>{props.name ? props.name : "Delete Confirm?"}</h1>
            <form action="" className='w-full px-7' onSubmit={(e)=>{e.preventDefault()}}>
               <div className=' mt-6 flex flex-col gap-4'>
                <div className="flex justify-around text-white">
                <button onClick={()=>props.apiCall(props.name ? props.name : props.id)}  type='submit' className="bg-[var(--btn2)] w-[50%] py-2 hover:border-[1px] hover:border-[var(--btn2)] hover:bg-white hover:text-[var(--btn2)]">Confirm</button>
                <button onClick={()=>{props.Open((prev)=>!prev)}} type='submit' className="bg-red-400 w-[50%] py-2 hover:border-[1px] hover:border-red-400 hover:bg-white hover:text-red-400 ">Cancel</button>
                </div>
               </div>
            </form>
            
            <button onClick={()=>{props.Open((prev)=>!prev)}} className=" absolute top-0 right-0 w-8 h-8 bg-[var(--btn2)] text-white flex justify-center items-center border-2"><i className="fa-solid fa-plus"></i></button>
        </div>
         </div>
        </>
    )
}
export const UploadOfferLetter=(props)=>{


    return(
        <>
         <div className=' flex justify-center items-center fixed  after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:-z-10 after:opacity-50 after:inset-0 isolate  top-0 left-0 text-white   w-screen h-screen'>
         <div className='bg-white text-black w-[30%] py-5 relative'>
        <h1 className='text-center text-xl font-[600]'>{props.name ? props.name : "Delete Confirm?"}</h1>
            <form action="" className='w-full px-7' onSubmit={(e)=>{e.preventDefault()}}>
               <div className=' mt-6 flex flex-col gap-4'>
                <div className="flex justify-around text-white">
                <button onClick={()=>props.apiCall(props.name)}  type='submit' className="bg-[var(--btn2)] w-[50%] py-2 hover:border-[1px] hover:border-[var(--btn2)] hover:bg-white hover:text-[var(--btn2)]">Confirm</button>
                <button onClick={()=>{props.Open((prev)=>!prev)}} type='submit' className="bg-red-400 w-[50%] py-2 hover:border-[1px] hover:border-red-400 hover:bg-white hover:text-red-400 ">Cancel</button>
                </div>
               </div>
            </form>
            
            <button onClick={()=>{props.Open((prev)=>!prev)}} className=" absolute top-0 right-0 w-8 h-8 bg-[var(--btn2)] text-white flex justify-center items-center border-2"><i className="fa-solid fa-plus"></i></button>
        </div>
         </div>
        </>
    )
}

export const  LtterShow=(props)=>{

    return(
        <>
            <div className=' flex justify-center items-center fixed  after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:-z-10 after:opacity-50 after:inset-0 isolate  top-0 left-0 text-white   w-screen h-screen'>
        <div className='bg-white text-black w-[40%] py-5 relative'>
        <h1 className='text-center text-xl font-[600]'>Request</h1>
            <form action="" className='w-full px-7' onSubmit={(e)=>{e.preventDefault()}}>
            <div>
               <Letter data={props.data}/>
                <div className="flex justify-around text-white">
                
                <button onClick={()=>{props.Open((prev)=>!prev)}} type='submit' className="bg-red-400 w-[50%] py-2 hover:border-[1px] hover:border-red-400 hover:bg-white hover:text-red-400 ">Ok</button>
                </div>
               </div>
               
            </form>
            
            <button onClick={()=>{props.Open((prev)=>!prev)}} className=" absolute top-0 right-0 w-8 h-8 bg-[var(--btn2)] text-white flex justify-center items-center border-2"><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
        </>
    )
}