print("Match Case")
marca = input("Ingrese marca de celular (apple/samsung/xiaomi): ").lower()
match marca:
    case "apple":
        print("Dispositivo con sistema iOS")
    case "samsung":
        print("Dispositivo con sistema Android (One UI)")
    case "xiaomi":
        print("Dispositivo con sistema Android (MIUI/HyperOS)")
    case _:
        print(f"Marca {marca} no catalogada")


print("Match condiciones")
precio_celular = 850
match precio_celular:
    case p if p<0:
        print(f"${p} no es un precio de venta válido")
    case 0:
        print("El celular se entrega como obsequio/regalo")
    case p if p%2==0:
        print(f"${p} es un precio con número par")
    case p:
        print(f"${p} es un precio con número impar")
