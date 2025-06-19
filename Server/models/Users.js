const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    bookname : String,
    name : String,
    librarycode : Number,
    duration : Number,
},{
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);