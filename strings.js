export const countUppercaseLetters = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      count += 1;
    }
  }
  return count;
};

export const combineStrings = (N1, N2, S1, S2) => `${S1.slice(0, N1)}${S2.slice(S2.length - N2)}`;

export const containsSubstring = (S, S0) => S.includes(S0);

export const replaceSubstring = (S, S1, S2) => S.replace(S1, S2);

export const countWordsWithSameLetters = (sentence) => {
  if (sentence === '') return 0;
  let a = sentence[0];
  let b = '';
  let count = 0;
  for (let i = 1; i < sentence.length; i += 1) {
    if (sentence[i - 1] === ' ') {
      b = sentence[i - 2];
      if (a.toUpperCase() === b.toUpperCase()) count += 1;
      b = '';
      a = sentence[i];
    }
  }
  b = sentence[sentence.length - 1];
  if (a.toUpperCase() === b.toUpperCase()) count += 1;
  return count;
};

export const countWordsWithA = (sentence) => {
  let isA = 0;
  let count = 0;
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === 'a' || sentence[i] === 'A') {
      isA = 1;
    }
    if (sentence[i] === ' ') {
      if (isA === 1) count += 1;
      isA = 0;
    }
  }
  if (isA === 1) count += 1;
  return count;
};

export const normalizeSpaces = (sentence1) => {
  let sentence = sentence1;
  for (let i = 1; i < sentence.length - 1; i += 1) {
    if (sentence[i] === ' ' && (sentence[i - 1] === ' ' || sentence[i + 1] === ' ')) {
      sentence = `${sentence.slice(0, i)}${sentence.slice(i + 1)}`;
      i -= 1;
    }
  }
  console.log(sentence);
  if (sentence[0] === ' ') sentence = sentence.slice(1);
  if (sentence[sentence.length - 1] === ' ') sentence = sentence.slice(0, sentence.length - 1);
  return sentence;
};

export const extractFileName = (fullFileName) => {
  if (fullFileName === '') return '';
  const matches = fullFileName.match(/(?<=\/)([^/]+)(?=\.)/g);
  return matches[matches.length - 1];
};

export const encryptSentence = (sentence) => {
  let result = '';
  for (let i = 1; i < sentence.length; i += 2) {
    result += sentence[i];
  }
  if ((sentence.length - 1) % 2 === 1) {
    for (let i = sentence.length - 2; i >= 0; i -= 2) {
      result += sentence[i];
    }
  } else {
    for (let i = sentence.length - 1; i >= 0; i -= 2) {
      result += sentence[i];
    }
  }
  return result;
};

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

export const checkBrackets = (s) => {
  if (s === '') return 0;
  const stack = [];
  for (let i = 0; i < s.length; i += 1) { 
    const c = s[i];
    if (openingSymbols.includes(c)) stack.push(c);
    else if (closingSymbols.includes(c)) {
      if (!(closingSymbols.indexOf(c) === openingSymbols.indexOf(stack.pop()))) {
        if (stack.includes(openingSymbols[closingSymbols.indexOf(c)])) {
          return -1;
        } return s.indexOf(c);
      }
    }
  }
  if (stack.length === 0) {
    return 0;
  }
  return -1;
};
