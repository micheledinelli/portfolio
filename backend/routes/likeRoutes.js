const router = require('express').Router();
const { Like } = require('../models/like');

router.get('/', async(req, res) => {
    try {
        const likes = await Like.find({});
        if(likes && likes.length > 0) {
            res.send(likes);
        } else {
            res.status(400).send({message: "No likes yet"});
        }

    } catch (error) {
        res.status(500).send({message: "Internal server error"});
    }
});

module.exports = router;