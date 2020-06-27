class Pontuacao {
  constructor() {
    this.pontos = 0
  }
  
  exibe() {
    textAlign(RIGHT);
    textFont(fonteTelaInicial);
    fill('#D8BFD8')
    textSize(50);
    text(parseInt(this.pontos), width - 25, 70)
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + .2;
  }
}