import React from 'react';

const WishlistedComponents = ({item}) => {
    console.log(item)
    return (
        <div className='border border-white m-2 p-2'>
            <h2 className='text-2xl font-semibold'>Wishlisted</h2>
            <h3 className="card-title">{item.bookName}</h3>
            <p>written by : {item.author}</p>
            <p>Published by : {item.publisher}</p>
            
        </div>
    );
};

export default WishlistedComponents;