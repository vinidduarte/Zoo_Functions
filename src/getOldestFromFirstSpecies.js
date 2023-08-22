const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const employee = data.employees.find((emp) => emp.id === employeeId);
  const animalId = employee.responsibleFor[0];

  const animal = data.species.find((species) => species.id === animalId);
  const oldestAnimal = animal.residents.reduce((oldest, current) => {
    if (current.age > oldest.age) {
      return current;
    }
    return oldest;
  });

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
