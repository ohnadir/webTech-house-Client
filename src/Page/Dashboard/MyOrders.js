import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div  className='mt-16'>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full border table-compact">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Purchase Product</th>
                            <th>Email</th>
                            <th>Order Amount</th>
                            <th>Number</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index)=> <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.buyerName}</td>
                                    <td>{order.purchaseProduct}</td>
                                    <td>{order.buyerEmail}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.phone}</td>

                                </tr>)
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;