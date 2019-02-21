const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const homeRouter = require('./routes/homeRouter');
const articlesRouter = require('./routes/articlesRouter');
const connect = require('./schemas'); // 파일명이 index.js 면 /index 생략 가능하다.

const app = express();
// connection before middle wares
connect();

// middle wares....
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routers - developer areas
app.use('/', homeRouter);
app.use('/articles', articlesRouter);



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