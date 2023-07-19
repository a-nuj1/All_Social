const mongoose = require('mongoose');

const userSchemea = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchemea);

module.exports = User;