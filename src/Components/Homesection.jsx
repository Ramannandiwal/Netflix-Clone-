import React from 'react';
import Navbar from './Navbar';
import Heading from './Heading';

function Homesection() {
  return (
    <div className='w-screen h-screen border bg-cover  border-black' style={{ background: "url('src/assets/MainBanner.jpg')"}}>
        <div className=' w-full h-full' style={{background:"rgba(0,0,0,0.7)"}}>  
                   <Navbar/>
                   <Heading/>
</div>
    
    </div>
  );
}

export default Homesection;
