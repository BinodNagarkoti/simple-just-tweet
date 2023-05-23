/** @format */

import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker/locale/en';
function timeAgo(timeInMillis) {
	console.log({timeInMillis})
	const currentDate = new Date();
	const givenDate = new Date(timeInMillis);
	const timeDiff = Math.abs(currentDate - givenDate);
	const minutes = Math.floor(timeDiff / (1000 * 60));
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return `${years} year${years > 1 ? 's' : ''} ago`;
	} else if (months > 0) {
		return `${months} month${months > 1 ? 's' : ''} ago`;
	} else if (days > 0) {
		return `${days} day${days > 1 ? 's' : ''} ago`;
	} else if (hours > 0) {
		return `${hours} hour${hours > 1 ? 's' : ''} ago`;
	} else {
		return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
	}
  }
const TweetDetailsCard = ({onActionReturn, tweet}) => {
    const { author, timestamp, content, likes, tweetId } = tweet;

    const handleLike = async () => {
        try {
            console.log(tweet._id);
          const response = await fetch(`http://localhost:5000/api/tweets/${tweet._id}/like`, {
            method: 'PATCH',
          });
          if (response.ok) {
            await response.json();
            onActionReturn();

          } else {
            console.error('Failed to update tweet like');
          }
        } catch (error) {
          console.error('An error occurred while updating tweet like', error);
        }
      };
    return (
        <div className='tweet-card card my-3' id={"tweetCard"}>
            <div className='card-body'>
                <div className='tweet-header d-flex align-items-center '>
                    <img
                        src={author.avatar}
                        alt='Author Avatar'
                        width={100}
                        className='avatar rounded-circle p-2'
                    />
                    <div className='author-info'>
                        <h5 className='author-name'>{author.name}</h5>
                        <p className='author-handle'>@{author.username}</p>
                    </div>
                </div>
                <div className='tweet-content p-2'>
                    <p>{content}</p>
                    {timestamp &&<p className='fst-italic text-muted'>{timeAgo(new Date(timestamp))}</p>}
                </div>
                <div className='tweet-stats d-flex'>
                    <div
                        className='stat-item'
                        onClick={handleLike}
                    >
                        <i className={`bi bi-heart-fill ${likes>0 ? 'heart-red':'heart-transparent'}`}></i>&nbsp;
                        <span>{likes}</span>
                    </div>
                    &nbsp;
                </div>
            </div>
        </div>
    );
};

export default TweetDetailsCard;
