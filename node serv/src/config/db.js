const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/25122021Database')
    .then(() => {
        console.log("Mongoose connected to Db...");
    }).
    catch((err) => {
        console.log(err.message);
    });

mongoose.connection.on('connected', () => {
    console.log("Mongodb connected..");
});
mongoose.connection.on('error', (err) => {
    console.log(err.message);
})
mongoose.connection.on('disconnected', () => {
    console.log("Mongodb disconnected..");
});
