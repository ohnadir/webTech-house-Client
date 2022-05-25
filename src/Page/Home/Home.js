import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Parts from './Parts';
import Reviews from './Reviews';
import Service from './Service';
import StartedToday from './StartedToday';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner />
            <Parts />
            <BusinessSummary/>
            <Reviews />
            <StartedToday />
            <Service/>
            <Footer/>
        </div>
    );
};

export default Home;