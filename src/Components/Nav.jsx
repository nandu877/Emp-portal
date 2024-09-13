import React from 'react';
import logo from '../Assests/Logo_W.png';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { logout } from '../Store';
axios.defaults.withCredentials=true
function Nav() {
  const location = useLocation();
  const dispatch =useDispatch()
  
  const handleLogout=async()=>{
      await axios.get("https://backend-vev7.onrender.com/auth/logout",{
        withCredentials:true
      }).then((res)=>{
        if(res.status===200){
          toast.success(res.data.message)
          dispatch(logout())
        }
      })
  }
  return (
    <>
      <div className=' w-[18%] h-screen space-y-4 flex flex-col justify-between bg-[var(--body)] fixed'>
       <div>
       <div className='flex items-center justify-center h-36 gap-2'>
          <div className='w-12 h-12'>
            
          </div>
          <h1 className='text-2xl text-white font-bold space-x-3 tracking-widest'>Nandini</h1>
        </div>
        <div className=' flex flex-col'>
          <Link to="/Dashboard" className={`  py-4 font-[500] pl-7 text-xl text-white hover:bg-[#0097cd] hover:text-white ${location.pathname==="/Dashboard" && 'text-white bg-[#0097cd] font-extrabold'} `}>
              Dashboard
          </Link>
          <Link to="/Dashboard/request" className={`  py-4 font-[500] pl-7 text-xl text-white hover:bg-[#0097cd] hover:text-white  ${location.pathname.startsWith("/Dashboard/request" ) && 'text-white bg-[#0097cd] font-extrabold'} `}>
              Request
          </Link>
          <Link to="/Dashboard/Timesheet" className={`  py-4 font-[500] pl-7 text-xl text-white hover:bg-[#0097cd] hover:text-white  ${location.pathname.startsWith("/Dashboard/Timesheet") && 'text-white bg-[#0097cd] font-extrabold'} `}>
            TimeSheet
          </Link>
          <Link to="/Dashboard/Payslips" className={`  py-4 font-[500] pl-7 text-xl text-white hover:bg-[#0097cd] hover:text-white ${location.pathname==="/Dashboard/Payslips" && 'text-white bg-[#0097cd] font-extrabold'} `}>
              Pay Slips
          </Link>
          <Link to="/Dashboard/Profile" className={`  py-4 font-[500] pl-7 text-xl text-white hover:bg-[#0097cd] hover:text-white ${location.pathname==="/Dashboard/Profile" && 'text-white bg-[#0097cd] font-extrabold'} `}>
              Profile
          </Link>
        </div>
       </div>
        <button onClick={handleLogout} className=' border-t-2 py-7 text-2xl text-white text-start pl-7 flex items-center font-bold gap-3'>Logout <i className="fa-solid fa-right-from-bracket text-white"></i></button>
      </div>
    </>
  );
}

export default Nav;
