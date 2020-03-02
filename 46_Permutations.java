import java.util.*;

class Solution {
    public List<List<Integer>> permute(int[] nums) {
        
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        
        backtrack(0, nums, result);
        
        return result;
    }
    
    private void backtrack(int pickIndex, int[] nums, List<List<Integer>> result) {
        if (pickIndex == nums.length) {
            
            List<Integer> list = new ArrayList<Integer>();
            
            for (int i = 0; i < nums.length; i++) {
                list.add(nums[i]);
            }
            
            result.add(list);
            return;
        }
        
        
        for (int i = pickIndex; i < nums.length; i++) {
            
            swap(nums, pickIndex, i);
            
            backtrack(pickIndex + 1, nums, result);
            
            swap(nums, i, pickIndex);
            
        }
        
        
    }
    
    private void swap(int[] nums, int index1, int index2) {
        if (index1 == index2) return;
        
        int temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }
}