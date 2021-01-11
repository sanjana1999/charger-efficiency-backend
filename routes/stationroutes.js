const router = require('express').Router();
let stations = require('../model/stations.model');

router.route('/showallstations').post(function(req,res){
    stations.find(function(err, station){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        return res.json(station);
    });
});

router.route('/neareststations').post(function(req,res){
    stations.find(function(err, station){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        var nearest = [];
        nearest.push(station[0],station[1]);
        return res.json(nearest);
    });
});

module.exports = router;