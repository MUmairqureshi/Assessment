'use client'
import { Link } from "lucide-react";
import React from "react";


export default function Hero() {
    return (
        <div  className="w-full">
           
  <div className="relative h-screen bg-cover bg-center bg-gray-700" >
   <div className='w-full h-screen bg-gray-700 '> 
  <img className='w-full h-full object-cover mix-blend-overlay' src='https://images.unsplash.com/photo-1477948879622-5f16e220fa42?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="/" />
  </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="md:text-5xl text-xl font-semibold  mb-4">LET US PRAY TOGETHER</h1>
          <p className="md:text-6xl text-2xl font-bold mb-4">FOR A BETTER WORLD</p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-md  font-serif font-semibold text-center text-black  bg-orange-300 rounded-lg  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    JOIN US
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  </a>
        </div>
      </div>
    </div>
    <div>
<div className="w-full bg-zinc-200 ">
<div className="w-full bg-zinc-200  md:flex xl:flex -col items-center mx-auto justify-between max-w-6xl p-7  "><div>
  <p className=" text-red-800 md:text-xl "> UPCOMMING EVENT</p>
 <p className="md:text-3xl text-xl font-bold mb-4">   I am the away truth & life by Rev.Jose Mathew</p></div>
<Link href="#" className="inline-flex items-center justify-center md:px-5 md:py-4 px-4 py-4 text-md  font-serif font-semibold text-center text-black  bg-orange-300 rounded-lg  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
PROGRAM DETAILS
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  </Link>
</div>
    </div>
    
        </div>


        </div>
    )
}