const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LevelSchem = new Schema({
    name: { type: String },
    type: { type: String },
    identifier: { type: String },
});

const Level = mongoose.model('Level', LevelSchem);

module.exports = {
    Level
}
