import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-center text-6xl'>404 Page  not found</h1>
            <Link to="/"><button className='btn btn-danger'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;