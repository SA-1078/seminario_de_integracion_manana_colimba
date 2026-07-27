// Archivo: 19_poo_clases_abstractas_mp.ts
// Tema: Venta de Equipos Móviles (Planes de Garantía Móvil)

abstract class PlanGarantiaMovil {
    abstract calcularCostoAnual(precioMovil: number): number;
    abstract obtenerMesesCobertura(): number;

    // Método concreto con lógica reutilizable
    resumenGarantia(precioMovil: number): string {
        const costo = this.calcularCostoAnual(precioMovil);
        const meses = this.obtenerMesesCobertura();
        return `Cobertura: ${meses} meses | Costo Garantía: $${costo.toFixed(2)}`;
    }
}

class GarantiaBasicaMovil extends PlanGarantiaMovil {
    override calcularCostoAnual(precioMovil: number): number {
        return precioMovil * 0.05; // 5% del valor del equipo
    }

    override obtenerMesesCobertura(): number {
        return 12;
    }
}

class GarantiaTotalRoboDano extends PlanGarantiaMovil {
    override calcularCostoAnual(precioMovil: number): number {
        return precioMovil * 0.12; // 12% del valor del equipo por cobertura total
    }

    override obtenerMesesCobertura(): number {
        return 24;
    }
}

const precioGalaxy = 1200;
const planBasico = new GarantiaBasicaMovil();
const planTotal = new GarantiaTotalRoboDano();

console.log("=== PLAN BÁSICO ===");
console.log(planBasico.resumenGarantia(precioGalaxy));

console.log("=== PLAN COBERTURA TOTAL Y ROBO ===");
console.log(planTotal.resumenGarantia(precioGalaxy));
