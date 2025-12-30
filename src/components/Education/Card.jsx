// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Card = ({ UniversityName, degree, date, grade, key }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className=" backdrop-blur-lg  bg-black/20 mt-10 flex justify-center items-center transition-all duration-300 hover:scale-105 cursor-pointer">

            <div
                key={key}
                className="text-black flex flex-col justify-center items-center flex-wrap gap-y-5 lg:gap-y-5 w-80 md:h-70 border border-gray-300 text-center px-2 md:mx-0">

                <p
                    className="lg:text-5xl text-nowrap text-[50px] animate-pulse">
                    🎓
                </p>

                <p
                    className="lg:text-[17px] font-semibold text-wrap text-[18px]">
                    {degree}
                </p>

                <p
                    className="lg:text-[16px] tracking-widest text-wrap text-[18px]">
                    {UniversityName}
                </p>

                <p
                    className="lg:text-[16px] tracking-widest text-[18px]">
                    {date}
                </p>

                <p
                    className="text-green-500 tracking-widest mb-2 lg:mb-0 text-[14px]">
                    {grade}
                </p>

            </div>
        </motion.div>
    )
}

export default Card