import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion, } from 'framer-motion';

const Menu = () => {
    const [menu, setMenu] = useState(false)

    const menuHandel = () => {
        setMenu(!menu)
    }
    return (
        <div className='sm:hidden'>

            {/* menu condition */}
            {
                !menu ?
                    <GiHamburgerMenu
                        onClick={menuHandel}
                        size={20} title='Menu Open'
                        className='text-white cursor-pointer' /> :
                    <RxCross2
                        onClick={menuHandel}
                        size={20}
                        title='Menu Close'
                        className='text-white cursor-pointer' />
            }


            {/* menu */}
            {/* open social */}
            {
                menu &&
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='fixed h-75 z-20 right-0 top-18 backdrop-blur-md bg-black/70 rounded-b-xl py-5 px-8'>

                    <p
                        className='text-white border-b text-center border-gray-400 select-none'>
                        Social Media
                    </p>

                    <ul className='flex flex-col justify-center p-5 items-center gap-y-10 select-none'>

                        <a href="#Linkedin">
                            <li
                                title="Linkedin"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer text-white hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                                <FaLinkedin
                                    size={25}
                                />
                            </li>
                        </a>

                        <a href="#Facebook">
                            <li
                                title="Facebook"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300 text-white hover:text-blue-500'>
                                <FaFacebook
                                    size={25}
                                />
                            </li>
                        </a>

                        <a href="#Instagram">
                            <li
                                title="Instagram"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300 text-white hover:text-pink-500'>
                                <FaInstagram
                                    size={25}
                                />
                            </li>
                        </a>

                       {/* <a href="#Twitter">
                            <li
                                title="Twitter"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300 text-white hover:text-blue-500'>
                                <FaTwitter
                                     size={25}
                                />
                            </li>
                        </a> */}

                    </ul>
                </motion.div>

            }


            {/*Quick Links */}

            {
                menu &&
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='fixed h-auto left-0  top-18 backdrop-blur-md bg-black/70 rounded-b-xl px-8 py-5'>

                    <p
                        className='text-white border-b text-center border-gray-400 select-none'>
                        Quick Links

                    </p>


                    <ul className=' flex flex-col text-white justify-center p-5 items-center gap-y-10 select-none'>
                        <a href="#Home">
                            <li
                                title="Home"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                                Home
                            </li>
                        </a>

                        <a href="#About">
                            <li
                                title="About"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                                About
                            </li>
                        </a>

                        <a href="#Experience">
                            <li
                                title="Experience"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                                Experience
                            </li>
                        </a>

                        <a href="#Education">
                            <li
                                title="Education"
                                className='opacity-70 hover:opacity-100 hover:-translate-y-1 cursor-pointer hover:scale-105 transition-all duration-300'>
                                Education
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



            }


        </div>
    )
}

export default Menu