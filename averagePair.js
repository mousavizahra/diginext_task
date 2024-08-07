function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      let currentAvg = (arr[left] + arr[right]) / 2;
      if (currentAvg === target) {
        return true;
      } else if (currentAvg < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  
    return false;
  }


  const result = averagePair([1,2,3],3.5);
  console.log(result);
 