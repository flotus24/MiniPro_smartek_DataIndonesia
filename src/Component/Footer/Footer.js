import React from 'react'
import LogoWhite from '../Assets/LogoWhite.png'
import facebook from '../Assets/facebook.png'
import Linkedin from '../Assets/Linkedin.png'
import Instagram from '../Assets/Instagram.png'
import Youtube from '../Assets/Youtube.png'

const Footer = () => {
  return (
    <footer class="bg-black">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-white">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
                <span>
                    <img src={LogoWhite} alt="logo" className=" md:cursor-pointer justify-items-start" />
                </span>
                
                <br/>
                <br/>
                <br/>
                <p class="mt-4 max-w-xs text-md text-white font-semibold">
                Follow Us
                </p>

                <div class="mt-8 flex gap-6 text-white">
                    <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="facebook" className=" md:cursor-pointer justify-items-start" />
                    </a>

                    <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="linkedin" className=" md:cursor-pointer justify-items-start" />
                    </a>

                    <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="Instagram" className=" md:cursor-pointer justify-items-start" />
                    </a>

                    <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                        <img src={Youtube} alt="Youtube" className=" md:cursor-pointer justify-items-start" />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-24 sm:grid-cols-1 lg:col-span-2 lg:grid-cols-3">
                <div>
                <p className="font-md font-serif">Big Media</p>

                <nav class="mt-4 flex flex-col space-y-2 text-sm text-white">
                    <a class="hover:opacity-75" href=""> Bisnis.com </a>
                    <a class="hover:opacity-75" href=""> BisnisIndonesia.id </a>
                    <a class="hover:opacity-75" href=""> BisnisMuda.id </a>
                    <a class="hover:opacity-75" href=""> HypeAbis.id </a>
                    <a class="hover:opacity-75" href=""> Context.id </a>
                    <a class="hover:opacity-75" href=""> DataIndonesia.id </a>
                    <a class="hover:opacity-75" href=""> Solopos.id </a>
                    <a class="hover:opacity-75" href=""> Harianjogja.id </a>
                </nav>
                </div>

                <div>
                <p class="font-base font-serif">Kanal</p>

                <nav class="mt-4 flex flex-col space-y-2 text-sm text-white">
                    <a class="hover:opacity-75" href="">  </a>
                    <a class="hover:opacity-75" href=""> Market & Money </a>
                    <a class="hover:opacity-75" href=""> Industry </a>
                    <a class="hover:opacity-75" href=""> Digital </a>
                    <a class="hover:opacity-75" href=""> People </a>
                    <a class="hover:opacity-75" href=""> Policy & Regulation </a>
                    <a class="hover:opacity-75" href=""> Archive </a>
                </nav>
                </div>

                <div>
                <p class="font-base font-serif">Information</p>

                <nav class="mt-4 flex flex-col space-y-2 text-sm text-white">
                    <a class="hover:opacity-75" href=""> Advertise With Us </a>
                    <a class="hover:opacity-75" href=""> About Us </a>
                    <a class="hover:opacity-75" href=""> Contact Us </a>
                    <a class="hover:opacity-75" href=""> FAQ </a>
                </nav>
                </div>
            </div>
            </div>

            <p class="mt-8 text-xs text-gray-500">&copy; 2022 Company Name</p>
        </div>
    </footer>

  )
}

export default Footer