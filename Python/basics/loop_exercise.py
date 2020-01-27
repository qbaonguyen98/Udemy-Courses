num = int(input('Enter a number: '))

for i in range(1, num+1):
    j = 0
    smileys = ''
    while j < i:
        smileys += '\U0001f600'
        j += 1
    print(smileys)

print('------------------------------------------')

i = 1
if num % 2 == 0:
    num -= 1 
while i < num+1:
    print( ' ' * int((num-i)/2) + '\U0001f600' * i )
    i += 2

