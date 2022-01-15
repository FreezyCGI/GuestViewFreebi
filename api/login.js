let cfg = require('./config.json')
const express = require('express');
const router = express.Router();

const pool = require('./pool.js');

const jwt = require('jsonwebtoken');
const crypto = require('crypto')

// login route creating/returning a token on successful login
router.post('/', (req, res) =>
{
    res.setHeader('Content-Type', 'application/json');

    let tableId = req.body.tableId;
    let menuItemsList = req.body.itemList;

    console.log(tableId);
    console.log(menuItemsList);

    const token = jwt.sign({ tableId: tableId }, "secret", { expiresIn: 60 * 60 });
    const orderId = crypto.randomUUID();

    pool.query("insert into orders(orderId, status, orderDate, tableId, paymentReference, paymentToken, totalAmount) " +
        "values($1, $2, $3, $4, $5, $6, $7)",
        [orderId, 'ordered', new Date().toISOString(), tableId, "someRef", token, 10])
        .then(() =>
        {
            for (let key in menuItemsList)
            {
                let itemId = menuItemsList[key].itemId;
                let count = menuItemsList[key].count;
                console.log("Id: " + itemId);
                console.log("Count: " + count);
                
                pool.query("insert into orderedItems(itemId, orderId, count) "+
                "values($1, $2, $3)",
                [itemId, orderId, count]);
            }

            res.status(200).json({ token: token });
        }); 
});

module.exports = router;
