// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import 'animate.css';

const Links = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='text-black hidden md:block text-[15px]'>

            <ul className='flex justify-center items-center gap-x-10 animate__animated animate__flip animate_delay_3 tracking-widest'>

                <a href="#Home">
                    <li
                        title="Home"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        Home
                    </li>
                </a>

                {/* <a href="#Home">
                    <li
                        title="About"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        About

                    </li>
                </a> */}
                <a href="#Education">
                    <li
                        title="Education"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        Education

                    </li>
                </a>

                <a href="#Experience">
                    <li
                        title="Experience"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        Experience

                    </li>
                </a>


                <a href="#Subjects">
                    <li
                        title="Subjects"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        Subjects

                    </li>
                </a>

                <a href="#Skills">
                    <li
                        title="Skills"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        Skills
                    </li>
                </a>

                <a href="#Achievement">
                    <li
                        title="Achievement"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        Achievement
                    </li>
                </a>

                <a href="#Contact">
                    <li
                        title="Contact"
                        className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                        Contact
                    </li>
                </a>

            </ul>

        </motion.div>
    )
}

export default Links
