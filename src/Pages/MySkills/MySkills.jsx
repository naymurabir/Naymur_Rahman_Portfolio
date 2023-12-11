
const MySkills = () => {
    return (
        <div className="mt-5 lg:mt-20 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">

            <div className='text-white text-center font-semibold mt-10'>
                <h2 className='text-3xl'>My skills</h2>
                <p className='text-[#854CE6]'>Which skills i have:</p>

                <div className="my-5">
                    <span className="inline-block w-40 h-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                </div>

                <div className="md:flex gap-10">
                    <div className="md:w-[50%]">
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>HTML</span>
                                <span>90%</span>
                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="90"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>CSS3</span>
                                <span>85%</span>
                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="95"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>Tailwind CSS</span>
                                <span>95%</span>

                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="97"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>Bootstrap Css</span>
                                <span>92%</span>

                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="94"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>JavaScript</span>
                                <span>85%</span>

                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="80"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                    <div className="md:w-[50%]">
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>React JS</span>
                                <span>80%</span>

                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="75"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>Express JS</span>
                                <span>70%</span>

                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="71"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>Firebase</span>
                                <span>95%</span>

                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="97"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>MongoDB</span>
                                <span>90%</span>

                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="90"
                                max="100"
                            ></progress>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-xl font-medium flex justify-between">
                                <span>NodeJS</span>
                                <span>65%</span>
                            </h1>
                            <progress
                                className="progress progress-primary bg-white"
                                value="60"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MySkills;