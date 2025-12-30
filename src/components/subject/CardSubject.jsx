// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CardSubject = ({ Image, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='flex justify-center items-center flex-col flex-wrap hover:scale-105 transition-all duration-300 cursor-pointer'>

      <div>
        <img
          className='w-80'
          src={Image} />
      </div>

      <div>
        <p
          className='md:text-4xl md:text-black'>
          {name}
        </p>
      </div>

    </motion.div>
  )
}

export default CardSubject