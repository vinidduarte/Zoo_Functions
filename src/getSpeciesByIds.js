const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  const speciesByIds = ids.map((id) =>
    data.species.find((species) => species.id === id));

  return speciesByIds.filter((species) => species !== undefined);
};

module.exports = getSpeciesByIds;
