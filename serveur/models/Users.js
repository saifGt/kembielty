const mongoose = require('mongoose');
const  UserSchema = new mongoose.Schema({
    nom:String,
    prenom:String,
    cin:Number,
    numtel:Number,
    email:String,
    password:String,
    role:{
        type: String,
        enum: ['ADMIN', 'CLIENT'],
        default: 'CLIENT'
    },

})
const UserModel = mongoose.model("users",UserSchema);

module.exports= UserModel