const sortByType = (pokemon) => {
  var types = {};
  pokemon.forEach((poke) => {
    types[poke.type] = types[poke.type]||[];
    types[poke.type].push(poke);
  });
  return types;
};

module.exports = sortByType;