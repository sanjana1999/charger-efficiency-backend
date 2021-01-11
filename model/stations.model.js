const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let coordinate = new Schema({
    latitude:{
        type : Number
    },
    longitude : {
        type : Number
    }
})
let Stations = new Schema({
    coordinates:{
        type : coordinate
    },
    title :{
        type : String
    },
    description : {
        type : String
    }
});

module.exports = mongoose.connection.model('Stations', Stations);
