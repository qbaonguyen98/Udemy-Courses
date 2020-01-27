# Create a dict------------------------------------------------------------------------------------------------
my_dict = {
    'name': 'Quoc Bao',
    'age': 21,
    'nationality': 'Vietnamese',
    'favorite color': ['red', 'blue', 'yellow']
}
# WE CAN USE ANYTHING FOR KEY AND VALUE 
print(my_dict)

my_dog = dict(name='Milu', color='while', type='Corgi')
print(my_dog)


print('--------------')
# Get data from dict ------------------------------------------------------------------------------------------
print(my_dict['name'])


print('--------------')
# Loop over a dict --------------------------------------------------------------------------------------------
for key in my_dict.keys():
    print(key)

print('--------------')
for val in my_dict.values():
    print(val)

print('--------------')
for key, val in my_dict.items():
    print(f'Key: {key} -> Value: {val}')


print('--------------')
# Check if a key exists in dict -------------------------------------------------------------------------------
print('name' in my_dict)


print('--------------')
# Check if a value exists in dict -----------------------------------------------------------------------------
print('Quoc Bao' in my_dict.values())





# ----------------------------------------- SOME METHODS ------------------------------------------------------
# Clear all items
my_dog.clear()
print(my_dog)

print('--------------')
# Copy a dict
my_dict2 = my_dict.copy()
print(my_dict2)
print(my_dict2 is my_dict)

print('--------------')
# Add a key-value pair - only work for empty dict
print({}.fromkeys(['Job', 'Age'], 'Unknown'))

print('--------------')
# Get value of a key
print(my_dict.get('age'))

print('--------------')
# Remove a key-value pair with specified key
removed_value = my_dict.pop('favorite color')
print(removed_value)
print(my_dict)

print('--------------')
# Remove a random key-value pair
removed_item = my_dict.popitem()
print(removed_item)
print(my_dict)

print('--------------')
# Update keys-values of a dict with a set of key-value pairs
my_dict.update(my_dict2)
print(my_dict)


