from typing import List

nums = [100,4,200,1,3,2]

# class Solution:
#     def longestConsecutive(self, nums: List[int]) -> int:
#         # if there is a number that is less than the intital number then it is a start of the sequence:
#         #  else it is not 
#         new_num = set(nums)
#         start_num = []
#         longest_count = 1
#         temp_count = 1 
#         for n in new_num:
#             if n - 1 not  in new_num:
#                 start_num.append(n)
#             print(start_num)
        
#         for start_nums in start_num:
#             breaker = True 
#             while breaker: 
#                 if start_nums + 1 in new_num: 
#                     temp_count += 1 
#                     longest_count = max(longest_count, temp_count)
#                     start_nums += 1 
#                 else:
#                     temp_count = 1
#                     breaker = False 
            
#         return longest_count 
        
   
        
# class Solution:
#     def longestConsecutive(self, nums: List[int]) -> int:
#         new_num = set(nums)
#         start_num = []
#         longest_count = 1
#         temp_count = 1 
#         for n in new_num:
#             if n - 1 not  in  new_num:
#                 start_num.append(n)
            
#         for start_nums in start_num:
#             breaker = True
#             while breaker: 
#                 if start_nums + 1 in new_num:
#                     temp_count += 1 
#                     longest_count = max(longest_count, temp_count)
#                     start_num += 1
#                 else:
#                     temp_count = 1 
#                     breaker = False                             
# sl = Solution()
# print(sl.longestConsecutive(nums))
        
     
     
     
     
# class Solution:
#     def longestConsecutive(self, nums: List[int]) -> int:
#       new_num = set(nums)
#       start_num = []
#       longest_count = 1
#       temp_count = 1
#       for n  in new_num:
#           if n - 1 not in new_num:
#               start_num.append(n)
              
#       for start_nums in start_num: 
#           breaker = True
#           while breaker: 
#               if start_nums + 1 not in start_num:
#                   temp_count += 1 
#                   longest_count = max (longest_count, temp_count)
#               else:
#                   temp_count += 1 
                            
#       return longest_count
  
    
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        new_nums = set(nums)
        start_num = []
        longest_number = 1
        temp_count = 1 
        for n in new_nums: 
            if n - 1 not in new_nums:
                start_num.append(n)
        
        for start_nums in start_num: 
            breaker = True 
            while breaker: 
                if start_nums + 1 not in start_num: 
                    temp_count += 1 
                    longest_number = max(longest_number, temp_count)
                else: 
                    temp_count = 1 
                    breaker = False
                    
        return longest_number