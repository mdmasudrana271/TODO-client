import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <Link to='/add-todo'><button className='btn btn-warning'>Add Todo</button></Link>
        </div>
    );
};

export default Home;