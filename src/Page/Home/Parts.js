import React, { useEffect, useState } from 'react';
import Part from './Part';
import PurchaseModal from './PurchaseModal';

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [purchase, setPurchase] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);
    return (
        <div className='mt-20'>
            <h1 className='text-center text-3xl mb-10'>Available Parts</h1>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                        setPurchase={setPurchase}
                    ></Part>)
                }
            </div>
            {
                purchase && <PurchaseModal
                    purchase={purchase}
                    setPurchase={setPurchase}
                ></PurchaseModal> 
            }
        </div>
    );
};

export default Parts;