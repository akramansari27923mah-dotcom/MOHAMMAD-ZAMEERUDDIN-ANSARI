/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'
const SkillsCard = ({skillsName, Image}) => {
    return (
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.5, ease:'easeInOut'}}
         className='text-black border border-gray-500 rounded-lg overflow-hidden'>
            <div className='w-70 flex flex-col gap-y-5'>
                <img className='w-90 h-47 object-contain' src={Image} alt="" />
                <h1 className='p-5 bg-white border border-gray-400 text-[19px] font-semibold text-nowrap'>{skillsName}</h1>
            </div>
        </motion.div>
    )
}

export default SkillsCard