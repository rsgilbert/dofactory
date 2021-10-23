// Employee person

function Employee(name) {
    this.name = name;

    this.say = () => {
        console.log('I am an employee', name)
    }
}


module.exports = Employee


