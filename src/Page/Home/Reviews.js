import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-hollows-57490.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div className='mt-20 max-w-7xl mx-auto px-2'>
            <h1 className='text-center text-3xl mb-10'>Customers FeedBack </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    reviews?.map(r => <Review
                        key={r._id}
                        r={r}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;