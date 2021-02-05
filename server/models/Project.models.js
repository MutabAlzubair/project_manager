const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    project: {
        type: String,
        required: [true, "You must write Project"],
        minlength: [3, "project must be at least 3 character"]
    },
    date: {
        type: String,
        
    },
    Status: {
        type: String
    }
})

module.exports = mongoose.model("Project", ProjectSchema);