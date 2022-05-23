import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateModal = ({_id, setUpdate}) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => { 
        const information = {
            education: data.education,
            location: data.location,
            number: data.number,
            linkedin: data.linkedin
        }
        fetch(`http://localhost:5000/userInfo/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(information),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                toast.success('User Update  Successfully');
                setUpdate(null)
            } else {
                toast('Try Again')
            }
        });
        console.log(information);
        }
    return (
        <div>
            <input type="checkbox" id="updateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="updateModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-7">Update Your Information</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto'>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input
                                type="text"
                                placeholder="Education Qualification"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input
                                type="text"
                                placeholder="Enter Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input
                                type="text"
                                placeholder="Linkedin Link"
                                className="input input-bordered w-full max-w-xs"
                                {...register("linkedin", {
                                    required: {
                                        value: true,
                                        message: 'Linkedin is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Update Information" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;