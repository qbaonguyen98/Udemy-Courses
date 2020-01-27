print('\n***************************** USD - VND Converter *****************************\n')

usd = input('Enter your money ($): ')

vnd = round((float(usd) * 23172.50), 2)

print(f'{vnd} VND')
