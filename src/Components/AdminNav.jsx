import React from 'react'
import logo from "../Assests/Logo_W.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import { logout } from '../Store';
axios.defaults.withCredentials = true;

function AdminNav() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.get("https://backend-vev7.onrender.com/auth/logout", {
            withCredentials: true
        }).then((res) => {
            if (res.status === 200) {
                toast.success(res.data.message);
                dispatch(logout());
                navigate("/login", { replace: true });
            }
        })
    }

    return (
        <>
            <div className='h-screen fixed w-64 bg-[var(--body)] flex items-center flex-col'>
                <div className='w-24 h-24 mt-12'>
                    <h1>Nandini</h1>
                </div>
                <div className='flex flex-col w-full mt-10 h-full justify-between'>
                    <div className='flex flex-col w-full mt-10'>
                        {/* Update to highlight Dashboard when path is /admin or /admin/posts */}
                        <Link 
                          to="/admin" 
                          className={`py-5 px-7 text-white text-xl font-bold ${location.pathname === "/admin" || location.pathname.startsWith("/admin/posts") ? 'bg-[var(--btn2)]' : ''} hover:bg-[var(--btn2)] hover:text-xl hover:text-white hover:font-bold`}
                        >
                            Dashboard
                        </Link>

                        <Link 
                          to="/admin/employees" 
                          className={`py-5 px-7 text-white text-xl font-bold ${location.pathname.startsWith("/admin/employees") ? 'bg-[var(--btn2)]' : ''} hover:bg-[var(--btn2)] hover:text-xl hover:text-white hover:font-bold`}
                        >
                            Employees
                        </Link>
                    </div>

                    <button 
                      onClick={handleLogout} 
                      className='border-t-2 py-7 text-2xl text-white text-start pl-7 flex items-center font-bold gap-3'>
                        Logout <i className="fa-solid fa-right-from-bracket text-white"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminNav;
