const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://root:admin@localhost:27017/admin', {
            dbName: 'nodejs',
            useNewUrlParser: true
        }, (error) => {
            if (error) {
                console.log('(', new Date(), ') ', 'Mongodb Connection Failed', error);
            } else {
                console.log('(', new Date(), ') ', 'Mongodb Connection Successful');
            }
        });
    };
    connect();
    mongoose.connection.on('error', (error) => {
        console.error('Mongodb Connection Failed', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.error('Mongodb disconnected. try reconnect...');
        connect();
    });

    require('./articles');
};