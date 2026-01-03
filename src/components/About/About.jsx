// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="About" className=" md:min-h-screen flex justify-center items-center flex-col  w-10/12 md:mb-10 mb-20 gap-y-10">

            <motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'circInOut' }}
                viewport={{ once: true }}
                className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl">
                About
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'circInOut' }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-x-10 bg-black/20 backdrop-blur-md p-5 rounded-md flex-col md:flex-row">
                <div>
                    <img className="mb-5" src="arman.png" alt="" />
                    <p className="md:text-2xl text-nowrap bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent ">MOHAMMAD ZAMEERUDDIN ANSARI</p>
                </div>

                <p className="md:text-2xl hidden md:block text-gray-600 tracking-tight">
                    I possess strong teaching skills with the ability to explain complex concepts in a simple, clear, and student-friendly manner. I focus on conceptual understanding rather than rote learning, using real-life examples, diagrams, and step-by-step explanations to make learning effective and interesting. I actively engage students through questioning, discussions, and problem-solving activities, ensuring their participation in the learning process. I am patient, approachable, and attentive to individual learning needs, which helps me support both fast and slow learners. My teaching approach encourages curiosity, critical thinking, and confidence among students, creating a positive and disciplined classroom environment.
                </p>

                <p className="md:hidden text-center mt-5">“I have strong teaching skills and explain complex concepts in a simple, clear, and student-friendly way. I focus on conceptual understanding using real-life examples and step-by-step explanations. I engage students through questions and discussions, support different learning speeds, and create a positive, confident, and disciplined classroom environment.”</p>
            </motion.div>
        </div>
    )
}

export default About