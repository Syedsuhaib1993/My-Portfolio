
import icon_react from '/icon_react.png'
import  supabase from '/supabase.png'
import tailwindcss from '/tailwindcss.png'
import typescript from '/typescript.png'
import imghero from '/imghero.png'

const skillsData =[
    {id:1,image:icon_react,title:"React",description:' I use component-based architecture to build dynamic and maintainable UIs, leveraging hooks and context for efficient state management.'},
    {id:2,image:tailwindcss,title:"TailwindCSS",description:'I design sleek, responsive layouts rapidly with utility-first classes, ensuring consistency and customization without writing repetitive styles.'},
    {id:3,image:typescript,title:"TypeScript",description:' With strong typing and static analysis, I write robust, error-resistant code that scales well with project complexity..'},
    {id:4,image:supabase,title:"SupaBase",description:'I implement real-time databases, authentication, and backend functionality seamlessly, enabling full-stack capabilities without traditional server overhead.'}
]

const SkillBox = ({image,title,description}) =>(
    <article className='bg-gray-800 p-4 sm:p-6 rounded-lg text-center hover:bg-purple-800 transition-all duration-300'>
        <figure className='flex justify-center mb-4'> 
        <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />    
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
        </header>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p> 
    </article>
)

const Skills = () => {
  return (
    <section id='skills' className='relative -z-0 min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
        <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28
        left-1/2  transform -translate-x-1/2'>
        </div>
        <img src={imghero}
         alt="Left Picture" 
         className='absolute z-10 left-2 top-2 sm:left-16 sm:top-30 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70'/>

         <div data-aos="fade-up" data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
            <header>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    My Experties <br/> and <span className='text-purple-400'>Skills</span>
                </h1>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    Here’s a well-structured section for my portfolio that highlights my expertise and skills based on your use of following . . .
                </p>
            </header>
            <section
            data-aos="fade-up" 
            data-aos-delay='300'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6'>
                {skillsData.map((skill)=> (
                    <SkillBox
                    key={skill.id}
                    image={skill.image}
                    title={skill.title}
                    description={skill.description} />
                ))}
            </section>
         </div>
         <img src={imghero} alt="Right picture"
         className='absolute z-10 right-2 top-2 sm:right-16 sm:top-30 transform rotate-12 w-24 h-auto sm:w-32 opacity-70' />
    </section>
  )
}

export default Skills
