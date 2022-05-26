import React from 'react';
import { toast } from 'react-toastify';

const CancelPurchaseModal = ({ setPartsRemove, refetch, partsRemove }) => {
    const { name, _id } = partsRemove;

    const handleRemove = (id) => {
        fetch(`https://sleepy-hollows-57490.herokuapp.com/purchase/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast('Delete Successfully');
                setPartsRemove(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="partsRemoveModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <h3 class="text-lg font-bold">Are you sure to delete this Purchase:- {name}</h3>
                    <p className='my-5'>If you Delete This Purchase that item remove from Database</p>
                    <div className='flex gap-3 justify-end'>
                        <label onClick={()=>handleRemove(_id)} class="btn">Delete</label>
                        <label htmlFor="partsRemoveModal" class="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelPurchaseModal;