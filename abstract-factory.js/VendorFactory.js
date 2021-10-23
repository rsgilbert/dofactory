// Factory for creating vendor objects
const Vendor = require('./Vendor')

function VendorFactory() {

    this.create = (name) => {
        return new Vendor(name)
    }
}

module.exports = VendorFactory