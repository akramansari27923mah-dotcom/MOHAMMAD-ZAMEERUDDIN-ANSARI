// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import 'animate.css';

const Main = () => {
    return (
        <div id="Home" className="w-full min-h-screen flex flex-col justify-center items-center px-20">

            <div
                className="flex flex-col justify-center items-center gap-y-2 md:mt-10   w-full md:h-screen">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <img
                        className=" lg:w-90 lg:h-90 w-70 h-70 object-cover" src="arman.png"
                    />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className=" flex flex-col justify-center items-center gap-y-2 animate__animated animate__flip animate__delay__3">

                    <h1 className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent sm:text-3xl md:text-2xl  text-nowrap animate-pulse text-[18px] tracking-widest">
                        MOHAMMAD ZAMEERUDDIN ANSARI
                    </h1>

                    <h1 className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent sm:text-4xl text-3xl text-nowrap animate-pulse">
                        I'm Physics Educator
                    </h1>

                    <p className="max-w-150 text-gray-400 text-center hidden sm:block">
                        Passionate Educator | Student-Focused Learning
                        Dedicated Teacher | Lifelong Learner
                        Educator Focused on Student
                    </p>


                    <p className="max-w-150 text-gray-400 text-center  sm:hidden">
                        “Dedicated Educator | Student-Centered Learning”
                    </p>
                </motion.div>

            </div>
        </div>
    )
}

export default Main