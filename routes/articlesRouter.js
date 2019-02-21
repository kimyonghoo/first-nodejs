const router = require('express').Router();
const Article = require('../schemas/articles');

//read article lists - Promise 방식
/*
router.get('/', (req, res) => {
    Article.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json('error', err);
        })
});
*/

//read article lists - async/await 방식
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find({});
        res.json(articles);
    } catch (err) {
        res.send(err);
    }

});

//insert
router.post('/', async (req, res) => {
    try {
        const article = new Article(req.body);
        const result = await article.save();
        res.json(result);
    } catch (err) {
        res.send(err);
    }
});

//read one article
router.get('/:id', async (req, res)=>{
    try {
        const result = await Article.findOne({_id: req.params.id})
        res.json(result);
    } catch (err) {
        res.send(err);
    }
});

//modify
router.put('/:id', async (req, res) => {
    try {
        const result = await Article.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(result);
    } catch (err) {
        res.send(err);
    }
});

//delete
router.delete('/:id', async (req, res) => {
    try {
        const result = await Article.findOneAndDelete({_id: req.params.id});
        res.json(result);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;