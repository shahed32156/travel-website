import React from 'react'

const Vacation_data_set = (props) => {

    const {img, title, properties} = props;

  return (

    <a href="#">

        <div className='mx-auto py-10 rounded-lg shadow-md shadow-black md:hover:scale-110 md:hover:transition-all md:hover:duration-500 md:hover:bg-[#f8f6f6]'>

        <img className='bg-pink-200 py-2 px-2 rounded-md shadow-sm shadow-black h-[50px] w-[50px] mx-auto mb-2' src={img} alt="" />
        <h4 className='text-center text-[20px] font-bold'>{title}</h4>
        <p className='text-center'>{properties}</p>

</div>

    </a>
  )
}

export default Vacation_data_set
