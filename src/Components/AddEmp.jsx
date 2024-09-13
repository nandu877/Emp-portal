import React, { useState } from 'react';
import axios from "axios"
import { toast } from 'react-toastify';
function AddEmp() {
    const [empDetails, setEmp] = useState({
        empname: "",
        empid: "",
        emprole: "",
        email: "",
        mobile: "",
        joindate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmp(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit =async(e) => {
        e.preventDefault();
      try{
        const res=await  axios.post("https://backend-vev7.onrender.com/api/addemployee",empDetails).then((res)=>{
            if(res.status===200){
                toast(res.data.message)
                setEmp({
                    empname: "",
                    empid: "",
                    emprole: "",
                    email: "",
                    mobile: "",
                    joindate: ""
                });
            }else{
                toast(res.data.message)
            }
       })
      }catch(err){
        alert(err.message)
      }


       

    };

    return (
        <div className='w-full h-screen overflow-y-auto flex flex-col'>
            <h1 className='text-xl font-[500] bg-[var(--btn2)] py-5 px-7 text-white mb-5'>Add Employee</h1>
            <div className='mx-auto my-2 w-[50%]'>
                <form onSubmit={handleSubmit} className='flex flex-col px-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="empname" className='font-[500]'>Employee Name</label>
                        <input
                            type="text"
                            name="empname"
                            placeholder='Enter Employee Name'
                            className='border-2 py-2 px-5'
                            value={empDetails.empname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="empid" className='font-[500]'>Employee Id</label>
                        <input
                            type="text"
                            name="empid"
                            placeholder='Enter Employee Id'
                            className='border-2 py-2 px-5'
                            value={empDetails.empid}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="emprole" className='font-[500]'>Employee Role</label>
                        <select
                            name="emprole"
                            id="emprole"
                            className='border-2 py-2 px-5'
                            value={empDetails.emprole}
                            onChange={handleChange}
                        >
                            <option value="">Select Role</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-[500]'>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder='Enter Email'
                            className='border-2 py-2 px-5'
                            value={empDetails.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="mobile" className='font-[500]'>Mobile No</label>
                        <input
                            type="number"
                            name="mobile"
                            placeholder='Enter Mobile Number'
                            className='border-2 py-2 px-5'
                            value={empDetails.mobile}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="joindate" className='font-[500]'>Join Date</label>
                        <input
                            type="date"
                            name="joindate"
                            className='border-2 py-2 px-5'
                            value={empDetails.joindate}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className='bg-[var(--btn2)] mt-2 py-2 font-[600] text-white'>Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddEmp;
