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
    colour: {
        type: String,
        default: "#CBF4E4",
    },
});

module.exports = Project = mongoose.model("project", ProjectSchema);
