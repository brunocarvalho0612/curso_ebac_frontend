// Classe base (abstração)
class Veiculo {
  constructor(modelo) {
    this.modelo = modelo;
  }

  mover() {
    console.log('O veículo está em movimento');
  }
}

// Classe filha 1
class Carro extends Veiculo {
  mover() {
    console.log(`O carro ${this.modelo} está andando pela estrada`);
  }
}

// Classe filha 2
class Moto extends Veiculo {
  mover() {
    console.log(`A moto ${this.modelo} está passando pelo trânsito`);
  }
}

// Instâncias (3 objetos)
const veiculo1 = new Carro('Civic');
const veiculo2 = new Moto('CB 500');
const veiculo3 = new Carro('Corolla');

// Uso dos objetos
veiculo1.mover();
veiculo2.mover();
veiculo3.mover();
