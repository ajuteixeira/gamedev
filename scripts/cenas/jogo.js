class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
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
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 500);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 20, 200, 200, 400, 400, 15, 700);

    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)
    inimigos.push(inimigoTroll)

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
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

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }

      inimigo.velocidade = parseInt(random(25, 35));
    }

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 2);
      noLoop()
    }
  }
}