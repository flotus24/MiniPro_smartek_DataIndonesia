import React, { useState, useEffect, useRef } from "react";
import CardSlider from './CardSlider';
import Subscribe from './Subscribe';


const Body2 = () => {

    return (
            <section class="bg-gray-100">
            <div class="flex">
                <div class="container px- py-10 mx-auto w-2/3 ml-10 mr-10">
                    <h1 class="text-3xl ml-3 font-semibold text-gray-800 capitalize lg:text-2xl">Latest Data</h1>
                    <div class="relative flex py-5 items-center">
                        <span class="flex-grow border-t border-red"></span>
                        <span class="flex-grow border-t border-gray-400"></span>
                        <span class="flex-grow border-t border-gray-400"></span>
                        <span class="flex-grow border-t border-gray-400"></span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 mt-5">
                        <div class="lg:flex">
                            <div class="relative">
                                <span class="absolute px-2 w-auto h-6 rounded text-white rounded-full bg-gradient-to-b from-[#BF9B30] to-[#A67C00] flex items-center justify-center font-mono">
                                    PREMIUM
                                </span>
                                <img class="rounded object-cover w-full h-40 lg:w-60 " src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                            </div>

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

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <div class="relative">
                                <span class="absolute px-2 w-auto h-6 rounded text-white rounded-full bg-gradient-to-b from-[#1363DF] to-[#14499C] flex items-center justify-center font-mono">
                                    UNIT
                                </span>
                                <img class="rounded object-cover w-full h-40 lg:w-60" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                            </div>
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

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="rounded mt-5 object-cover w-full h-40 lg:w-60" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

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

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="rounded object-cover w-full h-40 lg:w-60" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div class="flex flex-col justify-between py-2 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving
                                </a>

                                <span class="text-sm text-gray-500">
                                    <button type="button" class="mr-3 py-0.5 px-1 text-red rounded bg-white outline outline-1 outline-red">
                                        bisnisindo.id
                                    </button>
                                    |   User · 17 hours ago
                                </span>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="rounded container px-5 py-6 mx-auto w-full ml-10 mr-10 bg-gradient-to-b from-[#FECACA] to-[#E48C8C]">
                    <CardSlider />
                </div>
            </div>
            <div class="flex">
                <div class="container px- py-10 mx-auto w-2/3 ml-10 mr-10">
                    <div class="grid grid-cols-1 gap-5 mt-5">
                        <div class="lg:flex">
                            <img class="rounded mt-5 object-cover w-full h-40 lg:w-60" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

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

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="rounded mt-5 object-cover w-full h-40 lg:w-60" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

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

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="rounded mt-5 object-cover w-full h-40 lg:w-60" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

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

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>

                        <div class="lg:flex">
                            <img class="rounded object-cover w-full h-40 lg:w-60" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div class="flex flex-col justify-between py-3 lg:mx-6">
                                <a href="#" class="text-base font-semibold text-gray-800 hover:underline">
                                    Morning routine to boost your mood
                                </a>

                                <span class="text-sm text-gray-500">
                                    <button type="button" class="mr-3 py-0.5 px-1 text-red rounded bg-white outline outline-1 outline-red">
                                        bisnisindo.id
                                    </button>
                                    |   User · 17 hours ago
                                </span>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus dignissim ornare leo eget ornare.
                                </p>
                            </div>
                        </div>
                        <a href="#">
                            <p class="mt-10 mb-10 text-center text-orange1">View more article ↓</p>
                        </a>
                    </div>
                </div>
                <div class="container px- py-10 mx-auto w-1/3 ml-10 mr-10">
                    <Subscribe />
                </div>
            </div>
        </section>
    )
}

export default Body2;