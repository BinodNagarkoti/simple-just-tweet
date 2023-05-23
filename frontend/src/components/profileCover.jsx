/** @format */

import React from 'react';
import { faker } from '@faker-js/faker/locale/en';

const ProfileCover = () => {
    return (
        <div className='profile-cover'>
            <img
                src='/cover-image1.png' // Replace with your cover image path
                alt='Cover Image'
                height={150}
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '10px',
                }}
                className='cover-image w-100'
            />
        </div>
    );
};

export default ProfileCover;
