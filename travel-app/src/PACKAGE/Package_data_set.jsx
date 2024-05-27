import React from 'react'

import { FaStar } from "react-icons/fa6";


const Package_data_set = (props) => {

    const {img, title, dollar, hour} = props;

  return (

    

    <div className='mx-auto'>
   <a href="#">
    <img className='rounded-lg md:opacity-80 md:hover:opacity-100 md:hover:scale-105 md:hover:transition-all md:hover:duration-500 shadow-sm shadow-black h-[400px] w-[350px] mx-auto mb-2' src={img} alt="" />
    </a>
    <div className='relative'>
        <p className='text-[25px] text-white font-bold absolute bottom-[350px] right-4'>{dollar}</p>
    </div>
    <div className='flex flex-row justify-between items-center'>
     
            <div className='flex flex-col gap-2 mt-4'>
            
                <h4 className='text-[25px] font-bold'>{title}</h4>
                
                <p className='font-semibold'>{hour}</p>

                

            </div>


            <div className='flex gap-1'>
                    <FaStar className='text-[blue]' />
                    <FaStar className='text-[blue]' />
                    <FaStar className='text-[blue]' />
                    <FaStar className='text-[blue]' />
                    <FaStar className='text-[blue]' />
                    
                </div>
            
            
            
            

    </div>
    
</div>



  )
}

export default Package_data_set
