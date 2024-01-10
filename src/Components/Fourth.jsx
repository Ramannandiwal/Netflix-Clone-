import React from 'react'

function Fourth() {
  return (
    <div className='flex bg-black' style={{height:"35rem",borderBottom:"10px solid rgba(35,35,35,1)"}}>

        <div className='  flex flex-col justify-center '>
      <div className='  w-3/4 mx-auto '>
      <h3 className=' my-8 font-bold text-5xl text-white'>Watch everywhere</h3>
       <h4 className=' text-3xl text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
      </div>
        </div>
        <div className=' mr-5 flex items-center'>
        <img style={{zIndex:"100"}} src="src/assets/maciphone.png" alt="" />
        <video style={{right:"29rem"}} height="400px" width="300px" className=' relative  bottom-20' autoPlay  loop>
  <source src="src/assets/video-devices-in.mp4" type="video/mp4"/>


</video>
        </div>
        
    </div>
  )
}

export default Fourth