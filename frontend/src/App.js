import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import ProfileCover from './components/profileCover';
import ProfileInfo from './components/profileInfo';
import ProfileStats from './components/profileStats';
import RightPanel from './components/rightPanel';
import TweetDetailsCard from './components/tweetCard';
import NewTweet from './components/newTweet';

function App() {

  const [tweets, setTweets] = useState([]);
  const stats = {
    follower: 200,
    following: 200,
    tweets: 10,
    likes: 20,
  };

  useEffect(() => {
    loadTweets();
  }, []);


  const loadTweets = () => {
    fetch('http://localhost:5000/api/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data.tweets)
      })
      .catch((error) => console.error('Error:', error));
  }
  return (
    <main>
      <div className='container-fluid'>
        <Navbar />
        <div className='row gap-1'>
          <div className='col-12 p-0'>
            <ProfileCover />
            <ProfileStats {...stats} />
          </div>

          <div className='col-2 '>
            <ProfileInfo />
          </div>
          <div className='col-6 bg-white'>
            <NewTweet
              onSubmitReturn={(tweets) => {
                loadTweets();
              }}
            />
            {tweets?.map((tweet, index) => (
              <TweetDetailsCard
                key={index}
                tweet={tweet}
                onActionReturn={loadTweets}
              />
            )) ?? "No tweets available"}
          </div>
          <div className='col-12 col-md-3 '>
            <RightPanel />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
