// Vendor person

function Vendor(name) {
    this.name = name;
    
    this.say = () => console.log('I am vendor', name)
}

module.exports = Vendor