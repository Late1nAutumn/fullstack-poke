var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pokedex'
});


const getAllPokemon = function (callback
) {
  connection.query(`select pokemon.id, pokemon.name, types.name as type, image_url from pokemon, types where type_id = types.id;`, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
};

module.exports.getAllPokemon = getAllPokemon;