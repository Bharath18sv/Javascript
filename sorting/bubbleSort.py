def bubbleSort(arr):
    for i in range(len(arr) - 1):
        for j in range(len(arr) - 1 - i): #after second for loop ends we get a largest element placed in its correct position, so ignore that value for comparision
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
        
    return arr

arr = [-1, -4, 0, 8, -7]
print(bubbleSort(arr))