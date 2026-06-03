"""
ventas_hoy = 1
while (ventas_hoy<=5):
    print(f"Venta de celular Nro: {ventas_hoy}")
    ventas_hoy +=1


print("Continue")
i = 1
while (ventas_hoy<=5):
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


codigo_celular = int(input("Ingrese codigo de celular a registrar:"))
while codigo_celular!=0:
    print("Ingresaste:", codigo_celular)
    codigo_celular = int(input("Ingrese codigo de celular a registrar:"))


ventas_hoy = 1
while (ventas_hoy<=5):
    print(f"Contador: {ventas_hoy}")
    ventas_hoy +=1
else: 
    print("Fin del ciclo")
"""


pin_caja = ""
while pin_caja != "4321":
    pin_caja = input("Ingrese PIN de la caja registradora: ")
    if pin_caja != "4321":
        print("PIN incorrecto, venta no iniciada")
print("PIN correcto, caja abierta para venta")
