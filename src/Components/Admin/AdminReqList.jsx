import React, { useEffect, useState } from 'react';
import AdminReqCon from './AdminReqCon';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

function AdminReqList() {
  const [status, setStatus] = useState("Pending");
  const [allPosts, setAllPosts] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await axios.get("https://backend-vev7.onrender.com/post/allposts");
        if (res.status === 200) {
          setAllPosts(res.data);
        }
      } catch (error) {
        return
      }
    };
    getAllPosts();
  }, []);

  
  const filteredPosts = allPosts.filter(post => post.status === status);

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full border-2 pl-1 py-2">
          <button
            className={`py-3 w-[32%] border-r-2 ${status === "Pending" && 'bg-[var(--btn2)]'}`}
            onClick={() => setStatus("Pending")}
          >
            Pending
          </button>
          <button
            className={`py-3 w-[34%] border-r-2 ${status === "Accepted" && 'bg-[var(--btn2)]'}`}
            onClick={() => {
              setStatus("Accepted")
              navigate("/admin",{replace:true})
            }}
            
          >
            Accept
          </button>
          <button
            className={`py-3 w-[32%] ${status === "Rejected" && 'bg-[var(--btn2)]'}`}
            onClick={() => {
              setStatus("Rejected")
              navigate("/admin",{replace:true})
            }}
          >
            Reject
          </button>
        </div>

        <div className="h-[65vh] overflow-y-auto px-2 pt-2">
          {
            filteredPosts.length > 0 ? (
              filteredPosts.map((item) => (
                <AdminReqCon key={item._id} data={item} />
              ))
            ) : (
              <p className='mt-20 text-center'>No posts found for {status} status.</p>
            )
          }
        </div>
      </div>
    </>
  );
}

export default AdminReqList;
