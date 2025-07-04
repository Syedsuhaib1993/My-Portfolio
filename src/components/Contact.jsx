import React from 'react'
import imghero from '/imghero.png'
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
     const phoneNumber = "92302521009"; // 👈 Your WhatsApp number in international format (without +)
  return (
   <section data-aos="fade-up" data-aos-delay="300" id="contact"
   className='min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative'>
        <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 group"
    >
      {/* Tooltip */}
      <div 
      className="absolute  right-14 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-4 py-1">
        Chat with me!
      </div>

      {/* Fancy Button */}
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 hover:shadow-xl ">
        <FaWhatsapp className="w-6 h-6" />
      </div>
    </a>
        <article className='shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative'>
            <aside className='w-full md:w-1/2 relative'>
                <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]
                sm:w-[#400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] 
                to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]'></div>
                <img src={imghero} alt="Contact picture"
                className='h-[320px]  sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative left-12 sm:left-4' />
            </aside>
            {/* Contact Form */}
            <section className='p-8 w-full md:w-1/2'>
                <header className='mb-6'>
                    <h2 className='text-4xl font-bold text-center text-white'>
                        Contact Us
                    </h2>
                </header>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='block text-gray-300 font-medium mb-2' >Name</label>
                        <input type="text"  name='name' id='name' placeholder='Your Name'
                        className='w-full text-white px-4 py-2 bg-gray-900 rounded-lg focus:outline-none'/>
                    </div>
                     <div>
                        <label htmlFor="email" className='block text-gray-300 font-medium mb-2' >Email</label>
                        <input type="email"  name='email' id='email' placeholder='Your email'
                        className='w-full text-white px-4 py-2 bg-gray-900 rounded-lg focus:outline-none'/>
                    </div>
                     <div>
                        <label htmlFor="Message" className='block text-gray-300 font-medium mb-2' >Message</label>
                        <textarea type="Message"  name='Message' id='Message' placeholder='Your Message'
                        className='w-full text-white px-4 py-2 bg-gray-900 rounded-lg focus:outline-none'></textarea>
                    </div>
                    <button className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c]
                    hover:shadow-[0_0_70px_rgba(182,0,182,0.7)] rounded-full text-lg'>
                        Send Message
                    </button>
                </form>
            </section>
        </article>
   </section>
  )
}

export default Contact
