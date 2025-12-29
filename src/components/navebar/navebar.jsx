import React from 'react'
import Logo from './logo'
import Links from './Links'
import Social from './Social'
import Menu from './Menu'

const Navebar = () => {
  return (
    <div
      className='w-full z-100 fixed top-0 backdrop-blur-md bg-black/30 border-b-[0.5px] border-gray-500 flex justify-between lg:px-0 px-8 h-18 sm:py-5 items-center sm:justify-evenly'>
      <Logo />
      <Links />
      <Social />
      <Menu />

    </div>
  )
}

export default Navebar