const EmployeeFactory = require("./EmployeeFactory")
const VendorFactory = require("./VendorFactory")


function run() {
    let persons = []

    let employeeFactory = new EmployeeFactory()
    let vendorFactory = new VendorFactory()

    persons.push(employeeFactory.create('Jonathan'))
    persons.push(vendorFactory.create('Peter'))
    persons.push(employeeFactory.create('Tim Savant'))

    for(let person of persons) {
        person.say()
    }

}

run()









