lista = []
for i in range(1,11):
    lista.append(i)

print(lista)

lista_not = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
lista_2 =[x for x in lista_not if x not in lista]
print(lista_2)