String.prototype.toJadenCase = function () {
  const arrWords = this.split(' ').map(words => words.split(''));
  for (let i = 0; i < arrWords.length; i++) {
    arrWords[i][0] = arrWords[i][0].toUpperCase()
  }
  return arrWords.map(word => word.join('')).join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()
