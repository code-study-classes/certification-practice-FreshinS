export const isPositive = (A) => A > 0;

export const isOdd = (A) => Math.abs(A % 2) === 1;

export const checkInequality = (A, B) => (A > 2) && (B <= 3);

export const checkInequality2 = (A, B) => (A >= 0) || (B < -2);

export const checkBetweenNumbers = (A, B, C) => (B > A) && (B < C);

export const checkOddThreeDigitNumber = (number) => (number % 2 === 1) && (number >= 100) && (number < 1000);

export const checkUniqueDigits = (number) => {
    const numberS = String(number);
    let bool = true;
    for (let i = 0; i < numberS.length - 1; i += 1) {
        bool = (!(numberS.slice(i + 1).includes(numberS[i])) && bool);
    }
    return bool;
};

export const isSecondQuadrant = (x, y) => (x < 0) && (y > 0);

export const isIsoscelesTriangle = (a, b, c) => ((a == b) || (a == c) || (b == c)) && ((a !== 0) || (b !== 0) || (c !== 0));

export const areSameColorFields = (x1, y1, x2, y2) => ((x1 % 2 === y1 % 2) && (x2 % 2 === y2 % 2)) || ((x1 % 2 !== y1 % 2) && (x2 % 2 !== y2 % 2));