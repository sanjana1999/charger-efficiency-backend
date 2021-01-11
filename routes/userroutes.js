const router = require('express').Router();
let users = require('../model/users.model');

router.route('/check').post(async function(req,res){
    console.log(req.body)
    const user = await users.findOne({uniqueId: req.body.uniqueId});
    if (user){
        return res.send(user);
    }
    else{
        return res.send("Doesn't exist");
    }
});

router.route('/signin').post(async function(req, res){
    let user = new users(req.body);
    user.save(function(err, saveduser){
        if(err){
            console.log(err);
            return res.status(500).send("Some problem occured!");
        }
        return res.status(200).send(saveduser);
    });
});

module.exports = router;