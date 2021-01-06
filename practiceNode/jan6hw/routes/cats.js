
const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/cats', (req, res) => {
    
    res.send('<h1>MEOW</h1>')
})

module.exports = router