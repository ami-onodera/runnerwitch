function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  imagemInimigoSegundo = loadImage('imagens/inimigos/gotinha.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemVida = loadImage('imagens/assets/coracao.png');


  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somDoPulo.wav');
  somMorreu = loadSound('sons/gameover.mp3');
  somColisao = loadSound('sons/hurt-sound.mp3');
}