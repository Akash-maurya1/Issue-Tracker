const mongoose = require('mongoose');

const dbName = "IssueTracker";
const url = `mongodb+srv://Akash:Akash123@cluster0.dy3rxje.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// Promise - a special type of object which needs to be resolved
// asynchronous function - return promise

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;