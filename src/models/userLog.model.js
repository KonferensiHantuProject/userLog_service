const mongoose = require('mongoose');

// Skema Post
const userLogSchema = new mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    user_name: {
        type: String,
        required: true,
    },
    activity: {
        type: String,
        required: true,
    }
});

const UserLog = mongoose.model('UserLog', userLogSchema);

module.exports = UserLog