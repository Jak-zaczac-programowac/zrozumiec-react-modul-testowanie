import { division } from "../src/division.js";

test("Test dzielenia", () => {
    const a = 42;
    const b = 6;
    const expectedResult = 7;

    const result = division(a, b);

    expect(result).toEqual(expectedResult);
});

test("Test dzielenia przez zero", () => {
    const a = 25;
    const b = 0;

    const expectedResult = Infinity;

    const result = division(a, b);

    expect(result).toEqual(expectedResult);
});

test("Test dzielenia napisów przez siebie", () => {
    const a = "a";
    const b = "c";

    const result = division(a, b);
    expect(result).toEqual(NaN);
});
