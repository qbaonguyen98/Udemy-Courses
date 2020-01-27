nums = [1, 2, 3]
nums.extend([4, 5, 6, 7, 8, 9, 10])

# For manipulating items in list
print([x**2 for x in nums])

print([x/2 for x in nums])

print([x**2 for x in range(1, 10, 2)])

name = 'reus'
print([char.upper() for char in name])

# Use with condition
evens = [num for num in nums if num % 2 == 0]
print(evens)

print([num*2 if num % 2 == 0 else num/2 for num in nums])