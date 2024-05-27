import React from 'react'

import { Element } from 'react-scroll';
import './App.css'
import Navbar from './NAVBAR/Navbar'
import Vacation from './VACATION/Vacation'
import Vacation_data_set from './VACATION/Vacation_data_set'
import Package from './PACKAGE/Package'
import Destination from './DESTINATION/Destination'
import ContactUs from './CONTACT_US/ContactUs'
import Footer from './FOOTER/Footer';



function App() {


  return (

    <>
  
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
      

    </>

  )
}

export default App
