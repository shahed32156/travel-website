import React from 'react'

import Data from './data.json'
import Vacation_data_set from './Vacation_data_set'

const Vacation = () => {

  let items = [];

  for (let i=0; i<Data.length; i++) {

    items.push( <Vacation_data_set img={Data[i].img} title={Data[i].title} properties={Data[i].properties} />)
  }

  return (
    <>
    
    <div className='md:mx-36 mx-3 mt-24'>

    <div>
    
            <h1 className='text-3xl text-center font-bold font-[popins]'>Start Your Vacation With Lots of Services!</h1>
            
    </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20'>

            {items}

      </div>


    </div>
    
    
    </>
  )
}

export default Vacation
