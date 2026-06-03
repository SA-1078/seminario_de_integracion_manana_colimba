print("Listas")
print("Crear Listas")
vacia=[]
print(vacia)
almacenamientos=[64,128,256,512,1024]
print(almacenamientos)
modelos=["iPhone 15","Galaxy S24","Redmi Note 13","Pixel 8","Moto Edge","Huawei P60"]
print(modelos)
mixta=[1, "Celular", "Gama Alta", True, None, 1099.99]
print(mixta)
anidada=[1,[128,256,[512,1024,1024]],5,7]
print(anidada)
print("Acceso a los elementos de una lista")
print(modelos[0])
print(modelos[-1])
print(modelos[1:3])
print(modelos[::-1])

print("CRUD de una lista")
marcas = ["Apple", "Samsung", "Xiaomi"]
#agregar
marcas.append("Motorola")
print(marcas)
marcas.insert(1, "Google")
print(marcas)
marcas.extend(["Huawei", "Oppo"])
#Modificar
marcas[0]="Realme"
print(marcas)
# eliminar elementos
marcas.remove("Samsung")
print(marcas)
eliminado = marcas.pop()
print(marcas)
eliminado = marcas.pop(0)
print(marcas)
del marcas [0]
print(marcas)


print("Buscar valores en los elementos de una lista")
print("Google" in marcas)
print(marcas.index("Google") if "Google" in marcas else "No encontrado")
print(marcas.count("Google"))

print("Ordenar una lista")
precios_desordenados=[350,199,999,1200,450,150,299,899]
print(precios_desordenados)
precios_desordenados.sort()
print(precios_desordenados)
precios_desordenados.sort(reverse=True)
print(precios_desordenados)
ordenada = sorted(precios_desordenados)
print(precios_desordenados)
print(ordenada)


# lista-funcional.py

productos = [
    {"nombre": "iPhone 15 Pro",   "precio": 999,  "stock": 5,  "cat": "gama_alta"},
    {"nombre": "Xiaomi Redmi 13", "precio": 199,  "stock": 20, "cat": "gama_baja"},
    {"nombre": "Samsung S24 Ultra","precio": 1299, "stock": 3,  "cat": "gama_alta"},
    {"nombre": "Motorola Edge 40","precio": 450,  "stock": 8,  "cat": "gama_media"},
    {"nombre": "POCO F6 Pro",     "precio": 499,  "stock": 0,  "cat": "gama_media"},
]

# map — transforma cada elemento
precios     = list(map(lambda p: p["precio"], productos))
nombres     = list(map(lambda p: p["nombre"].upper(), productos))
print(precios)   # [999, 199, 1299, 450, 499]

# filter — filtra elementos
con_stock   = list(filter(lambda p: p["stock"] > 0, productos))
tech        = list(filter(lambda p: p["cat"] == "gama_alta", productos))
print([p["nombre"] for p in con_stock])

# sorted con key
por_precio  = sorted(productos, key=lambda p: p["precio"])
mas_caro    = sorted(productos, key=lambda p: p["precio"], reverse=True)[0]
print(f"Más caro: {mas_caro['nombre']} ({mas_caro['precio']}$)")

# sum, min, max con key
total       = sum(p["precio"] * p["stock"] for p in productos)
mas_barato  = min(productos, key=lambda p: p["precio"])
print(f"Total inventario: {total}$")
print(f"Más barato: {mas_barato['nombre']}")

# any y all
hay_sin_stock = any(p["stock"] == 0 for p in productos)
todos_tech    = all(p["cat"] == "gama_alta" for p in productos)
print(f"¿Hay sin stock? {hay_sin_stock}")    # True
print(f"¿Todos son gama alta? {todos_tech}")     # False
