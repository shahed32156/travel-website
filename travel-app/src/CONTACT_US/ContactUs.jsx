import React from 'react'

const ContactUs = () => {

  return (

    <>
    
    <div className='bg-pink-200 mx-3 rounded-lg py-10 px-10 md:mx-36 mt-20 flex flex-col md:flex-row justify-between gap-3 md:items-center'>

            <div className='flex flex-col gap-3'>

                        <h1 className='text-3xl font-bold'>Newsletter</h1>
                        <p>Subscribe for more updates about our latest travel blog </p>

            </div>

            
            <form action='#' className='flex gap-3'>

                    <input className='pl-2 h-[50px] w-full md:w-[300px] rounded-md focus:outline-none border-2 border-blue-300' type="email" name="" id="" placeholder='Enter your email' required />
                    <button className='bg-blue-600 md:hover:transition-all md:hover:duration-300 md:hover:bg-blue-400 h-[50px] rounded-md w-[100px] text-white font-semibold text-[20px]'>Send</button>
            
            </form>
    
    
    </div>
    
    
    </>
  )
}

export default ContactUs
