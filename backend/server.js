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

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';

//connect to mongodb
MongoClient.connect(uri, {useUnifiedTopology: true}, (error, result) => {
  if(error) {
    return process.exit(1);
  }

  //connect to db
  const db = result.db('itemdb');
  app.get('/rethy', (req, res) => {

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

//required to allow CORS requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send(obj); //already converts to json, no need for conversion routine , strange.
  res.end();
});

app.listen(port);
