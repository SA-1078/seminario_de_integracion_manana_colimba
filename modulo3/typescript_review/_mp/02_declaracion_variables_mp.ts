// Archivo: 02_declaracion_variables_mp.ts
// Tema: Venta de Equipos Móviles

// const — valor que NO cambia (configuración del sistema de ventas)
const NOMBRE_TIENDA: string = "MobileStore - Venta de Equipos Móviles";
const IVA_EQUIPOS: number = 0.19;
const SUCURSAL_PRINCIPAL: string = "Sucursal Central Móviles";

// let — valor que SÍ puede cambiar durante la operación
let totalEquiposVendidos: number = 0;
let estadoTienda: string = "cerrado";
let clienteEnAtencion: boolean = false;

console.log(`Tienda: ${NOMBRE_TIENDA}`);
console.log(`Equipos vendidos: ${totalEquiposVendidos}, Estado: ${estadoTienda}, Atendiendo cliente: ${clienteEnAtencion}`);

// Actualización de variables de estado
totalEquiposVendidos += 3; // Venta de 3 smartphones
estadoTienda = "abierto";
clienteEnAtencion = true;

console.log("Actualizando estado de la tienda de celulares...");
console.log(`Equipos vendidos: ${totalEquiposVendidos}, Estado: ${estadoTienda}, Atendiendo cliente: ${clienteEnAtencion}`);
