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