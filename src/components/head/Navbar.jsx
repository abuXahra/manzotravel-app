
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"; 
import { RxDash } from "react-icons/rx";
import { menuItems } from '@/app/data/menu';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import autoAnimate from '@formkit/auto-animate'
import { useAutoAnimate } from '@formkit/auto-animate/react'

  



export default function Navbar() {

    const [isMobileMenu, setIsMobileMenu] =useState(false);
    
    const [animationParent] = useAutoAnimate();

    const openSideMenu = ()=>{
        setIsMobileMenu(true);
    }

    const closeSideMenu = () =>{
        setIsMobileMenu(false);
    }

  return (
  <nav className=' bg-white text-slate-800 py-8 px-4 w-full   flex gap-2 justify-between items-center'>
   {/* logo */}
    <div className='flex gap-6 items-center text-md from-neutral-950'>
        <Link href={'/home'}><Image width={100} height={60} src="/images/logo.png" alt="logo" srcset="" /></Link>
      
        <div>
            {/* NavLinks */}
          
            <ul className={'gap-4 hidden lg:flex items-center relative '}>
                {menuItems.map((menu,i)=>(
                <li key={i} className='group transition-all duration-1000' >
                    <Link className='flex items-center' href={menu.href}>{menu.title} {menu.submenu && <IoMdArrowDropdown />}</Link>
                
                  { menu.submenu && 
                   <ul className='absolute flex-col font-normal shadow-md gap-2 hidden group-hover:flex  bg-white border-t-2 mt-1 border-orange-600 rounded-lg w-auto p-4 text-sm'>
                        {menu.submenu?.map((item, i)=>(
                             <li className='flex gap-1' key={i}><RxDash/> <Link ref={animationParent} href={item.href}>{item.subTile}</Link></li>
                        ))}
                    </ul>}
                </li>
                ))}
                <li><Link href={"/affiliate"}>Affiliate</Link></li>
            </ul>
        </div>
    </div>
    <div>
        <button className='bg-orange-500 hidden lg:flex  py-2 px-4 text-white rounded-br-lg rounded-tl-lg' href={"#"}>Sign In</button>
       
       {/* Hamburger Icon */}
        <FiMenu onClick={()=>setIsMobileMenu(true)} className='cursor-pointer text-3xl lg:hidden'/>
    </div>
   {isMobileMenu && <MobileNav handleClose={closeSideMenu}/>}
    </nav>
  )
}



function MobileNav({handleClose}) {


     // Initialize isOpen state for each menu item
     const [isOpen, setIsOpen] = useState(Array(menuItems.length).fill(false));

     // Function to toggle submenu open/close
     const toggleSubMenu = (index) => {
         const updatedOpenState = isOpen.map((item, i) => i === index ? !item : false);
         setIsOpen(updatedOpenState);
     };

     const [animationParent] = useAutoAnimate();

 return (
    <div className='fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 lg:hidden'>
        <div className='h-full w-[60%] md:w-[40%] bg-blue-900 px-4 py-4'>
       {/* Close Icon */}
        <section className='flex justify-end text-white'>
            <AiOutlineClose onClick={handleClose} className='cursor-pointer text-3xl'/>
        </section>

        <div className='flex flex-col pl-10 gap-8'>
        {/* NavLinks */}
            <ul className={'gap-8 flex flex-col relative   text-white'}>
                {menuItems.map((menu,i)=>(
                <li  key={i} onClick={() => toggleSubMenu(i)} className='transition-all duration-1000' >
                    <Link   className='flex items-center' href={menu.href}>{menu.title} {menu.submenu && <IoMdArrowDropdown />}</Link>
                
                  { isOpen[i] && menu.submenu && 
                   <ul  className='absolute flex-col font-normal gap-2 flex text-white  bg-blue-900 mt-1  p-4 text-sm'>
                        {menu.submenu?.map((item, j)=>(
                             <li onClick={handleClose} className='flex gap-1' key={j}><RxDash/> <Link href={item.href}>{item.subTile}</Link></li>
                        ))}
                    </ul>}
                </li>
                ))}
                <li><Link onClick={handleClose} href={'/affiliate'}>Affiliate</Link></li>
            </ul>
            <div >
            <button onClick={handleClose} className='bg-orange-500 flex  
             py-2 px-4 text-white
              rounded-br-lg rounded-tl-lg'>Sign In</button> 
            </div>

        </div>    
       
        </div>
       
    </div>
 )   
} 



