const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    text: {
        type :String,
        maxLength: 140
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }

})

module.exports = commentSchema 