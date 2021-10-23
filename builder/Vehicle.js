function CarBuilder() {
    this.car = null;

    this.create = () => {
        this.car = new Car()
        return this;
    }

    this.setWheels = (wheels = 4) => {
        this.car.setWheels(wheels)
        return this
    }

    this.setDoors = (doors = 4) => {
        this.car.setDoors(doors)
        return this
    }

    this.build = () => this.car
}


function TruckBuilder() {
    this.truck = null;

    this.create = () => {
        this.truck = new Truck()
        return this
    }

    this.setLength = (length = 100) => {
        this.truck.setLength(length)
        return this
    }

    this.setWeight = weight => {
        this.truck.setWeight(weight)
        return this
    }

    this.build = () => {
        return this.truck
    }
}

function Car() {
    this.doors = 0
    this.wheels = 0

    this.setWheels = (wheels) => {
        this.wheels = wheels;
    }

    this.setDoors = doors => {
        this.doors = doors
    }

    this.say = () => 
        console.log(`Car, doors: ${this.doors}, wheels: ${this.wheels}`)
}

function Truck() {
    this.width = 0
    this.weight = 0
    this.length = 0

    this.setWidth = (width) => {
        this.width = width
    }

    this.setLength = (length) => {
        this.length = length
    }

    this.setWeight = weight => {
        this.weight = weight
    }

    this.say = () =>
        console.log(`Truck, width: ${this.width}, weight: ${this.weight}, length: ${this.length}`)
}


function run() {
    // car
    let car = new CarBuilder()
        .create()
        .setDoors(3)
        .setWheels(6)
        .build()

    car.say()

    // truck
    let truck = new TruckBuilder()
        .create()
        .setLength(100)
        .setWeight(200)
        .build()
    truck.say()
    
}

run()