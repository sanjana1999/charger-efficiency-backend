const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema({
    uniqueId:{
        type:String
    },
    name:{
        type:String
    },
    password:{
        type:String
    },
    battery:{
        type:String
    },
    sincePurchase:{
        type:String
    },
    chargeTime:{
        type:String
    },
    dischargeTime:{
        type:String
    }
});

module.exports = mongoose.connection.model('UsersAccount', Users);
