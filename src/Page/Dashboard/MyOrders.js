import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Login/firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getPurchaseItem = async () => {
            const email = user?.email;
            fetch(`http://localhost:5000/purchase?email=${email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => setOrders(data));
        }
        getPurchaseItem()
        
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
                            <th>Total Price</th>
                            <th>Payment</th>    
                            <th>Transaction ID</th>    
                        </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index)=> <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.buyerName}</td>
                                    <td>{order.purchaseProduct}</td>
                                    <td>{order.buyerEmail}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.phone}</td>
                                    <td>${order.totalPrice}</td>
                                    
                                    <td>{
                                        (order.totalPrice && !order.paid)
                                        ? 
                                        <Link to={`/dashboard/payment/${order._id}`}><p className='bg-zinc-500 text-white px-3 text-center rounded py-1'>Payment</p></Link>  
                                        :
                                        <p className='bg-zinc-500 text-white text-center px-3 rounded py-1'>Paid</p>
                                    }
                                    </td>
                                    <td>{order.transactionId}</td>
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