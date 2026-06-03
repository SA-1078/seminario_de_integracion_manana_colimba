# tuplas.py

# Crear tuplas
vacia      = ()
unitaria   = (128,)          # ← la coma es obligatoria para una tupla de un elemento (ej. GB de RAM/Almacenamiento)
dimensiones = (6.7, 160.8)   # (pulgadas de pantalla, altura en mm)
colores_rgb = (0, 128, 255)   # Color en formato RGB
celular    = ("Samsung S24 Ultra", 12, "Titanio Gris") # (modelo, RAM, color)

# Tupla sin paréntesis — el empaquetado implícito
especificaciones  = "iPhone 15 Pro", 999             # también es una tupla
print(type(especificaciones))          # <class 'tuple'>

# Acceso — igual que las listas
print(celular[0])           # Samsung S24 Ultra
print(celular[-1])          # Titanio Gris
print(celular[1:])          # (12, 'Titanio Gris')

# Las tuplas son INMUTABLES
# celular[0] = "Xiaomi"       # TypeError — no se puede modificar

# Desempaquetado (unpacking)
modelo, ram, color = celular
print(modelo, ram, color)  # Samsung S24 Ultra 12 Titanio Gris

# Desempaquetado con *
primero, *resto = (128, 256, 512, 1024)
print(primero)   # 128
print(resto)     # [256, 512, 1024]

*inicio, ultimo = (128, 256, 512, 1024)
print(inicio)    # [128, 256, 512]
print(ultimo)    # 1024

# Tuplas de retorno de funciones
def dividir_cuotas(precio_total, cuotas):
    if cuotas == 0:
        return None, "División por cero cuotas"
    return precio_total / cuotas, None

resultado, error = dividir_cuotas(1200, 12)
if error:
    print(f"Error: {error}")
else:
    print(f"Resultado cuota mensual: ${resultado:.2f}")

# Tuplas como claves de diccionario (las listas NO pueden ser claves)
inventario_estanteria = {(1, 1): "Samsung", (1, 2): "Apple", (2, 1): "Xiaomi"}
print(inventario_estanteria[(1, 1)])   # Samsung

# Cuándo usar tuple vs list
# tuple → datos que no cambian: Dimensiones de pantalla, registros fijos
# list  → datos que se modifican: catálogo de productos, carrito de compras
