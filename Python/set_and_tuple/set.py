# Sets do NOT have DUPLICATE values
# Set items are unordered, and can be anything
# can NOT access items by index

# Create a set -------------------------------------------------------------------
my_set = {'Quoc Bao', 21, 'VN'}
print(my_set)

print('----------------------')
# Check if an item is in the set -------------------------------------------------
print('Quoc Bao' in my_set)


print('----------------------')
# Add an item to the set (keep old if duplicate)
my_set.add('ENG')
print(my_set)


print('----------------------')
# Remove an item in the set (err if not exist) --> use .discard() if we don't want the err
my_set.remove('ENG')
print(my_set)


# .copy()

# .clear()


# Union in sets (join without duplicate)----------------------------------------------------
math_students = {'John', 'Reus', 'Lily'}
physics_students = {'Mike', 'John', 'Emily'}

print(math_students | physics_students)


print('----------------------')
# Get the same items in multiple sets
print(math_students & physics_students)
