const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LevelSchem = new Schema({
    name: { type: String },
    type: { type: String, index: true },
    identifier: { type: String, unique: true },
    // LevelSchem :createIndex({"title":1,"description":-1})

});
// LevelSchem.index({name:-1});

LevelSchem.index({ name: 1 });

const Level = mongoose.model('Level', LevelSchem);
Level.init();

// value = Level.find({ name: 'hhi' });
// console.log(value);

// Level.createIndex({title:1},{createdCollectionAutomatically: false,numIndexesBefore : 1,	numIndexesAfter : 2,
// 	ok : 1
// })

// Level.findByIdAndDelete({_id:"61b882d36c8ffe893f665b51"},
// function(err,doc){    
//     console.log(doc, "this data are deleted Sucessfully");
// })

// Level.findOneAndUpdate({name:"welcome"},{identifier:"its worked"},{overwrite:false},
// function(err,doc){
//     console.log(doc,"Data Are Updated Sucessfully");
// })

// Level.findOneAndUpdate({name:"welcome"},{identifier:"its worked"},{overwrite:false},
// function(err,doc){
//     console.log(doc,"Data Are Updated Sucessfully");
// })
// Level.find({}).count()
// console.log(Level);

// const lvl = Level.collection.getIndexes()
// console.log(lvl);

module.exports = {
    Level
}
