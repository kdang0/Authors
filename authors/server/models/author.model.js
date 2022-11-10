const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Must be greater than three"]}
})

module.exports = mongoose.model('Author', AuthorSchema);