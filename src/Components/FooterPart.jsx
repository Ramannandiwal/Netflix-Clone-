import React from 'react'

function FooterPart({link1,link2,link3,link4}) {
  return (
    <div style={{color:"rgba(255,255,255,0.7)"}} className=' flex underline space-y-3 justify-center flex-col bg-black border border-black w-1/6 h-full' >
        <a href="#">{link1}</a>
        <a href="#">{link2}</a>
        <a href="#">{link3}</a>
        <a href="#">{link4}</a>
    </div>
  )
}

export default FooterPart