print("Ciclos For")
celulares = ["iphone", "samsung", "xiaomi"]
for celular in celulares:
    print(celular) 
print("Recorre palabras")
for letra in "celular":
        print(letra)

print("Recorre rango")
for i in range(1,6):
    print(i)

print("Recorre rango configurar paso")
for i in range(1, 10, 2):
    print(i)

print("Enumerar lista")
for i, celular in enumerate(celulares):
    print(f"{i}: {celular}")

print("Dos listas a la vez")
modelos = ["S24 Ultra", "iPhone 15"]
precios = [1200, 1000]
for modelo, precio in zip(modelos, precios):
    print(modelo,precio)

print("control de ciclo")
print("break")
for i in range(5):
    if i == 3:
        break
    print(i)    
print("continue")
for i in range(5):
    if i == 2:
        continue
    print(i)

print("for anidado")
for i in range(3):
    for j in range(2):
        print(i, j)
print("Listas comprehension forma corta")        
descuentos = [x**2 for x in range(5)]
print(descuentos)


print("Evalucion de ventas")
ventas = [120, 80, 200, 50, 300]
ventas_validas = 0
bono_total = 0
for venta in ventas :
    if venta > 100:
        ventas_validas += 1
        if venta > 250:
            bono_total  += 30
        else:
            bono_total += 10
print("Total de eventas validas:", ventas_validas)
print("Bono total:", bono_total)
