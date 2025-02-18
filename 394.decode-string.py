#
# @lc app=leetcode id=394 lang=python3
#
# [394] Decode String
# @lc code=start
 
# Step: 1
# stack = [] -> Empty stack to store the previous string and repeat count
# curr_str = "" Storesthe current decoded string
# curr_num = 0 Stores the current repeat count
 
# Step: 2
# Iterate through the string
# for each character in s:
#     if character is digit:
#         curr_num = curr_num * 10 + int(character)
#     elif character is '[':
#         stack.append(curr_str. curr_num)
#   reset curr_str and curr_num = 0
#     elif character is ']':
#         prev_str, prev_num = stack.pop()
#         curr_str = prev_str + prev_num * curr_str #Decode the string
#     else:
#         curr_str += character #Add the character to the current string
#    return curr_str
 
 
 
class Solution:
    def decodeString(self, s: str) -> str:
        stack = [] #Empty stack to store the previous string and repeat count
        curr_str = "" #Stores the current decoded string
        curr_num = 0 #Stores the current repeat count
 
        for character in s: #Iterate through the string
            if character.isdigit(): #If character is digit
                curr_num = curr_num * 10 + int(character) #Calculate the number # 10 * 3 + 4 = 34
            elif character == '[': #If character is '['
                stack.append((curr_str, curr_num)) #Store the current string and repeat count
                curr_str = "" #Reset the current string
                curr_num = 0 #Reset the current number
            elif character == ']': #If character is ']'
                prev_str, prev_num = stack.pop() #Get the previous string and repeat count
                curr_str = prev_str + prev_num * curr_str #Decode the string
            else:
                curr_str += character #Add the character to the current string
        return curr_str #Return the decoded string
    
       
# @lc code=end
 
 