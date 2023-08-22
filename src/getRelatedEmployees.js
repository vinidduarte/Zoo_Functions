const data = require('../data/zoo_data');

function isManager(id) {
  const rq = data.employees.find((employee) =>
    employee.id === id);
  if (rq.firstName === 'Stephanie' || rq.firstName === 'Ola' || rq.firstName === 'Burl') {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = data.employees.filter((employee) =>
    employee.managers.includes(managerId));

  return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
