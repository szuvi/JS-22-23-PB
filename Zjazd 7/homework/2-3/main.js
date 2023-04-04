import AugumentedString from './AugumentedString.js';

const longesCommonString = new AugumentedString('karol');
console.log(longesCommonString.getLongestCommonSubstring('rolki'));

const palindrome = new AugumentedString('abckajakabc');
console.log(palindrome.getPalindrome());
