let imagemCenario1;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemCenario7;
let imagemCenario8;
let imagemCenario9;
let imagemCenarioLuzes1;
let imagemCenarioLuzes2;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoTroll;
let imagemInimigoVoador;
let imagemGameOver;
let somDoPulo;
let somDoJogo;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let pontuacao;

const inimigos = [];

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrizInimigoTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]
const matrizPersonagem = this.matriz = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810]
]

function preload() {
  imagemCenario1 = loadImage('imagens/cenario/cenario1.png');
  imagemCenario2 = loadImage('imagens/cenario/cenario2.png');
  imagemCenario3 = loadImage('imagens/cenario/cenario3.png');
  imagemCenario4 = loadImage('imagens/cenario/cenario4.png');
  imagemCenario5 = loadImage('imagens/cenario/cenario5.png');
  imagemCenario6 = loadImage('imagens/cenario/cenario6.png');
  imagemCenario7 = loadImage('imagens/cenario/cenario7.png');
  imagemCenario8 = loadImage('imagens/cenario/cenario8.png');
  imagemCenario9 = loadImage('imagens/cenario/cenario9.png');
  imagemCenarioLuzes1 = loadImage('imagens/cenario/cenarioLuzes1.png');
  imagemCenarioLuzes2 = loadImage('imagens/cenario/cenarioLuzes2.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somDoPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imagemCenario1 = new Cenario(imagemCenario1, 0);
  imagemCenario2 = new Cenario(imagemCenario2, 1);
  imagemCenario3 = new Cenario(imagemCenario3, 2);
  imagemCenario4 = new Cenario(imagemCenario4, 3);
  imagemCenario5 = new Cenario(imagemCenario5, 4);
  imagemCenario6 = new Cenario(imagemCenario6, 5);
  imagemCenario7 = new Cenario(imagemCenario7, 5);
  imagemCenario8 = new Cenario(imagemCenario8, 7);
  imagemCenario9 = new Cenario(imagemCenario9, 8);
  imagemCenarioLuzes1 = new Cenario(imagemCenarioLuzes1, 9);
  imagemCenarioLuzes2 = new Cenario(imagemCenarioLuzes2, 10);
  pontuacao = new Pontuacao()
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 25, 50, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 50, 52, 52, 104, 104, 10, 200);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1300);
  const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 20, 200, 200, 400, 400, 10, 2500);

  inimigos.push(inimigo)
  inimigos.push(inimigoVoador)
  inimigos.push(inimigoTroll)

  frameRate(40);
  somJogo.setVolume(0.2);
  somDoJogo.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

function draw() {
  imagemCenario1.exibe();
  imagemCenario1.move();

  imagemCenario2.exibe();
  imagemCenario2.move();

  imagemCenario3.exibe();
  imagemCenario3.move();

  imagemCenario4.exibe();
  imagemCenario4.move();

  imagemCenario5.exibe();
  imagemCenario5.move();

  imagemCenarioLuzes1.exibe();
  imagemCenarioLuzes1.move();

  imagemCenarioLuzes2.exibe();
  imagemCenarioLuzes2.move();

  imagemCenario6.exibe();
  imagemCenario6.move();

  imagemCenario7.exibe();
  imagemCenario7.move();

  imagemCenario8.exibe();
  imagemCenario8.move();

  imagemCenario9.exibe();
  imagemCenario9.move();
  
  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/2);
      noLoop()
    }
  })
}