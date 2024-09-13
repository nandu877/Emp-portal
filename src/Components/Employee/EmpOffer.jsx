import React, { useEffect, useState } from 'react'
import { DeleteConfirm } from '../Forms'
import { firestore, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { toast } from 'react-toastify';
import axios from 'axios';

function EmpOffer({id,data}) {
    const[offerLetter,setOffer]=useState(null)
    const[DeleteCon,setDele]=useState(false)
    const [file, setFile] = useState(null);
    const[uploading,setUploading]=useState(false)
    function getFileNameFromUrl(url) {
        const parsedUrl = new URL(url);
        const path = parsedUrl.pathname;
        const fileNameWithQuery = path.split('/').pop();
        const fileName = fileNameWithQuery.split('?')[0];
        return decodeURIComponent(fileName);
      }
    const uploadOffer=async()=>{
        if(file){
            try {
            setUploading(true)
            const storageRef=ref(storage,"offerLetters/"+file.name);
            await uploadBytes(storageRef,file)
            const url=await getDownloadURL(storageRef);
            if(url){
                try{
                    await axios.post(`https://backend-vev7.onrender.com/api/uploadOffer/${id}`,{url}).then((res)=>{
                        if(res.status===200){
                            toast.success(res.data.message)
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
  return (
   <>
   <div className='mt-4'>
    {
         data && data[0] && data[0].Offerurl ?
        <div className='flex justify-between pr-20'>
        <p>{getFileNameFromUrl(data[0].Offerurl).split("/")[1]}</p>
        <div className='flex gap-8 text-xl'>
            <button onClick={()=>setDele((p)=>!p)}><i class="fa-solid fa-trash text-red-500"></i></button>
            <button><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
    </div>
    :
    <div>
    <h2 className='mb-3 font-[500]'>Upload Offer Letter</h2>
    <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
    <button onClick={uploadOffer} className='px-7 py-2 bg-[var(--btn2)] text-white font-semibold'>{uploading ? "uploading..." : "Upload"}</button>
    </div>

    }
   {
    DeleteCon && <DeleteConfirm Open={setDele}/>
   }
   </div>
   </>
  )
}

export default EmpOffer