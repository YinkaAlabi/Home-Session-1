var myCode = require('./code.js');

describe("Prime Numbers tests", function() {

    it("should return 'invalid input' for [2]", function() {
      expect(myCode.getPrimes([2])).toBe('invalid input');
    });

    it("should return 'invalid input' for 'string'", function() {
      expect(myCode.getPrimes('string')).toBe('invalid input');
    });

    it("should return 'invalid input' for 2.99", function() {
      expect(myCode.getPrimes(2.99)).toBe('invalid input');
    });

    it("should return 'negative input' for -5", function() {
      expect(myCode.getPrimes(-5)).toBe('negative input');
    });

    it("should return 'cannot take 0 as input' for 0", function() {
      expect(myCode.getPrimes(0)).toBe('cannot take 0 as input');
    });

    it("should return [] for 1", function() {
      expect(myCode.getPrimes(1)).toEqual([]);
    });

    it("should return [2] for 2", function() {
      expect(myCode.getPrimes(2)).toEqual([2]);
    });

    it("should return [2,3] for 3", function() {
      expect(myCode.getPrimes(3)).toEqual([2,3]);
    });

    it("should return [2,3,5,7] for 7", function() {
      expect(myCode.getPrimes(7)).toEqual([2,3,5,7]);
    });

    it("should return [2,3,5,7,11,13,17,19,23,29] for 30", function() {
      expect(myCode.getPrimes(30)).toEqual([2,3,5,7,11,13,17,19,23,29]);
    });

  });