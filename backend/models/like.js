const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    numberOfLikes: { type: Number, required: true},
});

const Like = mongoose.model("like", likeSchema);

module.exports = { Like };