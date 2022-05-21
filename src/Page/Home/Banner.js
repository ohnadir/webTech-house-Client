import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="flex flex-col gap-6 lg:flex-row-reverse justify-between items-center">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;