let cfg = require('./config.json')
const express = require('express');
const router = express.Router();

const pool = require('./pool.js');

const jwt = require('jsonwebtoken');

// login route creating/returning a token on successful login
router.post('/', (req, res) => {

     //  get login parameters from request body
     let user = req.body.user;
     let pass = req.body.pass;
     

     // prepare DB query
     let queryText = "select login from users where login = $1 and password = $2";
    
     // issue query (returns promise)
    pool.query(queryText, [user, pass])
        .then (results => {
            
			// handle no match (login failed)
            if(results.rows.length <= 0)
            {
                res.status(401).json({
                    "message": "login failed: No User found in DB"
                });
                return;
            }
            
            // everything is ok
            let resultUser = results.rows[0];
            console.log(resultUser);
            
            //Very safe way of creating a secret (would also recommend in big projects):
			const token = jwt.sign(resultUser, "secret", {expiresIn: 60*60});/* form the token with userData (accessible when decoding token), jwtkey, expiry time */;
            
			res.status(200).json({
                "message": "login successful",
                login: resultUser.login,
                token: token
            });

        })
        .catch(error => {
            // handle error accessing db
            res.status(400).json({
                "message": "login failed: Error"
            });
        });

});

module.exports = router;
