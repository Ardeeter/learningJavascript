const express = require('express');
const router = express.Router();

router.get('/greet/:name', (req, res) => {

    res.send(`<h1>Hello, ${req.params.name}!</h1>`)
    
})

module.exports = router