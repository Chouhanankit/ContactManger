const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isFamily: {
        type: Boolean,
        required: true,
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("contact", contactSchema)