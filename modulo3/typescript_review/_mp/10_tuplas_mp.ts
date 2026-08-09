// Archivo: 10_tuplas_mp.ts
// Tema: Venta de Equipos Móviles

type ResolucionPantalla = [anchoPx: number, altoPx: number];
type ConfiguracionCamara = [principalMp: number, ultraGranAnguloMp: number, telefotoMp: number];
type RegistroVentaCelular = [modelo: string, precioUnitario: number];

const pantallaS24: ResolucionPantalla = [1440, 3120];
const camaraS24: ConfiguracionCamara = [200, 12, 50];
const ultimaVenta: RegistroVentaCelular = ["Xiaomi 14 Ultra", 1199];

// Desestructuración de tuplas de especificaciones
const [ancho, alto] = pantallaS24;
const [principal, ultraWide, tele] = camaraS24;
const [modeloComprado, precioCobrado] = ultimaVenta;

console.log(`Pantalla: ${ancho}x${alto} píxeles`);
console.log(`Módulo de cámaras: ${principal}MP principal, ${ultraWide}MP ultra-wide, ${tele}MP telefoto`);
console.log(`Última venta realizada: ${modeloComprado} por $${precioCobrado}`);

// Tupla con nombres para rango de garantía comercial
type RangoGarantiaMeses = [minimo: number, maximo: number];
const garantiaOfrecida: RangoGarantiaMeses = [12, 36]; // De 12 a 36 meses
console.log(`Garantía ofrecida: de ${garantiaOfrecida[0]} a ${garantiaOfrecida[1]} meses`);
