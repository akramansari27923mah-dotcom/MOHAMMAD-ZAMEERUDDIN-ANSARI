/* eslint-disable no-unused-vars */
import achiv from "../../data/achiv"
import AchivCard from "./AchivCard"
import { motion } from 'framer-motion'

const Achievement = () => {
    return (
        <div
            id="Achievement" className="w-full min-h-screen flex flex-col justify-center items-center z-10 md:gap-y-15 gap-y-10">
            <div>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent md:text-4xl text-[20px] tracking-widest">ACHIEVEMENT AND AWARDS
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="grid md:grid-cols-3 gap-10 justify-center items-center text-center">
                {
                    achiv.map(({ name }) => (
                        <AchivCard name={name} />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Achievement