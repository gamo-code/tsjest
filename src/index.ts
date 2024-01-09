export function sum(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));

    return integers
        .filter(x => x <= 10000)
        .reduce((a, b) => a + b, 0);
}