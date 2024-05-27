import React from 'react'

const Footer_set_data = (props) => {

const {title, num1, num2, num3, num4, num5} = props;

  return (

    <div className='md:mx-auto'>

        <div className='mx-auto flex flex-col gap-3'>

                <h4 className='text-[20px] font-bold border-b-4 border-white md:border-none rounded-lg pb-2'>{title}</h4>
                <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>{num1}</p></a>
                <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>{num2}</p></a>
                <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>{num3}</p></a>
                <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>{num4}</p></a>
                <a className='md:hover:scale-105 md:hover:transition-all md:hover:duration-300' href="#"><p>{num5}</p></a>
                

        </div>
      
    </div>
  )
}

export default Footer_set_data
