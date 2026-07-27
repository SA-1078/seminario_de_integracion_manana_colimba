// Archivo: 09_arrays_objetos_mp.ts
// Tema: Venta de Equipos Móviles

type SmartphoneEquipo = {
    id: number;
    modelo: string;
    marca: string;
    precio: number;
    disponible: boolean;
    existencias: number;
};

const catalogoMoviles: SmartphoneEquipo[] = [
    { id: 1, modelo: "Galaxy S24 Ultra", marca: "Samsung", precio: 1299, disponible: true, existencias: 8 },
    { id: 2, modelo: "Redmi Note 13", marca: "Xiaomi", precio: 249, disponible: true, existencias: 25 },
    { id: 3, modelo: "iPhone 15 Pro", marca: "Apple", precio: 1099, disponible: false, existencias: 0 },
    { id: 4, modelo: "Edge 50 Ultra", marca: "Motorola", precio: 799, disponible: true, existencias: 5 },
    { id: 5, modelo: "Pixel 8 Pro", marca: "Google", precio: 899, disponible: true, existencias: 12 },
];

// Operaciones con arreglos de objetos
const equiposDisponibles: SmartphoneEquipo[] = catalogoMoviles.filter((m) => m.disponible);
const listaModelos: string[] = catalogoMoviles.map((m) => `${m.marca} ${m.modelo}`);
const equipoMasEconomico: SmartphoneEquipo | undefined = catalogoMoviles.reduce((min, m) =>
    m.precio < min.precio ? m : min
);
const equipoEspecifico: SmartphoneEquipo | undefined = catalogoMoviles.find((m) => m.id === 4);

console.log("Catálogo completo:");
console.log(catalogoMoviles);
console.log("Modelos:", listaModelos);
console.log("Equipo más económico:", equipoMasEconomico?.modelo, "($", equipoMasEconomico?.precio, ")");
console.log("Cantidad de modelos disponibles:", equiposDisponibles.length);
console.log("Detalle del equipo ID 4:", equipoEspecifico);
