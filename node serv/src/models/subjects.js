const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SubjectSchem = new Schema({
    displayname: { type: String },
    identifier: { type: String },
});

const Subjects = mongoose.model('Subjects', SubjectSchem);

module.exports = {
    Subjects
}
