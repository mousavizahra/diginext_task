function minSubArrayLen(nums, s) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    let left = 0;
    let currSum = 0;
    let minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];

        while (currSum >= s) {
            minLen = Math.min(minLen, right - left + 1);
            currSum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,31],7))