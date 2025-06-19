const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
    email : String,
    password : String
},{
    timestamps: true,
});

module.exports = mongoose.model('Login', LoginSchema);