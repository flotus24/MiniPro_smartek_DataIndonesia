import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai"

const featuredProducts = [
    "./stat1.png",
    "./stat2.jpg",
    "./stat3.jpg",
  ];
  
  let count = 0;
  let slideInterval;

const Body = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
        pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
        handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };


    return (
        <section class="bg-gray-100">
            <div class="flex">
                <div class="container px- py-10 mx-auto w-1/4 ml-10 mr-10">

                    {/* Curiosities */}
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-2xl text-center">Curiosities</h1>
                    <div class="relative flex py-5 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-grow border-t border-red"></span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 mt-5 divide-y">
                        <div class="lg:flex">
                            <img class="object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving
                                </a>
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving aaaaaaaa 
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    Morning routine to boost your mood
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know
                                </a>
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>
                        <hr class="h-px bg-gray-700 border-0"></hr>
                    </div>
                    <a href="#">
                        <p class="text-right text-orange1">View more →</p>
                    </a>

                    {/* Indicator */}
                    <h1 class="text-3xl mt-5 font-semibold text-gray-800 capitalize lg:text-2xl text-center">Indicator</h1>
                    <div class="relative flex py-5 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-grow border-t border-red"></span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 mt-5 divide-y">
                        <div class="lg:flex">
                            <img class="object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving
                                </a>
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving aaaaaaaa 
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    Morning routine to boost your mood
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know
                                </a>
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>
                        <hr class="h-px bg-gray-700 border-0"></hr>
                    </div>
                    <a href="#">
                        <p class="text-right text-orange1">View more →</p>
                    </a>
                </div>
            
                {/* Carousel */}
                <div class="container px- py-10 mx-auto w-1/2">
                    <div ref={slideRef} class="w-full select-none relative">
                        <div class="aspect-video">
                            <img src={featuredProducts[currentIndex]} alt="" />
                        </div>

                        <div class="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                            <button
                            class="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                            onClick={handleOnPrevClick}
                            >
                            <AiOutlineVerticalRight size={30} />
                            </button>
                            <button
                            class="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                            onClick={handleOnNextClick}
                            >
                            <AiOutlineVerticalLeft size={30} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div class="grid grid-cols-1 gap-5 mt-5">
                        <div class="lg:flex">
                            <img class="object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-2 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving
                                </a>
                                
                                <span class="text-sm text-gray-500">
                                    <button type="button" class="mr-3 py-0.5 px-1 text-white rounded bg-gradient-to-b from-[#F93E45] to-[#CB0008]">
                                        Market & Money
                                    </button>
                                    |   User · 17 hours ago
                                </span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-3 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving aaaaaaaa 
                                </a>

                                <span class="text-sm text-gray-500">
                                    <button type="button" class="mr-3 py-0.5 px-1 text-white rounded bg-gradient-to-b from-[#F93E45] to-[#CB0008]">
                                        Market & Money
                                    </button>
                                    |   User · 17 hours ago
                                </span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="mt-5 object-cover w-full h-20 lg:w-20" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                            <div class="flex flex-col justify-between py-3 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    Morning routine to boost your mood
                                </a>

                                <span class="text-sm text-gray-500">
                                    <button type="button" class="mr-3 py-0.5 px-1 text-white rounded bg-gradient-to-b from-[#F93E45] to-[#CB0008]">
                                        Market & Money
                                    </button>
                                    |   User · 17 hours ago
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Trending */}
                <div class="container px- py-10 mx-auto w-1/4 ml-10 mr-10">
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-2xl text-center">Trending</h1>
                    <div class="relative flex py-5 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-grow border-t border-red"></span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 mt-5 divide-y">
                        <div class="lg:flex">
                            <div class="relative">
                                <span class="absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    1
                                </span>
                                <img class="object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>
                            <div class="flex flex-col justify-between lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>
                                
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="mt-5 absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    2
                                </span>
                                <img class="mt-5 object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>
                            

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="mt-5 absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    3
                                </span>
                                <img class="mt-5 object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="mt-5 absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    4
                                </span>
                                <img class="mt-5 object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="mt-5 absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    5
                                </span>
                                <img class="mt-5 object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="mt-5 absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    6
                                </span>
                                <img class="mt-5 object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="mt-5 absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    7
                                </span>
                                <img class="mt-5 object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>  

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>

                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="mt-5 absolute w-6 h-6 rounded-full text-white rounded-full bg-gradient-to-b from-[#F93E45] to-[#CB0008] flex items-center justify-center font-mono">
                                    8
                                </span>
                                <img class="mt-5 object-cover w-full h-20 lg:w-30" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            </div>

                            <div class="flex flex-col justify-between py-4 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    All the features you want to know frfr
                                </a>
                                
                                <span class="text-sm text-gray-500">User · 17 hours ago</span>
                            </div>
                        </div>
                        <hr class="h-px bg-gray-700 border-0"></hr>
                    </div>
                    <a href="#">
                        <p class="text-right text-orange1">View more →</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Body;