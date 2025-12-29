// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import 'animate.css';


const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className='text-white'>

      <h1
        className='lg:text-4xl text-2xl bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent select-none animate-pulse animate__animated animate__wobble'>
        Zameer
      </h1>
      
    </motion.div>
  )
}

export default Logo