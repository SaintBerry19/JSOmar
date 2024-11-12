import time
lista = []
numero = 1

x1 = time.time()
while len(lista) < 10000000:
    if numero % 3 == 0:
        lista.append(numero)
    numero += 1
x2 = time.time()
delta = x2 - x1
print(delta)


x3 = time.time()
lista2 = [3 * numero for numero in range(1, 10000000)]
x4 = time.time()
delta_2 = x4 - x3
print(delta_2)
print()
