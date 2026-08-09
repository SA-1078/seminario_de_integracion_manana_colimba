// Archivo: 17_poo_getters_setters_mp.ts
// Tema: Venta de Equipos Móviles (Gestión de Batería y Salud de Smartphone)

class BateriaSmartphone {
    private _porcentajeSalud: number;

    constructor(saludInicial: number) {
        this._porcentajeSalud = saludInicial;
    }

    get porcentajeSalud(): number {
        return this._porcentajeSalud;
    }

    set porcentajeSalud(valor: number) {
        if (valor < 0 || valor > 100) {
            throw new Error("El porcentaje de salud de batería debe estar entre 0% y 100%");
        }
        this._porcentajeSalud = valor;
    }

    get necesitaReemplazo(): boolean {
        return this._porcentajeSalud < 80;
    }
}

const bateriaIphone = new BateriaSmartphone(95);
console.log(`Salud actual: ${bateriaIphone.porcentajeSalud}%`); // 95%
console.log(`¿Requiere cambio de batería?: ${bateriaIphone.necesitaReemplazo}`); // false

bateriaIphone.porcentajeSalud = 75; // Uso acumulado
console.log(`Nueva salud: ${bateriaIphone.porcentajeSalud}%`); // 75%
console.log(`¿Requiere cambio de batería?: ${bateriaIphone.necesitaReemplazo}`); // true
