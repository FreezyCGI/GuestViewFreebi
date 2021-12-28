let cfg = require('./config.json')

let express = require('express');
let cors = require('cors')
const app = express();
app.use(express.static('public')); // host public folder
app.use(cors()); // allow all origins -> Access-Control-Allow-Origin: *

const pool = require('./pool.js');

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

const checkAuth = require('./check_auth');

const loginRoutes = require('./login');
app.use("/login", loginRoutes);

// get products for logged in user as a list of JSON entries
app.get("/", (req, res) => {

    // set content type (from EX1)
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send("API is running!");
});

app.get("/menuList", (req, res) => {

    // set content type (from EX1)
    res.setHeader('Content-Type', 'application/json');
    pool.query("select ")
    res.status(200).send("API is running!");
});

let menuItemsJson = require('../json_Files/menu_Items.json');
app.get("/resetDatabase", (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    pool.query("delete from menu_itemsXmenu_categories;" +
        "delete from menu_items;" +
        "delete from menu_categories;").then(() => 
        {
            for (var key in menuItemsJson) {             

                if (menuItemsJson.hasOwnProperty(key)) {

                    let allergens = "";

                    for (var keyAllergen in menuItemsJson[key].allergens){
                        if (menuItemsJson.hasOwnProperty(keyAllergen)) {
                            allergens += menuItemsJson[key].allergens[keyAllergen];
                        }
                    }

                    pool.query('insert into menu_items(itemid, title, description, price, status, allergens) ' +
                        'values($1, $2, $3, $4, $5, $6)',
                        [
                            menuItemsJson[key].itemId,
                            menuItemsJson[key].title,
                            menuItemsJson[key].desc,
                            menuItemsJson[key].price,
                            menuItemsJson[key].status,
                            allergens
                        ])
                }
            }
            res.status(200).send(menuItemsJson);
        });
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
console.log("Server running at: http://localhost:" + port);
