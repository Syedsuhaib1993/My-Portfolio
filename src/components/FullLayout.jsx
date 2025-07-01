import {React,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Body from './Body'
import About from './About'
import AnimatedDivs from './AnimatedDivs'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const FullLayout = () => {
     useEffect(()=>{
      AOS.init({
        duration: 1000,
      });
     },[])
  return (
    <main className='bg-gray-950'>
      <Body/>
      <About/>
      <AnimatedDivs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default FullLayout
