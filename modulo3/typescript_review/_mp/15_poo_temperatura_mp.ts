// Archivo: 15_poo_temperatura_mp.ts
// Tema: Venta de Equipos Móviles (Sensor de temperatura de batería de Smartphone)

class TemperaturaBateriaMovil {
    valorCelsius: number;

    constructor(celsius: number) {
        this.valorCelsius = celsius;
    }

    aFahrenheit(): number {
        return (this.valorCelsius * 9) / 5 + 32;
    }

    aKelvin(): number {
        return this.valorCelsius + 273.15;
    }

    evaluarSeguridad(): string {
        if (this.valorCelsius > 45) return "⚠️ ADVERTENCIA: Sobrecalentamiento en carga rápida";
        if (this.valorCelsius < 0) return "⚠️ ADVERTENCIA: Temperatura demasiado baja";
        return "✅ Temperatura operativa óptima de batería";
    }

    describir(): string {
        return (
            `Batería: ${this.valorCelsius}°C = ` +
            `${this.aFahrenheit().toFixed(1)}°F | ${this.evaluarSeguridad()}`
        );
    }
}

const pruebaCargaRapida = new TemperaturaBateriaMovil(48);
const pruebaReposo = new TemperaturaBateriaMovil(25);

console.log(pruebaCargaRapida.describir());
console.log(pruebaReposo.describir());
