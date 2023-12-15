import heroImage from '../../assets/Naymur_Rahman_Abir.jpg'
import { TypeAnimation } from 'react-type-animation';
// import resume from '../../assets/Resume/Naymur_Rahman_Abir.pdf'



const Banner = () => {
    return (

        <div className="py-32 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='lg:w-[50%]'>
                    <h1 className="text-white text-4xl lg:text-5xl font-semibold  space-y-3">Hi, I am <br />
                        Naymur Rahman Abir</h1>

                    <h2 className='text-white text-2xl lg:text-3xl my-3 font-semibold'>
                        I am a
                        <TypeAnimation className='text-[#854CE6] ml-2 font-semibold'
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'Software Developer',
                                1000,
                                'Front-End Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: 'xl', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>

                    <h3 className="text-white mt-3 font-semibold leading-relaxed">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</h3>

                    <div className='md:flex gap-2'>
                        <a href="https://drive.google.com/uc?export=download&id=1pX585m3JLrb80BWHoNVE4WgxSE2QBQHW" target="_blank" rel="noopener noreferrer">
                            <button className="text-white border-2 border-purple-600 font-bold py-1 md:py-2 px-2 md:px-3 rounded-xl text-sm md:text-base hover:bg-[#854CE6] w-full mt-4 ">Download Resume</button>
                        </a>

                        <a href="https://drive.google.com/file/d/1pX585m3JLrb80BWHoNVE4WgxSE2QBQHW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="text-white border-2 border-purple-600 font-bold py-1 md:py-2 px-2 md:px-3 rounded-xl text-sm md:text-base hover:bg-[#854CE6] w-full mt-4 md:ml-2">Check Resume</button>
                        </a>
                    </div>
                </div>

                <div className='lg:w-[50%] flex justify-center'>
                    <img className='w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-2 border-purple-800' src={heroImage} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;