import React, { useState } from 'react';
import { toast } from 'react-toastify';
import RemoveUserModal from './UserRemoveModal';

const UsersRow = ({ user, index, refetch }) => {
    const [removeUser, setRemoveUser] = useState(null);
    const handleAdmin = (email) => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an Admin`);
                }

            })
    }
    const handleRemove = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
            console.log(data);
        })
    }
    return (
            <tr>
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
                        onClick={handleRemove(user._id)}
                        className="bg-gray-800 text-white px-4 py-[5px] rounded-lg">
                        Remove User
                    </label>
            </td>
            </tr>

            
    );
};

export default UsersRow;