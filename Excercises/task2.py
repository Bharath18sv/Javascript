def merge_list(a, b, c):
    index = 0
    for i in list1:
        c.append(i)
        index = i
    for j in list2:
        c.append(j)

    return c

list1 = list(map(int, input('Enter first list: ').split(" ")))
list2 = list(map(int, input("Enter a second list: ").split(" ")))

appended_list = []
print(merge_list(list1, list2, appended_list))