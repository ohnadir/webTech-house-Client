import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import PartsRemoveModal from './PartsRemoveModal'

const ManageParts = () => {
    const [partsRemove, setPartsRemove] = useState(null)

    const { data: parts , isLoading, refetch } = useQuery('parts', () =>
    fetch('https://sleepy-hollows-57490.herokuapp.com/parts', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-7'>
            <div className="overflow-x-auto">
                <table className="table w-full border table-compact">
                    <thead>
                        <tr>
                            <th></th>  
                            <th>Parts Name</th>   
                            <th>Order Quantity</th>   
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Criteria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts?.map((part, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{part.name}</td>
                            <td>{part.orderQuantity}</td>
                            <td>{part.quantity}</td>
                            <td>{part.price}</td>
                            
                            <td>
                                <label
                                    htmlFor='partsRemoveModal'
                                    onClick={()=>setPartsRemove(part)}
                                    className="bg-gray-800 cursor-pointer text-white px-4 py-[5px] rounded-lg">
                                    Remove User
                                </label>
                            </td>
                        </tr>
                                
                            
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
            {
                partsRemove && <PartsRemoveModal
                    setPartsRemove={setPartsRemove}
                    refetch={refetch}
                    partsRemove={partsRemove}
                ></PartsRemoveModal>
            }
        </div>
    );
};

export default ManageParts;