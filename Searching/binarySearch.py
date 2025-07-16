def binarySearch(arr, num):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2

        if num == arr[mid]:
            return mid
        elif num > arr[mid]:
            low = mid + 1
        else:
            high = mid - 1
    return - 1

arr = [1,2,3,4,5,6]

print(binarySearch(arr, 6))