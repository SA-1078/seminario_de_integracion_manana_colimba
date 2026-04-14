print("Condicionales simples")
edad = input("Incluye edad?")
if (int(edad) >= 18):
    print("Es mayor de edad")

print("Condicionales 2 caminos")
temperatura = input("Incluye temperatura?")
if (int(temperatura) >= 30):
    print("Temperatura alta")
else:
    print("Temperatura normal")

print("Condicionales multiples")
nota = input("Incluye nota?")
if (int(nota) >= 90):
    print("Excelente")
elif (int(nota) >= 80):
    print("Beno")
elif (int(nota) >= 70):
    print("Aprobado")
else:
    print("Reprobado")


print("Condicionales if anidados")
tiene_reserva = True
dinero = 25
plato = "Pizza"
if (tiene_reserva):
    if(dinero>=20):
        if plato == "Pizza":
            print("Tu pizza cuesta $20. Pedido Confirmado")
        else:
            print("Plato no disponible")
    else:
        print("Sin dinero suficiente")
else:
    print("No tiene reserva")


print("Evaluación de empleados")
empleado_nuevo = input("¿Es un empleado nuevo? (si/no): ").lower()
if empleado_nuevo == "si":
    ano_experiencia = int(input("Ingrese años de experiencia: "))
    if ano_experiencia >= 1:
        if ano_experiencia == 1:
            print("Empleado con 1 año de experiencia")
        else:
            print("Empleado con más de 1 año de experiencia")
    else:
        print("Empleado sin experiencia")
else:
    print("No es un empleado nuevo")



