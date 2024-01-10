import React from 'react'

function SecondPart() {
  return (
    <div style={{borderTop:"10px solid rgba(35,35,35,1)",height:"35rem",borderBottom:"10px solid rgba(35,35,35,1)"}} className='flex w-full  bg-black '>

        <div className='flex items-center flex-col justify-center'>
            <h1 className=' w-2/3 text-6xl mb-5 font-bold text-white'>Enjoy on your TV</h1>
             <h3 className=' w-2/3 text-2xl text-white font-bold '>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
        </div>
        <div className=' mx-10 relative'>
        <video className=' absolute  top-24 left-28' width="300px" height="200px" autoPlay  loop>
  <source src="src/assets/video-tv-in-0819.mp4" type="video/mp4"/>


</video>
        <img style={{height:"400px",width:"700px"}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        </div>
    </div>
  )
}

export default SecondPart