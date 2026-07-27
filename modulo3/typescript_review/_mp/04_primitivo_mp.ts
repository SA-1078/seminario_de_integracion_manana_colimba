// Archivo: 04_primitivo_mp.ts
// Tema: Venta de Equipos Móviles

// number — precios, capacidades y especificaciones de móviles
const precioSmartphone: number = 1299.99;
const capacidadBateriaMah: number = 5000;
const descuentoPromocional: number = -150.0;
const colorHexEquipo: number = 0x1a2b3c;

// string — información de marcas, modelos e IMEI
const emailCliente: string = "cliente@movilstore.com";
const marcaSmartphone: string = 'Xiaomi';
const endpointCatalogo: string = `/api/v1/equipos-moviles`;

// boolean — estado de disponibilidad y garantías
const tieneGarantiaExtendida: boolean = true;
const homologadoMultibanda: boolean = true;
const esRematado: boolean = false;

// ── Aritmética de ventas ─────────────────────────────────────────────────
const precioBase = 1200;
const descuentoAplicado = 120;
const precioFinal = precioBase - descuentoAplicado;
console.log(`Precio final equipo: $${precioFinal}`);

// ── Métodos de string con datos del catálogo ──────────────────────────────
const cadenaProveedor = "  proveedor-samsung@moviles.com  ";
console.log(cadenaProveedor.trim().toLowerCase());
console.log(emailCliente.includes("movilstore"));
console.log(emailCliente.split("@")[1]);

let fichaTecnica: string = "Samsung Galaxy S24;512GB;12GB RAM;5G;Titanio";
const datosFicha = fichaTecnica.split(";");
console.log(`Modelo: ${datosFicha[0]}, Almacenamiento: ${datosFicha[1]}`);

// ── Lógica booleana de compra ─────────────────────────────────────────────
const listoParaDespacho: boolean = tieneGarantiaExtendida && homologadoMultibanda;
console.log(`¿Equipo listo para despacho?: ${listoParaDespacho}`);

