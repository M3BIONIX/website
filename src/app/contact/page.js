export default function contact(){

    return(
        <div className="bg-custom-black flex xs:h-screen xs:w-screen flex-col">
            <p className="font-product-sans text-custom-red transition-colors duration-300 hover:text-white xs:self-center xs:text-5xl xs:mt-[30px] md:self-start md:ml-[50px] md:mt-[50px] md:text-7xl ">Contact Me</p>
            <div className="flex flex-row items-center md:justify-between xs:justify-center xs:flex-col md:flex-row" >
                <div className="flex flex-col md:w-1/2 xs:items-center xs:w-full md:items-start mt-[50px]">
                    <p className="font-product-sans-m md:hidden xs:w-3/4 text-center">So you wanna get in touch with me Huh !</p>
                    <form method="_POST" className="flex flex-col space-y-8 xs:mt-[50px] md:mt-0 xs:items-center md:items-start">
                    <div className="flex flex-row items-center xs:space-x-5">
                        <img src="/images/name.svg" className="md:h-[30px] md:w-[30px] md:ml-[80px] xs:h-[30px] xs:w-[30px]" />
                        <input type="text" name="name" placeholder="Name" className="bg-custom-black border-b text-white font-product-sans-m outline-none"/>
                    </div>

                    <div className="flex flex-row items-center xs:space-x-5">
                        <img src="/images/mail.svg" className="md:h-[30px] md:w-[30px] md:ml-[80px] xs:h-[30px] xs:w-[30px]" />
                        <input type="text" name="name" placeholder="Email" className="bg-custom-black border-b text-white font-product-sans-m outline-none w-[400px] xs:w-4/5"/>
                    </div>

                    <div className="flex flex-row xs:flex-col w-full xs:items-start items-center xs:space-x-5 md:hidden">
                        <div className="flex flex-row space-x-4 self-start">
                        <img src="/images/message.svg" className="md:h-[30px] md:w-[30px] md:mb-[70px] md:ml-[80px] xs:h-[30px] xs:w-[30px]" />
                        <p className="font-product-sans-m md:hidden xs:w-3/4 text-center">About</p>
                        </div>
                        <textarea name="about" rows={5} placeholder="Describe what you wanna tell me" className="flex md:w-[400px] w-full mt-[20px] rounded-md border-0 py-3 px-3 bg-custom-black font-product-sans-m shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"/>      
                    </div>

                    <div className="block xs:hidden md:flex flex-row items-center xs:space-x-5 ">
                        <img src="/images/message.svg" className="md:h-[30px] md:w-[30px] md:mb-[70px] md:ml-[80px] xs:h-[30px] xs:w-[30px]" />
                        <textarea name="about" rows={5} placeholder="Describe what you wanna tell me" className="block md:w-[400px] mt-[20px] rounded-md border-0 py-3 px-3 bg-custom-black font-product-sans-m shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"/>      
                    </div>

                    <button type="submit" className="hire flex xs:self-start md:ml-[80px] items-center xs:w-auto xs:px-4 xs:py-2 md:py-4 md:px-5 xs:text-center ">
                        <span className="xs:text-sm sm:text-base">Send</span>
                        <svg className="rtl:rotate-180 xs:w-2.5 sm:w-3.5 xs:h-2.5 sm:h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
               </form>

                </div>
                <img src="/images/Eyes-bro.svg" width={650} height={650} className="md:mr-[50px] xs:scale-75 hidden md:block"/>
            </div>
        </div>
    )
}