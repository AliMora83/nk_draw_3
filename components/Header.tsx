/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className=''>
        <div>
            <img 
            className='h-20 w-20 rounded-full'
            src="/favicon.ico" alt="icon" />
        </div>
    </div>
  )
}

export default Header