import React from 'react';
import Navbar from './Navbar';
import Heading from './Heading';

function Homesection() {
  return (
    <div className='w-screen h-screen border bg-cover  border-black' style={{ background: "url('	https://assets.nflxext.com/ffe/siteui/vlv3/b8dd515…trifectadaily-perspective_alpha_website_large.jpg')"}}>
        <div className=' w-full h-full' style={{background:"rgba(0,0,0,0.7)"}}>  
                   <Navbar/>
                   <Heading/>
</div>
    
    </div>
  );
}

export default Homesection;
