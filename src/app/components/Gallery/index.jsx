'use client'
import Image from 'next/image'
import Link from 'next/link';

 
import { useState } from 'react';

const card = [
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        id: 1,
        title: "CATHOLIC CHURCH",
        descripction: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
        button: " Read more"
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        id: 2,
        title: "MINISTRY AND SERMON",
        descripction: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
        button: " Read more"
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      
    }
]
export default function Gallery() {


    return (
        <div className=" container mx-auto w-full py-12 px-6" >


            {/* <div className='md:flex mx-auto py-6 mb-6 px-6 justify-center  gap-6'> */}
            <p className='text-center font-bold  mb-7  text-zinc-700 text-xl md:text-3xl'>OUR GALLERY</p> 
<div class=" max-w-7xl items-center justify-center mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

 {card.map((item)=>(  <div>
        <img class="h-80 max-w-full rounded-lg" src={item.img} alt=""/>
    </div>
)) } 
</div>

</div>
    )
}

