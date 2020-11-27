const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}`);

let users = new Schema({
    created_at:{type:Date,default:Date.now},
    email:{type:String},
    gender:{type:String},
    id:{type:String,default:()=>{return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);}},
    name:{type:String},
    status:{type:String,default:"Inactive"},


},{strict:false});


// Export the model
module.exports = mongoose.model('user', users);
