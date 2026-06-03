# diccionarios.py

# Crear diccionarios
vacio    = {}
celular  = {"marca": "Apple", "modelo": "iPhone 15 Pro", "precio": 999}
config_tienda = dict(tienda="Sucursal Centro", id_caja=102, online=True)

# Acceso
print(celular["marca"])              # Apple
print(celular.get("descuento"))           # None — no lanza error si no existe
print(celular.get("descuento", "N/A"))    # N/A — valor por defecto

# Modificar
celular["descuento"]   = "10%"        # añadir/modificar
celular["precio"]      = 899          # modificar
if "descuento" in celular:
    del celular["descuento"]          # eliminar
valor = celular.pop("precio")         # eliminar y obtener el valor
print(celular)

# Verificar existencia
print("marca" in celular)            # True
print("precio" in celular)           # False

# Métodos esenciales
print(celular.keys())    # dict_keys(['marca', 'modelo'])
print(celular.values())  # dict_values(['Apple', 'iPhone 15 Pro'])
print(celular.items())   # dict_items([('marca', 'Apple'), ('modelo', 'iPhone 15 Pro')])

# Iterar
for clave, valor in celular.items():
    print(f"  {clave}: {valor}")

# update — fusionar diccionarios
celular.update({"precio": 949, "stock": 15})
print(celular)

# Fusionar con | (Python 3.9+)
extra  = {"garantia": "12 meses", "disponible": True}
completo = celular | extra
print(completo)

# Diccionarios anidados
tienda_movil = {
    "nombre": "SmartStore",
    "sucursales": {
        1: {"nombre": "Centro", "jefe": "Ana"},
        2: {"nombre": "Norte", "jefe": "Luis"},
    },
    "marcas_disponibles": ["Apple", "Samsung"]
}

print(tienda_movil["sucursales"][1]["nombre"])   # Centro
tienda_movil["sucursales"][3] = {"nombre": "Sur", "jefe": "Marta"}

# setdefault — añadir solo si no existe
celular.setdefault("pais_origen", "EEUU")       # añade "pais_origen"
celular.setdefault("marca", "Otro")             # no modifica — ya existe
