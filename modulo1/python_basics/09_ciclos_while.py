"""
contador = 1
while (contador<=5):
    print(f"Contador: {contador}")
    contador +=1


print("Continue")
i = 1
while (contador<=5):
    i+=1
    if i == 1: 
        continue
    print(f"Contador: {i}")
print("Break")
i = 1
while (i<=5):
    i+=1
    if i == 3:
        break
    print(f"Contador: {i}")


numero = int(input("Ingrese numero:"))
while numero!=0:
    print("Ingresaste:", numero)
    numero = int(input("Ingrese numero:"))


contador = 1
while (contador<=5):
    print(f"Contador: {contador}")
    contador +=1
else: 
    print("Fin del ciclo")
"""


contrasena = ""
while contrasena != "1234":
    contrasena = input("Ingrese contraseña: ")
    if contrasena != "1234":
        print("Contraseña incorrecta")
print("Contraseña correcta, acceso concedido")