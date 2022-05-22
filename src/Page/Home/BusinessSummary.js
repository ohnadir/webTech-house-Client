import React from 'react';
import CrossFlag from '../../assets/flags-crossed.png'
import Users from '../../assets/user.png'
import Projects from '../../assets/project.png';
import Likes from '../../assets/thumb-up.png';
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <div className='mt-20 text-3xl mb-10 bg-red-50 py-16'>
            <h1 className='text-center mb-10'>Business Summary</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto'>
                <div className='mx-auto text-center'>
                    <img className='w-20 mx-auto mb-4' src={CrossFlag} alt="" />
                    <p><CountUp end={150} /></p>
                    
                    <p>Countries</p>
                </div>
                <div className='mx-auto text-center'>
                    <img className='w-20 mx-auto mb-4' src={Users} alt="" />
                    <p><CountUp end={535} />+</p>
                    <p>Projects</p>
                </div>
                <div className='mx-auto text-center'>
                    <img className='w-20 mx-auto mb-4' src={Projects} alt="" />
                    <p><CountUp end={237} />+</p>
                    <p>Happy Clients</p>
                </div>
                <div className='mx-auto text-center'>
                    <img className='w-20 mx-auto mb-4' src={Likes} alt="" />
                    <p><CountUp end={432} />+</p>
                    <p>FeedBack</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;