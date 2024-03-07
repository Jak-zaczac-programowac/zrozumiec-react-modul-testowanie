export function cancellableDelay(timeInSeconds = 5, callback) {
    console.log(
        `Ok, funkcję uruchomię za ${timeInSeconds} sekund. No chyba, że mi przeszkodzisz!`
    );

    const timer = setTimeout(() => {
        console.log(`${timeInSeconds} sekund minęło, uruchamiam funkcję!`);
        callback();
    }, timeInSeconds * 1000);

    return () => {
        clearTimeout(timer);
    };
}
