import React from 'react';

const PurchaseModal = ({purchase, setPurchase}) => {
    return (
        <div>
            <label
                    htmlFor="purchaseModal"
                    className='bg-accent block cursor-pointer text-center uppercase text-white w-full px-2 py-[4px]'
                    >purchase</label>
            <input type="checkbox" id="purchaseModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="purchaseModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;