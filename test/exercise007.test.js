const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");


describe("sumDigits", () => {
    test("function throws an error if number is not passed", () => {
        expect(() => {
            sumDigits()
        }).toThrow("n is required");

        expect(() => {
            sumDigits("abc")
        }).toThrow("number is needed instead of string");

    });

    test("Sum of all the digits of given number", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(544341)).toBe(21);
    });

    test("in case of decimal number it should at the integar part only", () => {
        expect(sumDigits(54435441.5)).toBe(30.5);
    });
});

describe("createRange", () => {
    test("function throws an error if no argument is given", () => {
        expect(() => {
            createRange()
        }).toThrow("start is required");
    });

    test("function throws an error if only one/two arguments is given", () => {
        expect(() => {
            createRange(1)
        }).toThrow("end is required");
        expect(() => {
            createRange(13, 2)
        }).toThrow("Range cannot be created");
        expect(() => {
            createRange(22, 1, 3)
        }).toThrow("Range cannot be created");
    });

    test("Create range of given start and end numbers using the step count including negative numbers", () => {
        expect(createRange(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
        expect(createRange(-10, 24, 4)).toEqual([-10, -6, -2, 2, 6, 10, 14, 18, 22]);
    });

    test("if no step count is given than step is considered as 1", () => {
        expect(createRange(5, 20)).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});