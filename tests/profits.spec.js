import { yearlyProfitCalculator } from "../src/profits.js";

test("Test liczenia zysków z lokat", () => {
    const amount = 1000;
    const interest = 10;
    const expectedResult = 81;

    const result = yearlyProfitCalculator(amount, interest);
    expect(result).toEqual(expectedResult);
});
