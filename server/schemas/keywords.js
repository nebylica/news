const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const keywords = new Schema({
    keywords: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("keywords", keywords)