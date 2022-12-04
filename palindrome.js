const palindrome = (s) => {
  const str = s.replace(/\s/g, "");
  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }

  return true;
};

console.log(palindrome("madam im adam"));

const isPalindrome = function (s) {
  let cursor1 = 0;
  let cursor2 = s.length - 1;

  while (cursor1 < cursor2) {
    if (s[cursor1].toLowerCase() === s[cursor1].toUpperCase()) {
      cursor1++;
      continue;
    }
    if (s[cursor2].toLowerCase() === s[cursor2].toUpperCase()) {
      cursor2--;
      continue;
    }
    if (s[cursor1].toLowerCase() === s[cursor2].toLowerCase()) {
      cursor1++;
      cursor2--;
      continue;
    }
    return false;
  }

  return true;
};

console.log(isPalindrome("madam im  --45_ adam"));
