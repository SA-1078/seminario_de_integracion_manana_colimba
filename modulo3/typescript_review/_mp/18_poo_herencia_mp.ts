// Archivo: 18_poo_herencia_mp.ts
// Tema: Venta de Equipos Móviles

class DispositivoElectronico {
    constructor(public marca: string, public modelo: string) { }

    obtenerFichaBase(): string {
        return `${this.marca} ${this.modelo}`;
    }
}

class SmartphoneGamaAlta extends DispositivoElectronico {
    constructor(
        marca: string,
        modelo: string,
        public megapixelesCamara: number,
        public soporta5G: boolean
    ) {
        super(marca, modelo); // Llama al constructor del padre
    }

    // Sobrescribe el método del padre
    override obtenerFichaBase(): string {
        const red = this.soporta5G ? "Red 5G" : "Red 4G";
        return `📱 Smartphone Flagship: ${this.marca} ${this.modelo} — Cam: ${this.megapixelesCamara}MP (${red})`;
    }

    realizarPruebaFotografica(): string {
        return `Capturando foto de alta resolución a ${this.megapixelesCamara}MP con ${this.modelo}.`;
    }
}

const dispBase = new DispositivoElectronico("Generic", "Tablet 10");
const movilPro = new SmartphoneGamaAlta("Xiaomi", "14 Ultra", 50, true);

console.log(dispBase.obtenerFichaBase());
console.log(movilPro.obtenerFichaBase());
console.log(movilPro.realizarPruebaFotografica());
