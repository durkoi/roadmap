const obj = [{
  id: 1,
  name: "Pisti",
  description: "férj"
},
  {
    id: 2,
    name: "Eszterke",
    description: "nej"
  },
  {
    id: 3,
    name: "Laluci babuci",
    description: "daughter"
  },
  {
    id: 4,
    name: "Dani",
    description: "pitrincs"
  }
];
const json = JSON.stringify(obj);

const express = require("express");
const app = express();
const port = 3000;

app.set('port', port);
app.use(express.json());

//required to allow CORS requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//provide response from preset variables
app.get('/', (req, res) => {
  res.send(obj); //already converts to json, no need for conversion routine , strange.
  res.end();
});

//provide response from db
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

//local db connection
app.get('/rethy', (req, res) => {

    const uri = 'mongodb://localhost:27017';

    //connect to mongodb
    MongoClient.connect(uri, {useUnifiedTopology: true}, (error, result) => {
      if(error) {
        return process.exit(1);
      }

      //connect to db
      const db = result.db('itemdb');
    //connect to collection
    db.collection('items')
      .find({}, {sort: {_id: "asc"}})
      .toArray((getError, results) => {
        if (getError) {
          return next(getError);
        }
        res.send(results);
      })
  });
});

//remote db connection
app.get('/zsolti', (req, res) => {
  //res.send(obj); //already converts to json, no need for conversion routine , strange.
  //res.end();

  const uri = 'mongodb://localhost:27017'; //no need for credentials as long as nodejs server program and db on same.

  //connect to mongodb
  MongoClient.connect(uri, {useUnifiedTopology: true}, (error, result) => {
    if(error) {
      return process.exit(1);
    }

    //connect to db
    const db = result.db('itemdb');
    //connect to collection
    db.collection('items')
      .find({}, {sort: {_id: -1}})
      .toArray((getError, results) => {
        if (getError) {
          return next(getError);
        }
        res.send(results);
      })
  });

});





app.listen(port);
