sentence = input("Enter a sentence: ")

letter_repititions = {}

for char in sentence:
    if char.isalpha():
        char = char.lower()
        if char in letter_repititions:
            letter_repititions[char] += 1
        else:
            letter_repititions[char] = 1

print(letter_repititions)