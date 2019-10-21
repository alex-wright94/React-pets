const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    PetName: {
        type: String,
        required: [true, "Pet Name is required"],
        minlength: [3, "Pet Name must be 3 characters or longer"]
    },
    PetType: {
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet Type must be 3 characters or longer"]
    },
    Description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or longer"]
    },
    Skill1: {
        type: String,
    },
    Skill2: {
        type: String,
    },
    Skill3: {
        type: String,
    },
    Likes: {
        type: Number,
        default: 0
    }

}, {timestamps: true});

mongoose.model("Pet", PetSchema);