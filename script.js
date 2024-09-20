var pessoa = {
    nome: 'Diego',
    idade: 34,
    profissao: 'Fisioterapeuta',
    possuiFaculdade: true,
}

console.log(pessoa.nome);

var quadrado = {
    lados: 4,
    area(lado) {        //area: function(lado) ---> código mais longo.
        return lado * lado;
    },
    perimetro(lado) {       //perimetro: function(perimetro) ---> código mais longo.
        return this.lados * lado;
    },
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
  }
  menu.backgroundColor = '#000';
  var bg = menu.backgroundColor; // '#84E'
  console.log(bg);

  var menu = {
    width: 800,
  }
  
  menu.height = 50;
  menu.position = 'fixed';

  var height = 120;
  var menu = {
    width: 800,
    height: 50,
    metadeHeight () {
        return this.height / 2;
    }
  }

  console.log(menu.metadeHeight)