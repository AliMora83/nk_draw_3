/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className='bg-gradient-to-tl from-[#080A0B] to-[#1a1a1a] h-screen flex flex-col items-center justify-center'>
    <div className='items-center mb-10'>
      <img className='h-32 w-32 mb-10 items-center justify-center' 
      src="favicon.ico" 
      alt="namka" />
      <h4 className=''>Loading NAMKA Draw</h4>
    </div>
    <PropagateLoader color="#caa969" size={15}/>
  </div>
  )
}

export default Loading