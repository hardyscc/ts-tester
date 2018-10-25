export const add = (a: number, b: number): number => a + b;

export const substract = (a: number, b: number): number => a - b;

export const sleep = (ms: number) =>
  new Promise(resolv => setTimeout(resolv, ms));
