import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import MySkills from "../MySkills/MySkills";
import WhatIdo from "../WhatIdo/WhatIdo";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Naymur Rahman Abir
                </title>
            </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <WhatIdo></WhatIdo>
        </div>
    );
};

export default Home;