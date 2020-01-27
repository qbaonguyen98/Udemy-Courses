# Get type of a variable -------------------------------------------------------------------------------------
my_num = 1.998
print(type(my_num))
print(type(1 + 2.0))

# Some operators ---------------------------------------------------------------------------------------------
print(3 ** 3)       # exponentiation
print(6 // 9)      # integer division
print(6 / 9)

# Some datatypes ---------------------------------------------------------------------------------------------
# (Python support dynamic typing)
my_list = [1, 2, 3]
print(my_list)

my_mix_list = [1, 'Hey', 9.8]
print(my_mix_list)

my_dict = { 'firstName': 'Quoc Bao', 'age': 21, 'nationality': 'Vietnam' }
print(my_dict)

my_null = None      # null in python  
print(my_null)

print('Hello. ' + 'My name is Quoc Bao.')      # string concatenation - only strings

# Formatted string (python 3.6+) -----------------------------------------------------------------------------
my_name = 'Quoc Bao'
my_f_string = f'Hello. My name is {my_name}.'
print(my_f_string)

my_old_f_string = 'Hello. My name is {}.'.format('Quoc Bao')     # for python 2 - 3.5
print(my_old_f_string)

# loop over a string
for letter in 'Reus':
    print(letter)

# Convert datatypes ------------------------------------------------------------------------------------------
print(int(120.957))
print(float('9.16'))
print(type(str(['QB', 21])))