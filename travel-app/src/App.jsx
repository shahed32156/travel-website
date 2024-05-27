import React, { useEffect, useState } from 'react'

import { Element } from 'react-scroll';
import './App.css'
import Navbar from './NAVBAR/Navbar'
import Vacation from './VACATION/Vacation'
import Package from './PACKAGE/Package'
import Destination from './DESTINATION/Destination'
import ContactUs from './CONTACT_US/ContactUs'
import Footer from './FOOTER/Footer';
import HashLoader from "react-spinners/HashLoader";




function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
      setTimeout(() => {
  
          setIsLoading(false)
  
      },4000)
  },[])


  return (

    <>
  
    {

      isLoading ?  
      
      <div className='flex justify-center items-center h-[100vh]'>
        <HashLoader className='' color="#36d7b7" />
      </div>
      :

      <div>
        <Navbar />

        <Element name="services"></Element> 
        <Vacation />

        <Element name="package"></Element>
        <Package />

        <Element name="des"></Element>
        <Destination />

        <Element name="contact"></Element>
        <ContactUs />

        <Footer />
      </div>
    }


    </>

  )
}

export default App
