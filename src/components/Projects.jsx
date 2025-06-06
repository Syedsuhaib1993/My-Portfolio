import React from 'react'
import project1 from '/project1.png'
import project2 from '/project2.png'
import project3 from '/project3.png'
import project4 from '/project4.PNG'
import project5 from '/project5.PNG'
import project6 from '/project6.PNG'

const ProjectCard =({image,title,description,link})=>{
    return(
        <article  className='relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group '>
            <div 
            className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf3] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
            <div className='relative z-10'>
            <figure className='relative'>
                <img src={image} alt={title} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
                <a href={link} target='_blank'  
                className='absolute h-[200px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0
                group-hover:opacity-100 transition-opacity duration-300'>
                    <button className='bg-white font-medium text-black px-4 py-2 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
                        Live Preview
                        </button>
                </a>
            </figure>
            <div className='py-4 px-6'>
                <header>
                    <h3 className='text-white font-bold text-xl mb-2'>{title}</h3>
                </header>
                <p className='text-gray-200 text-base'>{description}</p>
            </div>
            </div>
            
        </article>
    )
}

const Projects = () => {
    const ListProjects = [
        {
            image: project1,
            title: 'Car Selling Website', 
            description: 'An fully responsive Online Cars Selling App Build on React using Tailwind Css',
            link: 'https://sale-wheels.vercel.app/',
        },
        {
            image: project2,
            title: 'Perfume Selling Website', 
            description: 'An fully responsive Online Perfume Selling  App Build on React using Tailwind Css',
            link: 'https://perfume-website-xi.vercel.app/',
        },
        {
            image: project3,
            title: 'Medical Service Website', 
            description: 'An fully responsive Online Medical Service  App Build on React using Tailwind Css',
            link: 'https://medical-cure.vercel.app/',
        },
        {
            image: project4,
            title: 'Hangman Game', 
            description: 'An fully responsive Hangman Game Build on React using Tailwind Css',
            link: 'https://hangman-game-one-flax.vercel.app/',
        },
        {
            image: project5,
            title: 'Text Maker', 
            description: 'An fully responsive Text Maker Build on React using Tailwind Css with dark mode',
            link: 'https://text-maker-react.vercel.app',
        },
        {
            image: project6,
            title: 'To Do App', 
            description: 'An fully responsive To Do App Build on React using Tailwind Css ',
            link: 'https://to-do-app-reacts.vercel.app',
        }
    ]
  return (
    <main className='p-4' id='projects'>
        <section data-aos="fade-up" data-aos-delay="300">
            <header className='text-center'>
                <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                    My <span className='text-purple-400'>Projects</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 sm:text-base'>
                    Following are some glance of my work in project form
                </p>
            </header>
        </section>
        <section data-aos="fade-up" data-aos-delay="500"
        className='flex flex-wrap justify-center gap-4 mt-6'>
            {ListProjects.map((project,index)=>(
                <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link} />
            ))}
        </section>
    </main>
  )
}

export default Projects
