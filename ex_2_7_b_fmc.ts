import { Veiculo, VeiculoEletrico, VeiculoEletricoVoador } from './ex_2_7_a_fmc';

const veiculo1 = new Veiculo(0, 0);
console.log('Veículo - Longitude:', veiculo1.longitude, 'Latitude:', veiculo1.latitude);

const veiculoEletrico1 = new VeiculoEletrico(10, 20, 80);
console.log('Veículo Elétrico - Longitude:', veiculoEletrico1.longitude, 'Latitude:', veiculoEletrico1.latitude, 'Bateria:', veiculoEletrico1.bateria);

veiculoEletrico1.moverPara(15, 25);
veiculoEletrico1.carregarBateria(20);
console.log('Após ação - Longitude:', veiculoEletrico1.longitude, 'Latitude:', veiculoEletrico1.latitude, 'Bateria:', veiculoEletrico1.bateria);

const veiculoEletricoVoador1 = new VeiculoEletricoVoador(30, 40, 70, 100);
console.log('Veículo Elétrico Voador - Longitude:', veiculoEletricoVoador1.longitude, 'Latitude:', veiculoEletricoVoador1.latitude, 'Bateria:', veiculoEletricoVoador1.bateria, 'Altitude:', veiculoEletricoVoador1.altitude);

veiculoEletricoVoador1.moverPara(35, 45);
veiculoEletricoVoador1.carregarBateria(10);
veiculoEletricoVoador1.alterarAltitude(150);
console.log('Após ação - Longitude:', veiculoEletricoVoador1.longitude, 'Latitude:', veiculoEletricoVoador1.latitude, 'Bateria:', veiculoEletricoVoador1.bateria, 'Altitude:', veiculoEletricoVoador1.altitude);
