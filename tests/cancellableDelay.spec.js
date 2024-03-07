import { cancellableDelay } from "../src/timer";
import { jest } from "@jest/globals";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("Callback is called after the given amount of seconds passed", () => {
    const timeInSeconds = 2;

    const callback = jest.fn(() => {
        console.log(
            `Funkcja powinna wykonać się po ${timeInSeconds} sekundach`
        );
    });

    cancellableDelay(timeInSeconds, callback);
    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledWith(
        expect.any(Function),
        timeInSeconds * 1000
    );
});

test("Callback is not called when the function returned from cancellableDelay is called", () => {
    const timeInSeconds = 2;

    const callback = jest.fn(() => {
        console.log(
            `Funkcja powinna wykonać się po ${timeInSeconds} sekundach`
        );
    });

    const stopFunction = cancellableDelay(timeInSeconds, callback);
    stopFunction();
    jest.runAllTimers();

    expect(callback).not.toHaveBeenCalled();
});
