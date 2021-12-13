const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SkillsSchem = new Schema({
    name: { type: String },
    description: { type: String },
});

const Skills = mongoose.model('Skills', SkillsSchem);

module.exports = {
    Skills
}
