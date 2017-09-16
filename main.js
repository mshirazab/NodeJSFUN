const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('[ ERROR ] Unable to connect to mongo Server');
  }
  console.log('[SUCCESS] Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, )
  db.collection('Users').insertOne({
    name: 'Shiraz',
    age: 19,
    location: 'Bangalore'
  }, (err, result) => {
    if(err) {
      return console.log('[ ERROR ] Unable to insert');
    }
    console.log(result.ops);
  });

  db.close()
});
