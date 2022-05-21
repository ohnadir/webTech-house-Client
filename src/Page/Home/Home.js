import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner />
            <Parts />
            <Footer/>
        </div>
    );
};

export default Home;