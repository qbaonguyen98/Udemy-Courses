numbers = dict(first=1, second=2, third=3)
print(numbers)

print('------------------')
print( {key: value ** 2 for key, value in numbers.items()} )


print('------------------')
print( {num: num**2 for num in [1, 2, 3, 4, 5]} )


print('------------------')
str1 = 'ABC'
str2 = '123'

print( {str1[i]: str2[i] for i in range(0, len(str1))} )

