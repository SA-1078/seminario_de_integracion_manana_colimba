// Archivo: 03_inferencia_mp.ts
// Tema: Venta de Equipos Móviles

// ── Anotación explícita ───────────────────────────────────────────────────
const codigoImei: number = 358941092837415;
const modeloSmartphone: string = "Samsung Galaxy S24 Ultra";
const disponibleEnStock: boolean = true;

// ── Inferencia de tipo ────────────────────────────────────────────────────
// TypeScript deduce los tipos automáticamente a partir del valor asignado
const codigoImei2 = 358941092837415;       // TS infiere: number
const modeloSmartphone2 = "iPhone 15 Pro";  // TS infiere: string
const disponibleEnStock2 = true;           // TS infiere: boolean

// ── Cuándo anotar explícitamente en el sistema de ventas ──────────────────
// 1. Variable declarada sin valor inicial (esperando consulta de stock):
let stockDisponible: number;
stockDisponible = 15;

// 2. Tipo unión cuando el identificador de catálogo puede ser número o string:
let idEquipo: number | string = 101;
idEquipo = "EQ-S24U"; // Válido por la unión de tipos

// 3. Parámetros de funciones (TS exige anotar parámetros):
function consultarStockMovil(modelo: string, unidades: number): string {
    return `Consulta de stock: ${unidades} unidad(es) de ${modelo}`;
}

console.log(consultarStockMovil(modeloSmartphone, stockDisponible));
