var expect = require('chai').expect;
var math = require('../js/math.js');

describe('basic test', function() {
    it('1+1=2', function() {
        expect(1+1).to.be.equal(2);
    });
    it('2+3=5', function() {
        expect(2+3).to.be.equal(5);
    });
    it('5+8=13', function() {
        expect(5+8).to.be.equal(13);
    });
    it('add', function() {
        expect(math.add(1,1)).to.be.equal(2);
    });
    it('minus', function() {
        expect(math.minus(5,2)).to.be.equal(3);
    });
    it('plus', function() {
        expect(math.plus(3,3)).to.be.equal(9);
    });
    it('divide', function() {
        expect(math.divide(10,2)).to.be.equal(5);
    });
})