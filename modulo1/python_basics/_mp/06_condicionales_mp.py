print("Condicionales simples")
precio = input("¿Cuál es el precio del celular?")
if (int(precio) >= 1000):
    print("Es un celular de gama alta")

print("Condicionales 2 caminos")
bateria = input("¿Qué porcentaje de batería tiene el celular?")
if (int(bateria) <= 20):
    print("Batería baja, requiere carga")
else:
    print("Batería con carga suficiente")

print("Condicionales multiples")
descuento = input("¿Qué porcentaje de descuento se aplica?")
if (int(descuento) >= 30):
    print("Gran Descuento")
elif (int(descuento) >= 15):
    print("Descuento Moderado")
elif (int(descuento) >= 5):
    print("Descuento Bajo")
else:
    print("Sin Descuento")


print("Condicionales if anidados")
cliente_registrado = True
presupuesto = 1200
celular = "iPhone 15"
if (cliente_registrado):
    if(presupuesto>=1000):
        if celular == "iPhone 15":
            print("Tu iPhone 15 cuesta $1000. Compra Confirmada")
        else:
            print("Celular no disponible")
    else:
        print("Sin dinero suficiente para el iPhone 15")
else:
    print("No está registrado como cliente")


print("Evaluación de celulares")
equipo_nuevo = input("¿Es un equipo nuevo? (si/no): ").lower()
if equipo_nuevo == "si":
    meses_garantia = int(input("Ingrese meses de garantía: "))
    if meses_garantia >= 12:
        if meses_garantia == 12:
            print("Equipo con 12 meses de garantía (estándar)")
        else:
            print("Equipo con más de 12 meses de garantía (extendida)")
    else:
        print("Equipo con garantía corta (menos de un año)")
else:
    print("No es un equipo nuevo (es usado/reacondicionado)")
