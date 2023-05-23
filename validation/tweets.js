const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
  let errors = {};


  data.content = validText(data.content) ? data.content : '';
  if (!Validator.isLength(data.content, { min: 5, max: 140 })) {
    errors.text = 'Tweet must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.content)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};