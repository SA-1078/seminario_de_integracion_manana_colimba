// Archivo: 05_templates_mp.ts
// Tema: Venta de Equipos Móviles

const clienteNombre: string = "Carlos Mendoza";
const modeloComprado: string = "iPhone 15 Pro Max 256GB";
const precioEquipo: number = 1399.99;
const porcentajeIva: number = 0.19;

// Interpolación de datos de venta
const resumenVenta: string = `Cliente: ${clienteNombre} | Equipo: ${modeloComprado} | Precio: $${precioEquipo}`;
console.log(resumenVenta);

// Expresión matemática para cálculo del total con IVA
const totalConIva: string = `Total a pagar con IVA (19%): $${(precioEquipo * (1 + porcentajeIva)).toFixed(2)}`;
console.log(totalConIva);

// Comprobante multi-línea del equipo vendido
let sucursalVenta: string = "Sucursal Norte - Equipos Móviles";
let equipoEntregado: boolean = true;
let garantiaMeses: number = 12;

const comprobante: string = `
=== COMPROBANTE DE VENTA DE EQUIPO MÓVIL ===
Sucursal  : ${sucursalVenta}
Cliente   : ${clienteNombre}
Modelo    : ${modeloComprado}
Garantía  : ${garantiaMeses} meses
Entregado : ${equipoEntregado ? "SÍ (Despachado)" : "NO (Pendiente)"}
Total     : $${(precioEquipo * (1 + porcentajeIva)).toFixed(2)}
=============================================
`;
console.log(comprobante);
