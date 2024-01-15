export default function About() {
   return(
      <div className="bg-custom-black min-w-full min-h-full flex flex-col items-center">
         <p className="font-product-sans text-custom-red transition-colors duration-300 hover:text-white xs:self-center xs:text-5xl xs:mt-[50px] md:self-start md:ml-[50px] md:mt-[50px] md:text-7xl ">About Me</p>
         <div className="w-full flex justify-center">
            <img src="/images/Image.svg" className="md:h-[400px] md:mt-[20px] xs:h-[300px]" />
         </div>
         <div className="font-product-sans-m md:leading-8 justify-center md:text-base md:w-1/2 xs:w-3/4 text-center">
               You've clicked the "About Me" button? Bold move, bro. 
               <p className="hidden md:block"> Like, did you accidentally bump into it with your elbow while frantically refreshing your Netflix queue, or are you actually 
               curious about the magnificent beast lurking behind this digital curtain? Anyways
               </p>
         </div>

         <div className="flex flex-col md:items-start xs:items-center">
         <p className="font-product-sans pulse text-green-600 transition-colors duration-300 hover:text-white xs:self-center xs:text-4xl xs:mt-[50px] md:self-start md:mt-[50px] md:text-3xl ">Vibing to</p>
         <img src="https://spotify-black-five.vercel.app/api/spotify" alt="Spotify Playing" width="350" className="mt-[20px] xs:w-[200px] md:w-[350px]"/>
         </div>

         <div className="md:grid md:grid-cols-2 md:gap-4 w-full justify-center md:mt-[60px] ">
            <div className="flex flex-col md:items-start xs:items-center md:ml-[13rem]  xs:space-y-5">
               <p className="font-product-sans text-custom-red transition-colors duration-300 hover:text-white xs:self-center xs:text-4xl xs:mt-[50px] md:self-start md:ml-[80px] md:mt-[50px] md:text-3xl ">Education</p>
               
               <div className="flex flex-row items-center xs:space-x-5">
                  <img src="/images/college.svg" className="md:h-[40px] md:mt-[40px] md:ml-[80px] border-[2px] rounded-full p-[3px] xs:h-[40px]" />
                  <div className="flex flex-col md:ml-[20px] md:mt-[40px]">
                     <p className="font-product-sans-m ">College of Engineering Chengannur</p>
                     <p className="font-product-sans-m text-[11px]">2020 - 2024</p>
                  </div>
               </div>

               <div className="flex flex-row items-center xs:space-x-5 xs:ml-[15px] md:ml-[0px]">
                  <img src="/images/school.svg" className="md:h-[40px] md:mt-[40px] md:ml-[80px] border-[2px] rounded-full p-[6px] xs:h-[40px]" />
                  <div className="flex flex-col md:ml-[20px] md:mt-[40px]">
                     <p className="font-product-sans-m md:text-left w-[300px]">Saraswathi Vidyaniketan Public School</p>
                     <p className="font-product-sans-m text-[11px]">2018 - 2020</p>
                  </div>
               </div>

               <div className="flex flex-row items-center xs:space-x-5 xs:mr-[45px]">
               <img src="/images/hs.svg" className="md:h-[40px] md:mt-[40px] md:ml-[80px] border-[2px] rounded-full p-[6px] xs:h-[40px]" />
                 <div className="flex flex-col md:ml-[20px] md:mt-[40px]">
                     <p className="font-product-sans-m ">Viswajyothi CMI Public School</p>
                     <p className="font-product-sans-m text-[11px]">2006 - 2018</p>
                  </div>
               </div>
               
            </div>
            <div class="absolute hidden md:block left-1/2 -ml-0.5 w-0.5 h-[400px] mt-[50px] bg-gray-600"></div>
            <div className="flex flex-col md:items-start md:ml-[5rem] xs:items-center xs:space-y-8 md:space-y-0">
               <p className="font-product-sans text-custom-red transition-colors duration-300 hover:text-white xs:text-3xl xs:mt-[50px] md:self-start md:ml-[50px] md:mt-[50px] md:text-3xl">Work Experience</p>

               <div className="flex flex-row md:items-center xs:space-x-5 xs:mr-[70px]">
               <img src="/images/Tata.jpg" className="md:h-[50px] md:mt-[40px] md:ml-[40px] rounded-full md:p-[6px] xs:h-[40px]" />
                 <div className="flex flex-col md:ml-[20px] md:mt-[40px]">
                     <p className="font-product-sans-m ">Tata Elxsi</p>
                     <p className="font-product-sans-m text-[11px]">2023 - Present</p>
                  </div>
               </div>

               <div className="flex flex-row items-center xs:space-x-5 xs:ml-[5px]">
               <img src="/images/infox.png" className="md:h-[50px] md:mt-[40px] md:ml-[40px]  rounded-full md:p-[6px] xs:h-[40px]" />
                 <div className="flex flex-col md:ml-[20px] md:mt-[40px]">
                     <p className="font-product-sans-m ">Infox Technologies</p>
                     <p className="font-product-sans-m text-[11px]">2021 - 2021</p>
                  </div>
               </div>
            </div>  
         </div>

         <p className="font-product-sans text-custom-red transition-colors duration-300 hover:text-white xs:self-center xs:text-4xl xs:mt-[50px] md:self-start md:ml-[15rem] md:mt-[150px] md:text-5xl ">Projects</p>

         <div className="flex items-center md:justify-start flex-col md:flex-row md:ml-[30rem] w-full md:space-x-[50px] pb-[10rem]">
            <div className="flip">
               <div className="front">
                  <div className="flex border-2 p-5 rounded-lg mt-[50px] justify-center space-y-5 w-[300px] bg-[#222323]">
                     <img src="/images/kshree.svg" className="w-[80px] h-[360px]"/>
                  </div>
               </div>
               <div className="back">
                  <div className="flex flex-col border-2 p-5 rounded-lg mt-[50px] space-y-5 w-[300px] bg-custom-black">
                     <img src="/images/project-19.png" className="flex w-[300px] h-[150px]"/>
                     <p className="font-product-sans text-white text-3xl mt-[20px]">Kshree</p>
                     <p className="font-product-sans-m text-white text-[10px]">User Roles and Access Levels: The app offers distinct logins for Admins and Members, ensuring controlled access to different functionalities and data.</p>
                     <p className="font-product-sans-m text-white text-[10px]">Attendance Management: Admins can efficiently schedule and mark attendance for Kudumbashree members, ensuring accurate tracking.</p>
                  </div>
               </div>
            </div>

            <div className="flip">
               <div className="front">
                  <div className="flex border-2 p-5 rounded-lg mt-[50px] space-y-5 w-[300px] bg-[#222323]">
                     <img src="/images/rocket.svg" className="w-[300px] h-[360px]"/>
                  </div>
               </div>
               <div className="back">
                  <div className="flex flex-col border-2 p-5 rounded-lg mt-[50px] space-y-5 w-[300px] pb-[50px] bg-custom-black">
                     <img src="/images/Astrofilo.png" className="flex w-[250px] h-[200px]"/>
                     <p className="font-product-sans text-white text-3xl mt-[20px]">Astrofilo</p>
                     <p className="font-product-sans-m text-white text-[10px]">A React Native App developed and designed to Track Space Launches. It uses the spacedevs API and SpaceX API to get data from servers to display the data</p>
                  </div>
               </div>
            </div>

            <div className="flip">
               <div className="front">
                  <div className="flex border-2 p-5 rounded-lg mt-[50px] space-y-5 w-[300px] bg-[#222323] justify-center">
                     <img src="/images/calcu.svg" className="w-[100px] h-[360px]"/>
                  </div>
               </div>
               <div className="back">
                  <div className="flex flex-col border-2 p-5 rounded-lg mt-[50px] space-y-5 w-[300px] ">
                     <img src="/images/cal.png" className="flex w-[250px] h-[250px]"/>
                     <p className="font-product-sans text-white text-3xl mt-[20px]">MyCalc</p>
                     <p className="font-product-sans-m text-white text-[10px]">A Native Android App developed and designed to Calculate Numbers, obviously</p>
                  </div>
               </div>
            </div>            
         </div>

      </div>
   )
}