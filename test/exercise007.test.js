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

describe("hexToRGB", () => {
    test("function throws an error if number is not passed", () => {
        expect(() => {
            hexToRGB()
        }).toThrow("hexStr is required");
    });
    test("function throws an error if incomplete number is passed", () => {
        expect(() => {
            hexToRGB("FF1133")
        }).toThrow("Six digit hex color needed with hex sign");
        expect(() => {
            hexToRGB("#14F")
        }).toThrow("Six digit hex color needed with hex sign");
    });

    test("If a hexNumber is passed without a # sign it should return null", () => {
        expect(hexToRGB("222f122")).toBe(null);
    });

    test("transform the hex code into an RGB code", () => {
        expect(hexToRGB("#0033ff")).toEqual("RGB(0,51,255)");
        expect(hexToRGB("#FF1133")).toEqual("RGB(255,17,51)");
    });
});

const users = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ]
    },
    {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
    },
]

describe("getScreentimeAlertList", () => {
    test("function throws an error if users is not passed/or no argument is passed", () => {
        expect(() => {
            getScreentimeAlertList()
        }).toThrow("users is required");
    });

    test("function throws an error if one argument is missing", () => {
        expect(() => {
            getScreentimeAlertList("users")
        }).toThrow("date is required");
    });

    test("If a pass the condition of total screen time above 100, function will return username", () => {
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual("beth_1234");
    });

    test("If a didn't pass the condition of total screen time above 100, function will return null", () => {
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(null);
    });
});
