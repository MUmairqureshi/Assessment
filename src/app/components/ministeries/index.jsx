'use client'
import Image from 'next/image'
import Link from 'next/link';


import { useState } from 'react';

const card = [
    {
        img: "https://ideogram.ai/api/images/direct/Y6Q8r1y2Tj6UbDpbPvp84g.jpg",
        id: 1,
        title: "CATHOLIC CHURCH",
        descripction: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
        button: " Read more"
    },
    {
        img: "https://ideogram.ai/api/images/direct/Y6Q8r1y2Tj6UbDpbPvp84g.jpg",
        id: 2,
        title: "MINISTRY AND SERMON",
        descripction: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
        button: " Read more"
    },
    {
        img: "https://ideogram.ai/api/images/direct/Y6Q8r1y2Tj6UbDpbPvp84g.jpg",
        id: 3,
        title: "BULLITEN AND PROGRAM",
        descripction: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
        button: " Read more"
    }
]
export default function Ministeries() {


    return (
        <div className=" container mx-auto w-full py-12 " >
<p className='text-center md:text-3xl text-xl font-bold font-serif mb-4 text-gray-700'>OUR MINISTERIES</p>

            <div className='md:flex mx-auto py-6 mb-6 px-6 justify-center  gap-6'>

                {card.map((item) => (



                    <div key={item.id} className="max-w-sm mb-6 bg-white  border-gray-200 rounded-lg  text-start">
                        <a href="#">
                            <img className="rounded-t-lg" src={item.img} alt="" className='h-64 w-full' />
                        </a>
                        <div className=" mt-4 text-start ">
                            <a href="#">
                                <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.descripction}</p>
                            <a href="#" className="inline-flex items-center  font-medium text-center text-black text-xl   ">
                                {item.button}
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}







            </div>

        </div>
    )
}

