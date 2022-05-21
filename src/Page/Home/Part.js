import React from 'react';

const Part = ({ part }) => {
    const { name, img, price, info, orderQuantity, quantity } = part;
    return (
        <div>
            <div className='shadow-xl'>
                <img className='max-w-[200px] mx-auto' src={img} alt="" />
                <div className='pl-2'>
                    <p>{name}</p>
                    <p>{info}</p>
                    <p>Order Quantity: {orderQuantity}</p>
                    <p>Available Quantity: {quantity}</p>
                    <p>Price per Unit: <span className='font-bold'>${price}</span></p>
                </div>
                <button className='bg-cyan-600 text-white w-full py-[5px] mt-2'>Purchase</button>
            </div>
        </div>
    );
};

export default Part;