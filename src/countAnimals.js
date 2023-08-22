const data = require('../data/zoo_data');

const countAnimals = (params) => {
  const { species } = data;
  if (!params) {
    return species.reduce((countBySpecies, { name, residents }) =>
      ({ ...countBySpecies, [name]: residents.length }), {});
  }

  const { species: targetSpecies, sex } = params;
  const targetSpeciesInfo = species.find((speciesInfo) => speciesInfo.name === targetSpecies);

  if (!targetSpeciesInfo) return 'Species not found';

  const filteredResidents = targetSpeciesInfo.residents.filter((resident) =>
    !sex || resident.sex === sex);

  return filteredResidents.length;
};

module.exports = countAnimals;
