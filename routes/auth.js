const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Get logged in user
// @acess Private

router.get('/', (req, res) => {
    res.send('Get log in user');
});


// @route POST api/auth
// @desc Auth user & get token 
// @acess Public

router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;