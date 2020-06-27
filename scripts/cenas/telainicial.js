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
    
    textSize(80);
    fill(color('#740093'));
    text('The adventures of amI', width / 2, height /3);
    textSize(50);
    text('In the Enchanted ForesT', width / 2, height/ 5*2)
    textSize(20);
    fill(color('#FFF'));
    text('Use the arrows to plaY', width / 2, height/ 7*5)
  }
  
  _botao(){
    // botaoGerenciador.y = height / 7*5;
    botaoGerenciador.draw();
  }
  
}