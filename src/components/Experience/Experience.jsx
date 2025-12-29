// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CardExperience from './CardExperience'
import experience from '../../data/experience';

const Experience = () => {
  return (
    <div
      id='Experience'
      className='w-full min-h-screen flex flex-col justify-end items-center gap-y-10 md:gap-y-15 md:mt-0 mt-20 '>

      <motion.h1

        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className=' text-4xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent tracking-widest'>
        Experience

      </motion.h1>

      {/* card components */}
      <div className='grid md:grid-cols-2 gap-x-40 gap-y-10'>
        {
          experience.map(({ profation, name, type, date, link, Image }) => (
            <CardExperience date={date} profation={profation} name={name} type={type} link={link} Image={Image} />
          ))
        }
      </div>

    </div>
  )
}

export default Experience
