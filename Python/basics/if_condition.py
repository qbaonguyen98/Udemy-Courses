age = input('Enter your age: ')

if age:
    age = int(age)
    if age < 12:
        print('Child')
    elif age < 18:
        print('Adolescence')
    elif age < 59:
        print('Adult')
    else:
        print('Senior Adult')
else:
    print('Please provide you age!')