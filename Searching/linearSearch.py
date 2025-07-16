arr = [8, 5, 7, 3, 2, 10, 9]

searchElem = 10

def linearSearch(arr, elem):
    for index, num in enumerate(arr):
        if num == elem:
            return index
    return -1

print(f'The index of element is: {linearSearch(arr,searchElem)}')