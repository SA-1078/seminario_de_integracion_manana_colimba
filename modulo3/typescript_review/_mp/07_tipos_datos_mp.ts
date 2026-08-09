// Archivo: 07_tipos_datos_mp.ts
// Tema: Venta de Equipos Móviles

// Tipos numéricos aplicados a especificaciones de celulares
const capacidadBateria: number = 5000;         // mAh
const tamanoPantalla: number = 6.7;            // pulgadas
const diferenciaTemperatura: number = -4;       // grados bajo cero en prueba térmica
const mascaraImeiHex: number = 0xa3f9;          // registro hex de lote de modems
const modoRedBinario: number = 0b11111;         // 5G NR + LTE flags
const codigoLoteOctal: number = 0o755;          // código octal de bodega
const precioEnCentavos: number = 1_299_99;      // $1299.99 con separador visual ES2021

console.log(`Hexadecimal Lote: ${mascaraImeiHex}`);
console.log(`Modo Red (Binario): ${modoRedBinario}`);
console.log(`Precio Centavos: ${precioEnCentavos}`);

// Constantes especiales de Number aplicadas a comprobación de datos de stock
console.log(`Número máximo seguro de serie IMEI: ${Number.MAX_SAFE_INTEGER}`);
console.log(`¿Stock finito?: ${Number.isFinite(capacidadBateria / 0)}`); // false
console.log(`¿Valor NaN en cálculo?: ${Number.isNaN(0 / 0)}`);          // true
