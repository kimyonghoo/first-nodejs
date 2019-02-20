const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const homeRouter = require('./routes/homeRouter');
const articlesRouter = require('./routes/articlesRouter');

const app = express();

//middlewares....
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routers - developer areas
app.use('/', homeRouter);
app.use('/articles', articlesRouter);

/*
app.get('/', (req, res) => {
    res.json({test:'test'});
})

app.get('/users', (req, res) => {
    res.json({test:'users'});
})

app.post('/users', (req, res) => {
    res.json({test:'users/post'});
})

//글쓰기
app.post('/articles', (req, res) => {
    console.log(req.body);
    res.json({
        title: req.body.title,
        content: req.body.content
    });
})
*/
/*
 * send errors - can not found routers
 * 404 error handler
*/
app.use((req, res, next) => {
    res.send('404 Not found');
})

app.listen(3030, () => {
    console.log('server is ready');
})