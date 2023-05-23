/** @format */

import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker/locale/en';
function timeAgo(timeInMillis) {
    const seconds = Math.floor((new Date() - timeInMillis) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return interval + " year" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + " month" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + " day" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
    }
    return "just now";
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
                    <p className='fst-italic text-muted'>{timeAgo(timestamp)}</p>
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
