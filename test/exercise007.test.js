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

