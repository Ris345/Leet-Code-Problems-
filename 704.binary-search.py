#
# @lc app=leetcode id=704 lang=python3
#
# [704] Binary Search
#

# @lc code=start

#  binary search 
#  intialize two pointers 
# left = 0
# right = len(nums) - 1

# while left >= right:
# # midpoint = len(nums) // 2
#   if nums[midpoint] == target:
#       return midpoint 
#   elif nums[midpoint] < target: 
#       left = midpoint + 1 
#  elif nums[midpoint] > target: 
#       right = midpoint - 1 
# return - 1 

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        #intilaize pointers 
        left = 0 
        right = len(nums) - 1 

        #iterate 
        while left <= right:
            midpoint = (left + right) // 2 
            if nums[midpoint] == target:
                return midpoint
            elif nums[midpoint] < target:
                left = midpoint + 1
            elif nums[midpoint] > target:
                right = midpoint - 1 

        # not found then 
        return - 1


    # ietration 0
    # left = 0 
    # right = len(nums) - 1
    # while left <= right: 0 <= 5
    # midpoint = len(nums) // 2
    # midpoint = (left + right) // 2 --> 0 + 5 // 2 = 4 
    # if nums[midpoint] == target: --> nums[4] 9 == 9 
    # return midpoint 
    # elif nums[midpoint] < target:
        #         left = midpoint + 1
        #     elif nums[midpoint] > target:
        #         right = midpoint - 1 

        # # not found then 
        # return - 1

    
    

       
# @lc code=end

