const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    author: {
        type: [],
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    image: {
        type: String
    }, 
    link: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model('Book', 'BookSchema')

module.exports = Book;