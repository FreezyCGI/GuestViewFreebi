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

app.get("/", (req, res) =>
{
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send("API is running!");
});

app.get("/menuList", (req, res) =>
{
    res.setHeader('Content-Type', 'application/json');
    pool.query("select * from menu_items").
        then((data) =>
        {
            res.status(200).send(data.rows);
        });
});

app.get("/menuCategories", (req, res) =>
{
    res.setHeader('Content-Type', 'application/json');
    pool.query("select categoryId, title, description from menu_categories")
    .then((data) => {
        res.status(200).send(data.rows);
    });
});

app.get("/menuCategories/:title", (req, res) =>
{
    res.setHeader('Content-Type', 'application/json');
    pool.query("select categoryId, title, description "+
    "from menu_categories cat " +
    "where LOWER(cat.title) = LOWER($1);", 
    [req.params.title])
    .then((data) => {
        res.status(200).send(data.rows);
    });
});


app.get("/menuList/:category", (req, res) =>
{
    res.setHeader('Content-Type', 'application/json');
    pool.query("select items.itemid, items.title, items.description, price, allergens, status "+
    "from menu_items items, menu_categories cat, menu_itemsXmenu_categories merger " +
    "where items.itemId = merger.itemId and cat.categoryId = merger.categoryId and LOWER(cat.title) = LOWER($1);", 
    [req.params.category])
    .then((data) => {
        res.status(200).send(data.rows);
    });
});

app.get("/resetDatabase", (req, res) =>
{
    let menuItemsJson = require('../json_Files/menu_Items.json');
    let menuCategoriesJson = require('../json_Files/menu_categories.json');

    res.setHeader('Content-Type', 'application/json');

    pool.query("delete from menu_itemsXmenu_categories;" +
        "delete from menu_items;" +
        "delete from menu_categories;").then(() => 
        {
            uploadMenuCategories().
                then(() => uploadMenuItems());

            res.status(200).send(menuItemsJson);
        });

    function uploadMenuItems()
    {
        for (let key in menuItemsJson)
        {

            if (menuItemsJson.hasOwnProperty(key))
            {

                let allergens = "";

                for (let keyAllergen in menuItemsJson[key].allergens)
                {
                    if (menuItemsJson.hasOwnProperty(keyAllergen))
                    {
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
                    .then(() =>
                    {
                        for (let keyCategory in menuItemsJson[key].category)
                        {

                            if (menuItemsJson[key].category.hasOwnProperty(keyCategory))
                            {                          
                                pool.query("insert into menu_itemsXmenu_categories(itemId, categoryId) " +
                                    "values($1, $2)",
                                    [
                                        menuItemsJson[key].itemId,
                                        menuItemsJson[key].category[keyCategory]
                                    ]
                                );
                            }
                        }
                    })
            }
        }
    }

    function uploadMenuCategories()
    {
        let promise;
        for (var key in menuCategoriesJson)
        {

            if (menuCategoriesJson.hasOwnProperty(key))
            {

                promise = pool.query('insert into menu_categories(categoryId, title, description) ' +
                    'values($1, $2, $3)',
                    [
                        menuCategoriesJson[key].categoryId,
                        menuCategoriesJson[key].title,
                        menuCategoriesJson[key].desc
                    ])
            }
        }
        return promise;
    }
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
