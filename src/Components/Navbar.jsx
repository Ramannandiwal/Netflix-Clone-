import React from 'react'
import logo from '../assets/Netflix.svg'

function Navbar() {
  return (
    <div className=' bg-transparent  flex flex-row items-center justify-between w-3/4 mx-auto h-24'>
       
            <img className=' h-40 w-40' src={logo} alt="" />
       
        <div >
            <select className=' border text-center items-center px-1  h-7 w-28 mx-8 bg-transparent  text-white' name="" id="">
                <option value="">English</option>
                <option value="">Hindi</option>
            </select>
            <button className=' border border-red-600 bg-red-600 text-white h-8  rounded w-24'>Sign in </button>
        </div>
    </div>
  )
}

export default Navbar