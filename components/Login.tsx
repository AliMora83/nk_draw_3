/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useMetamask  } from "@thirdweb-dev/react";

function Login() {
    const connectWithMetamask = useMetamask();

  return (
    <div className='bg-gradient-to-r from-[#080A0B] via-[#2C2B2B] to-[#080A0B]  min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
        <img className='rounded-full h-40 w-40 mb-10'
         src="favicon.ico" alt="nk icon" />

            <h3 className='animate-pulse'>NAMKA CRYPTO DRAW</h3>
            <p className='text-[#caa969] tracking-wider'>Log in to start</p>
            <button onClick={connectWithMetamask}
             className='border-[#caa969] border bg-[#080A0B] px-8 py-5 mt-10 rounded-lg shadow-xl text-sm text-[#caa969] font-bold'>
                Connect MetaMask</button>
            </div>
    </div>
  )
}

export default Login
