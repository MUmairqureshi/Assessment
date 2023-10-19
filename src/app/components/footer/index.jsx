import Link from 'next/link' 
import Image from 'next/image'
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
// ArrowLongRight
import { MenuAlt1Icon,ArrowLongRightICON ,  StarIcon, FingerPrintIcon, RefreshIcon, XIcon, DocumentTextIcon, ViewGridIcon, TemplateIcon, PhoneIcon } from '@heroicons/react/outline'
const socialLinks = [
    {
      icon: <FacebookIcon  fill="#000"/>,
      link: "#",
    },
    {
      icon: <TwitterIcon  fill="#000"/>,
      link: "#",
    },
    {
      icon: <LinkedinIcon fill="#000"  />,
      link: "#",
    },
  ];

  const company = [
    {
      name: "About",
    },
    {
      name: "Terms of Use",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "How it Works",
    },
    {
      name: "Contact Us",
    },
  ];

  const support = [
    {
      name: "Support Career",
    },
    {
      name: "24th Service",
    },
    {
      name: "Quick chat",
    },
  ];

  const contact = [
    {
      name: "WhatsApp",
    },
    {
      name: "Support 24th",
    },
  ];
export default function Footer(){
    return(
        <div className='w-full'>
            <div className="w-full bg-zinc-200 ">
<div className="w-full bg-zinc-200  grid md:grid-cols-3    items-center mx-auto   max-w-6xl p-7  ">
    <div className="w-full  n-2">
  <p className=" text-gray-800 font-bold  md:2 md:text-2xl ">  SUBSCRIBE</p>
 <p className="md:text-xl text-lg  font-semibold  mb-4">  TO OUR NEWSLETTER</p></div>
 <div className="md:flex w-full mb-2  col-span-2 gap-4">
 <input type="text" placeholder="Enter your email" className="md:py-4 md:px-3 py-2 px-2 md:mb-0 mb-2   w-full rounded-md border text-lg" />
<a href="#" className="inline-flex md:w-[366px]  items-center justify-center  md:py-4 px-8 py-4 text-md  w-full font-serif font-semibold text-center text-black  bg-orange-300 rounded-lg  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
SUBSCRIB NOW
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  </a>
  </div>
</div>
    </div>






<div className=' px-4 bg-neutra bg-stone-600'>
    <main className="gap-4  w-full mx-auto bg-secondary-color flex justify-between  max-w-6xl  ">
      <section className="w-[1280px]       py-16">
        <div className="md:grid  grid-cols-1  md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-5        justify-between  ">

        <div className="col-span-3 mb-8 text-white md:col-span-2">
        <Link href={'/'} >
<p className='text-2xl text-slate-300 font-bold '>ABOUT THE CHURCH</p> 
            </Link>

            <p className="md:w-80 text-slate-300  mt-3">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>


          </div>

          <div className="mb-8  text-slate-300">
            <h2 className="text_gradient text-xl font-bold">
              QUICK LINKS
            </h2>
            <div className="mt-4 text-slate-300">
              {company.map((item, index) => (
                <Link href={'#'} key={index}>
                  <p className="text-slate-300 truncate mt-1">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className=" text-xl font-bold text-slate-300">
            CONTACT US
            </h2>
            <div className="mt-4">
              {support.map((item, index) => (
                <Link
                  href={`#`}
                  className="text-slate-300  mt-1"
                  key={index}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text_gradient text-xl text-slate-300 font-bold">
            CONNECT
            </h2>
            <div className="flex gap-4 mt-4 ">
              {socialLinks.map((item, index) => (
                <Link
                  target="_blank"
                  key={index}
                  href={item.link}
                  className="p-3 bg-gray-300 hover:scale-105 hover:text-slate-300 transition-all rounded-full flex justify-center items-center text-slate-900"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          
        </div>
      </section>
    </main></div>

        </div>
    )
}