// Model
const UserLog = require('../../models/userLog.model');
const  User= require('../../models/user.model');

// Helpers
const responseBuilder = require('../../helpers/responseBuilder');
const rabbitmqHelper = require('../../helpers/rabbitmq.helper');
// Models
const { validationResult } = require('express-validator');

// Index
index = async (req, res) => {
    try {

        // Get All Data
        const userLogs = await UserLog.find({ user: req.user.userId });

        // Return Recieved Data
        return responseBuilder.success(res, userLogs)

    } catch (error) {
        // If Error
        return responseBuilder.errors(res, 500, error.message);
    }
}

// Store
store = async (data) => {

    // Finding User
    const user = await User.findOne({ _id: data.userId });

    // Save data
    let save = {
        user: user._id,
        user_name: user.username,
        activity: data.msg
    }

    // Create Product
    UserLog.create(save, (error, result) => {

        // Return 
        return true;
    }); 
}

module.exports = {
    index,
    store
};