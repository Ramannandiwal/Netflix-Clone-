import React from 'react'

function Heading() {
    let str = " >";
  return (
    
        <div className=' my-36 flex flex-col items-center w-3/4 h-1/2   mx-auto   text-white'>
        
        <h1 className=' lg:text-5xl font-bold  sm:text-4xl'>Unlimited movies, TV shows and more</h1>
 <h3 className=' mb-8 my-10 lg:text-3xl sm:text-xl'>Watch anywhere. Cancel anytime.</h3>
 <h4 className=' mb-10 lg:text-xl sm:text-xs'>Ready to watch? Enter your email to create or restart your membership.</h4>
<div className=' flex justify-center w-full mx-auto  mb-36 sm:flex-col sm:items-center lg:flex-row'>
<input className=' placeholder:px-4 bg-transparent text-gray-600 font-bold border h-14 w-2/5' type="text" placeholder='Email Address' />
 <button className=' text-xl font-bold border border-red-500 rounded-md bg-red-500 h-14 w-36 mx-5'>Get Started  {str}</button>
</div>
    </div>
    
  )
}

export default Heading