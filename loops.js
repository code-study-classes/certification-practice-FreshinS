export const sumOfSquares = (A, B) => {
  let summ = 0;
  for (let i = A; i <= B; i += 1) {
    summ += i ** 2;
  }
  return summ;
};

export const power = (A, N) => {
  let result = A;
  for (let i = 2; i <= N; i += 1) {
    result *= A;
  }
  return result;
};

export const factorialProduct = (N) => {
  let result = 1;
  if (N > 1) {
    for (let i = 2; i <= N; i += 1) {
      result *= i;
    }
  }
  return result;
};

export const fibonacciSequence = (N) => {
  const fib = [0, 1];
  if (N > 1) {
    for (let i = 2; i <= N; i += 1) {
      fib.push(fib[i - 2] + fib[i - 1]);
    }
  }
  return fib[N];
};

export const sumOfPowers = (N) => {
  let result = 0;
  for (let i = 1; i <= N; i += 1) {
    result += i ** i;
  }
  return result;
};

export const remainingLength = (A, B) => {
  let result = A;
  while (result - B >= 0) {
    result -= B;
  }
  return result;
};

export const findExponent = (N) => {
  let result = N;
  let count = 1;
  while (result !== 2) {
    result /= 2;
    count += 1;
  }
  return count;
};

export const findMinKAndSum = (N) => {
  let A = 1;
  let count = 0;
  while (A < N) {
    count += 1;
    A += count;
  }
  return count;
};

export const calculateGCD = (A1, B1) => {
  let A = A1;
  let B = B1;
  while (A !== B) {
    if (A > B) A -= B;
    else B -= A;
  }
  return A;
};

export const findFibonacciIndex = (N) => {
  const fib = [0, 1];
  let i = 2;
  while (fib[fib.length - 1] !== N) {
    fib.push(fib[i - 2] + fib[i - 1]);
    i += 1;
  }
  return i - 1;
};
