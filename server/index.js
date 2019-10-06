var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var sortByType = require('../server/helperfunctions/pokemon');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/../client/dist'));



app.get('/api/pokemon', function (req, res) {
  db.getAllPokemon((err,pokemon)=>{
    if(err){res.status(404).send(err);}
    else{
      var response = {
        idSort:pokemon,
        typeSort:sortByType(pokemon)
      }
      res.status(200).send(response);
    }
  })
});



app.listen(3000, function () {
  console.log('listening on port 3000!');
});

