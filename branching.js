import { number } from "yargs";

export const incrementIfPositive = (number) => number > 0 ? number + 1 : number;

export const getIndexOfSmallerNumber = (number1, number2) => number1 <= number2 ? 1 : 2;

export const findMiddleNumber = (number1, number2, number3) => {
    if (((number1 >= number2) && (number1 <= number3)) || ((number1 <= number2) && (number1 >= number3))) return number1;
    if (((number2 >= number1) && (number2 <= number3)) || ((number2 <= number1) && (number2 >= number3))) return number2;
    if (((number3 >= number2) && (number3 <= number1)) || ((number3 <= number2) && (number3 >= number1))) return number3;
};

export const findUniqueNumber = (number1, number2, number3, number4) => {
    if ((number1 !== number2) && (number1 !== number3) && (number1 !== number4)) return 1;
    if ((number2 !== number1) && (number2 !== number3) && (number2 !== number4)) return 2;
    if ((number3 !== number2) && (number3 !== number1) && (number3 !== number4)) return 3;
    if ((number4 !== number2) && (number4 !== number3) && (number4 !== number1)) return 4;
};

export const calculateF = (x) => {
    if (x < 0) return 0;
    if (Math.floor(x) % 2 === 0) return 1;
    if (Math.floor(x) % 2 === 1) return -1;
};

export const describeNumber = (n) => {
    let result = '';
    switch (n % 2) {
        case 0:
            result += 'четное';
            break;
        case 1:
            result += 'нечетное';
            break;
        default:
            break;
    }
    if (n < 10) return `${result} однозначное число`;
    if (n < 100) return `${result} двузначное число`;
    if (n < 1000) return `${result} трехзначное число`;
};

export const getDayName = (dayNumber) => {
    switch (dayNumber) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return 'Invalid day number.';
    }
};

export const convertToMeters = (unitNumber, lengthInUnits) => {
    switch (unitNumber) {
        case 1:
            return lengthInUnits / 10;
        case 2:
            return lengthInUnits * 1000;
        case 3:
            return lengthInUnits;
        case 4:
            return lengthInUnits / 1000;
        case 5:
            return lengthInUnits / 100;
    }
};

export const describeAge = (age) => {
    let result = '';
    switch (Math.floor(age / 10)) {
        case 2:
            result += 'двадцать'
            break;
        case 3:
            result += 'тридцать'
            break;
        case 4:
            result += 'сорок'
            break;
        case 5:
            result += 'пятьдесят'
            break;
        case 6:
            result += 'шестьдесят'
            break;
        default:
            break;
    }
    switch (age % 10) {
        case 0:
            result += ' лет';
            break;
        case 1:
            result += ' один год'
            break;
        case 2:
            result += ' два года'
            break;
        case 3:
            result += ' три года'
            break;
        case 4:
            result += ' четыре года'
            break;
        case 5:
            result += ' пять лет'
            break;
        case 6:
            result += ' шесть лет'
            break;
        case 7:
            result += ' семь лет'
            break;
        case 8:
            result += ' восемь лет'
            break;
        case 9:
            result += ' девять лет'
            break;
        default:
            break;
    }
    return result;
}

export const describeNumber2 = (number) => {
    let result = '';
    switch (Math.floor(number/100)) {
        case 1: 
            result += 'сто';
            break;
        case 2:
            result += 'двести';
            break;
        case 3:
            result += 'триста';
            break;
        case 4:
            result += 'четыреста';
            break;
        case 5:
            result += 'пятьсот';
            break;
        case 6:
            result += 'шестьсот';
            break;
        case 7:
            result += 'семьсот';
            break;
        case 8:
            result += 'восемьсот';
            break;
        case 9:
            result += 'девятьсот';
            break;
        default:
            break;
    }
    switch (Math.floor(number/10) % 10) {
        case 1: 
            switch (number % 10) {
                case 0:
                    return `${result} десять`;
                case 1:
                    return `${result} одиннадцать`;
                case 2:
                    return `${result} двенадцать`;
                case 3:
                    return `${result} тринадцать`;
                case 4:
                    return `${result} четырнадцать`;
                case 5:
                    return `${result} пятнадцать`;
                case 6:
                    return `${result} шестнадцать`;
                case 7:
                    return `${result} семьнадцать`;
                case 8:
                    return `${result} восемьнадцать`;
                case 9:
                    return `${result} девятнадцать`;
                default:
                    break;
            }
            break;
        case 2:
            result += ' двадцать';
            break;
        case 3:
            result += ' тридцать';
            break;
        case 4:
            result += ' сорок';
            break;
        case 5:
            result += ' пятьдесяь';
            break;
        case 6:
            result += ' шестьдесят';
            break;
        case 7:
            result += ' семьдесят';
            break;
        case 8:
            result += ' восемьдесят';
            break;
        case 9:
            result += ' девяносто';
            break;
        default:
            break;
    }
    switch (number % 10) {
        case 0:
            return `${result}`;
        case 1:
            return `${result} один`;
        case 2:
            return `${result} два`;
        case 3:
            return `${result} три`;
        case 4:
            return `${result} четыре`;
        case 5:
            return `${result} пять`;
        case 6:
            return `${result} шесть`;
        case 7:
            return `${result} семь`;
        case 8:
            return `${result} восемь`;
        case 9:
            return `${result} девять`;
        default:
            break;
    }
};
