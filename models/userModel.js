const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
   
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'vaccination-centre-users'
});

module.exports = mongoose.model('vaccination-centre-users', userModel);
