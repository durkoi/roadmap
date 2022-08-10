const express = require("express");

const obj = [{
                id: 3,
                name: "c",
                description: "cc"
              },
              {
                id: 4,
                name: "d",
                description: "dd"
              },
              ];
const json = JSON.stringify(obj);
const port = 3000;

const app = express();

app.set('port', 3000);
app.use(express.json());

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



