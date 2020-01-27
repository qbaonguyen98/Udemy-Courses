# Create a tuple 
odd_numbers = (1, 3, 5, 7, 9, 9, 11, 13, 21)
print(odd_numbers)
print(odd_numbers[4])

# Tuple can NOT be changed
try:
    odd_numbers[0] = 11
except:
    print('can NOT immutate tuple')

# Count the occurrence of an item in tuple
print(odd_numbers.count(9))

# Get the first index of item
print(odd_numbers.index(9))

