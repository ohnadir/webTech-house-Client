import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/firebase.init';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const { name, img, price, info, orderQuantity, quantity, _id } = purchase;
    const [user] = useAuthState(auth);
    const handleSubmit = event => {
        event.preventDefault();
        const purchase = {
            purchaseProduct: event.target.productName.value,
            buyerName: event.target.name.value,
            buyerEmail: event.target.email.value,
            orderQuantity: event.target.quantity.value,
            phone: event.target.phone.value,
        }
        console.log(purchase);
    };
    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Purchase for {name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="productName" disabled  value={name} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" disabled  value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="quantity" placeholder='Order Quantity' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder='Phone Number' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Purchase" className="input cursor-pointer input-bordered w-full max-w-xs bg-[#3A4256] text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;