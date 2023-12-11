import projectsImg from '../../assets/projectsImage.png'
import { FiGithub } from "react-icons/fi";
import { MdLiveTv } from "react-icons/md";
import project1 from '../../assets/Projects Images/Assignment-12.png'
import project2 from '../../assets/Projects Images/Assignment-11.png'
import project3 from '../../assets/Projects Images/Assignment-10.png'


const Projects = () => {
    return (
        <div className="py-20 lg:py-32 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">

            <div className='flex flex-col lg:flex-row items-center'>
                <div className='lg:w-[50%]'>
                    <img className='w-[350px] md:w-[400px] lg:w-[400px]' src={projectsImg} alt="" />
                </div>
                <div className='lg:w-[50%]'>
                    <h2 className='text-3xl font-bold text-[#854CE6] text-center'>Projects</h2>

                    <p className='text-sm md:text-base font-normal text-white text-center mt-2'>In my projects, I use a wide range of the latest technology tools. My best experience comes from creating projects using the MERN (MongoDB, Express.js, React, Node.js). Some of my projects include an e-commerce website, real estate website, event management related website, etc.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5'>

                {/* Project-1 */}
                <div className="card card-compact bg-base-100 shadow-xl mt-16 rounded hover:transform hover:scale-105 transition-transform duration-300">
                    <div className='bg-[#854CE6] rounded px-3 py-2'>
                        <img className='h-[200px] w-full' src={project1} alt="Projects" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title flex justify-center text-2xl font-bold text-[#854CE6]">Horizon Homes</h2>
                        <p className='text-gray-800 '>The full-stack real estate website features three distinct panels for admin, agents, and users. Users can browse and purchase properties through a secure payment gateway. </p>
                        <h4 className='text-base font-bold text-[#854CE6]'>Technologies: <span className='text-gray-800 text-sm font-semibold'> HTML, CSS, TanStack Query, JWT, JavaScript, React, Firebase, Express JS, MongoDB, Node JS, Stripe.</span> </h4>

                        <div className='flex flex-col gap-2 md:flex-row justify-center'>

                            <a href="https://horizon-homes.surge.sh" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <MdLiveTv className='text-sm'></MdLiveTv>Live Link</button>
                            </a>

                            <a href="https://github.com/naymurabir/A-12_Horizon-Homes-Client-Side" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <FiGithub className='text-sm'></FiGithub> Client Side</button>
                            </a>

                            <a href="https://github.com/naymurabir/A-12_Horizon-Homes-Server-Side" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <FiGithub className='text-sm'></FiGithub> Server Side</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project-2 */}
                <div className="card card-compact bg-base-100 shadow-xl mt-16 rounded hover:transform hover:scale-105 transition-transform duration-300">
                    <div className='bg-[#854CE6] rounded px-3 py-2'>
                        <img className='h-[200px] w-full' src={project2} alt="Projects" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title flex justify-center text-2xl font-bold text-[#854CE6]">Job Hunt</h2>
                        <p className='text-gray-800 '>This job-searching and posting website enables users to post jobs, view job listings from other users or companies, and apply for positions. </p>
                        <h4 className='text-base font-bold text-[#854CE6]'>Technologies: <span className='text-gray-800 text-sm font-semibold'>HTML, Tailwind CSS, JWT, Tanstack Query, JavaScript, React, React-Router, Express JS,
                            MongoDB, Node JS.</span> </h4>

                        <div className='flex flex-col gap-2 md:flex-row justify-center'>

                            <a href="https://magical-lamp-test.surge.sh" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <MdLiveTv className='text-sm'></MdLiveTv>Live Link</button>
                            </a>

                            <a href="https://github.com/naymurabir/A-11_Job-Hunt-React-Client-Side" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <FiGithub className='text-sm'></FiGithub> Client Side</button>
                            </a>

                            <a href="https://github.com/naymurabir/A-11_Job-Hunt-React-Server-Side" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <FiGithub className='text-sm'></FiGithub> Server Side</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project-3 */}
                <div className="card card-compact bg-base-100 shadow-xl mt-16 rounded hover:transform hover:scale-105 transition-transform duration-300">
                    <div className='bg-[#854CE6] rounded px-3 py-2'>
                        <img className='h-[200px] w-full' src={project3} alt="Projects" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title flex justify-center text-2xl font-bold text-[#854CE6]">Spark Fusion</h2>
                        <p className='text-gray-800 '>An e-commerce website where there is a Home page where there are many of the brands category. Each category have products based on that brand. If an user click on the brand card he/she will see the products as well.</p>
                        <h4 className='text-base font-bold text-[#854CE6]'>Technologies: <span className='text-gray-800 text-sm font-semibold'> HTML, Tailwind CSS, JavaScript, ReactJS, Firebase, Express JS, MongoDB, Node JS.</span> </h4>

                        <div className='flex flex-col gap-2 md:flex-row justify-center'>

                            <a href="https://spark-fusion-react.web.app" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <MdLiveTv className='text-sm'></MdLiveTv>Live Link</button>
                            </a>

                            <a href="https://github.com/naymurabir/A-10_Spark-Fusion-Client" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <FiGithub className='text-sm'></FiGithub> Client Side</button>
                            </a>

                            <a href="https://github.com/naymurabir/A-10_Spark-Fusion-Server" target="_blank" rel="noopener noreferrer">
                                <button className="text-[#854CE6] text-xs border-2 border-purple-600 font-semibold py-2 px-2 rounded-xl ml-1 hover:bg-[#854CE6] hover:text-white flex items-center gap-1 w-full justify-center"> <FiGithub className='text-sm'></FiGithub> Server Side</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center mt-3'>
                <a href="https://github.com/naymurabir" target="_blank" rel="noopener noreferrer">
                    <button className="text-white border-2 border-purple-600 font-bold py-2 px-3 rounded-xl hover:bg-[#854CE6] mt-4 flex items-center gap-2  justify-center"> <FiGithub className='text-base'></FiGithub> More Projects</button>
                </a>
            </div>

        </div>
    );
};

export default Projects;