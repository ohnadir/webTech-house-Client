import React from 'react';

const Part = ({ part, setPurchase }) => {
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
                <div className="mt-2 w-full">
                <label
                    htmlFor="purchaseModal"
                    onClick={()=>setPurchase(part)}
                    className='bg-accent block cursor-pointer text-center uppercase text-white w-full px-2 py-[4px]' >purchase</label>
                </div>
                
            </div>
        </div>
    );
};

export default Part;