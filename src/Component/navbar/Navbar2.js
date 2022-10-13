import React from 'react'
import Home from '../Assets/Home.png'
import Union from '../Assets/Union.png'
 

const Navbar2 = () => {
  return (
    <nav className='bg-red w-full flex relative justify-between items-center px-24 h-20'>
        <div className="hidden justify-center flex-end w-full md:block md:w-auto" id="navbar-default">
           
        </div>
        <div className="hidden justify-center flex-end w-full md:block md:w-auto" id="navbar-default">
            <ul className='flex md:order-2 flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white'>
                <li className='px-4'>
                    <img src={Home} alt='Home' />
                </li>
                <li className='px-4'>
                    <a href='#'> Market & money </a>
                </li>
                <li className='px-4'>
                    <a href='#'> Industry</a>
                </li>
                <li className='px-4'>
                    <a href='#'>Digital</a>
                </li>
                <li className='px-4'>
                    <a href='#'>People</a>
                </li>
                <li className='px-4'>
                    <a href='#'>Policy & Regulation</a>
                </li>
                <li className='px-4'>
                    <a href='#'>Archive</a>
                </li>
                <li className='px-4'>
                    <a href='#'>Index</a>
                </li>
            </ul>
        </div>
        <div className="items-center font-small justify-start inline-flex">
            <div>
                <img src={Union} alt='Union' />
            </div>
            <ul>
                <li>
                    <p className='ml-6 text-base font-semibold text-white'>Sunday, 23 Aug 2021</p>
                </li>
                <li>
                    <p className='ml-6 text-white'>Jakarta ⚬ 27°C</p>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar2