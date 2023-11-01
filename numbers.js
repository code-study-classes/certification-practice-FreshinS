export const calculateDistance = (x1, x2) => Math.abs(x1 - x2);

export const calculateSegmentProduct = (A, B, C) => Math.abs(C - A) * Math.abs(C - B);

export const calculateKilobytes = (fileSizeInBytes) => Math.floor(fileSizeInBytes / 1024);

export const calculateSegments = (lengthA, lengthB) => Math.floor(lengthA / lengthB);

export const calculateDigitSum = (twoDigitNumber) => parseInt(String(twoDigitNumber)[0], 10) + parseInt(String(twoDigitNumber)[1], 10);

export const swapHundredsAndTens = (threeDigitNumber) => parseInt(`${String(threeDigitNumber)[1]}${String(threeDigitNumber)[0]}${String(threeDigitNumber)[2]}`, 10);

export const getHundredsDigit = (number) => Math.floor(number / 100) % 10;

export const getFullHours = (seconds) => {
    if (seconds !== Math.floor(seconds) || seconds < 0) {
        throw 'error';
    } 
    return Math.floor(seconds / 3600);
}

export const getDayOfWeek = (dayOfYear) => {
    switch (dayOfYear % 7) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
    }
}

export const countSquares = (A, B, C) => Math.floor(A / C) * Math.floor(B / C);