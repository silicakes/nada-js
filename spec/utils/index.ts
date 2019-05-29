// eslint-disable-next-line import/prefer-default-export, no-nested-ternary
export const fib = (n: number): number => (n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2));
