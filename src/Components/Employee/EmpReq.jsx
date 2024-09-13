import React from 'react'
import Req from "../Req"
function EmpReq({data}) {
  return (
    <>
    <div> 
    {data && data.length > 0 ? (
        data.map((item, i) => <Req key={i} status={item} />)
      ) : (
        <p className='text-center mt-5'>No Data</p>
      )}
        
    </div>
    
    </>
  )
}

export default EmpReq