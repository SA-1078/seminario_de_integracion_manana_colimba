// Archivo: 12_union_literales_mp.ts
// Tema: Venta de Equipos Móviles

type EstadoStockMovil = "en_stock" | "pocas_unidades" | "agotado" | "preventa";

interface SmartphoneInventario {
    id: number;
    modelo: string;
    estadoStock: EstadoStockMovil;
    despachoInmediato: boolean;
}

function etiquetarEstadoEquipo(equipo: SmartphoneInventario): string {
    const prefijos: Record<EstadoStockMovil, string> = {
        en_stock: "🟢",
        pocas_unidades: "🟡",
        agotado: "🔴",
        preventa: "🔵",
    };
    const indicadorDespacho = equipo.despachoInmediato ? "⚡" : "📦";
    return `${indicadorDespacho} ${prefijos[equipo.estadoStock]} [#${equipo.id}] ${equipo.modelo}`;
}

const inventarioMoviles: SmartphoneInventario[] = [
    { id: 101, modelo: "Galaxy S24 Ultra 512GB", estadoStock: "en_stock", despachoInmediato: true },
    { id: 102, modelo: "iPhone 15 Pro Max 1TB", estadoStock: "pocas_unidades", despachoInmediato: true },
    { id: 103, modelo: "Pixel 8a 128GB", estadoStock: "agotado", despachoInmediato: false },
    { id: 104, modelo: "Z Fold 6 256GB", estadoStock: "preventa", despachoInmediato: false },
];

console.log("=== ESTADO DE INVENTARIO DE CELULARES ===");
for (const eq of inventarioMoviles) {
    console.log(etiquetarEstadoEquipo(eq));
}
