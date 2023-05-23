/** @format */

import React from 'react';

interface IStats {
    following: number;
    follower: number;
    likes: number;
    tweets: number;
}

const ProfileStats = (props: IStats) => {
    const { following, follower, likes, tweets } = props;
    return (
        <div className='row justify-content-center bg-info py-5'>
            <div className='col-1'>
                <span className='stat-value'>{follower}</span>&nbsp;
                <span className='stat-label'>Followers</span>
            </div>
            <div className='col-1'>
                <span className='stat-value'>{follower}</span>&nbsp;
                <span className='stat-label'>Following</span>
            </div>
            <div className='col-1'>
                <span className='stat-value'>{likes}</span>&nbsp;
                <span className='stat-label'>Likes</span>
            </div>
            <div className='col-1'>
                <span className='stat-value'>{tweets}</span>&nbsp;
                <span className='stat-label'>Tweets</span>
            </div>
        </div>
    );
};

export default ProfileStats;
