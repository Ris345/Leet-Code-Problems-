#
# @lc app=leetcode id=88 lang=python3
#
# [88] Merge Sorted Array
#

# @lc code=start
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
       
     # two pointer but with a twist 
     # left_pointer = m -1 
     # right_pointer = n - 1 
     # merge_pointer = m + n - 1
     # while right_pointer >= 0:
        # if nums[left] > nums[right]:
            # nums1[merger_pointer] = nums1[left]
            # merge_pointer -= 1
        # else:
            # nums1[merge_pointer] = nums2[right]
            # right -= 1

    # return nums1


    # dry run 
    # iteration one 
    # nums1[1,2,3,0,0,0]
    # nums2[2,5,6]
    # nums[merge_pointer] = [6]
    # left = 3 - 1 = 2
    # right = 3 - 1 = 2
    # merge_pointer = 6 - 1 = 5
    # while right >= 0:
        # if nums1[2] > nums2[2] : will not execute 
            # nums[5] = nums1[2] = 3
            # merge_pointer -= 1 = 4 
        #else:
            # nums1[5] = nums2[2] = 6
            # right -= 1 = 1 

    #iteration two 
    # nums1[1,2,3,0,0,0]
    # nums2[2,5,6]
    #nums[merge_pointer] = [5,6]
    # left = 3 - 1 = 2 
    # right = 2 - 1 = 1
    # merge_pointer = 6 - 1 = 5 - 1 = 4
    # while right >= 0:
        # if nums1[2] > nums2[1]: will not execute because 3 >  5 
            # nums[4] = nums1[2] = 3
            # merge_pointer -= 1 = 3
        #else: this will execut instead 
        #   nums[4] = nums2[1] ----> 5 


    # iteration three
      # nums1[1,2,3,0,0,0]
    # nums2[2,5,6]
    #nums[merge_pointer] = [3,5,6]
    # left = 3 - 1 = 2 
    # right = 2 - 1 = 1 - 1 = 0 
    # merge_pointer = 6 - 1 = 5 - 1 = 4 - 1 = 3 
    # while right >= 0:
        # if nums1[2] > nums2[0]:  3 > 2 
            # nums[3] = nums1[2] = 3
            # merge_pointer -= 1 = 2
        #else: this will not execute 
        #  
    
    # iterartion 4 
        # nums1[1,2,3,0,0,0]
    # nums2[2,5,6]
    #nums[merge_pointer] = [3,5,6]
    # left = 3 - 1 = 2 
    # right = 2 - 1 = 1 - 1 = 0 
    # merge_pointer = 6 - 1 = 5 - 1 = 4 - 1 = 3 
    # while right >= 0:
        #if nums1[2] > nums2[0]:  3 > 2 
            # nums[3] = nums1[2] = 3
            # merge_pointer -= 1 = 2
        #else: this will not execute 
        #  
    
    




# # @lc code=end

