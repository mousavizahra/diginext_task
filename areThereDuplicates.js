function areThereDuplicates(arr) {
    const frequencyCounter = {};
  
    for (let num of arr) {
      frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
      if (frequencyCounter[num] > 1) {
        return true;
      }
    }
  
    return false;
  }
  
  const result = areThereDuplicates(['a','b','a']);
  console.log(result);
 