const { Schema, model } = require('mongoose');

// creates Schema for User model
const UserSchema = new Schema({
    username: {
        type: String, 
        unique: true,
        required: true,
        trim: true
    },
    email : {
        type: String,
        unique: true,
        required: true
    }
    // // thoughts: {

    // // },
    // // friends: {

    // }
});

// create the User model using the UserSchema 
const User = model('User', UserSchema);

// export the User model
module.exports = User;