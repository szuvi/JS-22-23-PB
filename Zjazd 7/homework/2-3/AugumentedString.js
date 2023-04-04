class AugumentedString {
  constructor(string) {
    this.value = string.toString();
  }

  getLongestCommonSubstring(compared) {
    let longestSubstring = '';

    for (let index = 0; index < this.value.length; index += 1) {
      let sourceSubstring = this.value[index];
      let comparedSubstring = '';

      while (compared.indexOf(sourceSubstring) !== -1) {
        comparedSubstring = sourceSubstring;
        const endIndex = index + sourceSubstring.length + 1;
        sourceSubstring = this.value.slice(index, endIndex);
        if (endIndex > this.value.length) {
          break;
        }
      }

      if (comparedSubstring.length > longestSubstring.length) {
        longestSubstring = comparedSubstring;
      }
    }

    return longestSubstring;
  }

  getPalindrome() {
    const reversedValue = this.value.split('').reverse().join('');
    const res = this.getLongestCommonSubstring(reversedValue);
    if (res.length < 2) {
      return '';
    }
    return res;
  }
}

export default AugumentedString;
