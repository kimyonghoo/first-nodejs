const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('all articles');
});

router.post('/', (req, res) => {
    res.send('write article');
});

router.get('/:num', (req, res)=>{
    res.send('Detail of ' + req.params.num + 'article');
});

router.put('/:num', (req, res) => {
    res.send('Modify of ' + req.params.num + 'article');
});

router.delete('/:num', (req, res) => {
    res.send('Delete of ' + req.params.num + 'article');
});

module.exports = router;