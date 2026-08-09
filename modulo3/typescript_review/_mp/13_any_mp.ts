// Archivo: 13_any_mp.ts
// Tema: Venta de Equipos Móviles

// ─── any ───────────────────────────────────────────────────────────────────
// Útil solo al recibir payloads no estructurados de proveedores o APIs antiguas
let datosSmartphoneExterno: any = "Samsung S24";
datosSmartphoneExterno = 1299.99;
datosSmartphoneExterno = true;
// datosSmartphoneExterno.metodoInexistente(); // Falla en runtime si no existe

// ─── unknown ───────────────────────────────────────────────────────────────
// Forma segura de procesar respuestas desconocidas de APIs externas de celas
let respuestaApiProveedor: unknown = '{"modelo": "iPhone 15", "precio": 999}';
respuestaApiProveedor = { modelo: "iPhone 15 Pro", precio: 1099 };

if (typeof respuestaApiProveedor === "object" && respuestaApiProveedor !== null) {
    const equipo = respuestaApiProveedor as { modelo: string; precio: number };
    console.log(`Modelo verificado: ${equipo.modelo.toUpperCase()} - $${equipo.precio}`);
}

// ─── never ─────────────────────────────────────────────────────────────────
// Representa errores fatales en la gestión de IMEI o validaciones de compra
function lanzarErrorGarantia(mensaje: string): never {
    throw new Error(`[ERROR GARANTÍA MÓVIL] ${mensaje}`);
}

function verificarEstadoImeiExhaustivo(estado: never): never {
    throw new Error(`Estado de IMEI no manejado: ${String(estado)}`);
}

console.log("Manejo de tipos dinámicos de catálogo completado correctamente.");
