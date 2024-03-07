import { formatExchangeRate } from "../src/getExchangeRate";

test("Displays proper PLN to USD conversion rate", async () => {
    const currencyData = {
        then: (callback) => {
            return callback({ exchangeRate: 0.25 });
        },
    };
    const result = await formatExchangeRate(currencyData);
    const expectedResult = "Obecny kurs wymiany PLN na USD to: 0.25";
    expect(result).toBe(expectedResult);
});
