const mongoose = require('mongoose');

// Define the user schema
const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    address: {
        type: String,
        required: true,
      
    },
    avatar: {
        type: String,
        default: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svg/solid/user-circle.svg'
    },
    role: {
        type: String,
        default: "user",
        enum:["user","admin"],
    },
    favourites: [{
        type: mongoose.Types.ObjectId,
        ref:"books",
    },
],
cart: [{
    type: mongoose.Types.ObjectId,
    ref:"books",
},
],
orders: [{
    type: mongoose.Types.ObjectId,
    ref:"order",
},
],
},
{timestamps:true}
);



module.exports = mongoose.model("user", user);
