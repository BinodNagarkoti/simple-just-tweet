/** @format */

import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom'>
            <div className='container'>
                <a className='navbar-brand' href='#tweetCard'>
                    <img
                        src={'/logo.png'} // Replace with your logo path
                        alt='Logo'
                        className='navbar-logo'
                    />
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav flex-grow-1'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='/'>
                                Home
                            </a>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <a className='btn btn-primary rounded-pill me-2 px-4' href="#tweetForm">Tweet</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
