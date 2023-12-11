import heroImage from '../../assets/heroImage.jpg'
import { TypeAnimation } from 'react-type-animation';


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

                    <button className="text-white border-2 border-purple-600 font-bold py-2 px-3 rounded-xl hover:bg-[#854CE6] mt-4">Check Resume</button>
                </div>

                <div className='lg:w-[50%] flex justify-center'>
                    <img className='w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-2 border-purple-800' src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;