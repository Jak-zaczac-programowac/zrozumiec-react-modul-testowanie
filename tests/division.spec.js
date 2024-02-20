import { division } from "../src/division.js";

function test1() {
    const a = 42;
    const b = 6;
    const expectedResult = 7;

    const result = division(a, b);
    if (result === expectedResult) {
        console.log("Dzielenie działa poprawnie");
    }
}

test1();

function test2() {
    const a = 25;
    const b = 0;

    const expectedResult = Infinity;

    const result = division(a, b);
    if (result === expectedResult) {
        console.log("Dzielenie przez zero działa poprawnie!");
    }
}

function test3() {
    const a = "a";
    const b = "c";

    const result = division(a, b);
    if (isNaN(result)) {
        console.log("Dzielenie napisów przez siebie zwraca NaN");
    }
}

test1();
test2();
test3();
