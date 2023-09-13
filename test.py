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

# numbers = [1,2,3,4,5,6,7,8,9,10]
# # def binary_search(list, target):
# #     first = 0
# #     last = len(list) - 1
# #     print(last)
    
# #     while first <= last:
# #         midpoint = (first + last)//2
# #         print(midpoint)
        
# #         if list[midpoint] == target:
# #             print(target)
# #             return target 
# #         elif list[midpoint] < target:
# #             first = midpoint + 1
# #             print(first)
# #         else:
# #             last = midpoint - 1
# #             print(last)
# #     return None 
    
    
    
# # def verify(index):
# #     if index is not  None:
# #         print('Target found at index : ', index - 1)
# #     else:
# #         print('Not found in list')
        

# # result = binary_search(numbers, 9)
# # verify(result)

# # numbers = [1,2,3,4,5,6,7,8]
# # def recursive_binary_search(list,target):
# #     if len(list) == 0:
# #         return False
# #     else:
# #         midpoint = len(list) // 2
# #         if list[midpoint] == target:
# #             return True 
# #         else: 
# #             if list[midpoint] < target:
# #                 return recursive_binary_search(list[midpoint + 1:], target)
# #             else: 
# #                 return recursive_binary_search(list[:midpoint], target)
            
            
# # def verify (result):
# #     print("target found", result)
 
# # result = recursive_binary_search(numbers, 12)

# # verify(result)   
    
# # result = recursive_binary_search(numbers, 5)

# # verify(result)


# # writing a function to learn about recursion 
# # this function keeps calling itself until it reaches n <=1 then the conditon returns 1 

# # def factorial (n):
# #     if n <= 1:
# #         return 1
# #     else:
# #         return n * factorial(n - 1)
    
    

# # print(factorial(4))


# # new_list = [1,2,3]


# # result = new_list[0]


# # # if 1 in new_list:
# # #     print(True)
    
# # for n in new_list:
# #     if n == 1:
# #         print(True)
        
# #     break



# # linked lists 

# class Node: 
#     """
#     Object for storing single Linked List 
#     Models two attributes - data and the link to the next node in the list 
#     """
#     data = None
#     nextNode = None
    
#     def __init__(self, data):
#         self.data = data 
        
#     def __repr__(self):
#             return "<Node data: %s>" % self.data


# class LinkedList:
#     """ 
#     Singly Linked List
#     """
#     def __init__(self):
#         self.head = None
        
#     def is_empty(self):
#         return self.head == None
    
#     def size(self):
#         """ Returns the number of nodes in the list 
#         takes 0(n) time 
#         """
#         current = self.head
#         count = 0
#         while current:
#             count += 1
#             current = current.next_node 
        
#         return count 
    
    
# from typing import List
 
    
# numbers = [2,7,11,15]
    
# class Solution:
#         def twoSum(self, numbers: List[int], target: int) -> List[int]:
#             left = 0
#             right = len(numbers) - 1
#             while left < right: 
#                 sum = numbers[left] + numbers[right]
#                 if sum == target:
#                     return [left + 1, right + 1]
#                 elif right > left:
#                     right -= 1
#                 else:
#                     left += 1
#             return []
        
# sol = Solution()
# print(sol.twoSum(numbers, 9))
        

# class Node: 
#     data = None
#     next_node = None
    
#     def __init__(self, data):
#         self.data = data 
        
#     def __repr__(self):
#         return "<Node data: %s>" % self.data


# class LinkedList:
    
#     def __init__(self):
#         self.head = None
         
#     def is_empty(self):
#         return self.head == None
    
#     def size(self):
#         current = self.head
#         count = 0
        
#         while current:
#             count += 1
#             current = current.next_node
            
#         return count 
    
#     def add(self, data):
#         new_node = Node(data)
#         new_node.next = self.head
#         self.head = new_node
#     def search(self, key):
#         current = self.head
        
#         while current:
#             if current.data == key:
#                 return current
#             else: 
#                 current = current.next_node
#             return None     
        
        
#     def __repr__(self):
        
#         nodes = []
#         current = self.head
        
#         while current: 
#             if current is self.head:
#                 nodes.append("[Head: %s]" % current.data)
#             elif current.next_node is None: 
#                 nodes.append("[Tail: %s]" % current.data)
#             else: 
#                 nodes.append("[%s]" % current.data)
                
#             current = current.next_node
#         return '-> '.join(nodes)  
            
    



class Node: 
    data = None
    next_node = None
    
    def __init__(self, data) -> None:
        self.data = data
        
    
    
    def __repr__(self) -> str:
        return "<Node data: %s>" % self.data
    
    
    
class LinkedList():
    
    def __init__(self) -> None:
        self.head = None
    
    def is_empty(self):
        return self.head == None
    
    def size(self):
        current = self.head
        count = 0
        
        while current:
            count += 1
            current = current.next_node
            
            
        return count