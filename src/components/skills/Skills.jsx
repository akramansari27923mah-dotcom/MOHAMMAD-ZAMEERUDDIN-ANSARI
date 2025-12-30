import SkillsCard from './SkillsCard'
import skills from '../../data/skills'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <div id='Skills' className='flex flex-col justify-center items-center  w-full min-h-screen gap-y-10 z-10'>
            <motion.h1
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.5, ease:'easeInOut'}}
             className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-4xl tracking-widest'>skills

            </motion.h1>
            <div className='grid md:grid-cols-3 gap-x-30 gap-y-20 '>
                {
                    skills.map(({ skillsName, Image }) => (
                        <SkillsCard skillsName={skillsName} Image={Image} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills