import { IoPersonSharp, IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contact = () => {

    const handleContactMe = (e) => {
        e.preventDefault()
        const userMessage = e.target.message.value
        const userName = e.target.name.value
        const userEmail = e.target.email.value
        const templateParams = {
            from_name: userName,
            from_email: userEmail,
            message: userMessage,
            name: userName,
            email: userEmail
        }
        console.log(templateParams);

        // Email JS------------------------------------
        emailjs.send('service_11kk9iq', 'template_k8ov40j', templateParams, 'OODnN_JBcfByZ2M0F')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your email is sent. I will look forward to connect with you soon!',
            showConfirmButton: false,
            background: '#1C1C27',
            heightAuto: '100px',
            color: 'white',
            timer: 2000
        })

    }

    return (
        <div className="py-20 lg:py-32 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20">

            <div className='text-white text-center font-semibold mb-10'>
                <h2 className='text-2xl md:text-3xl mt-5 lg:mt-0'>Contact Me</h2>
                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-[#854CE6] rounded-full"></span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="lg:w-[50%]">
                    <p className='text-[#854CE6] font-bold text-base'>Get in Touch</p>
                    <h2 className="text-sm md:text-base font-semibold text-white mt-2">Feel free to reach out through the contact form on my website. I look forward to connecting with you! Your inquiries and messages are important to me.</h2>
                    <div className="flex items-center gap-5 mt-4">
                        <div>
                            <IoPersonSharp className="text-2xl md:text-4xl text-[#854CE6]"></IoPersonSharp>
                        </div>
                        <div className="text-white">
                            <h2 className="text-lg font-semibold">Name</h2>
                            <h3 className="text-sm md:text-lg">Naymur Rahman Abir</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <IoLocationSharp className="text-2xl md:text-4xl text-[#854CE6]"></IoLocationSharp >
                        </div>
                        <div className="text-white mt-4">
                            <h2 className="text-lg font-semibold">Address</h2>
                            <h3 className="text-sm md:text-lg">Rajshahi, Bangladesh</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <MdOutlineMail className=" text-2xl md:text-4xl text-[#854CE6]"></MdOutlineMail >
                        </div>
                        <div className="text-white mt-4">
                            <h2 className="text-lg font-semibold">Email</h2>
                            <h3 className="text-sm md:text-lg">naymurrahman.abir1@gmail.com</h3>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[50%]">
                    <form onSubmit={handleContactMe} className="border border-[#854CE6] px-5 py-5 rounded">
                        <label className="form-control w-full max-w-xl">
                            <div className="label">
                                <span className="label-text text-white font-semibold">Name</span>
                            </div>
                            <input name="name" type="text" placeholder="Name..." className="input text-white input-bordered w-full input-md max-w-xl bg-transparent input-primary focus:outline-0" />
                        </label>

                        <label className="form-control w-full max-w-xl">
                            <div className="label">
                                <span className="label-text text-white font-semibold">Email</span>
                            </div>
                            <input name="email" type="email" placeholder="Email..." className="input text-white input-bordered w-full input-md max-w-xl bg-transparent input-primary focus:outline-0" />
                        </label>

                        <label className="form-control w-full max-w-xl">
                            <div className="label">
                                <span className="label-text text-white font-semibold">Message</span>
                            </div>
                            <textarea className="input text-white input-bordered w-full input-md max-w-xl bg-transparent input-primary focus:outline-0 h-[100px]" name="message" id="" cols="30" rows="10"></textarea>
                        </label>

                        <button type="submit" className="text-white border border-[#4A00FF] font-semibold py-2 px-3 rounded-xl hover:bg-[#4A00FF] w-full md:w-1/2 lg:w-full mt-4">Send Message</button>
                    </form>
                </div>



            </div>

        </div>
    );
};

export default Contact;