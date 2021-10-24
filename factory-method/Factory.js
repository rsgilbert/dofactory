function Employee(type, salary) {
    this.type = type 
    this.salary = salary

    this.say = () => console.log(`Employee, type: ${type}, salary ${salary}`)
}

function EmployeeFactory() {

    this.createEmployee = type => {
        const unitSalary = 2000
        if(type === 'parttime') {
            return new Employee(type, unitSalary / 2)
        }
        else if(type === 'fulltime') {
            return new Employee(type, unitSalary)
        }
    }
}

function run() {
    let empFactory = new EmployeeFactory()
    let emp1 = empFactory.createEmployee('parttime')
    let emp2 = empFactory.createEmployee('fulltime')

    emp1.say()
    emp2.say()

}

run()