nested_list = [[1, 2, 3], ['A', 'B', 'C'], ['a', 'b', 'c'], 'Reus']

print(nested_list[0][2])    # 3
print(nested_list[1][1])    # B
print(nested_list[3][1])    # e

print('-----------------------------------------------------------------------------------------')
# loop over nested list
for sub_list in nested_list:
    for item in sub_list:
        print(item)


print('-----------------------------------------------------------------------------------------')
# nested list comprehension
print( [['X' if num % 2 != 0 else 'O' for num in range(1, 4)] for num in range(1, 4)] )