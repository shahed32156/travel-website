import React from 'react'

import Data from './data.json'
import Destination_data_set from './Destination_data_set';


const Destination = () => {

let items = [];

items = Data.map((item, index) => <Destination_data_set key={index} img={item.img} title={item.title} des={item.des} /> )
    
  return (
    <>
   
   <div className='md:mx-36 mx-3 mt-24'>

     <div>

            <h1 className='text-3xl text-center font-bold font-[popins]'>Our Most Popular Destintion!</h1>
     
     </div>


     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-14 mt-20'>

        {items}

     </div>

   </div>
   
   </>
  )
}

export default Destination
