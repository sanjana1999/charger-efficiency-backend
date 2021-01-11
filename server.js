const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userroutes = require('./routes/userroutes');
const stationroutes = require("./routes/stationroutes");
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("DB connection established successfully");
})

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/users', userroutes);
app.use('/stations',stationroutes);
app.listen(PORT, function(){
    console.log("Server is running on Port: " +PORT);
})