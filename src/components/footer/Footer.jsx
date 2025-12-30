/* eslint-disable no-unused-vars */
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='z-20 text-black flex  justify-around items-center w-full bg-black/20  p-5 md:overflow-hidden overflow-x-scroll'>

            <div
                className="tracking-widest hidden md:block">
                ©
                {
                    new Date()
                        .getFullYear()
                } MOHAMMAD ZAMEERUDDIN ANSARI.
            </div>

                {/* quick links */}
            <ul
                className="flex justify-center items-center gap-x-5 tracking-widest">

                <li>
                    <a
                        title="Home"
                        href="#Home">
                        Home
                    </a>
                </li>

                <li>
                    <a
                        title="Experience"
                        href="#Experience">
                        Experience
                    </a>
                </li>

                <li>
                    <a
                        title="Education"
                        href="#Education">
                        Education
                    </a>
                </li>

                <li>
                    <a
                        title="Subjects"
                        href="#Subjects">
                        Subjects
                    </a>
                </li>

                <li>
                    <a
                        title="Skills"
                        href="#Skills">
                        Skills
                    </a>
                </li>

                <li>
                    <a
                        title="Achievement"
                        href="#Achievement">
                        Achievement
                    </a>
                </li>

                <li>
                    <a
                        title="Contact"
                        href="#Contact">
                        Contact
                    </a>
                </li>
            </ul>

                {/* social links */}
            <ul
                className="flex justify-center items-center gap-x-5 md:ml-0 ml-5">

                <li>
                    <a
                        title="Facebook"
                        href="#">
                        <FaFacebook
                            size={20}
                        />
                    </a>
                </li>

                <li>
                    <a
                        title="Instagram"
                        target="_blank"
                        href="https://www.instagram.com/_zameer_98/?__pwa=1">
                        <FaInstagram
                            size={20}
                        />
                    </a>
                </li>

                <li>
                    <a
                        title="Linkedin"
                        target="_blank"
                        href="https://www.linkedin.com/in/mohammad-zameeruddin-ansari-ab708a255/">
                        <FaLinkedin
                            size={20}
                        />
                    </a>
                </li>
            </ul>
            
        </motion.div>
    )
}


export default Footer