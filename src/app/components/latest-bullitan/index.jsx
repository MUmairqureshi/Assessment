'use client'
import Image from 'next/image'
import Link from 'next/link';

import {PlayIcon} from '@heroicons/react/outline'
import { useState } from 'react';

const card = [
    {
        img: "https://ideogram.ai/api/images/direct/pyKCCg-GS0i2GiGexdc3zg.jpg",
        id: 1,
        title: "Perseverance of the Saints",
        date : "on 12th June 2014 by vincent John",
        descripction: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
        button: " Read ARTICLE"
    },
    {
        img: "https://ideogram.ai/api/images/direct/jSz9gmbER8mgn_x_gcovZw.jpg",
        id: 2,
        title: "Perseverance of the Saints",
        date : "on 12th June 2014 by vincent John",

        descripction: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
        button: " Read ARTICLE"
    },
     
]
export default function Latestbulliten() {


    return (
        <div  className=" container mx-auto w-full py-12 " >

<div className='lg:flex mx-auto py-6 mb-6 px-6 justify-center    max-w-7xl'>
            <div className='      md:flex-col mx-auto py-6  items-center justify-center '>
            <p className='text-3xl  text-slate-600 mb-8 font-bold'>LATEST BULLETIN</p>
                {card.map((item) => (

<div key={item.id}  className="   flex-col  ">

                 
<a href="#" className="flex flex-col  mb-6 bg-white    md:flex-row     dark:hover:bg-gray-700">

    <img className="object-cover    md:rounded-none md:rounded-l-lg max-w-xl " src={item.img} alt=""/>
    <div className="flex flex-col   md:px-8 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">{item.date}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.descripction}</p>
        <a href="#" class="inline-flex items-center  py-4 text-sm font-medium text-center text-black p-4 mx-auto justify-start content-start ml-0 bg-orange-300 rounded-lg   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {item.button} 
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</a>
</div>
                ))}







            </div>
            

            <div className="flex flex-col  bg-slate-200 p-4  items-center">
                                  <p className='lg:text-center text-2xl font-bold mb-8'>RECENT SERMONS</p>
                
<div className="max-w-sm  rounded-lg   dark:bg-gray-800 dark:border-gray-700">
    <a href="#">

        <iframe className="rounded-t-lg h-60 w-full md:max-w-[326px] aspect-video" src="https://www.youtube.com/watch?v=zFiqZMTmolY&pp=ygUObW91bnRhaW4gdmlkZW8%3D" type="video/mp4"></iframe>
    </a>
    <div className=" mt-6">
        
    <div className='border-b mb-2 pb-2' href="#">
            <h1 className=" text-2xl  font-serif  tracking-tight   dark:text-white">Heavens and the earch</h1>
<p>24:15 mins</p>
        </div>
        <div className='border-b mb-2 pb-2' href="#">
            <h1 className=" text-2xl font-serif  tracking-tight   dark:text-white">Heavens and the earch</h1>
<p>24:15 mins</p>
        </div>
        <div className='  ' href="#">
            <h1 className=" text-2xl  tracking-tight  font-serif  dark:text-white">Heavens and the earch</h1>
<p>24:15 mins</p>
        </div>

    </div>
</div>


            </div>







{/* <div className="flex flex-col  bg-slate-200 p-4 justify-center items-center">
      <h1 className="text-2xl font-bold mb-8 lg:text-3xl">Recent Sermons</h1>
      <iframe
        className="rounded-t-lg h-60 w-full md:max-w-[326px] aspect-video"
        src="https://www.youtube.com/watch?v=zFiqZMTmolY&pp=ygUObW91bnRhaW4gdmlkZW8%3D"
        type="video/mp4"
      ></iframe>
      <div className=" text-start mt-6">
        
        <div className='border-b mb-2 pb-2' href="#">
             <p className='flex'><PlayIcon className='h-2 w-2 '/>
   <h1 className=" text-2xl  font-serif  tracking-tight   dark:text-white">  Heavens and the earch</h1></p>
    <p>24:15 mins</p>
            </div>
            <div className='border-b mb-2 pb-2' href="#">
                <h1 className=" text-2xl font-serif  tracking-tight   dark:text-white">  Heavens and the earch</h1>
    <p>24:15 mins</p>
            </div>
            <div className='  ' href="#">
                <h1 className=" text-2xl  tracking-tight  font-serif  dark:text-white">  Heavens and the earch</h1>
    <p>24:15 mins</p>
            </div>
    
      </div>
    </div> */}


            </div>
        </div>
    )
}


{/* <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-8 lg:text-3xl">Recent Sermons</h1>
      <iframe
        className="rounded-t-lg h-60 w-full md:max-w-[326px] aspect-video"
        src="https://www.youtube.com/watch?v=zFiqZMTmolY&pp=ygUObW91bnRhaW4gdmlkZW8%3D"
        type="video/mp4"
      ></iframe>
      <div className="mt-6">
        <div className="border-b mb-2 pb-2">
          <h1 className="text-2xl font-serif tracking-tight dark:text-white">
            Heavens and the Earth
          </h1>
          <p>24:15 mins</p>
        </div>
        <div className="border-b mb-2 pb-2">
          <h1 className="text-2xl font-serif tracking-tight dark:text-white">
            Heavens and the Earth
          </h1>
          <p>24:15 mins</p>
        </div>
        <div>
          <h1 className="text-2xl font-serif tracking-tight dark:text-white">
            Heavens and the Earth
          </h1>
          <p>24:15 mins</p>
        </div>
      </div>
    </div> */}




