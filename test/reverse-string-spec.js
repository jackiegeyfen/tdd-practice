const { expect } = require("../node_modules/chai")
const reverseString = require("../problems/reverse-string.js")


describe ("testing reverseString",  () => {
    it('should reverse the string', () => {
        expect(reverseString("fun")).to.equal('nuf');
    })
})
