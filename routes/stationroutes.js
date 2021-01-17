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
        for(var i=0 ;i < station.length;i++){
            var ky = 40000 / 360;
            var kx = Math.cos(Math.PI * req.body.coordinates[0].latitude / 180.0) * ky;
            var dx = Math.abs(req.body.coordinates[0].longitude - station[i].coordinates.longitude) * kx;
            var dy = Math.abs(req.body.coordinates[0].latitude - station[i].coordinates.latitude) * ky;
            var val = Math.sqrt(dx * dx + dy * dy);
            if (val <= (req.body.radius)){
                nearest.push(station[i]);
            }
        }
        return res.json(nearest);
    });
});

module.exports = router;