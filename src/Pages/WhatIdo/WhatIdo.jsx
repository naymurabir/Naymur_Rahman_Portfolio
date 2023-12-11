import whatIdoImg from '../../assets/whatIdoImg.jpg'
import logo1 from '../../assets/skillsLogo/1.png'
import logo2 from '../../assets/skillsLogo/2.png'
import logo3 from '../../assets/skillsLogo/3.png'
import logo4 from '../../assets/skillsLogo/4.png'
import logo5 from '../../assets/skillsLogo/5.png'
import logo6 from '../../assets/skillsLogo/6.png'
import logo7 from '../../assets/skillsLogo/7.png'
import logo8 from '../../assets/skillsLogo/8.png'
import logo9 from '../../assets/skillsLogo/9.png'
import logo10 from '../../assets/skillsLogo/10.png'
import logo11 from '../../assets/skillsLogo/11.png'
import logo12 from '../../assets/skillsLogo/12.png'
import logo13 from '../../assets/skillsLogo/13.png'
import logo14 from '../../assets/skillsLogo/14.png'
import logo15 from '../../assets/skillsLogo/15.png'
import { FcApproval } from "react-icons/fc";

const WhatIdo = () => {
    return (
        <div className="mt-5 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">

            <div className='text-white text-center font-semibold mt-10'>
                <h2 className='text-3xl'>What I do</h2>
                <p className='text-[#854CE6]'>Which works i do: </p>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row mt-10 gap-10 items-center'>
                <div className='lg:w-[50%]'>
                    <img className='w-full rounded-md' src={whatIdoImg} alt="" />
                </div>

                <div className='lg:w-[50%]'>
                    <h2 className='text-[#854CE6] text-2xl text-center font-bold'>Full Stack Development</h2>

                    <div className='mt-5'>
                        <div className='flex gap-4 justify-center'>
                            <img className='w-10 rounded' src={logo1} alt="" />
                            <img className='w-10 rounded' src={logo2} alt="" />
                            <img className='w-10 rounded' src={logo3} alt="" />
                            <img className='w-10 rounded' src={logo4} alt="" />
                            <img className='w-10 rounded' src={logo5} alt="" />
                            <img className='w-10 rounded' src={logo6} alt="" />
                        </div>

                        <div className='flex gap-4 justify-center mt-5'>
                            <img className='w-10 rounded' src={logo7} alt="" />
                            <img className='w-10 rounded' src={logo8} alt="" />
                            <img className='w-10 rounded' src={logo9} alt="" />
                            <img className='w-10 rounded' src={logo10} alt="" />
                        </div>

                        <div className='flex gap-4 justify-center mt-5'>
                            <img className='w-10 rounded' src={logo11} alt="" />
                            <img className='w-10 rounded' src={logo12} alt="" />
                            <img className='w-10 rounded' src={logo13} alt="" />
                            <img className='w-10 rounded' src={logo14} alt="" />
                            <img className='w-10 rounded' src={logo15} alt="" />
                        </div>
                    </div>

                    <div className='text-white mt-10'>
                        <h2 className='flex gap-2'> <FcApproval className='text-2xl'></FcApproval>Create end-to-end web applications that include both front-end and back-end components. </h2>

                        <h2 className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>Proficient in working with MongoDB, NoSQL database, and implement database schemas. </h2>

                        <h2 className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>Build robust and scalable server-side applications using Express.js, frameworks for Node.js. </h2>

                        <h2 className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>Create interactive and user-friendly user interfaces using React.js, JavaScript user interfaces. </h2>

                        <h2 className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>Comfortable using version control systems like Git to manage and collaborate on code with others. </h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhatIdo;