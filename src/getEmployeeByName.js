const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {}; // Return an empty object if no parameter is provided
  }

  const employee = data.employees.find((emp) => emp.firstName === employeeName
  || emp.lastName === employeeName);

  return employee || {}; // Return the employee object if found, or an empty object if not found
};

module.exports = getEmployeeByName;
