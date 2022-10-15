import React from 'react'
import rectangle from '../Assets/SearchRed.png'

const SearchPage = () => {
  return (
    <body className = " z-20 top-0 left-0 justify-center">
        <form className=' flex justify-center relative bg-red'>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
                <h2 class="text-3xl text-white text-center pb-10">Search In One Place</h2>
                <h2 class="text-white text-center pb-5">Insights and facts across 170 industries and 150+ countries</h2>
                <input type="search" id="default-search" class="block p-4 pl-10 flex justify-center h-14 w-128 text-sm rounded-full md:auto sm:auto" placeholder="Search Mockups, Logos..." required />
                
                <ul class = "pt-6 px-16 flex justify-between">
                    <li>
                        <button type="submit "class = "text-black rounded-full bg-white h-fit w-fit text-sm px-2 py-2">
                            Coronavirus
                        </button>
                    </li>
                    <li>
                        <button type="submit "class = "text-black rounded-full bg-white h-fit w-fit text-sm px-2 py-2">
                            Vaksin Covid
                        </button>
                    </li>
                    <li>
                        <button type="submit "class = "text-black rounded-full bg-white h-fit w-fit text-sm px-2 py-2">
                            Sosial Media
                        </button>
                    </li>
                    <li>
                        <button type="submit "class = "text-black rounded-full bg-white h-fit w-fit text-sm px-2 py-2">
                            e-Commerce
                        </button>
                    </li>
                    <li>
                        <button type="submit "class = "text-black rounded-full bg-white h-fit w-fit text-sm px-2 py-2">
                            Smartphone
                        </button>
                    </li>
                </ul>
            </div>
        </form>
         <div className="flex-end w-full md:block md:w-auto relative">
            <img src={rectangle} className = "object-cover w-full bg-cover bg-center" alt="Light" />
        </div>
    </body>
  )
}

export default SearchPage