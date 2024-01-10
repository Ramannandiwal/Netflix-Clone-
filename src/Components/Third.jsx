import React from 'react'

function Third() {
  return (
    <div className=' bg-black flex ' style={{height:"35rem",borderBottom:"10px solid rgba(35,35,35,1)"}}>
       <div className=' flex  w-11/12 mx-auto'>
       <div className=' relative'>
            <img height="600px" width="800px" src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
            <div style={{left:"6rem"}} className=' bg-black flex border items-center justify-around  absolute bottom-32 w-4/6 h-32 rounded-lg'>
                <img className=' w-24 h-20' src="src/assets/boxshot.png" alt="" />
              <div>
              <h3 className='text-xl text-white'>Stranger Things
                    
 </h3> <h3 className=' text-blue-700 text-xl'>Downloading...</h3>
              </div>
<img className=' w-8 h-16' src="src/assets/download-icon.gif" alt="" />
            </div>
        </div>
        <div className=' h-full  '>
           <div className='   h-2/3 mt-28'>
           <h2 className='  text-6xl text-white font-bold'>Download your shows to watch offline</h2>
            <h3 className=' my-4 w-3/4 text-4xl text-white'>Save your favourites easily and always have something to watch.</h3>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Third