import React,{useState} from 'react'
import { FiMenu,FiX } from 'react-icons/fi'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const NavbarLinks = [
        {id:1,name:'Home',link:'#home'},
        {id:1,name:'About',link:'#about'},
        {id:1,name:'Skills',link:'#skills'},
        {id:1,name:'My Projects',link:'#projects'}
    ]
  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-duration='400'>
        <div className='container mx-auto flex items-center justify-between p-5'>
            {/* lOGO */}
            <a href="#home" className='text-4xl font-bold italic text-white'>Portfolio</a>

            {/* MOBILE MENU TOGGLE */}
            <button className='md:hidden focus:outline-none' onClick={()=>setOpen(!open)}> 
                <FiMenu className='w-8 h-8 text-white'/>
            </button>

            {/* DESKTOP NIVIGATION */}
            <nav className='hidden md:flex items-center space-x-7'>
                {NavbarLinks.map((link)=>(
                    <a key={link.id} href={link.link} className='text-lg hover:text-gray-200 '>
                    {link.name}
                </a>
                ))}
            <button  className='inline-flex text-white border-2 py-2 px-6 focus:outline-none
            hover:bg-purple-800 rounded-full text-lg'>
               <a href="#contact"> {""}Contact{""}</a>
            </button>
            </nav>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className={`${open? 'block':'hidden'} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full
        h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
            {/* CLOSE BUTTON */}
            <button className='absolute top-5 right-5 text-white' onClick={()=>setOpen(false)}>
                <FiX className='w-8 h-8 '/>
            </button>
            {/* MOBILE NAVIGATION */}
            {NavbarLinks.map((link)=>(
                <a key={link.id} href={link.link} className='text-lg hover:text-gray-200'
                onClick={()=>setOpen(false)}>
                    {link.name}
                </a>
            ))}
            {/* CONTACT BUTTON */}
            <button  onClick={()=>setOpen(false)} className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800
            rounded-full text-lg'>
                   <a href="#contact"> {""}Contact{""}</a>
            </button>
        </div>
    </header>
  )
}

export default Navbar
