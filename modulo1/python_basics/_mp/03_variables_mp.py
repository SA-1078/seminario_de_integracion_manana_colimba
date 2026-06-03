# Enteros, Cadena de caracteres, booleano, None

modelo= "iPhone 15 Pro Max"  #String
stock= 50                    #Int
precio_usd= 1199.99          #Float
disponible= True             #Bool
descuento= None              #Nonetype

print(type(modelo))
print(type(stock))
print(type(precio_usd))
print(type(disponible))
print(type(descuento))

# Asignar valor varias variables en una linea
gama_alta, gama_media, gama_baja = 1200, 450, 150
print(gama_alta)
print(gama_media)
print(gama_baja)

# Asignamos el mismo valor a varias variables
descuento_iphone = descuento_samsung = descuento_xiaomi = 0
print(descuento_iphone)
print(descuento_samsung)
print(descuento_xiaomi)

# Intercambiar valores
precio_celular_1, precio_celular_2 = 800, 1200
print(precio_celular_1, precio_celular_2)
precio_celular_1, precio_celular_2 = precio_celular_2, precio_celular_1
print(precio_celular_1, precio_celular_2)

# Convenciones de Nombres
nombre_modelo="Xiaomi Redmi Note 13" #snake_case
nombreModelo="Xiaomi Redmi Note 13"  #NO USAR camelCase
MAX_STOCK_TIENDA=100                 # MAYUSCULAS SOSTENIDAS para constantes
_codigo_seguridad="interno"          # para uso interno

# Manejo de Enteros
garantia_dias = 30
saldo_deudor = -150
ventas_anuales = 5_000_000_000
posibles_combinaciones_imei = 2 ** 128

print(garantia_dias)
print(saldo_deudor)
print(ventas_anuales)
print(posibles_combinaciones_imei)

# Bases Numericas
binario = 0b1010
octal = 0o17
hexadecimal = 0xFF
print(binario, octal, hexadecimal)
# Convertir de decimal a otras bases
print(bin(255))
print(oct(255))
print(hex(255))
