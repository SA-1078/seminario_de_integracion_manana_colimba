# Enteros, Cadena de caracteres, booleano, None

nombre= "Ana Garcia"        #String
edad= 20                    #Int
altura= 1.65                #Float
activo= True                #Bool
nulo= None                  #Nonetype

print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))

# Asignar valor varias variables en una linea
a, b, c =12,12,14
print(a)
print(b)
print(c)

# Asignamos el mismo valor a varias variables
a=b=c =0
print(a)
print(b)
print(c)

# Intercambiar valores
x,y= 10, 20
print(x,y)
x,y=y,x
print(x,y)

# Convenciones de Nombres
nombre_completo="Rafael Urdaneta"   #snake_case
nombreCompleto="Rafael Urdaneta"    #NO USAR camelCase
MAX_REINTENTOS=3                    # MAYUSCULAS SOSTENIDAS para constantes
_variable_interna="privada"         # para uso interno

# Manejo de Enteros
pequeno = 42
negativo = -17
grande = 1_000_000_000_00
enorme = 2 ** 100

print(pequeno)
print(negativo)
print(grande)
print(enorme)

# Bases Numericas
binario = 0b1010
octal = 0o17
hexadecimal = 0xFF
print(binario, octal, hexadecimal)
# Convertir de decimal a otras bases
print(bin(255))
print(oct(255))
print(hex(255))


