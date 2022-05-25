import React from 'react';
import Header from '../../assets/header.jpg'

const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="flex flex-col gap-6 lg:flex-row-reverse justify-between items-center">
                    <img src={Header} className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Purchase What you want</h1>
                        <p className="py-6">We provide best whole sell  computer parts . </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;