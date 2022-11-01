const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    type : String,
    addedBy : String,
    assignedTo : String,
    status : {type : String, default : 'pending'},
    createdAt : Date,
    team: String,
    closed : {type : Boolean, default: false}
});

module.exports = model('issues', myschema);