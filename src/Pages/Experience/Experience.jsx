import { Helmet } from 'react-helmet-async';
import experienceImg from '../../assets/experienceImg.png'
import { FcApproval } from 'react-icons/fc';
import pentasterLogo from '../../assets/pentasterLogo.png'
import prograamingHeroLogo from '../../assets/prograamingHeroLogo.png'

const Experience = () => {
    return (
        <div className="py-20 lg:py-32 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">
            <Helmet>
                <title>
                    Experience
                </title>
            </Helmet>

            <div className='flex flex-col lg:flex-row items-center'>
                <div className='lg:w-[50%]'>
                    <img className='w-[350px] md:w-[400px] lg:w-[400px]' src={experienceImg} alt="" />
                </div>
                <div className='lg:w-[50%]'>
                    <h2 className='text-3xl font-bold text-[#854CE6] text-center'>Experiences</h2>

                    <p className='text-sm md:text-base font-normal text-white text-center mt-2'>I have over 1 year of experience as a Full Stack Software Engineer, during which I have worked on various projects. Reflected my entrepreneurial spirit and love for software development. <br /> <br /> Proficient in front-end and back-end technologies, adept at creating responsive and visually captivating websites and web applications. Skilled in HTML, CSS, JavaScript, and various frameworks such as React and Node.js. Experienced in designing intuitive user interfaces and robust server-side functionalities, dedicated to delivering cutting-edge online experiences that meet diverse user needs.</p>
                </div>
            </div>

            {/* ------------ */}
            <div className='flex flex-col lg:flex-row mt-10 lg:mt-28 gap-10 items-center'>
                <div>
                    <img className='w-40 md:w-44 lg:w-60' src={pentasterLogo} alt="" />
                </div>

                <div>
                    <div className=''>
                        <div className='bg-[#854CE6] px-5 py-5 flex flex-col lg:flex-row gap-5 lg:gap-5 justify-center rounded-tl-lg rounded-tr-lg '>
                            <div className='text-center'>
                                <h2 className='text-2xl text-white font-semibold'>Junior Full Stack Developer Trainee.</h2>
                                <h3 className='text-xl text-white font-semibold mt-2'>Pen Tester Space, Bangladesh</h3>
                                <h4 className='text-sm text-white font-semibold mt-2'>Dhaka, Bangladesh (Remote)</h4>
                                <p className='text-sm text-white font-semibold mt-2'>(Nov,2021-Dec,2021)</p>
                            </div>
                        </div>

                        <div className='bg-white px-5 py-5 rounded-bl-lg rounded-br-lg'>
                            <p className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval> Here i have learned basic MERN Stack programming languages, techniques. Also i have learned some basic introduction about various frameworks, libraries etc.</p>

                            <p className='flex gap-2 mt-3'> <FcApproval className='text-3xl'></FcApproval>I have obtained a collection of industrial environments from this particular organization, which I am currently in the process of analyzing and considering for potential modifications.</p>

                            <div className='flex justify-end'>
                                <a href="https://pentesterspace.com" target="_blank" rel="noopener noreferrer">
                                    <button className="text-[#854CE6] text-sm border-2 border-purple-600 font-semibold py-2 px-3 rounded-xl hover:bg-[#854CE6] hover:text-white mt-4">
                                        Visit Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------ */}
            <div className='flex flex-col lg:flex-row mt-10 lg:mt-28 gap-10 items-center'>
                <div>
                    <img className='w-40 md:w-44 lg:w-60' src={prograamingHeroLogo} alt="" />
                </div>

                <div>
                    <div className=''>
                        <div className='bg-[#854CE6] px-5 py-5 flex flex-col lg:flex-row gap-5 lg:gap-5 justify-center rounded-tl-lg rounded-tr-lg '>
                            <div className='text-center'>
                                <h2 className='text-2xl text-white font-semibold'>Complete Web Development Course With Jhankar Mahbub</h2>
                                <h3 className='text-xl text-white font-semibold mt-2'>Programming Hero</h3>
                                <h4 className='text-sm text-white font-semibold mt-2'>Dhaka, Bangladesh (Remote)</h4>
                                <p className='text-sm text-white font-semibold mt-2'>(June,2023-Dec,2023)</p>
                            </div>
                        </div>

                        <div className='bg-white px-5 py-5 rounded-bl-lg rounded-br-lg'>
                            <p className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>From Programming Hero, I Dived into the world of modern web development with a focus on MERN stack - MongoDB, Express.js, React, and Node.js course from the beginning of my journey.</p>

                            <p className='flex gap-2 mt-3'> <FcApproval className='text-3xl'></FcApproval>From this training, i am skilled at collaborating with teams and turning client requirements into scalable solutions while staying up-to-date with the latest technologies of both front end and back end.</p>

                            <div className='flex justify-end'>
                                <a href="https://www.programming-hero.com" target="_blank" rel="noopener noreferrer">
                                    <button className="text-[#854CE6] text-sm border-2 border-purple-600 font-semibold py-2 px-3 rounded-xl hover:bg-[#854CE6] hover:text-white mt-4">
                                        Visit Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Experience;