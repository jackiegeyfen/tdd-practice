const { expect } = require("../node_modules/chai")
const Person = require("../problems/person.js")

console.log(Person)

// constructor - will intake a name and age and set them as
//  properties on the instance. Make sure you test that these properties exist on an
//   instance, as well as ensuring they are set properly.

describe ("Check Constructor", () => {
    let jackie = new Person("Jackie", 25)
    let name = jackie.name
    it("takes in a name and age as args", () => {
        expect(jackie.name).to.equal(name)
    })
})
