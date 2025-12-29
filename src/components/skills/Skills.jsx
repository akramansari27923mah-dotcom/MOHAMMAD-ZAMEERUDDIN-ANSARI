import React from 'react'
import SkillsCard from './SkillsCard'
import skills from '../../data/skills'

const Skills = () => {
    return (
        <div id='Skills' className='flex flex-col justify-center items-center  w-full min-h-screen gap-y-10 z-10'>
            <h1 className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-4xl tracking-widest'>skills</h1>
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