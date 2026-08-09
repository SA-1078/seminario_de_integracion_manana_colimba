// Archivo: 08_arrays_mp.ts
// Tema: Venta de Equipos Móviles

// Arreglos de precios y modelos de móviles
const preciosSmartphones: number[] = [299, 499, 799, 999, 1299];
const marcasMoviles: Array<string> = ["Samsung", "Apple", "Xiaomi", "Motorola", "Google Pixel"];

// Inferencia de tipo en arreglos
const capacidadesGb = [128, 256, 512, 1024]; // TS infiere number[]
console.log(`Precios disponibles: ${preciosSmartphones}`);
console.log(`Capacidades en GB: ${capacidadesGb}`);

// Métodos tipados para gestión de ventas
const preciosConDescuento: number[] = preciosSmartphones.map((p) => p * 0.9); // 10% de descuento
const gamaAltaPrecios: number[] = preciosSmartphones.filter((p) => p >= 700);
const valorTotalInventario: number = preciosSmartphones.reduce((acc, p) => acc + p, 0);

console.log(`Precios con 10% dto: ${preciosConDescuento}`);
console.log(`Equipos Gama Alta (>= $700): ${gamaAltaPrecios}`);
console.log(`Valor Total Inventario: $${valorTotalInventario}`);

// Mutaciones de inventario
preciosSmartphones.push(1499); // Nuevo modelo en catálogo
console.log(`Catalogo actualizado: ${preciosSmartphones}`);
preciosSmartphones.unshift(199); // Modelo económico agregado
console.log(`Catalogo con modelo económico: ${preciosSmartphones}`);
const ultimoPrecio = preciosSmartphones.pop();
const primerPrecio = preciosSmartphones.shift();
console.log(`Tras eliminar extremos: ${preciosSmartphones}`);

// Búsquedas en catálogo
const existeGamaMedia: boolean = preciosSmartphones.includes(499);
console.log(`¿Existe equipo de $499?: ${existeGamaMedia}`);
const posicionPrecio: number = preciosSmartphones.indexOf(799);
console.log(`Posición de equipo de $799: ${posicionPrecio}`);
const primerFlagship: number | undefined = preciosSmartphones.find((p) => p > 900);
console.log(`Primer modelo flagship encontrado: $${primerFlagship}`);
