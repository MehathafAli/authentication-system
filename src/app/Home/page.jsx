import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoIosArrowRoundForward } from "react-icons/io";


const Navbar = () => {
  return (
    <>
    <div className=" h-100vh w-100vw bg-teal-900">
      <div className="w-full h-15  bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col items-end h-full p-4">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/Home">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="#About">
                  <p>About</p>
                </Link>
              </li>
               <li>
                <Link href="#Expreience">
                  <p>Expreience</p>
                </Link>
              </li>
               <li>
                <Link href="#Skills">
                  <p>Skills</p>
                </Link>
              </li>
               <li>
                <Link href="#Projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="#Contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="About" className="flex flex-row mt-4 p-15">
       <div>
        <h1 className="text-white text-4xl text-underline ml-4">About Me:</h1>
        <p className="text-xl ml-20 text-white">I Am Sk.Mehathaf Ali.A Computer Science and Engineering (CSE) B.Tech. student from Bharath Institute of Higher
         Education and Research with excellent academic background and diverse skillset. Experienced in Web development.
         I am well versed with Python, SQL, HTML,CSS,js and Mern stack basics.</p>
        </div>
        <div>
              <img src="/ali.jpg" alt="Picture of the author" width={400} height={10} className="rounded-4xl" />
        </div>
      </div>
      <div id="Expreience" className="p-15">
        <h1 className="text-white text-4xl text-underline ml-4 ">Expreience:</h1>
          <div>
           <h1 className="text-white text-2xl ml-7">Ural Federal University</h1>
          <div className="ml-15 text-xl text-white">
           <p>• Participated in a 15-day summer internship focused on machine learning and digit recognition.</p>
           <p>• Worked on international projects, gaining exposure to global standards and practices.</p>
           <p>• Developed technical and communication skills through collaborative efforts.</p>
           </div>
          </div>
          <div>
           <h1 className="text-white text-2xl ml-7">Motion Cut</h1>
          <div className="ml-15 text-xl text-white">
           <p>• Gained hands-on experience in web development and design during a short-term internship.</p>
           <p>•  Collaborated with team members to deliver project milestones within tight deadlines.</p>
           <p>• Enhanced technical skills in HTML, CSS, and JavaScript.</p>
           </div>
          </div>
          <div>
           <h1 className="text-white text-2xl ml-7 ">NXT Wave</h1>
          <div className="ml-15 text-xl text-white">
           <p>•  Completed multiple projects showcasing proficiency in web development and database management.</p>
           <p>•  Consistently demonstrated commitment to learning and skill enhancement.</p>
           </div>
          </div>    
      </div>
      <div id="Skills" className="mt-5 p-15 text-white">
        <h1 className="text-white text-4xl text-underline ml-4 mt-5">Skills:</h1>
         <div className="flex flex-row align-center">
          <div className="bg-[#f5f5f5] h-50 w-50 flex flex-col  rounded-2xl shadow-xl ml-30">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z0LC70CF3lPE1Xe-Uka4Y5sSlLzrAVHCQg&s" className="rounded-2xl w-30 h-30 ml-3 mt-3" />
            <h1 className="text-center text-black text-3xl mt-5">Python</h1>
          </div>
          <div className="bg-[#f5f5f5] h-50 w-50 flex flex-col  rounded-2xl shadow-xl ml-30">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s" className="rounded-2xl w-30 h-30 ml-3 mt-3" />
            <h1 className="text-center text-black  text-3xl mt-5">Html</h1>
          </div>
          <div className="bg-[#f5f5f5] h-50 w-50 flex flex-col  rounded-2xl shadow-xl ml-30">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5knOAB5VVnulJ0efWUFhtSNj2KjM5PTGINk3k5R2iHZsJgjoUcv2FAfWJpAUh1B_wsg8&usqp=CAU" className="rounded-2xl w-30 h-30 ml-3 mt-3" />
            <h1 className="text-center text-black  text-3xl mt-5">CSS</h1>
          </div>
          <div className="bg-[#f5f5f5] h-50 w-50 flex flex-col  rounded-2xl shadow-xl ml-30">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSod7CJvOSEFdtFtmH1pbaPYSW8M4gXMwsmWA&s" className="rounded-2xl w-30 h-30 ml-3 mt-3" />
            <h1 className="text-center text-black  text-3xl mt-5">JS</h1>
          </div>
          <div className="bg-[#f5f5f5] h-50 w-50 flex flex-col  rounded-2xl shadow-xl ml-30">
            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" className="rounded-2xl w-30 h-30 ml-3 mt-3" />
            <h1 className="text-center text-black  text-3xl mt-5">SQL</h1>
          </div> 
         </div>

      </div>
      <div id="Projects" className="pt-15">
        <h1 className="text-white text-4xl text-underline m-5">Projects:</h1>
       <div className=" h-100 w-250 rounded-2xl shadow-xl bg-[#66b2b2] ml-50 mb-10">
       <div className="flex flex-row align-center">
        <img src="https://t4.ftcdn.net/jpg/04/68/46/01/360_F_468460110_n5PvzMMql9h9ZxQy1fIrlJwJdJlOsuza.jpg" className=" w-150 h-100 mb-40 rounded-5xl" />
        <div className="flex flex-col text-center">
        <p className="text-4xl text-white ml-3 mb-3 mt-30">To see the website click on website below</p>
        <a href=" https://alifoodcourt.ccbp.tech/ " className="text-4xl text-[#f52314] ml-5">web site <IoIosArrowRoundForward className="inline"/></a>
       </div>
       </div>
       </div>
       <div className=" h-100 w-250 rounded-2xl shadow-xl bg-[#66b2b2] ml-50 mb-10">
       <div className="flex flex-row align-center">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczvYhOXcYsaDMxbAztNZN_1cmNcEy-vYBEg&s" className=" w-150 h-100 rounded-5xl mb-4" />
         <div className="flex flex-col text-center">
          <p className="text-4xl text-white ml-3 mb-3 mt-30">To see the website click on website below</p>
          <a href="https://aliguessinggame.ccbp.tech/" className="text-4xl text-[#f52314] ml-5">web site <IoIosArrowRoundForward className="inline"/> </a>
         </div>
        </div>
       </div>
      </div>
      <div id="Contacts">
        <div className="bg-[#66b2b2]">
         <h1 className="text-white text-4xl text-underline ml-4">Contract:</h1>
         <div className="flex flex-col  ml-100 ">
          <input type='text' placeholder="Name" className="rounded-2 border-2 border-white-900 p-2 w-100 " />
          <input type='email' placeholder="Email" className="rounded-2 border-2 border-white-900 p-2 w-100 mt-6"/>
          <textarea className="rounded-2 border-2 border-white-900 h-30 w-100 mt-5"></textarea>
          <button className="bg-sky-500 w-100 h-7 mt-5">Send</button>
          
         </div>
      </div>
      <div className="bg-[#66b2b2] flex">
        <Link href="mailto:shaikmehathafali786@gmail.com" >
        <MdEmail size={60} className="ml-110 mt-2"/> 
        </Link>
        <a href={"https://wa.me/qr/KH6MOFP57APDI1"} target="_blank" rel="noopener noreferrer">
        <img src="/whatsappimage.png" alt="WhatsApp" width={50} height={50} className="m-3 rounded-2xl ml-20"/>
       </a>
       <Link href="https://www.linkedin.com/in/mehathaf-ali-shaik-2a6736254" passHref>
        <AiFillLinkedin size={60} className="ml-20 mt-2" />
      </Link>
      </div>
     </div>

    </div>
    </>
  );
};

export default Navbar;