const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        required: true
    },
    is_admin: {
        type: Number
    }
});

module.exports = mongoose.model("Users", UserSchema);
