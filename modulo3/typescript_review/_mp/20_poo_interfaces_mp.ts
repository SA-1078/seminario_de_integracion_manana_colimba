// Archivo: 20_poo_interfaces_mp.ts
// Tema: Venta de Equipos Móviles

interface Facturable {
    generarFactura(): string;
}

interface VerificableIMEI {
    validarImei(): boolean;
}

class VentaSmartphone implements Facturable, VerificableIMEI {
    constructor(
        public imei: string,
        public modelo: string,
        public cliente: string,
        public totalPagado: number
    ) { }

    validarImei(): boolean {
        // Valida que el IMEI tenga 15 dígitos numéricos
        return this.imei.length === 15 && !isNaN(Number(this.imei));
    }

    generarFactura(): string {
        return JSON.stringify({
            comprobante: `FACT-${Math.floor(Math.random() * 10000)}`,
            imei: this.imei,
            modelo: this.modelo,
            cliente: this.cliente,
            total: this.totalPagado,
        });
    }
}

const venta1 = new VentaSmartphone("358941092837415", "Samsung Galaxy S24 Ultra", "Maria Lopez", 1299);

console.log(`¿IMEI Válido?: ${venta1.validarImei()}`); // true
console.log("Factura emitida:");
console.log(venta1.generarFactura());
