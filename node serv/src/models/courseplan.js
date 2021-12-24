const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CourseSchem = new Schema({
    name: { type: String },
    description: { type: String },
    level: { type: String },
    subjects: { type: String },

});

const Course = mongoose.model('Course', CourseSchem);

module.exports = {
    Course
}
