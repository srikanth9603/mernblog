import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requireed: true,
        unique: true,
    },
    email:{
        type: String,
        requireed: true,
        unique: true,
    },
    password:{
        type: String,
        requireed: true,
        
    },
    }, {timestamps: true}
);

const user = mangoose.model('user,userSchema');

export default user;