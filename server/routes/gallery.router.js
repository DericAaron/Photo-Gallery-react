var express = require('express');
var router = express.Router();
//source in pool
let pool = require('../modules/pool');

// PUT Route
router.put('/like/:id', function (req, res) {

    const galleryId = req.params.id;

    queryText = 'UPDATE gallery SET likes = likes + 1 WHERE id=$1';
    pool.query(queryText, [galleryId])
        .then( (result) => {
            res.sendStatus(200);
        }).catch( (error) => {
            res.sendStatus(500);
        });
}); // END PUT Route

// GET Route
router.get('/', function (req, res) {

    const queryText = 'Select * FROM gallery ORDER BY likes DESC';
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        }).catch( (error) => {
            console.log('Error getting data from DB');
            res.sendStatus(500);
        });
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const pic = req.body;
    console.log(pic);
    
    const queryText = `INSERT INTO gallery (path, description, likes)
                        VALUES ($1, $2, $3)`;
    pool.query(queryText, [pic.path, pic.description, pic.likes])
        .then( (results) => {
            res.sendStatus(200);
            
        }).catch( (error) => {
            console.log('Error in POST to DB');
            res.sendStatus(500);
        });
});

// DELETE Route
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    const queryText = `DELETE FROM gallery WHERE id=$1`;
    pool.query(queryText, [id])
        .then( (results) => {
            res.sendStatus(200);
        }).catch( (error) => {
            res.sendStatus(500);
        });
})

module.exports = router;