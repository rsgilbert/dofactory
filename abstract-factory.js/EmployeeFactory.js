// Factory for creating Employees 

const Employee = require("./Employee")

function EmployeeFactory() {

    this.create = name => new Employee(name)

}

module.exports = EmployeeFactory