import graduatedHat from '../../assets/graduatedHat.png'
import bauetLogo from '../../assets/Education Logo/BAUET-Logo.png'
import varendraLogo from '../../assets/Education Logo/Varendra-Logo-removebg-preview.png'
import baushaHighSchool from '../../assets/Education Logo/Bausha-High-SchoolLogo-removebg-preview.png'
import prograamingHeroLogo from '../../assets/prograamingHeroLogo.png'
import hultPrizeLogo from '../../assets/hultPrize.jpeg'
import igpLogo from '../../assets/igpLogo.png'
import { FcApproval } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';

const Education = () => {
    return (
        <div className="py-20 lg:py-32 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">

            <Helmet>
                <title>
                    Education
                </title>
            </Helmet>

            <div className='flex flex-col lg:flex-row items-center'>
                <div className='lg:w-[50%]'>
                    <img className='w-[350px] md:w-[400px] lg:w-[500px]' src={graduatedHat} alt="" />
                </div>
                <div className='lg:w-[50%]'>
                    <h2 className='text-3xl font-bold text-[#854CE6] text-center '>Education</h2>
                    <h3 className='text-xl md:text-2xl font-bold text-white text-center mt-2'>Basic Qualification and Certifications</h3>
                    <p className='text-sm md:text-base font-normal text-white text-center mt-2'>I actively participate in tech-related activities. Below are some of my major certifications.</p>
                </div>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold text-white text-center mt-5 md:mt-8 lg:mt-8'>Qualifications</h2>

            <div className='flex flex-col lg:flex-row mt-10 gap-10 items-center'>
                <div>
                    <img className='w-40 md:w-48 lg:w-60' src={bauetLogo} alt="" />
                </div>

                <div>
                    <div className=''>
                        <div className='bg-[#854CE6] px-5 py-5 flex flex-col lg:flex-row gap-5 lg:gap-5 justify-between rounded-tl-lg rounded-tr-lg '>
                            <div>
                                <h2 className='text-xl text-white font-semibold'>Bangladesh Army University of Engineering and Technology, Natore</h2>
                                <h3 className='text-sm text-white font-semibold mt-2'>Bachelors in Computer Science and Engineering(BSc)</h3>
                            </div>
                            <div>
                                <h3 className='text-white font-semibold text-sm'>2018-2022</h3>
                            </div>
                        </div>

                        <div className='bg-white px-5 py-5 rounded-bl-lg rounded-br-lg'>
                            <p className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval> Here, I studied a strong foundation in software engineering with in-depth knowledge of Data Structure, Algorithms, DBMS, Computer Networks, Computer Graphics, and more.</p>

                            <p className='flex gap-2 mt-3'> <FcApproval className='text-3xl'></FcApproval> Additionally, I have gained specialized expertise in advanced topics such as Machine Learning, Data Mining, DSP, and DIP, enabling me to tackle complex challenges in these specialized areas of software engineering and technology.</p>

                            <a href="https://bauet.ac.bd" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-sm border-2 border-purple-600 font-semibold py-2 px-3 rounded-xl hover:bg-[#854CE6] hover:text-white mt-4">
                                    Visit Website
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row mt-10 gap-4 items-center'>
                <div>
                    <img className='w-40 md:w-48 lg:w-40' src={varendraLogo} alt="" />
                </div>

                <div>
                    <div className=''>
                        <div className='bg-[#854CE6] px-5 py-5 flex flex-col lg:flex-row gap-5 lg:gap-5 justify-between rounded-tl-lg rounded-tr-lg '>
                            <div>
                                <h2 className='text-xl text-white font-semibold'>Varendra College, Rajshahi</h2>
                                <h3 className='text-sm text-white font-semibold mt-2'>Higher Secondary School Certificate(HSC)</h3>
                            </div>
                            <div>
                                <h3 className='text-white font-semibold text-sm'>2016-2017</h3>
                            </div>
                        </div>

                        <div className='bg-white px-5 py-5 rounded-bl-lg rounded-br-lg'>
                            <p className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>  I have studied basic Science subjects like Physics, Chemistry, Biology , Higher Math, Information & Technology, etc.</p>

                            <p className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>I have also studied others subject like Bangla, English, Math, etc. Also participated in every internal and external competition.</p>

                            <a href="https://www.vcr.edu.bd/en" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-sm border-2 border-purple-600 font-semibold py-2 px-3 rounded-xl hover:bg-[#854CE6] hover:text-white mt-4">
                                    Visit Website
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row mt-10 gap-4 items-center'>
                <div>
                    <img className='w-40 md:w-48 lg:w-40 rounded-md' src={baushaHighSchool} alt="" />
                </div>

                <div>
                    <div className=''>
                        <div className='bg-[#854CE6] px-5 py-5 flex flex-col lg:flex-row gap-5 lg:gap-5 justify-between rounded-tl-lg rounded-tr-lg '>
                            <div>
                                <h2 className='text-xl text-white font-semibold'>Harun-Or-Rashid Shah B/L High School</h2>
                                <h3 className='text-sm text-white font-semibold mt-2'>Secondary School Certificate(SSC)</h3>
                            </div>
                            <div>
                                <h3 className='text-white font-semibold text-sm'>2015-2016</h3>
                            </div>
                        </div>

                        <div className='bg-white px-5 py-5 rounded-bl-lg rounded-br-lg'>
                            <p className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval> I have studied basic Science subjects like Physics, Chemistry, Biology , Higher Math, Information & Technology, etc.</p>

                            <p className='flex gap-2 mt-3'> <FcApproval className='text-2xl'></FcApproval>I have also studied others subject like Bangla, English, Math, etc. Also participated in every internal and external competition.</p>

                            <a href="https://www.facebook.com/BaushaHighSchool" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-sm border-2 border-purple-600 font-semibold py-2 px-3 rounded-xl hover:bg-[#854CE6] hover:text-white mt-4">
                                    Visit Website
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold text-white text-center mt-5 md:mt-8 lg:mt-16'>Certifications</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <a href="">
                    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg text-black mt-12 hover:transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={prograamingHeroLogo}
                            alt="avatar"
                        />
                        <div className="py-5 text-center">
                            <h2
                                href="#"
                                className="block text-xl font-bold text-gray-800 "
                                tabIndex="0"
                                role="link"
                            >
                                Complete Web Development
                            </h2>
                            <span className="text-sm text-gray-800 font-semibold ">
                                Programming Hero
                            </span>
                        </div>
                    </div>
                </a>

                <a href="https://drive.google.com/file/d/1a1O2ra4PYK3Lu0BKJ_N0ifvOZnfPPjjj/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg text-black mt-12 hover:transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={hultPrizeLogo}
                            alt="avatar"
                        />
                        <div className="py-5 text-center">
                            <h2
                                href="#"
                                className="block text-xl font-bold text-gray-800 "
                                tabIndex="0"
                                role="link"
                            >
                                Hult Prize
                            </h2>
                            <span className="text-sm text-gray-800 font-semibold ">
                                Hult Prize at BAUET
                            </span>
                        </div>
                    </div>
                </a>

                {/* <a href="https://drive.google.com/file/d/19kRnuNaSebxDHD87hB8qrVH8HecqVXns/view?usp=sharing" target="_blank" rel="noopener noreferrer hover:transform hover:scale-105 transition-transform duration-300"">
                    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg text-black mt-12">
                        <img
                            className="w-full h-48"
                            src={igpLogo}
                            alt="avatar"
                        />
                        <div className="py-5 text-center">
                            <h2
                                href="#"
                                className="block text-xl font-bold text-gray-800 "
                                tabIndex="0"
                                role="link"
                            >
                                Institute of Global...
                            </h2>
                            <span className="text-sm text-gray-800 font-semibold ">
                                IGP
                            </span>
                        </div>
                    </div>
                </a> */}

                <a href="https://drive.google.com/file/d/19kRnuNaSebxDHD87hB8qrVH8HecqVXns/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg text-black mt-12 hover:transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="w-full h-48"
                            src={igpLogo}
                            alt="avatar"
                        />
                        <div className="py-5 text-center">
                            <h2
                                href="#"
                                className="block text-xl font-bold text-gray-800"
                                tabIndex="0"
                                role="link"
                            >
                                Institute of Global...
                            </h2>
                            <span className="text-sm text-gray-800 font-semibold">
                                IGP
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Education;