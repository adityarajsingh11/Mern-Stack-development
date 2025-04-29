const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    // Define the schema for the Chat model
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLenth:50,
        
    },
    created_at: {
        type: Date,
        required: true,
    },
    });

    const Chat = mongoose.model("Chat", chatSchema);
    module.exports = Chat; // export the Chat model for use in other files