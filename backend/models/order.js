const mongoose = require("mongoose");

const order = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref:"user", 
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref:"user", 
    },
    status: {
        type: String,
        default:"Order placed" ,
        enum:["Order placed", "Out for delivery,delivery,Cancelled"],
    },
},
{timestamps: true}
);

module.exports = mongoose.model("order", order);