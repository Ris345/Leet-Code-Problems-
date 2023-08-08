

from typing import List


matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]] 
target = 3
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
      result = False 
      for m in range(len(matrix)):
        matrix_arr = matrix[m]
        for t in range(len(matrix_arr)):
          if target == matrix_arr[t]:
            result = True 
          else:
            continue 
      return result; 
    
sol = Solution()
  
print(sol.searchMatrix(matrix, target))