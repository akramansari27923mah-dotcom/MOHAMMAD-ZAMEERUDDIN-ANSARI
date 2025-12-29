// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const EducationHead = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className='w-full flex justify-center items-center'>

      <h1
        className=' text-4xl bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent tracking-widest'>
        Education
      </h1>
      
    </motion.div>
  )
}

export default EducationHead
