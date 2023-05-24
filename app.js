const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://assignmentwork501:root@clusterone.lf29spr.mongodb.net/justtweet?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Tweet model
const TweetSchema = new mongoose.Schema({
  author_name: {
    type: String,
    required: true,
  },
  author_username: {
    type: String,
    required: true,
  },
  author_avatar: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Tweet = mongoose.model('Tweet', TweetSchema);

// Routes
app.get('/api/tweets', (req, res) => {
  Tweet.find({})
    .then((tweets) => {
      const formatedTweet = tweets.map(({ author_name, author_username, author_avatar, timestamp, likes, content, _id }) => ({
        likes, content, _id, timestamp,
        author: {
          name: author_name,
          username: author_username,
          avatar: author_avatar
        }
      }))
      res.json({ tweets: formatedTweet });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/api/tweets', async (req, res) => {
  try {
    const { author: { name, username, avatar }, likes, timestamp, content } = req.body;

    const formatedTweet = {
      likes, content, timestamp,
      author_name: name,
      author_username: username,
      author_avatar: avatar,

    }

    const tweet = new Tweet(formatedTweet);
    await tweet.save()
    res.json({ message: 'Tweet created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.patch('/api/tweets/:id/like', async (req, res) => {
  const tweetId = req.params.id;
  console.log(tweetId);
  try {
    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      return res.status(404).json({ error: 'Tweet not found' });
    }

    tweet.likes++;
    await tweet.save();

    res.json({ message: 'Tweet likes updated successfully', tweet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.use('/api/*', (req, res, next) => {
  return res.status(404).json({ message: 'ApiUrl route not found' })
})
// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});