// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CardExperience = (props) => {
    const { profation, name, date, type, link, Image} = props
    return (
        <div className='flex  justify-center items-center gap-x-5 flex-wrap'>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='lg:flex  flex flex-col gap-y-5 lg:gap-x-10 justify-center items-center  backdrop-blur-lg bg-black/40 rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer '>

                <div className='bg-white'>
                    <img
                        className='md:w-90 w-85 h-60 object-contain rounded-[50%]'
                        src={Image}
                    />
                </div>

                <div
                    className='text-white flex justify-center  lg:flex flex-col lg:justify-center lg:items-start gap-y-3 lg:text-2xl text-[20px] text-nowrap'>

                    <p className='text-[18px]'>
                        {profation}
                    </p>

                    <p className='text-gray-400'>
                        {name}
                    </p>

                    <p className='text-gray-400'>
                        {date}
                    </p>

                    <div
                        className='flex items-center justify-around mb-2 w-full gap-x-15'>

                        <p className='text-[18px]'>
                            {type}
                        </p>

                        <a
                            target='_blank'
                            title={name}
                            href={link}>

                            <button
                                className='py-1 px-5 rounded-2xl border-[0.5px] border-gray-400 transition-all duration-300 hover:text-green-600 hover:border-green-500  cursor-pointer bg-black/70'>
                                Visit
                            </button>

                        </a>
                        
                    </div>

                </div>

            </motion.div>
        </div>
    )
}
/* 
THE CHENNAI TUITION logo

Science Educator
THE CHENNAI TUITION · Freelance
Dec 2024 to Present · 1 yr 1 mo

*/

export default CardExperience