/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

Outputs:::>
validAnagram('',''); //true
validAnagram('aaz','zza'); //false
validAnagram('anagram', 'nagaram'); //true
validAnagram('rat', 'car'); //false
validAnagram('awesome', 'awesom'); //false
validAnagram('qwerty', 'qeywrt'); //true
validAnagram('texttwisttime', 'timetwisttext'); //true
*/
// Solution 1::>

/*
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lettersCountInStr1 = {};
  let lettersCountInStr2 = {};
  for (let letter of str1) {
    lettersCountInStr1[letter] = (lettersCountInStr1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    lettersCountInStr2[letter] = (lettersCountInStr2[letter] || 0) + 1;
  }
  // console.log(lettersCountInStr1, lettersCountInStr2);
  for (let key in lettersCountInStr1) {
    // The letter in string one does not exist in string two, return false.
    if (!lettersCountInStr2[key]) return false;

    // if the count of those letters do not match return false.
    if (lettersCountInStr1[key] !== lettersCountInStr2[key]) return false;
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
*/

// Solution 2::>
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let ref = {};

  for (let letter of str1) {
    ref[letter] = (ref[letter] || 0) + 1;
  }

  // console.log(ref);
  for (let letter of str2) {
    if (!ref[letter]) return false;
    // if the letter exists in the ref then we subtract one from its count so that it becomes 0 (falsy)
    ref[letter] -= 1;
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
