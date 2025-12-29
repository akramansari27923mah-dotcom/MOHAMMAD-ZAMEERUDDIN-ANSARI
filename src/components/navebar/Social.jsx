import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import 'animate.css';

const Social = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden lg:block">
            <div className='text-white md:flex justify-center items-center gap-x-5 animate__animated animate__tada'>

                <a
                    // link
                    target="_blank"
                    href="https://www.linkedin.com/in/mohammad-zameeruddin-ansari-ab708a255/">

                    {/* icon */}
                    <FaLinkedin
                        size={20}
                        className=" cursor-pointer hover:text-blue-500 transition-all duration-300 hover:scale-110"
                    />
                </a>

                <a href="#Facebook">
                    <FaFacebook
                        size={20}
                        className=" cursor-pointer hover:text-blue-500 transition-all duration-300 hover:scale-110"
                    />
                </a>

                <a href="#Instagram">
                    <FaInstagram
                        size={20}
                        className=" cursor-pointer hover:text-pink-500 transition-all duration-300 hover:scale-110"
                    />
                </a>

                {/* <a href="#Twitter">
                    <FaTwitter
                        size={20}
                        className=" cursor-pointer hover:text-blue-500 transition-all duration-300 hover:scale-110"
                    />
                </a> */}

            </div>
        </motion.div>
    )
}

export default Social
