#
# @lc app=leetcode id=912 lang=python3
#
# [912] Sort an Array
#
  # merge_sort 
        # divide the array into half and sort that in place 
        # def sort_array 
        # base case if the array is already sorted 
        # if len of nums <= 1:
            # return nums 
        # find the midpoint = len(nums) / 2 = round(midpoint)
        # recusrsively sort the left half 
        # left_half = SORT_ARRAY(nums[0:mid]) 
        # right_half = SORT_ARRAY(nums[mid:end])
        # return the merged array => return MERGE(left_half, right_half)
    # def MERGE(left, right):
    #  merged_list = []
    #  i = 0
    #  j = 0
    # while both list have elements --->
    # if left[i] < right[j]:
        # merged_list.append(left[i])
        # i += 1
      # else:
        # j+= 1
    # if they are sorted we append the elements in the list 
        # so left list 
        # right list 


    # return merged list 
from typing import List
# @lc code=start
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
            # base case 
        if len(nums) <= 1:
            return nums

        midpoint = (len(nums) // 2)
        left_half = self.sortArray(nums[:midpoint])
        right_half = self.sortArray(nums[midpoint:])

        return self.merge(left_half, right_half)
        
    def merge(self, left: List[int], right:List[int]) -> List[int]:
        merged_list = []
        i = 0
        j = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                merged_list.append(left[i])
                i += 1 
            else:
                merged_list.append(right[j])
                j += 1

        while i > len(left):
            merged_list.append(left[i])
            i += 1 

        while j > len(right):
            merged_list.append(right[j])
            j += 1 


        return merged_list
    
    






        
# @lc code=end

