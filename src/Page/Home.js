import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Style.css'
const Home = () => {
    return (
        <div className='movies-header '>

            <div className="container">
            <div className='d-flex justify-content-center'>
                <div className='w-50 d-flex'>
                    <Link to="/" className='btn btn-warning  px-4 text-white py-2 m-5 movie-name'>  Dilwale</Link>
                    <Link to="/idiots" className='btn btn-primary  px-4 py-2 m-5 movie-name'>  3 idiots</Link>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
            </div>
        </div>
    );
};

export default Home;