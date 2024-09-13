import React, { useEffect, useState } from 'react'
import Req from '../Components/Req'
import Holi from '../Components/Holi';
import axios from "axios"
import { useSelector } from 'react-redux';
axios.defaults.withCredentials=true
function Dash() {
  const[requestList,setReqList]=useState([])
  const [loading, setLoading] = useState(true);
  const user=useSelector((state)=>state.user.user)
  function getFileNameFromUrl(url) {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname;
    const fileNameWithQuery = path.split('/').pop();
    const fileName = fileNameWithQuery.split('?')[0];
    return decodeURIComponent(fileName);
  }
  const handleDownload = async (fileUrl) => {
    try {
      const response = await axios.get(fileUrl, {
        responseType: 'blob' 
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'nandini_resume.pdf'); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
    }
  };
  useEffect(()=>{
    const getReq=async()=>{
      try {
        await axios.get("https://backend-vev7.onrender.com/post/emp/posts",{
          withCredentials:true
        }).then((res)=>{
          setReqList(res.data)
          setLoading(false)
        })
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }
    getReq()
  })
  return (
    <div className='w-full h-[91vh] overflow-y-auto flex px-5 py-3'>
      <div className="w-[60%] ">
      <div className='border-2 rounded-xl  h-[84vh] overflow-y-auto'>
          <h1 className=' flex items-center justify-center h-24 text-3xl font-[600] sticky top-0 bg-[var(--body)] text-white border-b-2'>Requests History</h1>
           <div className='px-5 py-2'>
           {
              loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="loader">Loading...</div>  
                </div>
              ) : requestList.length !== 0 ? (
                requestList.map((item, i) => {
                  return <Req key={i} status={item} />
                })
              ) : (
                <p className='text-center text-2xl mt-20'>No Records Found</p>
              )
            }
           </div>
            
            
        </div>
       
      </div>
      <div className="w-[40%] pl-5">
        <div className='border-2 px-5 py-2 rounded-md h-36'>
          <h1 className='text-center font-[600] text-3xl py-2 mb-2'>Offer letter</h1>
          <div className='flex justify-center gap-5'>
          {user.offerletter && user.offerletter.length > 0 ? (
              <a
                href={user.offerletter[0].Offerurl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white bg-[var(--body)] w-[150px] flex justify-center items-center h-12 font-[600] rounded-lg hover:bg-[var(--btn2)]'
              >
                <i className="fa-solid fa-eye"></i> View
              </a>
            ) : (
              <p className='text-center text-xl'>No Offer Letter Available</p>
            )}
          </div>
        </div>
        <Holi/>
      </div>
    </div>
  )
}

export default Dash