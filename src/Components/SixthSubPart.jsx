import React, { useState } from 'react'

function SixthSubPart({Heading,para}) {
   
    function handledata(){
        {
          
            if(data===false){
                setdata(true);
            }else{
                setdata(false);
            }
           }
    }
    const [data, setdata] = useState(false)

  return (
    <>
      <div className=' flex items-center justify-between text-3xl w-4/5 my-2 text-white' style={{background:"rgba(35,35,35,1)"}}>
        <h1 className=' mx-5 py-8'>{Heading}</h1>
      <button onClick={()=>{handledata()}} className=' mx-5'>+</button>

    </div>
      <div style={{background:"rgba(35,35,35,1)",transition:"all 2s ease-out"}} className=' text-xl font-bold px-4  w-4/5 text-white my-2'>
      <div className=' h-full w-11/12'>
    
      {
      data?para:""
    }
      </div>
  </div></>
  
  )
}

export default SixthSubPart