my_list = [1, 2, 'Quoc Bao']

# Get the length
print(len(my_list))

# Access item in list 
print(my_list[2])

# Check if an item is in a list
print('Quoc Bao' in my_list)

# ------------------ ADD to a list -----------------------------------------------------------------------------------------------------

# Add ONE item to the end of a list
my_list.append('Reus Nguyen')
print(my_list)

# Add MULTIPLE items to the end of a list
my_list.extend([3, 4, 'five'])
print(my_list) 

# Insert ONE item at a given position in a list
my_list.insert(3, 'Age = 21')
print(my_list)

# ------------------ REMOVE from a list ------------------------------------------------------------------------------------------------

# Remove item with .pop()
my_list.pop()
print(my_list)

removed_item = my_list.pop(4)
print(my_list)
print(removed_item)

# Remove item with .remove(item)
my_list.remove('Age = 21')
print(my_list)

try:
    my_list.remove(5)       # if not found, it will throw err
except:
    print('Item \'5\' not found')

# Clear all items
# my_list.clear()
# print(my_list)

# ------------------ GET INDEX of item -------------------------------------------------------------------------------------------------
print(my_list.index('Quoc Bao'))
#print(my_list.index('Quoc Bao', 3, 4))     # we can also provide the start and end to search


# ------------------ REVERSE the list --------------------------------------------------------------------------------------------------
my_list.reverse()
print(my_list)

# ------------------ SORT the list -----------------------------------------------------------------------------------------------------
a = [1, 2, 6, 0, 23, -2, 8, 6, 10, 4.5]
a.sort()
print(a)

# ------------------ JOIN to a string --------------------------------------------------------------------------------------------------
words = ['My', 'name', 'is', 'Quoc Bao']
print(' '.join(words))
print('--'.join(words))

# ------------------ SLICING the list --------------------------------------------------------------------------------------------------
print(my_list[2:])
print(my_list[:2])
print(my_list[1::2])    # start = 1, to end, step = 2
print(my_list[::2])     # start to end, step = 2

# ------------------ SWAPPING the list --------------------------------------------------------------------------------------------------
class_list = ['12A1', '12A9']
class_list[0], class_list[1] = class_list[1], class_list[0]
print(class_list)