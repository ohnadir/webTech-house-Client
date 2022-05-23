import React from 'react';

const MyPortFolio = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-[450px] border mx-auto rounded-xl p-6 grid grid-cols-1 gap-1'>
                    <p className='text-lg'>Name: Nadir Ahmed</p>
                    <p className=''>Email: qx.nadir@gmail.com</p>
                    <p className=''>Education: Department of Sociology at Dhaka College</p>
                    <p className=''>Skill: HTML5, Tailwind, CSS3, JavaScript, React.Js, MERN Stack Also</p>
                    
                    <span className=''>My Project :</span>
                    <div className='pl-10'>
                        <span><a className='underline text-blue-700' href="https://perfume-warehouse.web.app/">Perfume ware House</a></span><br />
                        <span><a className='underline text-blue-700' href="https://westin-photography.web.app/">Westin Photography</a></span><br />
                        <span><a className='underline text-blue-700' href="https://quiet-baklava-e74b61.netlify.app/">Make Review Zone</a></span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MyPortFolio;