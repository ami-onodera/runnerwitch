class TelaInicial {
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    fill(color('#740093'));
    text('The adventures of', width / 2, height / 4);
    textSize(80);
    text('HipstA', width / 2, height/ 5*2)
    textSize(20);
    fill(color('#FFF'));
    text('Use arrow up to jump!', width / 2, height/ 7*5)
  }
  
  _botao(){
    // botaoGerenciador.y = height / 7*5;
    botaoGerenciador.draw();
  }
  
}