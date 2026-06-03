print("Funciones en Python")

#Definición de funciones
print("Funcion Basica")
def anuncio_tienda():
    print("Bienvenidos a SmartPhone Store")

anuncio_tienda()

print("Funcion con parametro")
def mostrar_promocion(marca):
    print(f"¡Gran descuento en {marca} hoy!")

mostrar_promocion("Apple")
mostrar_promocion("Samsung")
mostrar_promocion("Xiaomi")

print("Funcion que devuelve un valor con return")
def calcular_total(precio_base, iva):
    return precio_base + iva

print(calcular_total(800, 120))


print("Funcion parametros por posicion y por nombre")
def registrar_venta(cliente, modelo, precio):
    print(f"{cliente}, compraste el {modelo} por un valor de ${precio}")

registrar_venta("Santiago", "iPhone 15", 1000) #POR POSICION
registrar_venta(precio=1200, cliente="Juan", modelo="S24 Ultra") #POR NOMBRE

print("Parametros por defecto")
def detalle_celular(modelo, marca="Samsung", almacenamiento="128GB"):
    print(f"{marca} {modelo} {almacenamiento}")

detalle_celular("Galaxy S24", "Samsung", "256GB")
detalle_celular("Galaxy A55", almacenamiento= "256GB")
detalle_celular("Galaxy S23", "Samsung")

print("Funcion parametros posicionales")
def calcular_total_pedido(*precios):
    print(f"Argumentos recibidos {precios}")
    return sum(precios)

print(calcular_total_pedido(800, 200, 50))
print(calcular_total_pedido(999, 199, 49, 15, 25, 9, 10))
print(calcular_total_pedido(1200, 899, 450))


print("Funcion parametros combinados con posicional")
def mostrar_catalogo(marca, *modelos):
    print(f"Argumentos recibidos {marca} {modelos}")
    print(marca)
    for modelo in modelos:
        print(f" - {modelo}")

mostrar_catalogo(mostrar_catalogo("Gama Alta", "iPhone 15 Pro", "S24 Ultra", "Xiaomi 14 Ultra", "Pixel 8 Pro"))


print("funcion parametros clave valor variables")

def crear_ficha_tecnica(**especificaciones):
    print(f"Argumentos recibidos {especificaciones}")
    for clave, valor in especificaciones.items():
        print(f"{clave}: {valor}")

crear_ficha_tecnica(modelo="iPhone 15 Pro", ram="8GB", almacenamiento="256GB", color="Titanio Natural")



print("funcion parametros combinacion de todos los tipos" )

def configurar_tienda(nombre_tienda, *sucursales, online=True, **politicas):
    print(f"Tienda: {nombre_tienda} ")
    print(f"Sucursales: {sucursales} ")
    print(f"Online: {online} ")
    print(f"Politicas: {politicas} ")

configurar_tienda("SmartStore Matriz", "Centro", "Norte", "Sur", online=True, envio_gratis=True, garantia_meses=12)

print("Devolver multiples valores" )
def precios_minmax(precios):
    return min(precios), max(precios)
minimo, maximo = precios_minmax([199, 450, 999, 1200, 899, 150])
print(f"Minimo: {minimo}, Maximo: {maximo}")
_, maximo = precios_minmax([120, 350, 799, 1499, 2100])
print(f"Solo Maximo: {maximo}")

print("Devolver diccionario en el caso de muchos valores")
def analizar_ventas(precios):
    total = sum(precios)
    n=len(precios)

    return{
        "total": total,
        "media": total/n if n > 0 else 0,
        "minimo": min(precios) if precios else None,
        "maximo": max(precios) if precios else None,
        "count": n
    }
datos = [999, 899, 450, 199, 1200, 650]
stats = analizar_ventas(datos)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']:.2f}")
print(f"Rango: {stats['minimo']} - {stats['maximo']}")

print("Funciones Lambdas")
def aplicar_descuento_50_porciento(precio):
    return precio*0.5
descuento_lambda = lambda precio: precio*0.5
print(aplicar_descuento_50_porciento(1000))
print(descuento_lambda(1000))
sumar_accesorios = lambda a, b: a + b
print(sumar_accesorios(15, 25))
