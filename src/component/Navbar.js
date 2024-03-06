import { useState } from "react";
import Typewriter from 'typewriter-effect';

function Navbar() {
    const [isOpen,setClick]=useState(false);
	const handleClick=()=>{
		setClick(!isOpen)
	}
  return (
    <>
  <header class="bg-white bg-gradient-to-br from-orange-200 ... lg:px-20 sm:px-0">
    <nav x-data="{ isOpen: false }" class="relative   ">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
            {/* <img src="asset/logo.png" className="w-24 h-24"></img> */}

    <h1 class="text-xl  text-orange-700 font-extrabold  ">OM Clinic</h1>
                <div class="flex md:hidden">
                    <button onClick={handleClick} type="button" class="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        {!isOpen && 
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                        }
                    {isOpen && 
                    
                        <svg  xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                    </button>
                </div>
            </div>

    
            <div  className={isOpen ? 'translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center' : 'opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'} >
                <div class="flex flex-col md:flex-row md:mx-6">
                    <a class="my-2 text-orange-700 text-2xl font-semibold transition-colors duration-300 transform  hover:text-black p-2 md:mx-4 md:my-0" href="#">Home</a>
                    <a class="my-2 text-orange-700 text-2xl font-semibold transition-colors duration-300 transform  hover:text-black p-2 md:mx-4 md:my-0" href="#">Shop</a>
                    <a class="my-2 text-orange-700 text-2xl font-semibold transition-colors duration-300 transform  hover:text-black p-2 md:mx-4 md:my-0" href="#">Contact</a>
                    <a class="my-2 text-orange-700 text-2xl font-semibold transition-colors duration-300 transform  hover:text-black p-2 md:mx-4 md:my-0" href="#">About</a>
                </div>
    
               
            </div>
        </div>
    </nav>

    <div class="container  py-4 mx-auto sm:px-8 lg:px-10">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
		<div className=" flex items-center m-auto  p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-screen md:w-80 md:h-80 lg:w-screen xl:h-112 2xl:h-128">
			<img src="asset/ww (1).png" alt="" className="item-center object-cover h-72 sm:h-80 md:h-80 md:w-80 lg:h-screen lg:w-screen xl:h-112 2xl:h-128" />
		</div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <div class="">
                    <h1 class="text-3xl  text-orange-700 font-extrabold lg:text-6xl ">OM Clinic <br/> and <span class="text-blue-950 ">Children Care</span>  <br/> 
                    {/* <span class="text-blue-950 font-extrabold">

                    <Typewriter style={{ color: 'black' }}
                                options={{
                                    strings: ['OM Clinic'],
                                    autoStart: true,
                                    loop: true,

                                    deleteSpeed: 150,
                                }}
                            />
                    </span> */}
                    </h1>
                    
                    <p class="mt-3 text-gray-900 ">Ready to experience the difference personalized care can make in your life? Schedule your appointment with us today and take the first step toward a healthier, happier you.</p>
         
                    
                    <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-500 rounded-lg lg:w-auto hover:bg-blue-950 focus:outline-none focus:bg-blue-500">Contact</button>
                </div>
            </div>
           

        </div>
    </div>
</header>
    </>
  );
}

export default Navbar;
