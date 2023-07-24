# following DSA course freecode camp 

# def linear_search(list, target):
#     """
#     Returns the index position of the target if found, else return None
#     """
#     for i in range (0, len(list)):
#         if list[i] == target: 
#             return i    
#     return None
        
# def verify(index):
#     if index is not  None:
#         print('Target found at index : ', index)
#     else:
#         print('Not found in list')
        





# numbers = [1,2,3,4,5,6,7,8,9,10]

# result = linear_search(numbers, 6)
# verify(result)

numbers = [1,2,3,4,5,6,7,8,9,10]
# def binary_search(list, target):
#     first = 0
#     last = len(list) - 1
#     print(last)
    
#     while first <= last:
#         midpoint = (first + last)//2
#         print(midpoint)
        
#         if list[midpoint] == target:
#             print(target)
#             return target 
#         elif list[midpoint] < target:
#             first = midpoint + 1
#             print(first)
#         else:
#             last = midpoint - 1
#             print(last)
#     return None 
    
    
    
# def verify(index):
#     if index is not  None:
#         print('Target found at index : ', index - 1)
#     else:
#         print('Not found in list')
        

# result = binary_search(numbers, 9)
# verify(result)

# numbers = [1,2,3,4,5,6,7,8]
# def recursive_binary_search(list,target):
#     if len(list) == 0:
#         return False
#     else:
#         midpoint = len(list) // 2
#         if list[midpoint] == target:
#             return True 
#         else: 
#             if list[midpoint] < target:
#                 return recursive_binary_search(list[midpoint + 1:], target)
#             else: 
#                 return recursive_binary_search(list[:midpoint], target)
            
            
# def verify (result):
#     print("target found", result)
 
# result = recursive_binary_search(numbers, 12)

# verify(result)   
    
# result = recursive_binary_search(numbers, 5)

# verify(result)


# writing a function to learn about recursion 
# this function keeps calling itself until it reaches n <=1 then the conditon returns 1 

# def factorial (n):
#     if n <= 1:
#         return 1
#     else:
#         return n * factorial(n - 1)
    
    

# print(factorial(4))



