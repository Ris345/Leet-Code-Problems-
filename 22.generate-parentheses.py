#
# @lc app=leetcode id=22 lang=python3
#
# [22] Generate Parentheses
#

# intialize empty list 
        # open_count = 0
        # close_count = 0 
        # recursive func def back_track():
        # should have some sort of stoppig condition 
        # if string n ** 2 == len(str) --> valid sequence and store in the list append that str ton the list 
        # elif open_count < n continue the recursion function 
        # 




# @lc code=start

from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
      
        # recursively call the function 
        def back_track(s, open, close):
            if len(s) == n * 2:
                results.append(s)
                return 
            if open < n: 
                back_track(s + "(", open + 1, close)
            elif close < open:
                back_track(s + ")", open, close + 1)
        results = []
        back_track("",0 ,0)
        return results         
                
                
# @lc code=end

