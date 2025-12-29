// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CardSubject from './CardSubject'
import subject from '../../data/subject'

const Subject = () => {
    return (
        <>
            <div
                id='Subjects'
                className='w-full min-h-screen flex flex-col justify-center items-center text-white'>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-3xl md:text-4xl tracking-widest'>
                    Subjects
                </motion.h1>

                <div
                    className='flex flex-wrap justify-center items-center gap-x-10'>
                    {
                        subject.map(({ Image, name }) => (
                            <CardSubject
                                Image={Image}
                                name={name}
                            />
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Subject