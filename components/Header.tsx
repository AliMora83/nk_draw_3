/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NavButton from './NavButton'


function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-5 m-5 mx-10'>
        <div className='flex space-x-2 items-center'>
            <img 
            className='h-20 w-20 rounded-full'
            src="/favicon.ico" alt="icon" />
            <div>
        <h1 className='text-white text-base font-bold uppercase'>
          NAMKA Crypto Draw</h1>
        <p className='text-xs truncate text-[#caa969]'>User:87878...878787
        <p className='font-bold'>
                  Balance
                </p>
        </p>
      </div>
        </div>
        <div>
          <div>
            <NavButton title={'LogOut'} />
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
    </header>
  )
}

export default Header