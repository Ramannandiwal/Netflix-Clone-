import React from 'react'
import FooterPart from './FooterPart'

function Footer() {
  return (
    <div style={{height:"25rem"}} className=' flex items-center justify-around space-x-2 bg-black h-full text-white'>
       <div className='  w-4/5 flex justify-around h-2/3'>
       <FooterPart link1="Questions? Call 000-800-919-1694" link2="FAQ" link3="Investor Relations" link4="Privacy"/>
        <FooterPart link1="Help Centre" link2="Job" link3="Cookie Prefernce " link4="Lega Notice"/>
        <FooterPart link1="Account" link2="Ways to Watch" link3="Corporate Information" link4="Only on Netflix"/>
        <FooterPart link1="Media Center" link2="Term of Use" link3="Contact us" link4=""/>
       </div>
    </div>
  )
}

export default Footer