import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {

    const { data: parts , isLoading } = useQuery('parts', () =>
    fetch('https://sleepy-hollows-57490.herokuapp.com/parts').then(res => res.json())
    
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-20'>
            <h1 className='text-center text-3xl mb-10'>Available Parts</h1>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                {
                    parts?.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;