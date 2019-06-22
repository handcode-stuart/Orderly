const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "grey",
    },
});

module.exports = Project = mongoose.model("project", ProjectSchema);
