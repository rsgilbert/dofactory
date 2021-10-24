function CustomerPrototype(proto) {
    this.proto = proto

    this.clone = () => {
        let customer = new Customer(this.proto.name, this.proto.age)
        return customer
    }
}

function Customer(name, age) {
    this.name = name;
    this.age = age;
    this.say = () => 
        console.log("Name", this.name, 'Age', this.age)

    this.setAge = age => { this.age = age }
}

let c1 = new Customer('Unknown', 0)

let customerPrototype = new CustomerPrototype(c1)

let c2 = customerPrototype.clone()
let c3 = customerPrototype.clone()
c3.setAge(5)
c2.say()
c3.say()
console.log(c2)
console.log(c3)
