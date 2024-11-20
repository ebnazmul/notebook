const { default: mongoose } = require("mongoose");

const NotesSchema = new mongoose.Schema({
    note: String,
}, { timestamps: true })

const Notes = mongoose.model("Notes", NotesSchema)

module.exports = Notes;