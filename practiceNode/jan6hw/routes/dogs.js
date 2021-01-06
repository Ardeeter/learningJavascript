const express = require('express');
const router = express.Router();

router.get('/dogs', (req, res) => {

    res.send(`<h1>WOOF</h1>`)
    
})

module.exports = router