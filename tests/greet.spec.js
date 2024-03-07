import { greetEveryone } from "../src/greet";

test("Properly greets people", () => {
    const people = [
        {
            name: "Kacper",
            surname: "Sokołowski",
        },
        {
            name: "Filip",
            surname: "Mamcarczyk",
        },
    ];

    const expectedResult = [
        "Cześć Kacper Sokołowski! Miło Cię widzieć ;)",
        "Cześć Filip Mamcarczyk! Miło Cię widzieć ;)",
    ];

    const result = greetEveryone(people);
    expect(result).toEqual(expectedResult);
});
