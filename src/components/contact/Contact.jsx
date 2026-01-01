import emailjs from '@emailjs/browser';
import { useRef, useState, } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import confetti from "canvas-confetti";


const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [subject, setSubject] = useState('');


    const fire = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
        });
    };


    const sendEmail = (e) => {
        e.preventDefault();

        const templateParam = {
            user_name: name,
            user_email: email,
            user_subject: subject,
            user_message: Message,
        };

        emailjs
            .send(
                'service_lohj276',
                'template_ofp9r6f',
                templateParam,
                'K2rM4-3Zu0DCu3cdS'
            ).then(
                () => {
                    toast.success('form submitted!')
                    fire()
                    setEmail('')
                    setMessage('')
                    setName('')
                    setSubject('')
                },
                (error) => {
                    console.log('FAILED...', error);
                    toast.error('your form not submitted')
                }
            );
    };

    return (
        <div id='Contact' className='w-full md:min-h-screen flex flex-col justify-center items-center text-white z-20 gap-y-10 mb-10 md:m-0'>

            <motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl'>Contact
            </motion.h1>

            <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                ref={form} onSubmit={sendEmail} className='border border-gray-400 p-5 bg-black/10 backdrop-blur-md shadow-lg rounded-lg flex flex-col justify-center gap-y-5 text-black'>

                <div className='flex flex-col justify-center gap-y-1'>
                    <label
                        className='font-semibold'>
                        Name
                    </label>

                    <input
                        placeholder='Enter your name'
                        name='user_name'
                        value={name}
                        required
                        className='border md:pr-30 pr-25 outline-none p-2 rounded-sm w-full border-gray-400 focus:border-gray-600'
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='flex flex-col justify-center gap-y-1'>
                    <label
                        className='font-semibold'>
                        email
                    </label>

                    <input
                        placeholder='Enter your email'
                        name='user_email'
                        required
                        value={email}
                        className='border md:pr-30 pr-25 outline-none p-2 rounded-sm w-full border-gray-400 focus:border-gray-600'
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='flex flex-col justify-center gap-y-1'>
                    <label
                        className='font-semibold'>
                        Subject
                    </label>

                    <input
                        placeholder='Enter your subject'
                        name='user_subject'
                        required
                        value={subject}
                        className='border md:pr-30 pr-25 outline-none p-2 rounded-sm w-full border-gray-400 focus:border-gray-600'
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className='flex flex-col justify-center gap-y-1'>
                    <label
                        className='font-semibold'>
                        Message
                    </label>

                    <textarea
                        placeholder='Your Message'
                        name='user_message'
                        value={Message}
                        className='border md:pr-30 pr-25 outline-none p-2 rounded-sm w-full border-gray-400 focus:border-gray-600'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <div className='text-center'>
                    <input
                        className='py-2 px-5 bg-black/10 backdrop-blur-md  text-black rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-500/40 hover:text-white'
                        type="submit"
                    />
                    <ToastContainer style={{ marginTop: "60px" }} />
                </div>
            </motion.form>
        </div>
    )
}

export default Contact