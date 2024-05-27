import React from 'react'

import Data from './data.json'
import Footer_set_data from './Footer_set_data';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  let items = [];

items = Data.map((item, index) => <Footer_set_data key={index} title={item.title} 

num1={item.num1} num2={item.num2} num3={item.num3} num4={item.num4} num5={item.num5} /> )
    

  return (

    <div className=' bg-purple-500 py-10 mt-20 text-white px-8 md:px-20'>

         <div className='mx-auto grid grid-cols-2 md:grid-cols-4 gap-10  mt-20'>
          
                 {items}
                 <div className='flex flex-col gap-3 md:pl-20'>
                 <h4 className='text-[20px] font-bold md:border-none border-b-4 border-white rounded-lg pb-2'>Social Media</h4>
               
                <div className='flex flex-col gap-3'>

                  <div className='flex gap-2'>
                    
                    <a href="#"><FaFacebook className='text-[25px]' /></a>
                    <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>Facebook</p></a>

                  </div>

                  <div className='flex gap-2'>
                    
                    <a href="#"><BsInstagram className='text-[25px]' /></a>
                    <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>Instagram</p></a>
                    
                  </div>


                  <div className='flex gap-2'>
                    
                    <a href="#"><IoLogoTwitter className='text-[25px]' /></a>
                    <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>Twitter</p></a>
                    
                  </div>

                  <div className='flex gap-2'>
                    
                    <a href="#"><FaLinkedin className='text-[25px]' /></a>
                    <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>Linkedin</p></a>
                    
                  </div>

                  <div className='flex gap-2'>
                    
                    <a href="#"><FaYoutube className='text-[25px]' /></a>
                    <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>Youtube</p></a>
                    
                  </div>
                
                </div>
                 </div>
          </div>

          <div className='mt-16 text-center font-bold'>
          <p>Copyright ©2024 All rights reserved | Developed by Abdullah Shahed</p>  
          </div>      

    </div>
  )
}

export default Footer
