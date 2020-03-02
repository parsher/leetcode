/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  
    // [1, 2, 3] // [1, 3, 2]
    
    // [2, 1, 3] // [2, 3, 1]
    
    // [3, 2, 1] // [3, 1, 2]
    const result = [];
    
    function backtrack(pickIndex) {
        if (pickIndex === nums.length) {
            result.push([...nums]); // nums.slice(0);
            return;
        }
        
        for (let i = pickIndex; i < nums.length; i++) {
            // swap
            [nums[pickIndex], nums[i]] = [nums[i], nums[pickIndex]];
            
            backtrack(pickIndex + 1);
            
            // recover
            [nums[i], nums[pickIndex]] = [nums[pickIndex], nums[i]];
        }
    }
    
    backtrack(0);
    
    return result;
};