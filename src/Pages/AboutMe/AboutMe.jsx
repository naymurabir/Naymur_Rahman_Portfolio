import aboutMeImg from '../../assets/heroImg.jpeg'
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {
    return (
        <div className="mt-5 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">
            <div className='text-white text-center font-semibold mb-10'>
                <h2 className='text-3xl'>About Me</h2>
                <p className='text-[#854CE6]'>Who i am</p>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 items-center'>
                <div className='lg:w-[40%]'>
                    <img className='w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-2 border-purple-800' src={aboutMeImg} alt="" />
                </div>

                <div className='lg:w-[60%]'>
                    <h2 className='text-white text-2xl lg:text-2xl my-3 font-semibold'>
                        I am, <br />
                        <TypeAnimation className='text-[#854CE6] font-semibold'
                            sequence={[
                                'Specialized in Front-End Technologies',
                                1000,
                                'Comfortable With backend',
                                1000,
                                'Enthusiastic Learner',
                                1000,
                                'Aspire To Be a Leader',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: 'base', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-white'>As I Studied Computer Science & Engineering, I am Learning MERN stack Development for implementing a web-based application. I have knowledge and experience in JavaScript and Collection Framework. I have a comprehensive understanding of the Software Development Life Cycle. <br /> <br />

                        I have experience in HTML5, CSS3, Github, ES, API, JavaScript, JSON, Tailwind, Bootstrap, React, React Router, Firebase, NodeJS, ExpressJS MongoDB with responsive web applications using React JS libraries.
                        I am a self-motivated individual with good communication skills and leadership qualities.</p>

                    <button className="text-white border-2 border-purple-600 font-bold py-2 px-3 rounded-xl hover:bg-[#854CE6] mt-4">LinkedIn</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;