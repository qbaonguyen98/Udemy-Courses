# for in
for item in [1, 2, 'Reus', 'Quoc Bao']:
    print(item)

# for in range --> never include the last argument
print('-----------------------')
for i in range(1, 5):      # from 1 to 4
    print(i)

print('-----------------------')
for i in range(5):      # from 0 to 4
    print(i)

print('-----------------------')
for i in range(1, 10, 2):      # step = 2
    print(i)

print('-----------------------')
for i in range(9, 1, -2):      # step = 2
    print(i)


# use range to make a list of ordered number
print('-----------------------')
print(list(range(1,10)))
