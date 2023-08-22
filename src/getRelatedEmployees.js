const data = require('../data/zoo_data');

const isManager = (id) => {
  const employee = data.employees.find((emp) => emp.id === id);

  // Verifica se o funcionário foi encontrado e se não possui gerentes
  return employee && employee.managers.length === 0;
};

function getRelatedEmployees(managerId) {

}

module.exports = { isManager, getRelatedEmployees };
