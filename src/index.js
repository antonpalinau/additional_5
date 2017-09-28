module.exports = function check(str, bracketsConfig) {
  // your solution

  for (var i = str.length - 1; i >= 0; i--) {
    console.log(i);
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0]) {
        console.log(str);
        str = str.replace(bracketsConfig[j].join(''), '');
        console.log(str);
      }
    }
  }
  if (str === '') {
    return true;
  }
  else {
    return false;
  }
}
