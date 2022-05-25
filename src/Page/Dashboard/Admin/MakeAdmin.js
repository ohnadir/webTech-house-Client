import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const MakeAdmin = () => {
    
    const { data:users , isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdmin = (email) => {

        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            })
    }
    const handleRemove = (id) => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => {
            console.log(data);
        })
    }
    return (
        <div className='mt-7'>
            <div className="overflow-x-auto">
                <table className="table w-full border table-compact">
                    <thead>
                        <tr>
                            <th></th>  
                            <th>Email</th>   
                            <th>Make Admin</th>   
                            <th>Criteria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user.role !== 'admin' && <button
                                    onClick={()=>handleAdmin(user.email)}
                                    className='bg-gray-800 text-white px-4 py-[5px] rounded-lg'>
                                    Make Admin
                                </button>
                                }
                            </td>
                            <td>
                                <label
                                    htmlFor='removeUserModal'
                                    onClick={()=>handleRemove(user._id)}
                                    className="bg-gray-800 text-white px-4 py-[5px] rounded-lg">
                                    Remove User
                                </label>
                            </td>
                        </tr>
                                
                            
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;
