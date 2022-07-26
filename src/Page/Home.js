import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Style.css'
import bg from './img/bg-image.jfif'
const Home = () => {
    return (
        <div className='movies-header '>

            <div className="container pt-4 ">
                <div className='  d-flex justify-content-center music-head' style={{
                    backgroundImage: `url(${bg})`
                }}>
                    <div className='w-50 d-flex'>
                        <Link to="/" className='btn btn-warning  px-lg-4 px-2 text-white py-2 m-lg-5 m-2 movie-name'>  Dilwale</Link>
                        <Link to="/idiots" className='btn btn-primary  px-lg-4 px-2 py-2 m-lg-5 m-2 movie-name'>  3 idiots</Link>
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