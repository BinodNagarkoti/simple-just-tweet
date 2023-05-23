const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  author_name: {
    type: String,
    required: true

  },
  author_username: {
    type: String,
    required: true

  },
  author_avatar: {
    type: String,
    required: true

  },
  likes: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);