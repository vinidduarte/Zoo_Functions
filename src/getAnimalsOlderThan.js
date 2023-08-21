const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalSpecies = data.species.find(s => s.name === animal);

  if (!animalSpecies) {
    return false;
  }
  const animalsBelowMinAge = animalSpecies.residents.filter(animal => animal.age < age);

  return animalsBelowMinAge.length === 0;

}
module.exports = getAnimalsOlderThan;
