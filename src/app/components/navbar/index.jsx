"use client";
import Image from "next/image";
import Link from "next/link";


import { useState } from "react";

export default function Nevbar() {
  const [nav, setNave] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handlesubmit = () => setNave(!nav);
  const handleClose = () => setNave(!nav);
  return (
    <div className="w-full  bg-zinc-100 z-10 fixed drop-shadow-lg">
      <nav class="  bg-zink-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <h2 className="font-bold sm:text-4xl border-4 p-2 border-zinc-950  mr-4 md:text-4xl">
              CATHOLIC
            </h2>
          </a>

          {/* <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
               <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
               </svg>
            </button> */}

          <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul class="flex flex-col font-medium p-4  mt-4 border border-gray-100     md:flex-row md:space-x-8 md:mt-0 md:border-0 md:zink-300  md:dark:bg-gray-900 ">
              <li>
                <Link
                  href="#"
                  class="block hover:bg-yellow-200/90   py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  MINISTRIES
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  SERMONS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  GALLERY
                </Link>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50  md:border-0 md:hover:text-blue-700  md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  PAGES
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block hover:bg-yellow-200/90   py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              aria-label="open menu"
              onClick={() => setShowMenu(true)}
              className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
            >
              <svg
                className="fill-stroke text-gray-800 dark:text-white"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* // mobile-menu */}

        <div
          id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          } md:hidden fixed inset-0 z-10 flex-col h-screen left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-white pt-6`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
              <div role="img" aria-label="Logo">
                <h2 className="font-bold sm:text-2xl border-4 p-2 border-zinc-950  mr-4 md:text-4xl">
                  CATHOLIC
                </h2>
              </div>
              <button
                aria-label="close menu"
                onClick={() => setShowMenu(false)}
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-4 mx-4">
            <ul className="flex flex-col space-y-4">
              <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                <Link
                  href="/"
                  className="dark:text-white focus:outline-none hover:bg-yellow-200/90 hover:text-blue-700 focus:ring-2 focus:ring-gray-800 text-base text-gray-800"
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                <Link
                  href="/"
                  className="dark:text-white focus:outline-none hover:bg-yellow-200/90 hover:text-blue-700 focus:ring-2 focus:ring-gray-800 text-base text-gray-800"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                <Link
                  href="/"
                  className="dark:text-white focus:outline-none hover:bg-yellow-200/90 hover:text-blue-700 focus:ring-2 focus:ring-gray-800 text-base text-gray-800"
                >
                  MINISTRIES
                </Link>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                <Link
                  href="/"
                  className="dark:text-white focus:outline-none hover:bg-yellow-200/90 hover:text-blue-700 focus:ring-2 focus:ring-gray-800 text-base text-gray-800"
                >
                  SERMONS
                </Link>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                <Link
                  href="/"
                  className="dark:text-white focus:outline-none hover:bg-yellow-200/90 hover:text-blue-700 focus:ring-2 focus:ring-gray-800 text-base text-gray-800"
                >
                  GALLERY
                </Link>
              </li>
              <li className="border-b border-gray-200 pb-4 px-1 flex items-center justify-between">
                <Link
                  href="/"
                  className="focus:outline-none focus:ring-2 hover:bg-yellow-200/90 hover:text-blue-700 focus:ring-gray-800 text-base text-gray-800"
                >
                  PAGES
                </Link>
              </li>
              <li className="border-b border-gray-200 pb-4 px-1 flex items-center justify-between">
                <Link
                  href="/"
                  className=" focus:outline-none focus:ring-2 hover:bg-yellow-200/90 hover:text-blue-700 focus:ring-gray-800 text-base text-gray-800"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
// md:hover:bg-transparent



































// 'use client'
// import Image from 'next/image'
// import Link from 'next/link';
// import { MenuAlt1Icon, StarIcon, FingerPrintIcon, RefreshIcon, XIcon, DocumentTextIcon, ViewGridIcon, TemplateIcon, PhoneIcon } from '@heroicons/react/outline'

// import { useState } from 'react';

// export default function Nevbar() {
//     const [nav, setNave] = useState(false)
//                       <h2 className='font-bold sm:text-4xl border-4 p-2 border-zinc-950  mr-4 text-4xl'>CATHOLIC</h2>
//     const handlesubmit = () => setNave(!nav)
//     const handleClose = () => setNave(!nav)
//     return (
//         <div  className="  w-full  bg-zinc-100 z-10 fixed drop-shadow-lg " >

//  <div className='max-w-[1240px] mx-auto '>

// <div className='mx-auto justify-center py-4 px-3 text-white  max-w-[1240px] relative'>
//     <div className=' flex justify-between  w-full h-full px-2 items-center '>
//     <h2 className='font-bold sm:text-4xl text-black border-4 p-2 border-zinc-950  mr-4 text-4xl'>CATHOLIC</h2>
//         <div className='flex items-center'>
//             <ul className='hidden md:flex text-black justify-between ml-4'><li > <Link className='flex ' href="document"><DocumentTextIcon className='w-5 mr-2  ' />DOCS </Link></li>
//                 <li ><Link className='flex ' href="components">  COMPONENTS </Link></li>
//                 <li ><Link className='flex ' href="document">Templates</Link></li>
//                 <li > <Link className='flex ' href="document">  Contact </Link></li>
//                 <li >  <Link className='flex ' href="issue">ISSUE</Link></li>
//             </ul>
//         </div>
//         <div className='md:hidden mr-4' onClick={handlesubmit}>
//             {!nav ? <MenuAlt1Icon className='w-6' /> : <XIcon className='w-6' />}
//         </div>
//     </div>
// </div>
// <ul className={!nav ? 'hidden' : ' absolute w-full  px-2 text-white'}>
//      <li className='flex '><Link className='flex ' onClick={handleClose} href="document">DOCS </Link> </li>
//     <li className='flex '><Link className='flex ' onClick={handleClose} smooth={true} href ="components"> <ViewGridIcon className='w-5 mr-1  ' /> COMPONENTS </Link></li>
//     <li className='flex '> <Link className='flex ' onClick={handleClose} smooth={true} href ="document"><TemplateIcon className='w-5 mr-1  ' />Templates</Link></li>
//     <li className='flex '><Link className='flex ' onClick={handleClose} smooth={true} href ="document">  <PhoneIcon className='w-5 mr-1 ' /> Contact </Link></li>
//     <li className='flex '> <Link className='flex ' onClick={handleClose} smooth={true} href ="issue">ISSUE</Link></li>
// </ul>
// </div> 


// <nav class="  bg-zink-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <a href="#" class="flex items-center">

//         <h2 className='font-bold sm:text-4xl border-4 p-2 border-zinc-950  mr-4 md:text-4xl'>CATHOLIC</h2>
//     </a>
//     <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
//       <ul class="flex flex-col font-medium p-4  mt-4 border border-gray-100     md:flex-row md:space-x-8 md:mt-0 md:border-0 md:zink-300  md:dark:bg-gray-900 ">
//         <li>
//         <a href="#" class="block hover:bg-yellow-200/90   py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
//         </li>
       
//         <li>
//         <a href="#" class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT US</a>
//         </li>
//         <li>
//         <a href="#"   class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">MINISTRIES</a>
//         </li>
//         <li>
//         <a href="#" class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SERMONS</a>
//         </li>
//         <li>
//         <a href="#" class="block hover:bg-yellow-200/90  py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GALLERY</a>
//         </li>







//         <li>
//             <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50  md:border-0 md:hover:text-blue-700  md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">PAGES <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//   </svg></button>
//             {/* <!-- Dropdown menu --> */}
//             <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//                 <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
//                   <li>
//                     <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//                   </li>
              
//                   <li>
//                     <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//                   </li>
//                 </ul>
//                 <div class="py-1">
//                   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
//                 </div>
//             </div>
//         </li>
//         <li>
//           <a href="#" class="block hover:bg-yellow-200/90   py-2 pl-3 pr-4 text-gray-900 rounded   md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT US</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>




// </div>
//     )
// }
// md:hover:bg-transparent
