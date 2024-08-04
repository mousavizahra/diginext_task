 function findLongestSubstring(str ) {
    let maxLength = 0;
  
    for (let i = 0; i < str.length; i++) {
      let charSet = new Set();
      for (let j = i; j < str.length; j++) {
        if (charSet.has(str[j])) {
          break;
        }
        charSet.add(str[j]);
        maxLength = Math.max(maxLength, charSet.size);
      }
    }
  
    return maxLength;
  }

console.log(findLongestSubstring("abcabcbb"))   
console.log(findLongestSubstring("bbbbb"))
console.log(findLongestSubstring("pwwkew"))