// Archivo: 21_poo_polimorfismo_mp.ts
// Tema: Venta de Equipos Móviles (Polimorfismo en Métodos de Pago de Celulares)

class MetodoPagoMovil {
    nombreMetodo(): string { return "Método de Pago Genérico"; }
    calcularRecargo(monto: number): number { return 0; }
}

class PagoTarjetaCredito extends MetodoPagoMovil {
    constructor(private cuotas: number) { super(); }
    override nombreMetodo(): string { return `Tarjeta de Crédito (${this.cuotas} cuotas)`; }
    override calcularRecargo(monto: number): number { return monto * 0.03 * (this.cuotas > 3 ? 1.5 : 1); }
}

class PagoTransferenciaBancaria extends MetodoPagoMovil {
    override nombreMetodo(): string { return "Transferencia Bancaria Directa"; }
    override calcularRecargo(_monto: number): number { return 0; } // Sin recargo
}

class PagoEfectivoSucursal extends MetodoPagoMovil {
    override nombreMetodo(): string { return "Efectivo en Sucursal"; }
    override calcularRecargo(monto: number): number { return -monto * 0.05; } // 5% de descuento por pago en efectivo
}

// Polimorfismo en acción sobre el catálogo de pagos de smartphones
const precioSmartphone = 1000;
const metodos: MetodoPagoMovil[] = [
    new PagoTarjetaCredito(6),
    new PagoTransferenciaBancaria(),
    new PagoEfectivoSucursal(),
];

console.log(`--- Opciones de Pago para Equipo de $${precioSmartphone} ---`);
for (const m of metodos) {
    const recargo = m.calcularRecargo(precioSmartphone);
    const totalFinal = precioSmartphone + recargo;
    console.log(`${m.nombreMetodo()}: Ajuste = $${recargo.toFixed(2)} | Total = $${totalFinal.toFixed(2)}`);
}
