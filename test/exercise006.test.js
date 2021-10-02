const { TestScheduler } = require("@jest/core");
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("function throws an error if array is not passed", () => {
        expect(() => {
            sumMultiples()
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("abc")
        }).toThrow("An Array is required");

        expect(() => {
            sumMultiples(123)
        }).toThrow("An Array is required");
    });

    test("Sum of any number which is multiple of either 3 or 5", () => {
        const result = sumMultiples([1, 3, 5, 7, 10]);
        const expected = 18;
        expect(result).toBe(expected);
        expect(sumMultiples([25, 33, 12, 45, 72, 100])).toBe(287);
    });

    test("Sum should not include any decimal number", () => {
        expect(sumMultiples([1, 3, 0.5, 7, 10.2])).toBe(3);
    });

    test("in case of negetive number it should take away from sum", () => {
        expect(sumMultiples([2, 23, -12, 45, 27, 30])).toBe(90);
    });

    test("if the array given is empty or no multiple of 3 or 5, it should return sum as 0", () => {
        expect(sumMultiples([])).toBe(0);
        expect(sumMultiples([2, 11, 64, 47, 98])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("function throws an error if no argument is given", () => {
        expect(() => {
            isValidDNA()
        }).toThrow("str is required");
        expect(() => {
            isValidDNA(2)
        }).toThrow("enter a valid DNA string");
        expect(() => {
            isValidDNA("gctc")
        }).toThrow("string should be upper case");
    });

    test("gives false if str does not contain valid DNA character", () => {
        expect(isValidDNA("GCTDB")).toBe(false);
        expect(isValidDNA("GCSJ TDB")).toBe(false);
    });

    test("gives true if str contain valid DNA character", () => {
        expect(isValidDNA("GCT")).toBe(true);
        expect(isValidDNA("GCTATGCGTACGTACGTCGTACG")).toBe(true);
    });
});

describe("getComplementaryDNA", () => {
    test("function throws an error if no argument is given", () => {
        expect(() => {
            getComplementaryDNA()
        }).toThrow("str is required");
        expect(() => {
            getComplementaryDNA(2)
        }).toThrow("enter a valid DNA string");
        expect(() => {
            getComplementaryDNA("gctc")
        }).toThrow("string should be upper case");
    });

    test("gives false if str does not contain valid DNA character", () => {
        expect(getComplementaryDNA("GCTDB")).toBe(false);
        expect(getComplementaryDNA("GCSJ TDB")).toBe(false);
    });

    test("gives complimentery str contain valid DNA character", () => {
        expect(getComplementaryDNA("CATG")).toBe("TGCA");
        expect(getComplementaryDNA("GTACCATG")).toBe("ACGTTGCA");
    });
    
    test("if not in pairs, gives paired complimentery str contain valid DNA character along with single complemented DNA string", () => {
        expect(getComplementaryDNA("ACGTTG")).toBe("GTACTG");
        expect(getComplementaryDNA("ACGTTGCATG")).toBe("GTACCATGTG");
    });
});

describe("isItPrime", () => {
    test("function throws an error if no argument is qiven", () => {
        expect(() => {
            isItPrime()
        }).toThrow("n is required");
        expect(() => {
            isItPrime("abc")
        }).toThrow("A number is required");
    });

    test("gives false if number is less than or equal to 1", () => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(-45)).toBe(false);
    });

    test("gives false if number is not prime and true if number is prime", () => {
        expect(isItPrime(10)).toBe(false);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(33)).toBe(false);
        expect(isItPrime(23)).toBe(true);
    });
});

describe("createMatrix", () => {
    test("function throws an error if no/less argument is qiven", () => {
        expect(() => {
            createMatrix()
        }).toThrow("n is required");
        expect(() => {
            createMatrix("abc")
        }).toThrow("fill is required");
        expect(() => {
            createMatrix(4)
        }).toThrow("fill is required");
    });

    /*test("gets number for array size and filling argument", () => {
        expect(createMatrix(3,"foo")).toBe(["foo", "foo", "foo"],
                                           ["foo", "foo", "foo"],
                                           ["foo", "foo", "foo"]);
        expect(createMatrix(5, "hello")).toBe(['hello', 'hello', 'hello', 'hello', 'hello'],
                                              ['hello', 'hello', 'hello', 'hello', 'hello'],
                                              ['hello', 'hello', 'hello', 'hello', 'hello'],
                                              ['hello', 'hello', 'hello', 'hello', 'hello'],
                                              ['hello', 'hello', 'hello', 'hello', 'hello']);
    });*/
});