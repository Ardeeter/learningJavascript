const express = require('express');
const router = express.Router();

router.get('/cats_and_dogs', (req, res) => {

    res.send(`<h1>Living Together</h1>`)
    
})

module.exports = router