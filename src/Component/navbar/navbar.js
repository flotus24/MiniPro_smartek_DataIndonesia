import React from "react";
import Logo from '../Assets/Logo 1.png'
import Light from '../Assets/Light.png'
import Search from '../Assets/Search.png'
import Dropdown from '../Assets/Dropdown.png' 

const Navbar = () => {
    return (
        <nav className="w-full bg-white py-2.5 z-20 top-0 left-0">
            <div class=" w-full px-20 flex flex-wrap justify-between items-center mx-auto ">
                <a class="flex justify-self-start items-center">
                    <img src={Light} class="mr-3 " alt="Light" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap">EN</span>
                    <img src={Dropdown} alt="Dropdown" className="md:cursor-pointer ml-3" />
                </a>
                <div class="flex md:order-2">
                    <div class="flex items-center relative">
                        <div class="flex mr-3 items-center">
                            <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                                <img src={Search} alt="search" className="md:cursor-pointer" />
                            </div>
                            <div className=" sm:block flex-shrink flex-grow-0 justify-start px-2">
                                <div class="inline-block relative mx-auto text-gray-600">
                                    <button class="text-red font-bold py-2 px-4 rounded border-2 border-red"> 
                                        Subscribe
                                    </button> 
                                </div>
                            </div>
                            <button class="text-white font-bold py-2 px-4 rounded bg-gradient-to-b from-orange1 to-orange2"> 
                                Login
                            </button>  
                        </div>
                    </div>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <img src={Logo} alt="logo" className=" md:cursor-pointer justify-items-start" />
                </div>
            </div>
        </nav>
    )
}
export default Navbar;