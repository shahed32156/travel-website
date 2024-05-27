import React from 'react'

const Destination_data_set = (props) => {

    const {img, title, des} = props;

  return (

    <div className='mx-auto'>
    <a href="#">
     <img className='rounded-lg md:opacity-80 md:hover:opacity-100 md:hover:scale-105 md:hover:transition-all md:hover:duration-500 shadow-sm shadow-black h-[400px] w-[350px] mx-auto mb-2' src={img} alt="" />
     </a>
 
      
             <div className='relative'>
             
                 <h4 className='text-[25px] text-white font-bold absolute bottom-20 left-4'>{title}</h4>
                 <p className='text-[20px] text-white font-semibold absolute bottom-[44px] left-4'>{des}</p>
     
 
            </div>
     
 </div>
  )
}

export default Destination_data_set
