import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import EmpDetails from './Employee/EmpDetails'
import EmpOffer from './Employee/EmpOffer'
import EmpPaySlips from './Employee/EmpPaySlips'
import EmpReq from './Employee/EmpReq'
import { DeleteConfirm2 } from './Forms'

function Employee() {
    const{id}=useParams()
    const navigate=useNavigate()
    const[detailsOpen,setDetails]=useState(false)
    const[deleteOpen,setDelete]=useState(false)
    const[OfferOpen,setOffer]=useState(false)
    const[TimesheetOpen,setTime]=useState(false)
    const[PayslipsOpen,setPay]=useState(false)
    const[RequestOpen,setRequest]=useState(false)
    const [employeeData, setEmployeeData] = useState(null);
    useEffect(() => {
      const fetchEmployeeData = async () => {
        try {
          const res = await axios.get(`https://backend-vev7.onrender.com/api/getEmployee/${id}`);
          setEmployeeData(res.data);
        } catch (error) {
          toast.error('Error fetching employee data');
          console.error(error);
        }
      };
  
      fetchEmployeeData();
    }, [id]);
    if (!employeeData) {
      return <div>Loading employee data...</div>;
    }
    const deleteEmp=async(id)=>{
        await axios.delete(`https://backend-vev7.onrender.com/api/delete/${id}`).then((res)=>{
            toast.success(res.data.message)
        })
        navigate("/admin/employees",{replace:true})
    }
    console.log(employeeData)
  return (
    <>
       <div className='pb-10 h-screen overflow-y-auto'>
       <div className=' h-14 flex justify-end pr-16 items-center text-xl sticky top-0 bg-white'>
          <h1 className='font-bold'>{employeeData.name}({employeeData.empid})</h1>
        </div>
        <div className=' px-3 mt-8 space-y-3'>
          <div  className={`border-[1px]  px-5 py-5 ${detailsOpen && 'border-[var(--btn2)] border-2'}`} >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${detailsOpen && 'text-[var(--btn2)]'}`} onClick={()=>setDetails((prev)=>!prev)}>Details <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {detailsOpen && <EmpDetails data={employeeData}/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${OfferOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${OfferOpen && 'text-[var(--btn2)]'}`} onClick={()=>setOffer((prev)=>!prev)}>Offer Letter <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {OfferOpen && <EmpOffer id={employeeData._id} data={employeeData.offerletter}/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${TimesheetOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${TimesheetOpen && 'text-[var(--btn2)]'}`} onClick={()=>setTime((prev)=>!prev)}>Time Sheets <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {TimesheetOpen && <EmpOffer/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${PayslipsOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${PayslipsOpen && 'text-[var(--btn2)]'}`} onClick={()=>setPay((prev)=>!prev)}>Pay Slips <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {PayslipsOpen && <EmpPaySlips id={employeeData._id} data={employeeData.payslip}/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${RequestOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${RequestOpen && 'text-[var(--btn2)]'}`} onClick={()=>setRequest((prev)=>!prev)}>Requests <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {RequestOpen && <EmpReq data={employeeData.post}/>}
          </div>
         
        </div>
        <button className='ml-3 px-8 py-2 bg-red-500 mt-7 text-white' onClick={()=>setDelete(true)}>Delete</button>
       </div>
       {
        deleteOpen && <DeleteConfirm2 id={id} apiCall={deleteEmp} Open={setDelete}/>
       }
    </>

  )
}

export default Employee