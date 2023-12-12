import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div className="py-20 lg:py-32 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20 h-screen">
            <Helmet>
                <title>
                    Blogs
                </title>
            </Helmet>
            <h2 className='text-xl font-bold text-center text-white'>Blogs are coming soon...</h2>
        </div>
    );
};

export default Blogs;