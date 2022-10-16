import React from 'react'
interface Props {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

function NavButton( { title, isActive, onClick }: Props ) {
  return (
    <button onClick={onClick}
     className="bg-[#2c2b2b] hover:bg-[#080a0b] hover:scale-110 ease-in-out duration-300 text-white py-2 px-4 rounded font-bold">
      {title}
    </button>
  )
}

export default NavButton
