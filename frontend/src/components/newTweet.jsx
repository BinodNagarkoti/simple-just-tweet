/** @format */

import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker/locale/en';

const NewTweet = (props) => {
    const [tweetText, setTweetText] = useState('');
    const handleChange = (event) => {
        setTweetText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle tweet submission logic here
        const tweet = {
            author: {
                name: faker.person.fullName(),
                username: faker.hacker.noun(),
                avatar: faker.image.avatar(), // Replace with your avatar image path
            },
            content: tweetText,
            retweets: 0,
            likes: 0,
            timestamp: new Date().getTime(),
        };
        await fetch('http://localhost:5000/api/tweets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tweet),
        });

        props.onSubmitReturn();
        setTweetText('');
    };

    return (
        <div className='new-tweet-form d-flex justify-content-between my-5 gap-3' id="tweetForm">
            <div className='profile-avatar'>
                <img
                    src={'/current_avater.png'} // Replace with your avatar image path
                    alt='Avatar'
                    width={110}
                    className='avatar-image rounded-circle'
                />
            </div>
            <form onSubmit={handleSubmit} className='w-100'>
                <div className='mb-3'>
                    <textarea
                    disabled={tweetText.length >= 280}

                        className='form-control'
                        rows={3}
                        placeholder="What's happening?"
                        value={tweetText}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className='d-flex align-items-center'>
                    <button type='submit' className='btn btn-primary'>
                        Tweet
                    </button>
                    <span
                    className={`p-2 ${tweetText.length >= 280 ? "text-danger": "text-primary"}`}>
                        {tweetText.length}/280
                    </span>
                </div>
            </form>
        </div>
    );
};

export default NewTweet;
