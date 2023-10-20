'use client'
import Image from 'next/image'
import Link from 'next/link';

 
import { useState } from 'react';

const card = [
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        id: 1,
    
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        id: 2,
     
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        id: 3,
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        id: 4,
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        id: 5,
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        id: 6,
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        id: 7,
    }
    ,
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        id: 8 
    }
]
export default function Gallery() {


    return (
        <div className=" container mx-auto w-full py-12 px-6" >


            {/* <div className='md:flex mx-auto py-6 mb-6 px-6 justify-center  gap-6'> */}
            <p className='text-center font-bold  mb-7  text-zinc-700 text-xl md:text-3xl'>OUR GALLERY</p> 
<div class=" max-w-7xl items-center justify-center mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

 {card.map((item)=>(  
 <div key={item.id}>
        <img class="h-80 max-w-full rounded-lg" src={item.img} alt=""/>
    </div>
)) } 
</div>

</div>
    )
}

