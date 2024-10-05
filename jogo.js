class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    //Exibir informações do herói
    exibirInfo() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`);
    }
  
    atacar() {
      let ataque;
      
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido'; // Caso o tipo não seja reconhecido
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque} \n`);
    }
  }
  
  const heroi1 = new Heroi('Ronan', 22, 'guerreiro');
  const heroi2 = new Heroi('Guwop', 1017, 'mago');
  const heroi3 = new Heroi('Qing', 66, 'monge');
  const heroi4 = new Heroi('Lin', 35, 'ninja');
  
  heroi1.exibirInfo();
  heroi1.atacar();     
  
  heroi2.exibirInfo(); 
  heroi2.atacar();     
  
  heroi3.exibirInfo(); 
  heroi3.atacar();    
  
  heroi4.exibirInfo(); 
  heroi4.atacar();     
  