let cfg = require('./config.json')

let express = require('express');
let cors = require('cors')
const app = express();
app.use(express.static('public')); // host public folder
app.use(cors()); // allow all origins -> Access-Control-Allow-Origin: *

const pool = require('./pool.js');

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

// const checkAuth = require('./check_auth');

// const loginRoutes = require('./login');
// app.use("/login", loginRoutes);

// get products for logged in user as a list of JSON entries
app.get("/", (req, res) => {
    
	// set content type (from EX1)
	res.setHeader('Content-Type', 'text/html');
    res.status(200).send("EX4: This is a database-backed application which uses JWT");
});

// // the rest of the route handlers are mostly the same as in EX3 with important differences
// app.get("/products", checkAuth, (req, res) => {
//     pool.query("Select * from products").
//     then(data => res.status(200).send(data.rows))
// });

// app.get("/product/:id", checkAuth, (req, res) => {
//     pool.query(
//         "Select * " +
//         "from products " +
//         "where id = $1"
//     ,[req.params.id]).
//     then(data => res.status(200).send(data.rows))
// });

// app.post("/product/:id", checkAuth, (req, res) => {
//     pool.query(
//         "update products " +
//         "set description = $2 " +
//         "where id = $1"
//     ,[req.params.id, req.body.description]).
//     then(data => res.status(200).send(data.rows))
//     .catch(err => res.status(400).send());
// });

// app.get("/logout", (req, res) => {
//     req.session.destroy()

//     if(req.session != null)
//     {
//         res.status(400).send();
//     }

//     res.status(200).send("Successfully logged out");
// });

// //For debugging
// app.get("/session", checkAuth, (req, res) => {
//      res.status(200).send(req.session)
// });
  
let port = 3000;
app.listen(port);
console.log("Server running at: http://localhost:"+port);
