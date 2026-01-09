const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    fullName: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    }
},
{
    timestamps:true
}
)

const userModel = mongoose.model("user", userScheme);
module.exports = userModel;