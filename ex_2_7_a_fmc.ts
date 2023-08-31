class VeiculoEletrico extends Veiculo {
    bateria: number;

    constructor(longitude: number, latitude: number, bateria: number) {
        super(longitude, latitude);
        this.bateria = bateria;
    }

    carregarBateria(novaCarga: number) {
        this.bateria += novaCarga;
    }
}

class VeiculoEletricoVoador extends VeiculoEletrico {
    altitude: number;

    constructor(longitude: number, latitude: number, bateria: number, altitude: number) {
        super(longitude, latitude, bateria);
        this.altitude = altitude;
    }

    alterarAltitude(novaAltitude: number) {
        this.altitude = novaAltitude;
    }
}

export { Veiculo, VeiculoEletrico, VeiculoEletricoVoador };
