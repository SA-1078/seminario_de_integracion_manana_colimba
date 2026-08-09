// Archivo: 06_calculadora_envios_mp.ts
// Tema: Venta de Equipos Móviles - Cotizador de Envío de Smartphones

type ZonaEnvioMovil = "local" | "nacional" | "internacional";

interface PaqueteSmartphone {
    modeloMovil: string;
    pesoKg: number;
    valorDeclarado: number;
    zona: ZonaEnvioMovil;
}

const TARIFAS_ENVIO_MOVIL: Record<ZonaEnvioMovil, number> = {
    local: 3.50,         // $ por envío local
    nacional: 8.00,        // $ por envío nacional
    internacional: 25.00,  // $ por envío internacional
};

const SEGURO_EQUIPO_PCT = 0.01; // 1% del valor declarado del smartphone por seguridad

function cotizarEnvioSmartphone(paquete: PaqueteSmartphone): string {
    const tarifaBase = TARIFAS_ENVIO_MOVIL[paquete.zona];
    const costoFlete = tarifaBase * paquete.pesoKg;
    const costoSeguro = paquete.valorDeclarado * SEGURO_EQUIPO_PCT;
    const totalEnvio = costoFlete + costoSeguro;

    return `
📱 Cotización de Envío de Equipo Móvil
   Modelo      : ${paquete.modeloMovil}
   Peso        : ${paquete.pesoKg} kg
   Valor       : $${paquete.valorDeclarado.toFixed(2)}
   Zona        : ${paquete.zona}
   Flete       : $${costoFlete.toFixed(2)}
   Seguro (1%) : $${costoSeguro.toFixed(2)}
   ────────────────────────────────────────
   TOTAL ENVÍO : $${totalEnvio.toFixed(2)}
    `.trim();
}

const envio1: PaqueteSmartphone = {
    modeloMovil: "Samsung Galaxy S24 Ultra 512GB",
    pesoKg: 0.45,
    valorDeclarado: 1300,
    zona: "nacional",
};

const envio2: PaqueteSmartphone = {
    modeloMovil: "iPhone 15 Pro 128GB",
    pesoKg: 0.38,
    valorDeclarado: 1100,
    zona: "internacional",
};

console.log(cotizarEnvioSmartphone(envio1));
console.log("\n" + cotizarEnvioSmartphone(envio2));
