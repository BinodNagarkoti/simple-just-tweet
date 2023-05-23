/** @format */

import React from 'react';
import { faker } from '@faker-js/faker/locale/en';
const ProfileInfo = () => {
    return (
        <div className='p-2 ps-5' style={{ position: 'relative', top: '-130px' }}>
            <div className='profile-avatar '>
                <img
                    src={'/current_avater.png'} // Replace with your avatar image path
                    alt='Avatar'
                    width={200}
                    className='avatar-image rounded-circle'
                />
            </div>
            <div className='profile-details'>
                <h2 className='profile-name'>John Doe</h2>
                <p className='profile-handle'>@johndoe</p>
                <a href="#" className='text-decoration-none'>twitter.com/jhondoe</a><br/>
                <a href="#" className='text-decoration-none'>Perth, WA</a>
                <div className='profile-location'>
                    <i className='bi bi-geo-alt-fill'></i>&nbsp;
                    <span className='location-text'>San Francisco, CA</span>
                </div>
                <div className='profile-joined-date'>
                    <i className='bi bi-calendar2'></i>&nbsp;
                    <span className='location-text'>Jan 1, 2020</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
