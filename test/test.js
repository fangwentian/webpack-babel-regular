var expect = require('chai').expect;

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
})