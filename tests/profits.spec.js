import { yearlyProfitCalculator } from "../src/profits.js";

function test1() {
    const amount = 1000;
    const interest = 10;
    const expectedResult = 81;

    const result = yearlyProfitCalculator(amount, interest);
    console.log(result);

    if (result === expectedResult) {
        console.log("Zysk z lokaty liczy się poprawnie");
    }
}

test1();
