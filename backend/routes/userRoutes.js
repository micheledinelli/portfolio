const router = require('express').Router();
const { User } = require('../models/user');

router.get('/', async(req, res) => {
    try {
        const users = await User.find({});
        if(users && users.length > 0) {
            res.send(users);
        } else {
            res.status(400).send({message: "No users available"});
        }

    } catch (error) {
        res.status(500).send({message: "Internal server error"});
    }
});

module.exports = router;