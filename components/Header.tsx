/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NavButton from './NavButton'
import { useAddress, useDisconnect, useBalance, } from "@thirdweb-dev/react";




function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();
  const balance = useBalance();
  console.log(`here is your balance ${balance.data?.displayValue}`);
  const displayBalance = balance.data?.displayValue;

  return (
    <header className='grid grid-cols-2 md:grid-cols-5 m-5 mx-10 justify-between items-center'>
        <div className='flex space-x-2 items-center'>
            <img 
            className='h-20 w-20 rounded-full'
            src="/favicon.ico" alt="icon" />
            <div>
        <h1 className='text-white text-base font-bold uppercase'>
          NAMKA Crypto Draw</h1>
          <p className='text-xs truncate text-[#caa969]'>User: {address?.substring(0,5)}...{address?.substring(address.length, address.length - 5)}
        <p className='font-bold'>
                  {displayBalance?.substring(0, 5)}
                  {" "} Matic
                </p>
        </p>
      </div>
        </div>
        <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
          <div className='space-x-2 p-1 rounded-lg text-sm'>
            <NavButton onClick={disconnect} title="LogOut"/>
          </div>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">           
            <a href="">
            <button className="nav-button">
              Info
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button></a> 
             </nav>
             <div className='flex flex-col ml-auto text-right'>
                   <span className='md:hidden'><NavButton onClick={disconnect} title="Log Out"/></span> 

            </div>
    </header>
  )
}

export default Header