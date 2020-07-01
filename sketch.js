function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  cenas = {
    jogo, 
    telaInicial
  };
  
  botaoGerenciador = new BotaoGerenciador('Start Game', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function mouseClicked(event) {
  jogo.keyPressed('click');
}

function touchStarted(event) {
  jogo.keyPressed('touch');
  // return false;
}


function draw() {
  cenas[cenaAtual].draw();
}
  
