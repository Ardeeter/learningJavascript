const express = require('express');
const router = express.Router();

router.get('/:year/:age', (req, res) => {

    let year = parseInt(req.params.year)
    let userAge = parseInt(req.params.age)
    let birthYear = year - userAge
    res.send(`<h1> You were born in ${birthYear}.`)
    
})

module.exports = router