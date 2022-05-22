import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([]);
    const [purchase, setPurchase] = useState([]);
    const { name, img, price, info, orderQuantity, quantity, _id } = product;
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data =>setProduct(data));
    }, [id]);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-72 md:w-96 bg-base-100 shadow-xl image-full mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <p>{info}</p>
                        <p>Order Quantity: {orderQuantity}</p>
                        <p>Available Quantity: {quantity}</p>
                        <p>Price per Unit: <span className='font-bold'>${price}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <label
                            onClick={()=>setPurchase(product)}
                            htmlFor="purchaseModal"
                            className='btn bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-center uppercase'
                        >purchase</label>
                    </div>
                </div>
            </div>
            {purchase && <PurchaseModal
                purchase={purchase}
                setPurchase={setPurchase}
            ></PurchaseModal>}
        </div>
    );
};

export default Purchase;