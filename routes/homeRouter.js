const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {
        greet: 'hihi',
        author: 'kim'
    });
})

module.exports = router;