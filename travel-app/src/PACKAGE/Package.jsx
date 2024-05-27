import React from 'react'
import Data from './data.json'
import Package_data_set from './Package_data_set';

const Package = () => {

    let items = [];

    for (let i=0; i<Data.length; i++) {
  
      items.push( <Package_data_set img={Data[i].img} title={Data[i].title} dollar={Data[i].dollar} hour={Data[i].hour} />)
    }


  return (

   <>
   
   <div className='md:mx-36 mx-3 mt-24'>

     <div>

            <h1 className='text-3xl text-center font-bold font-[popins]'>Our Upcomming Tour Package</h1>
     
     </div>


     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-14 mt-20'>

        {items}

     </div>

   </div>
   
   </>
  

  )
}

export default Package
