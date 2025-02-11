function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
  
    let maxSum = -Infinity;
    let tempSum = 0;
  
    for (let i = 0; i < num; i++) {
      tempSum += arr[i];
    }
  
    maxSum = tempSum;
  
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  }

 console.log( maxSubarraySum([3,-2,7,-4,1,-1,4,-2,11],2) )