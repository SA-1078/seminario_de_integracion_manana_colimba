// Archivo: 11_enums_mp.ts
// Tema: Venta de Equipos Móviles

// Enum numérico para gamas de celulares
enum GamaSmartphone {
    Baja,     // 0
    Media,    // 1
    Alta,     // 2
    Premium,  // 3
}

const gamaEquipo: GamaSmartphone = GamaSmartphone.Premium;
console.log(`Gama numérica: ${gamaEquipo}`);              // 3
console.log(`Nombre de gama: ${GamaSmartphone[3]}`);       // "Premium"

// Enum numérico con códigos de estado de pedido de celulares
enum EstadoDespachoMovil {
    Recibido = 100,
    EnVerificacionIMEI = 101,
    Enviado = 200,
    Entregado = 201,
}

// Enum de cadenas para categorías de productos móviles
enum CategoriaDispositivo {
    Smartphone = "SMARTPHONE",
    Tablet = "TABLET",
    Smartwatch = "SMARTWATCH",
    Accesorio = "ACCESORIO",
}

const categoriaActual: CategoriaDispositivo = CategoriaDispositivo.Smartphone;
console.log(`Categoría seleccionada: ${categoriaActual}`); // "SMARTPHONE"
console.log(`Estado del despacho: ${EstadoDespachoMovil.Entregado}`); // 201
