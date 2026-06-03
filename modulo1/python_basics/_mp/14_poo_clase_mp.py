# primera-clase.py

class Celular:
    # Atributo de clase — compartido por TODAS las instancias
    categoria = "Dispositivo Móvil"

    # __init__ es el constructor — se ejecuta al crear la instancia
    def __init__(self, modelo, precio):
        # Atributos de instancia — propios de cada objeto
        self.modelo = modelo
        self.precio = precio

    # Método de instancia — self es la referencia al objeto
    def describir(self):
        return f"Hola, soy un {self.modelo} y tengo un precio de ${self.precio}."

    def aplicar_inflacion(self):
        self.precio += 50
        print(f"¡Inflación aplicada a {self.modelo}! Ahora cuesta ${self.precio}.")

    # __str__ — representación legible (para print y str())
    def __str__(self):
        return f"Celular({self.modelo}, {self.precio})"

    # __repr__ — representación oficial (para depuración)
    def __repr__(self):
        return f"Celular(modelo={self.modelo!r}, precio={self.precio!r})"

# Crear instancias (objetos) con la clase como función
iphone  = Celular("iPhone 15 Pro", 999)
samsung = Celular("Galaxy S24 Ultra", 1299)

print(iphone.describir())       # Hola, soy un iPhone 15 Pro y tengo un precio de $999.
print(samsung.describir())      # Hola, soy un Galaxy S24 Ultra y tengo un precio de $1299.
iphone.aplicar_inflacion()      # ¡Inflación aplicada a iPhone 15 Pro! Ahora cuesta $1049.
print(str(iphone))              # Celular(iPhone 15 Pro, 1049)
print(repr(iphone))             # Celular(modelo='iPhone 15 Pro', precio=1049)
print(Celular.categoria)        # Dispositivo Móvil  — atributo de clase
