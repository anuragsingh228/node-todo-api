const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c44bedf1f2f57f757189110')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });
    db.collection('Todos').find().count().then((count) => {
        console.log(`todos count: ${count}`);
    }, (err) => {
        console.log('unable to fetch todos', err);
    });
    //db.close();
});