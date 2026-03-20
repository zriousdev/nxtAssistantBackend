const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type:     String,
      required: true,
      index:    true,  
    },
    sessionId: {
      type:     String,
      required: true,
      index:    true,
      trim:     true,
    },
    sender: {
      type:     String,
      enum:     ['user', 'assistant'],
      required: true,
    },
    message: {
      type:     String,
      required: true,
      trim:     true,
    },
  },
  { timestamps: true }   
);

module.exports = mongoose.model('Chat', chatSchema);