

#### Learning Bubble Sort #################
# iteration 0 
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (0,6)
#             if lst[i] > lst[i + 1]:  65 > 55 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 55 = 55, 65 [55,65,45,35,25,15,10]
#         unsorted_until_index -= 1 --> 6 - 1 = 5 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)



# iteration 1
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (1,6)
#             if lst[i] > lst[i + 1]:  65 > 45 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 45 = 45, 65 [55,45,65,35,25,15,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)


# iteration 2
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (2,6)
#             if lst[i] > lst[i + 1]:  65 > 35 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 35 = 35, 65 [55,45,35,65,25,15,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)

# iteration 3
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (3,6)
#             if lst[i] > lst[i + 1]:  65 > 25 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 25 = 25, 65 [55,45,35,25,65,15,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)

# iteration 4
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (4,6)
#             if lst[i] > lst[i + 1]:  65 > 15 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 15 = 15, 65 [55,45,35,25,15,65,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)

# iteration 5
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (5,6)
#             if lst[i] > lst[i + 1]:  65 > 10
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 10 = 10, 65 [55,45,35,25,15,10,65]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)


# iteration 0 
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (0,6)
#             if lst[i] > lst[i + 1]:  65 > 55 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 55 = 55, 65 [55,65,45,35,25,15,10]
#         unsorted_until_index -= 1 --> 6 - 1 = 5 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)



# iteration 1
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (1,6)
#             if lst[i] > lst[i + 1]:  65 > 45 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 45 = 45, 65 [55,45,65,35,25,15,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)


# iteration 2
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (2,6)
#             if lst[i] > lst[i + 1]:  65 > 35 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 35 = 35, 65 [55,45,35,65,25,15,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)

# iteration 3
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (3,6)
#             if lst[i] > lst[i + 1]:  65 > 25 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 25 = 25, 65 [55,45,35,25,65,15,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)

# iteration 4
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (4,6)
#             if lst[i] > lst[i + 1]:  65 > 15 
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 15 = 15, 65 [55,45,35,25,15,65,10]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)

# iteration 5
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (5,6)
#             if lst[i] > lst[i + 1]:  65 > 10
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 65, 10 = 10, 65 [55,45,35,25,15,10,65]
#         unsorted_until_index -= 1 ---> this executes and 5 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)



# iteration 0
# def bubble_sort(lst):
#     unsorted_until_index = len(lst) - 1 # 6 # 5
#     sorted = False

#     while not sorted: --> correct condition because the sorted is false 
#         sorted = True ---> sorted is flipped to true 
#         for i in range(unsorted_until_index): (0,5)
#             if lst[i] > lst[i + 1]:  55 > 45
#                 sorted = False --> condition executes 
#                 lst[i], lst[i + 1] = lst[i + 1], lst[i] 55, 45 = 10, 65 [55,45,35,25,15,10,65]
#         unsorted_until_index -= 1 

# lst = [65, 55, 45, 35, 25, 15, 10]
# bubble_sort(lst)
# print(lst)


# basically the unsorted_index will continue shrinking until all the items are sorted 

