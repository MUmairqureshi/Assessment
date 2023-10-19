const item =[
    {
        date : "JUL 16",
        title : "Weekly Meeting 7 prayed" ,
        event : "Monday 07:00 AM",
        button : "DETAILS"
    },
    {
        date : "JUL 29",
        title : "Weekly Meeting 7 prayed" ,
        event : "Monday 07:00 AM",
        button : "DETAILS"
    },
    {
        date : "SEP 16",
        title : "Weekly Meeting 7 prayed" ,
        event : "Monday 07:00 AM",
        button : "DETAILS"
    },
    {
        date : "OCT  14",
        title : "Weekly Meeting 7 prayed" ,
        event : "Monday 07:00 AM",
        button : "DETAILS"
    }
]
export default function Event() {
    return (
        <div className="  bg-slate-100 mx-auto w-full py-12 " >


            <div className='md:flex mx-auto py-6 mb-6 px-6 justify-center container gap-6'>

                {item.map((data) => (



                    <div class="  mb-6    lg:border-r-4 md:p-4 ">
                      
                        <div class=" mt-4 text-center ">
                            <a href="#">
                                <h5 class="mb-2 md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{data.date}</h5>
                            </a>
                            <p class="mb-3 md:text-xl   ">{data.title}</p>
                            <p class="mb-3 font-normal md:text-lg text-gray-700 dark:text-gray-400">{data.event}</p>
                            <a href="#" class="inline-flex items-center px-5 py-3  font- text-center text-black   bg-orange-300 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {data.button} 
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
                        </div>
                    </div>
                ))}







            </div>

        </div>
    );
  }
  