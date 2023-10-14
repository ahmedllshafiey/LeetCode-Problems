/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (bracketPairs[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (bracketPairs[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("{[]}"));
