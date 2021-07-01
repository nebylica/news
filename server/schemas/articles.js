const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const articles = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    publishedAt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("articles", articles)