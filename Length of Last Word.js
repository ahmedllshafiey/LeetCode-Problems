/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let word = "";
  let str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "") {
      word = str[i];
    }
  }
  return word.length;
};
