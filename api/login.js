let cfg = require('./config.json')
const express = require('express');
const router = express.Router();

const pool = require('./pool.js');

const jwt = require('jsonwebtoken');


// login route creating/returning a token on successful login
router.post('/', (req, res) =>
{
     res.setHeader('Content-Type', 'application/json');
    console.log(req.body.tableId);

    const token = jwt.sign({tableId: req.body.tableId}, "secret", { expiresIn: 60 * 60 });/* form the token with userData (accessible when decoding token), jwtkey, expiry time */;

    res.status(200).json({token:token});
});

module.exports = router;
