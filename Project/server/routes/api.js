const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

/*// Connect MessaginService
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/MessaginService', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};*/

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
     req.msDB.collection('users').find({'name':'Hello'}).toArray(function(err, result) {
                if (err) throw err;
                res.json(result);
        });
});

module.exports = router;