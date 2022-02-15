import mongoose from "mongoose";


const msgSchema = new mongoose.Schema({
    conversationId:{
        type: String,
        required: true
    },
    sender:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    }},
    {
        timestamps: true
    }
)

const message = mongoose.model('Message', msgSchema);

export default message;