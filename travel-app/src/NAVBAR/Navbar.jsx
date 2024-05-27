import React from 'react'

import { Link } from 'react-scroll';

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

const toggleMenu = () => {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('hidden');
  
  
  var menuIcon = document.querySelector('.text-3xl ion-icon');
  if (menuIcon.name === 'menu') {
      menuIcon.name = 'close';
      
  } else {
      menuIcon.name = 'menu';
      
  }
  
}

const Navbar = () => {

  return (

   <>
   
<div className=' text-white'>

<img className='w-full h-[700px]' src="./Images/travel1.jpg" alt="" />
     
  <div className='relative'>
     <nav id='navbar' className='flex flex-col md:flex-row justify-between py-6 px-3 md:px-36 top-0 fixed w-full z-10'>

<div className='flex justify-between'>
<h1 className='text-4xl font-serif font-bold'>Travel</h1>
<span class="text-3xl flex items-center cursor-pointer md:hidden text-left" onClick={toggleMenu}>
        <ion-icon name="menu"></ion-icon>
     </span>
</div>


<div className='bg-[#839f9e] md:bg-transparent rounded-md py-3 px-3 nav-menu mt-3 md:mt-0 hidden flex md:flex flex-col md:flex-row gap-4 md:gap-8 md:items-center justify-center'>
  
  <a href="#"><Link to="\" smooth={true} duration={500}><p className='text-22px font-bold hover:text-orange-400'>Home</p></Link></a>
  <a href="#"><Link to="services" smooth={true} duration={500}><p className='text-22px font-bold hover:text-orange-400'>Services</p></Link></a>
  <a href="#"><Link to="package" smooth={true} duration={500}><p className='text-22px font-bold hover:text-orange-400'>Package</p></Link></a>
  <a href="#"><Link to="des" smooth={true} duration={500}><p className='text-22px font-bold hover:text-orange-400'>Destination</p></Link></a>
  <a href="#"><Link to="contact" smooth={true} duration={500}><p className='text-22px font-bold hover:text-orange-400'>Contact Us</p></Link></a>

</div>

</nav>
     </div>


      <div className='mx-3 md:mx-36 mt-28 pb-28 absolute top-28'>

          <div>
          <h1 className='text-[50px] md:text-[60px] font-mono w-[350px] font-bold leading-[70px]'>Enjoy Your Travel</h1>
          </div>

          <div className='mt-4'>
            <p className='w-[350px] md:w-[420px] leading-7'>Enthusiastically extend extensive customer service before best breed convergence completely</p>
          </div>

          <div className='mt-8'>
            <button className='bg-white hover:scale-105 hover:bg-pink-300 hover:transition hover:duration-500 font-semibold h-[50px] w-[170px] text-[blue] rounded-md'>Let's Go Now</button>
          </div>
      </div>


</div>
   
   </>
  )
}

export default Navbar
