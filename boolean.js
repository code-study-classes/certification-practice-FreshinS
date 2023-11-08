export const isPositive = (A) => A > 0;

export const isOdd = (A) => Math.abs(A % 2) === 1;

export const checkInequality = (A, B) => (A > 2) && (B <= 3);

export const checkInequality2 = (A, B) => (A >= 0) || (B < -2);

export const checkBetweenNumbers = (A, B, C) => (B > A) && (B < C);

export const checkOddThreeDigitNumber = (n) => (n % 2 === 1) && (n >= 100) && (n < 1000);

export const checkUniqueDigits = (number) => {
  const numberS = String(number);
  let bool = true;
  for (let i = 0; i < numberS.length - 1; i += 1) {
    bool = (!(numberS.slice(i + 1).includes(numberS[i])) && bool);
  }
  return bool;
};

export const isSecondQuadrant = (x, y) => (x < 0) && (y > 0);

export const isIsoscelesTriangle = (a, b, c) => {
  const cond1 = a === b || a === c || b === c;
  const cond2 = a !== 0 || b !== 0 || c !== 0;
  return cond1 && cond2;
};

export const areSameColorFields = (x1, y1, x2, y2) => {
  const cond1 = (x1 % 2 === y1 % 2) && (x2 % 2 === y2 % 2);
  const cond2 = (x1 % 2 !== y1 % 2) && (x2 % 2 !== y2 % 2);
  return cond1 || cond2;
};
