"use client";
import Image from "next/image"
import { useState, useEffect } from 'react';


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [joke, setJoke] = useState('');
  const jokes = ["I'm Sanjay. Did you hear about the restaurant on the moon? Great food, but no atmosphere", "I'm Sanjay. I'm like a Schrödinger's cat: simultaneously alive, dead inside, and unsure if anyone actually cares", "I'm so good at multitasking, I can breathe and accidentally offend people at the same time"]

  useEffect(() => {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);

  }, []);

  return (
    
    <div className="flex-1 bg-custom-black w-screen h-screen">
    <div className="flex justify-between px-4 xs:ml-[30px]">
      <h4 className="pt-16 font-product-sans text-custom-red tracking-wide text-3xl xs:text-xl md:text-4xl  xs:justify-start">M3BIONIX</h4>
      <div className="flex pt-16 text-right">
        <div className="group transition-all duration-300 ease-in-out px-5 md:flex hidden">
          <button className="bg-left-bottom font-product-sans-m py-3 bg-gradient-to-r from-custom-red to-custom-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About Me
          </button>
        </div>

        <div className="group transition-all duration-300 ease-in-out px-5 md:flex hidden">
          <button className="bg-left-bottom font-product-sans-m py-3 bg-gradient-to-r from-custom-red to-custom-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </button>
        </div>

        <div className="group transition-all duration-300 ease-in-out px-5 md:flex hidden">
          <button className="bg-left-bottom font-product-sans-m py-3 bg-gradient-to-r from-custom-red to-custom-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Resume
          </button>
        </div>
      </div>  

      <div className="flex pt-16 md:hidden mr-5">
        <button className="jmr-3" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>  
        </button>

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur z-10" onClick={() => setIsOpen(false)}>
                <div className="transparent rounded-md shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
                    <div className="group transition-all duration-300 ease-in-out px-5 flex">
                      <button  onClick={() => setIsOpen(false)} className="bg-left-bottom font-product-sans-m py-3 bg-gradient-to-r from-custom-red to-custom-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      About Me
                      </button>
                    </div>
                    <hr className="w-[60px] h-[2px] mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                    <div className="group transition-all duration-300 ease-in-out px-5 flex">
                      <button  onClick={() => setIsOpen(false)} className="bg-left-bottom font-product-sans-m py-3 bg-gradient-to-r from-custom-red to-custom-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Resume
                      </button>
                    </div>
                    <hr className="w-[60px] h-[2px] mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                    <div className="group transition-all duration-300 ease-in-out px-5 flex">
                      <button  onClick={() => setIsOpen(false)} className="bg-left-bottom font-product-sans-m py-3 bg-gradient-to-r from-custom-red to-custom-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Contact
                      </button>
                    </div>
                </div>
            </div>
          )}
      </div>

    </div>
    <div className="flex flex-col justify-center items-center mt-20 xs:mt-12 lg:mt-32">
    <div className="md:text-center xs:right-10 flex xs:items-center justify-center md:h-auto ">
      <p className="font-product-sans text-custom-red xs:text-5xl md:text-7xl xs:mt-[20px] md:mt-10 transition-colors duration-300 hover:text-white">Hey, there</p>        
    </div>
      <div className="w-full mt-8 hidden md:flex mx-auto sm:w-1/3 md:w-1/2 md:mr-[10rem]">
          <p className="font-product-sans-m md:leading-8 text-left xs:text-sm xs:text-justify md:text-base ">
          I'm Sanjay, fluent in the languages of movies, anime, and questionable code.
          I dabble in philosophy, mostly to fuel my existential dread during ramen nights.
          Think Neo, but with less fighting robots and more existential dread-induced pizza orders. 
          Hire me before I code my own AI girlfriend (no judgment on my waifu preferences).
          </p>
      </div>
      <div className="w-full mt-8 md:hidden px-4">
        <p className="font-product-sans-m xs:text-sm xs:text-center xs:justify-around xs:w-auto md:text-base ">
          {joke}
        </p>
      </div>
      <button type="button" className="hire hidden md:flex items-center">
        Hire Me
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
      
      <div className="gooey absolute md:left-10 md:bottom-10 md:w-[350px] md:h-[400px] xs:flex xs:justify-center xs:left-[7rem] xs:bottom-0 xs:w-[150px] xs:h-[200px]" />
      <div className="absolute md:left-0 md:bottom-0 md:ml-10 z-2 filter grayscale hover:grayscale-0 transition-all duration-500 xs:flex xs:justify-center xs:left-0 xs:bottom-0 ">
          <Image src="/images/profile.png" width={350} height={350} className="w-full xs:w-1/2 xs: md:w-auto" alt="Hey, there was supposed to be a image here"/>
      </div>
      <div className="flex justify-center space-x-5 md:self-end md:px-[5rem] md:pt-[4rem] xs:mt-[15px]">
  <button 
    type="button" 
    className="btn flex items-center space-x-3 text-white hover:text-custom-red" 
    onClick={() => window.open('https://github.com/M3BIONIX', '_blank')}
  >
    <Image src="/images/github.png" width={30} height={30} alt="Hey, there was supposed to be a image here"/>
  </button>
  <button 
    type="button" 
    className="btn flex items-center space-x-3 text-white hover:text-custom-red" 
    onClick={() => window.open('www.linkedin.com/in/sanjay-mathew34', '_blank')}
  >
    <Image src="/images/linkedin.png" width={40} height={40} alt="Hey, there was supposed to be a image here"/>
  </button>
  <button 
    type="button" 
    className="btn flex items-center space-x-3 text-white hover:text-custom-red" 
    onClick={() => window.open('https://open.spotify.com/user/cmlmip62j0ll3blad4ub0g937?si=0ad35db74f024930', '_blank')}
  >
    <Image src="/images/spotify.png" width={30} height={30} alt="Hey, there was supposed to be a image here"/>
  </button>
</div>

  </div> 
</div>
)
}