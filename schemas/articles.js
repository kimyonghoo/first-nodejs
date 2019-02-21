const mongoose = require('mongoose');

const { Schema } = mongoose;
const articleSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {_id: false});

module.exports = mongoose.model('Article', articleSchema);