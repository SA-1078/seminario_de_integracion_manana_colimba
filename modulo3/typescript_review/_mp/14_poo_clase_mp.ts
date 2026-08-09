// Archivo: 14_poo_clase_mp.ts
// Tema: Venta de Equipos Móviles

class Smartphone {
    modelo: string;
    marca: string;
    precio: number;
    enStock: boolean;

    constructor(modelo: string, marca: string, precio: number, enStock: boolean) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.enStock = enStock;
    }

    // Método: acción que describe el celular disponible
    describir(): string {
        const estado = this.enStock ? "Disponible para venta" : "Agotado temporalmente";
        return `${this.marca} ${this.modelo} — $${this.precio} (${estado})`;
    }
}

const celular1 = new Smartphone("Galaxy S24 Ultra", "Samsung", 1299, true);
const celular2 = new Smartphone("iPhone 15 Pro Max", "Apple", 1399, false);

console.log(celular1.describir()); // Samsung Galaxy S24 Ultra — $1299 (Disponible para venta)
console.log(celular2.describir()); // Apple iPhone 15 Pro Max — $1399 (Agotado temporalmente)
