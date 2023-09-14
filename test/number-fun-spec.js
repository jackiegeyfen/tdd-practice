const { expect } = require("../node_modules/chai")
const {returnsThree, reciprocal} = require("../problems/number-fun.js")


describe ("testing returnthree",  () => {
    it('should return the number three', () => {
        expect(returnsThree(3)).to.equal(3);
    })
})

describe ("testing reciprocal",  () => {
    let n = 2;
    context("valid args", () => {
        it('should return the reciprocal of num', () => {
            expect(reciprocal(n)).to.equal(1/n);
        })
    })

    context("invalid args", () => {
        it("out of range", () => {
            expect(() => reciprocal(0)).to.throw(RangeError);
        })
    })

})
